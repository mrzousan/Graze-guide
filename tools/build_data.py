"""Generate app/src/data/plants.ts from the Graze Guide spreadsheet.
Usage: python3 build_data.py <spreadsheet.xlsx> <out plants.ts> <out photos.json>
The spreadsheet is the source of truth; do not edit plants.ts by hand."""
import sys, json, re, collections
from urllib.parse import urlparse
import openpyxl

xlsx, out_ts, out_photos = sys.argv[1:4]
wb = openpyxl.load_workbook(xlsx, data_only=True)
ws = wb['Plants']; h = [c.value for c in ws[1]]
rows = [dict(zip(h, [c.value for c in r])) for r in ws.iter_rows(min_row=2) if r[0].value]

RATING = {'Feed freely':'free','Feed in moderation':'mod','Feed sparingly':'spar','Do not feed':'avoid','Toxic':'toxic','Not yet rated':'nyr'}
CAT = {'Weeds & lawn':'weed','Garden & landscape':'garden','Houseplants':'house','Grocery':'grocery'}
ORG = [('thetortoisetable.org.uk','tt'),('tortoisetrust.org','trust'),('tortoiseclub.org','club'),('tortoisegroup.org','group'),
       ('rvc.ac.uk','rvc'),('anapsid.org','kaplan'),('ucanr.edu','ucanr'),('aspca.org','aspca'),('russiantortoise','rt'),('azeah.com','azeah')]
def org_of(url):
    host = urlparse(url).netloc.lower()
    for frag, o in ORG:
        if frag in host: return o
    return host.replace('www.','')

sources = collections.OrderedDict(); keyby = {}
def src_key(name, url):
    base = re.sub(r':\s*(trees, shrubs and climbers|garden and house plants|wild flowers|fruit and vegetables|cacti and succulents|grasses and ferns)$','',name.strip())
    k = (base, url)
    if k in keyby: return keyby[k]
    key = f"{org_of(url)}{len([1 for v in keyby.values() if v.startswith(org_of(url))])+1}"
    keyby[k] = key
    sources[key] = {'title': base, 'url': url, 'org': org_of(url)}
    return key

plants=[]; photos={}; mism=[]
extra=collections.defaultdict(list)
for r in wb['Extra photos'].iter_rows(min_row=2, values_only=True):
    if r[0]: extra[r[0]].append(dict(file=r[3], url=r[5], page=r[6], credit=r[7], license=r[8], line=r[9], n=r[2]))
for r in rows:
    names=[x.strip() for x in str(r['Sources'] or '').split(';') if x.strip()]
    links=str(r['Source links'] or '').replace('\n',' ').split()
    assert len(names)==len(links), r['ID']
    keys=[]
    for n,u in zip(names,links):
        k=src_key(n,u.rstrip(';,'))
        if k not in keys: keys.append(k)
    note = re.sub(r'\s*Only one source so far\.?','', r['Note'] or '').strip()
    p = {'id':r['ID'],'name':r['Common name'],'scientific':r['Scientific name'] or '','category':CAT[r['Type']],
         'where':r['Where in California'] or '','rating':RATING[r['Rating']],'parts':r['Safe parts'] or '',
         'sources':keys,'note':note,'reason':r['Rating reason'] or '','warning':r['Warning'] or '','photos':[]}
    plist=[]
    if r['Image URL (800 px)']:
        plist.append(dict(url=r['Image URL (800 px)'], page=r['Image page (Commons)'], credit=r['Photographer / credit'], license=r['License'], line=r['Attribution line'], note=r['Image note']))
    for e in sorted(extra.get(r['ID'],[]), key=lambda e:e['n']):
        plist.append(dict(url=e['url'], page=e['page'], credit=e['credit'], license=e['license'], line=e['line'], note=None))
    photos[r['ID']]=plist
    p['photos']=[{'f':f"{r['ID']}-{i+1}.jpg", 'line':x['line'] or '', 'page':x['page'] or ''} for i,x in enumerate(plist)]
    plants.append(p)

# check app's own source-status rule against the sheet
def status(p):
    orgs={sources[k]['org'] for k in p['sources']}
    return 'Sourced' if len(orgs)>=2 else 'One source so far' if len(orgs)==1 else 'No source yet'
for p,r in zip(plants,rows):
    if status(p)!=r['Source status']: mism.append((p['id'],status(p),r['Source status'],r['Sources']))
print('plants',len(plants),'sources',len(sources),'status mismatches',len(mism))
for m in mism[:15]: print(m)

hdr='''// Generated from the Graze Guide spreadsheet by tools/build_data.py. Edit the spreadsheet, not this file by hand.
export type Rating = "free" | "mod" | "spar" | "avoid" | "toxic" | "nyr";
export type Category = "weed" | "garden" | "house" | "grocery";
export type Photo = { f: string; line: string; page: string };
export type Plant = { id: string; name: string; scientific: string; category: Category; where: string; rating: Rating; parts: string; sources: string[]; note: string; reason: string; warning: string; photos: Photo[] };
export type Source = { title: string; url: string; org: string };

export const CATEGORIES: Record<Category, string> = {
  "weed": "Weeds & lawn",
  "garden": "Garden & landscape",
  "house": "Houseplants",
  "grocery": "Grocery"
};

'''
open(out_ts,'w').write(hdr+'export const SOURCES: Record<string, Source> = '+json.dumps(sources,indent=1,ensure_ascii=False)+';\n\nexport const PLANTS: Plant[] = '+json.dumps(plants,indent=1,ensure_ascii=False)+';\n')
json.dump(photos,open(out_photos,'w'),indent=0,ensure_ascii=False)
print(collections.Counter(s['org'] for s in sources.values()))
