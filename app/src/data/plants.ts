// Generated from the Graze Guide plant list. Edit the source list, not this file by hand.
export type Rating = "free" | "mod" | "spar" | "avoid" | "toxic" | "nyr";
export type Category = "weed" | "garden" | "house" | "grocery";
export type Plant = { id: string; name: string; scientific: string; category: Category; where: string; rating: Rating; parts: string; sources: string[]; note: string };
export type Source = { title: string; url: string; org: string };

export const CATEGORIES: Record<Category, string> = {
  "weed": "Weeds & lawn",
  "garden": "Garden & landscape",
  "house": "Houseplants",
  "grocery": "Grocery"
};

export const SOURCES: Record<string, Source> = {
  "rvc": {
    "title": "Royal Veterinary College care sheet",
    "url": "https://www.rvc.ac.uk/Media/Default/small-animal/documents/Mediterranean-tortoise-care%20-%20UPDATED-1.pdf",
    "org": "rvc"
  },
  "rvc24": {
    "title": "Royal Veterinary College care sheet (2024)",
    "url": "https://rvc.ac.uk/Media/Default/Beaumont%20Sainsbury%20Animal%20Hospital/EXOTICS/Animal%20Care%20Factsheets/Mediterranean%20tortoise%20care%202024%20jh.pdf",
    "org": "rvc"
  },
  "trust": {
    "title": "Tortoise Trust feeding guide",
    "url": "https://www.tortoisetrust.org/articles/basicmedfood.htm",
    "org": "trust"
  },
  "club": {
    "title": "Norfolk Tortoise Club food list",
    "url": "https://www.tortoiseclub.org/s/3_HEALTHY_TORTOISE_FOOD_23.pdf",
    "org": "club"
  },
  "clubweb": {
    "title": "Norfolk Tortoise Club plant guide",
    "url": "https://www.tortoiseclub.org/?p=19",
    "org": "club"
  },
  "group": {
    "title": "Tortoise Group plants to grow",
    "url": "https://dev.tortoisegroup.org/wp-content/uploads/2026/01/Plants-List-TG-Flyer-1.pdf",
    "org": "group"
  },
  "groupfood": {
    "title": "Tortoise Group food page",
    "url": "https://tortoisegroup.org/food",
    "org": "group"
  },
  "kaplan": {
    "title": "Melissa Kaplan tortoise diet",
    "url": "https://anapsid.org/tortdiet.html",
    "org": "kaplan"
  },
  "kaplanlist": {
    "title": "Melissa Kaplan edible plants list",
    "url": "https://anapsid.org/resources/edible.html",
    "org": "kaplan"
  },
  "ucanr": {
    "title": "UC ANR toxic plants list",
    "url": "https://ccfruitandnuts.ucanr.edu/sites/default/files/2022-02/363609.pdf",
    "org": "uc"
  },
  "ucmarin": {
    "title": "UC Marin Master Gardeners",
    "url": "https://ucanr.edu/node/170536",
    "org": "uc"
  },
  "uceld": {
    "title": "UC El Dorado Master Gardeners",
    "url": "https://ccfruitandnuts.ucanr.edu/sites/default/files/2018-11/294865.pdf",
    "org": "uc"
  },
  "afox": {
    "title": "ASPCA: foxglove",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/foxglove",
    "org": "aspca"
  },
  "apothos": {
    "title": "ASPCA: golden pothos",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/golden-pothos",
    "org": "aspca"
  },
  "aivy": {
    "title": "ASPCA: English ivy",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/english-ivy",
    "org": "aspca"
  },
  "acal": {
    "title": "ASPCA: pot marigold",
    "url": "https://www.aspca.org/node/5287",
    "org": "aspca"
  },
  "ness": {
    "title": "Ness Exotic Wellness Center care sheet",
    "url": "https://nessexotic.com/wp-content/uploads/2022/04/Reptile-Russian_Tortoise_Care.pdf",
    "org": "ness"
  },
  "ivis": {
    "title": "IVIS vet guide: oxalis",
    "url": "https://www.ivis.org/library/guide-to-poisonous-house-and-garden-plants/oxalis-species-sorrel",
    "org": "ivis"
  },
  "massey": {
    "title": "Massey University: Bermuda buttercup",
    "url": "https://poisonousplants.massey.ac.nz/data/bermuda_buttercup/bermBcup.html",
    "org": "massey"
  },
  "lsu": {
    "title": "LSU Vet School: agapanthus",
    "url": "https://lsu.edu/vetmed/toxic_plants/agapanthus.php",
    "org": "lsu"
  },
  "usgs": {
    "title": "USGS desert tortoise study",
    "url": "https://pubs.usgs.gov/publication/70250364",
    "org": "usgs"
  },
  "mdc": {
    "title": "Missouri Dept. of Conservation: curly dock",
    "url": "https://mdc.mo.gov/node/269121",
    "org": "mdc"
  },
  "tpg": {
    "title": "Tortoise Protection Group forum",
    "url": "https://tortoise-protection-group.org.uk/site/tpg_members_forum_130.asp?tID=3509",
    "org": "tpg"
  },
  "mouse": {
    "title": "Bindweed mouse feeding study",
    "url": "https://www.sigmaaldrich.com/MX/es/tech-docs/paper/328091",
    "org": "mouse"
  },
  "trustlist": {
    "title": "Tortoise Trust plant list",
    "url": "https://www.tortoisetrust.org/articles/plantfoods.html",
    "org": "trust"
  },
  "rtort": {
    "title": "RussianTortoise.org edible plants",
    "url": "https://russiantortoise.net/edible_plants.htm",
    "org": "rtort"
  },
  "groupbad": {
    "title": "Tortoise Group poisonous plants",
    "url": "https://tortoisegroup.org/plants-poisonous-to-tortoises",
    "org": "group"
  },
  "furry": {
    "title": "Furry Critter tortoise food guide",
    "url": "https://www.furrycritter.com/pages/articles/reptiles/tortoise_food.htm",
    "org": "furry"
  },
  "aground": {
    "title": "ASPCA: groundsel",
    "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/groundsel",
    "org": "aspca"
  },
  "inchem": {
    "title": "IPCS INCHEM: Senecio",
    "url": "https://inchem.org/documents/pims/plant/senecio.htm",
    "org": "inchem"
  },
  "aspider": {
    "title": "ASPCA: spider plant",
    "url": "https://www.aspca.org/node/5398",
    "org": "aspca"
  },
  "aaloe": {
    "title": "ASPCA: aloe",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/aloe",
    "org": "aspca"
  },
  "ttgarden": {
    "title": "The Tortoise Table: garden and house plants",
    "url": "https://www.thetortoisetable.org.uk/plant-database/garden-and-house-plants/",
    "org": "tt"
  },
  "ttwild": {
    "title": "The Tortoise Table: wild flowers",
    "url": "https://www.thetortoisetable.org.uk/plant-database/wild-flowers/",
    "org": "tt"
  },
  "asun": {
    "title": "ASPCA: sunflower",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/sunflower",
    "org": "aspca"
  },
  "adaisy": {
    "title": "ASPCA: daisy (chrysanthemum)",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/daisy",
    "org": "aspca"
  },
  "ttveg": {
    "title": "The Tortoise Table: fruit and vegetables",
    "url": "https://www.thetortoisetable.org.uk/plant-database/fruit-vegetables",
    "org": "tt"
  },
  "ttgrass": {
    "title": "The Tortoise Table: grasses and ferns",
    "url": "https://www.thetortoisetable.org.uk/plant-database/grasses-ferns",
    "org": "tt"
  },
  "ttsucc": {
    "title": "The Tortoise Table: cacti and succulents",
    "url": "https://www.thetortoisetable.org.uk/plant-database/cacti-succulents",
    "org": "tt"
  },
  "tttree": {
    "title": "The Tortoise Table: trees, shrubs and climbers",
    "url": "https://www.thetortoisetable.org.uk/plant-database/trees-shrubs-climbers",
    "org": "tt"
  },
  "ucipm_yst": {
    "title": "UC IPM: yellow starthistle",
    "url": "https://ipm.ucanr.edu/home-and-landscape/yellow-starthistle/",
    "org": "uc"
  },
  "ucmg_fiddle": {
    "title": "UC Master Gardeners: fiddleneck",
    "url": "https://ccfruitandnuts.ucanr.edu/sites/default/files/2021-06/352143.pdf",
    "org": "uc"
  },
  "aspcadog": {
    "title": "ASPCA: plants toxic to dogs",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list",
    "org": "aspca"
  },
  "achamo": {
    "title": "ASPCA: chamomile",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/chamomile",
    "org": "aspca"
  },
  "ajasmine": {
    "title": "ASPCA: jasmine",
    "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/jasmine",
    "org": "aspca"
  }
};

export const PLANTS: Plant[] = [
 {
  "id": "dandelion",
  "name": "Dandelion",
  "scientific": "Taraxacum officinale",
  "category": "weed",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc",
   "trust",
   "club",
   "group"
  ],
  "note": "Young tortoises: sources disagree. One club warns against large amounts for very young tortoises; another calls it important for hatchlings. The Tortoise Table rates it feed in moderation."
 },
 {
  "id": "cat-s-ear",
  "name": "Cat's ear",
  "scientific": "Hypochaeris radicata",
  "category": "weed",
  "where": "Statewide; very common in NorCal lawns",
  "rating": "free",
  "parts": "Leaves, flowers and roots",
  "sources": [
   "trustlist",
   "club",
   "clubweb",
   "ttwild"
  ],
  "note": "Often mistaken for dandelion. Cat's ear has solid stems; dandelion's are hollow."
 },
 {
  "id": "smooth-hawksbeard",
  "name": "Smooth hawksbeard",
  "scientific": "Crepis capillaris",
  "category": "weed",
  "where": "NorCal",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "trustlist",
   "club",
   "rtort",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "broadleaf-plantain",
  "name": "Broadleaf plantain",
  "scientific": "Plantago major",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves",
  "sources": [
   "rvc",
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "narrowleaf-plantain",
  "name": "Narrowleaf plantain",
  "scientific": "Plantago lanceolata",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves",
  "sources": [
   "rvc",
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "cheeseweed-mallow",
  "name": "Cheeseweed mallow",
  "scientific": "Malva parviflora",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "club",
   "kaplan",
   "ttwild"
  ],
  "note": "Sources rate mallow as a group, not this species specifically."
 },
 {
  "id": "common-sow-thistle",
  "name": "Common sow thistle",
  "scientific": "Sonchus oleraceus",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc",
   "trust",
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "prickly-lettuce",
  "name": "Prickly lettuce",
  "scientific": "Lactuca serriola",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "The Tortoise Table says don't feed it."
 },
 {
  "id": "redstem-filaree",
  "name": "Redstem filaree",
  "scientific": "Erodium cicutarium",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves, flowers and seed heads",
  "sources": [
   "group",
   "usgs",
   "ttwild"
  ],
  "note": "Wild desert tortoises eat it, but the Tortoise Table says feed sparingly."
 },
 {
  "id": "white-clover",
  "name": "White clover",
  "scientific": "Trifolium repens",
  "category": "weed",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Leaves and flowers",
  "sources": [
   "trust",
   "clubweb",
   "kaplan",
   "ttwild"
  ],
  "note": "Legume: higher protein. Occasional only for young tortoises."
 },
 {
  "id": "bur-clover",
  "name": "Bur clover",
  "scientific": "Medicago polymorpha",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Legume: higher protein. Only one source so far."
 },
 {
  "id": "chickweed",
  "name": "Chickweed",
  "scientific": "Stellaria media",
  "category": "weed",
  "where": "NorCal",
  "rating": "mod",
  "parts": "Whole plant",
  "sources": [
   "rvc",
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "field-bindweed",
  "name": "Field bindweed",
  "scientific": "Convolvulus arvensis",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc",
   "club",
   "mouse",
   "ttwild"
  ],
  "note": "Keeper groups list it, but a lab study found liver damage in mice fed only bindweed. Occasional only."
 },
 {
  "id": "common-chicory",
  "name": "Common chicory",
  "scientific": "Cichorium intybus",
  "category": "weed",
  "where": "NorCal",
  "rating": "mod",
  "parts": "Leaves and flowers",
  "sources": [
   "clubweb",
   "club",
   "rtort",
   "ttwild"
  ],
  "note": "Same species as radicchio."
 },
 {
  "id": "wild-radish",
  "name": "Wild radish",
  "scientific": "Raphanus sativus",
  "category": "weed",
  "where": "Statewide; coastal",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "rtort",
   "ttveg"
  ],
  "note": "Mustard family: rotate, never a staple."
 },
 {
  "id": "black-mustard",
  "name": "Black mustard",
  "scientific": "Brassica nigra",
  "category": "weed",
  "where": "Roadsides and hills",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "club",
   "groupfood"
  ],
  "note": "Mustard family: can affect the thyroid. Rotate, never a staple."
 },
 {
  "id": "shepherd-s-purse",
  "name": "Shepherd's purse",
  "scientific": "Capsella bursa-pastoris",
  "category": "weed",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "club",
   "rtort",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "hairy-bittercress",
  "name": "Hairy bittercress",
  "scientific": "Cardamine hirsuta",
  "category": "weed",
  "where": "NorCal",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "common-purslane",
  "name": "Common purslane",
  "scientific": "Portulaca oleracea",
  "category": "weed",
  "where": "Statewide; summer",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "rtort",
   "ttwild"
  ],
  "note": "Sources disagree: one lists it as food, but the Tortoise Table says don't feed it. It's also high in oxalates, so we take the cautious side."
 },
 {
  "id": "miner-s-lettuce",
  "name": "Miner's lettuce",
  "scientific": "Claytonia perfoliata",
  "category": "weed",
  "where": "NorCal; shady spots",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "bermuda-buttercup-sourgrass",
  "name": "Bermuda buttercup (sourgrass)",
  "scientific": "Oxalis pes-caprae",
  "category": "weed",
  "where": "Coastal NorCal and SoCal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ivis",
   "massey"
  ],
  "note": "High in soluble oxalates, which bind calcium."
 },
 {
  "id": "curly-dock",
  "name": "Curly dock",
  "scientific": "Rumex crispus",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "mdc",
   "tpg",
   "ttwild"
  ],
  "note": "High in oxalic acid. One vet school lists dock as food; we take the cautious side."
 },
 {
  "id": "bermuda-grass",
  "name": "Bermuda grass",
  "scientific": "Cynodon dactylon",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Growing grass",
  "sources": [
   "rvc",
   "kaplan",
   "group"
  ],
  "note": "Let them graze it. Not clippings, and only untreated lawns."
 },
 {
  "id": "poison-hemlock",
  "name": "Poison hemlock",
  "scientific": "Conium maculatum",
  "category": "weed",
  "where": "Statewide; roadsides",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ucmarin",
   "ttwild"
  ],
  "note": "Deadly. Looks like wild carrot."
 },
 {
  "id": "hibiscus",
  "name": "Hibiscus",
  "scientific": "Hibiscus rosa-sinensis",
  "category": "garden",
  "where": "SoCal; mild NorCal",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc24",
   "club",
   "group",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "rose",
  "name": "Rose",
  "scientific": "Rosa spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Petals and leaves",
  "sources": [
   "trust",
   "club",
   "kaplan"
  ],
  "note": "Only from plants never sprayed."
 },
 {
  "id": "pansy-viola",
  "name": "Pansy / viola",
  "scientific": "Viola spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Flowers and leaves, not seeds",
  "sources": [
   "club",
   "group"
  ],
  "note": "The seeds are mildly toxic."
 },
 {
  "id": "nasturtium",
  "name": "Nasturtium",
  "scientific": "Tropaeolum majus",
  "category": "garden",
  "where": "Coastal",
  "rating": "mod",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc24",
   "kaplan",
   "ttgarden"
  ],
  "note": "Peppery mustard oils."
 },
 {
  "id": "prickly-pear-pads",
  "name": "Prickly pear pads",
  "scientific": "Opuntia ficus-indica",
  "category": "garden",
  "where": "SoCal",
  "rating": "free",
  "parts": "Young pads and flowers",
  "sources": [
   "club",
   "group",
   "kaplan",
   "ttsucc"
  ],
  "note": "Remove every spine and the tiny hair-like glochids."
 },
 {
  "id": "mulberry-leaves",
  "name": "Mulberry leaves",
  "scientific": "Morus alba",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Young leaves",
  "sources": [
   "club",
   "group",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "grape-leaves",
  "name": "Grape leaves",
  "scientific": "Vitis vinifera",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Young leaves, no fruit",
  "sources": [
   "rvc",
   "club",
   "group",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "ice-plant",
  "name": "Ice plant",
  "scientific": "Carpobrotus edulis",
  "category": "garden",
  "where": "Coastal",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttsucc",
   "rtort"
  ],
  "note": "Also called Hottentot fig. The second source rates its plant family, not this species."
 },
 {
  "id": "garden-geranium",
  "name": "Garden geranium",
  "scientific": "Pelargonium spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "kaplanlist",
   "group"
  ],
  "note": ""
 },
 {
  "id": "calendula",
  "name": "Calendula",
  "scientific": "Calendula officinalis",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Flowers and leaves",
  "sources": [
   "acal",
   "rtort",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "oleander",
  "name": "Oleander",
  "scientific": "Nerium oleander",
  "category": "garden",
  "where": "Statewide; freeway medians",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ucmarin",
   "group",
   "groupbad",
   "tttree"
  ],
  "note": "Every part is highly toxic."
 },
 {
  "id": "foxglove",
  "name": "Foxglove",
  "scientific": "Digitalis purpurea",
  "category": "garden",
  "where": "NorCal",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "afox",
   "groupbad",
   "ttwild",
   "ttgarden"
  ],
  "note": "Contains heart toxins."
 },
 {
  "id": "calla-lily",
  "name": "Calla lily",
  "scientific": "Zantedeschia aethiopica",
  "category": "garden",
  "where": "Coastal",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "uceld",
   "groupbad"
  ],
  "note": "Needle-like oxalate crystals."
 },
 {
  "id": "lily-of-the-nile",
  "name": "Lily of the Nile",
  "scientific": "Agapanthus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "lsu",
   "groupbad",
   "ttgarden"
  ],
  "note": "Mildly toxic unless eaten in quantity."
 },
 {
  "id": "lantana",
  "name": "Lantana",
  "scientific": "Lantana camara",
  "category": "garden",
  "where": "SoCal; Central Valley",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "uceld",
   "groupbad",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "azalea-rhododendron",
  "name": "Azalea / rhododendron",
  "scientific": "Rhododendron spp.",
  "category": "garden",
  "where": "NorCal",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "uceld",
   "groupbad",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "english-ivy",
  "name": "English ivy",
  "scientific": "Hedera helix",
  "category": "garden",
  "where": "NorCal",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "aivy",
   "groupbad",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "daffodil",
  "name": "Daffodil",
  "scientific": "Narcissus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ucmarin",
   "groupbad",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "pothos",
  "name": "Pothos",
  "scientific": "Epipremnum aureum",
  "category": "house",
  "where": "Indoors",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "apothos",
   "groupbad"
  ],
  "note": "Needle-like oxalate crystals."
 },
 {
  "id": "endive-escarole",
  "name": "Endive / escarole",
  "scientific": "Cichorium endivia",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "ness",
   "kaplan",
   "ttveg"
  ],
  "note": "The best store-bought green, but weeds are better."
 },
 {
  "id": "romaine-lettuce",
  "name": "Romaine lettuce",
  "scientific": "Lactuca sativa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "rvc",
   "trust",
   "ttveg"
  ],
  "note": "Low nutrition; use as a filler with weeds. One source says not to feed lettuce at all."
 },
 {
  "id": "spring-mix",
  "name": "Spring mix",
  "scientific": "Mixed greens",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "club",
   "rvc"
  ],
  "note": "Check the label: skip mixes with spinach, kale or cabbage."
 },
 {
  "id": "collard-greens",
  "name": "Collard greens",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "kaplan",
   "groupfood"
  ],
  "note": "Can affect the thyroid. Rotate, never a staple."
 },
 {
  "id": "kale",
  "name": "Kale",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves, tough ribs removed",
  "sources": [
   "kaplan",
   "groupfood",
   "ttveg"
  ],
  "note": "Can affect the thyroid. Rotate, never a staple."
 },
 {
  "id": "spinach",
  "name": "Spinach",
  "scientific": "Spinacia oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "groupfood",
   "club",
   "ttveg"
  ],
  "note": "High in oxalic acid, which blocks calcium."
 },
 {
  "id": "fruit-strawberries-apples-etc",
  "name": "Fruit (strawberries, apples, etc.)",
  "scientific": "Various",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "trust",
   "club"
  ],
  "note": "Too much sugar for Mediterranean tortoises."
 },
 {
  "id": "turnip-greens",
  "name": "Turnip greens",
  "scientific": "Brassica rapa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "kaplan",
   "furry"
  ],
  "note": "Mustard family: can affect the thyroid. Rotate, never a staple."
 },
 {
  "id": "mustard-greens",
  "name": "Mustard greens",
  "scientific": "Brassica juncea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "kaplan",
   "furry"
  ],
  "note": "Mustard family: can affect the thyroid. Rotate, never a staple."
 },
 {
  "id": "watercress",
  "name": "Watercress",
  "scientific": "Nasturtium officinale",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "mod",
  "parts": "Leaves and stems",
  "sources": [
   "rvc",
   "kaplan",
   "club",
   "ttveg"
  ],
  "note": "Mustard family: rotate."
 },
 {
  "id": "arugula-rocket",
  "name": "Arugula (rocket)",
  "scientific": "Eruca vesicaria",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "rvc",
   "club",
   "ttveg"
  ],
  "note": "Mustard family: rotate."
 },
 {
  "id": "radicchio",
  "name": "Radicchio",
  "scientific": "Cichorium intybus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "furry",
   "rtort",
   "clubweb",
   "ttveg"
  ],
  "note": "Same species as wild chicory."
 },
 {
  "id": "parsley",
  "name": "Parsley",
  "scientific": "Petroselinum crispum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "rvc",
   "kaplan"
  ],
  "note": "Contains oxalates."
 },
 {
  "id": "cilantro",
  "name": "Cilantro",
  "scientific": "Coriandrum sativum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "rvc"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "lamb-s-lettuce-mache",
  "name": "Lamb's lettuce (mâche)",
  "scientific": "Valerianella locusta",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "free",
  "parts": "Leaves",
  "sources": [
   "club",
   "ttwild",
   "ttveg"
  ],
  "note": "Also called corn salad."
 },
 {
  "id": "red-or-green-leaf-lettuce",
  "name": "Red or green leaf lettuce",
  "scientific": "Lactuca sativa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "trust",
   "kaplan",
   "ttveg"
  ],
  "note": "Low nutrition. One source says not to feed it at all, so keep it a small filler."
 },
 {
  "id": "iceberg-lettuce",
  "name": "Iceberg lettuce",
  "scientific": "Lactuca sativa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "trust",
   "club",
   "kaplan"
  ],
  "note": "Almost no nutrition or fiber."
 },
 {
  "id": "swiss-chard",
  "name": "Swiss chard",
  "scientific": "Beta vulgaris",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "groupfood",
   "kaplan",
   "ttveg"
  ],
  "note": "High in oxalic acid. The Tortoise Table allows a little; we take the cautious side."
 },
 {
  "id": "beet-greens",
  "name": "Beet greens",
  "scientific": "Beta vulgaris",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "groupfood",
   "ttveg"
  ],
  "note": "High in oxalic acid. The Tortoise Table allows a little beetroot; we take the cautious side."
 },
 {
  "id": "broccoli",
  "name": "Broccoli",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "club",
   "groupfood",
   "kaplan",
   "ttveg"
  ],
  "note": "Can affect the thyroid. One vet school allows it in moderation; we take the cautious side."
 },
 {
  "id": "cabbage",
  "name": "Cabbage",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "club",
   "groupfood",
   "kaplan",
   "ttveg"
  ],
  "note": "Can affect the thyroid. One vet school allows it in moderation; we take the cautious side."
 },
 {
  "id": "carrot-tops",
  "name": "Carrot tops",
  "scientific": "Daucus carota",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "rvc"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "squash-and-pumpkin",
  "name": "Squash and pumpkin",
  "scientific": "Cucurbita spp.",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Flesh",
  "sources": [
   "rvc",
   "ttveg"
  ],
  "note": "Vegetables add little for Mediterranean tortoises. Only one source so far."
 },
 {
  "id": "bell-pepper",
  "name": "Bell pepper",
  "scientific": "Capsicum annuum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "rvc",
   "trust",
   "ttveg"
  ],
  "note": "A fruit: too much sugar for Mediterranean tortoises."
 },
 {
  "id": "tomato",
  "name": "Tomato",
  "scientific": "Solanum lycopersicum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "rvc",
   "trust",
   "ucanr",
   "ttveg"
  ],
  "note": "The fruit is too sugary, and the leaves and vines are toxic."
 },
 {
  "id": "cucumber",
  "name": "Cucumber",
  "scientific": "Cucumis sativus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Flesh",
  "sources": [
   "club",
   "kaplan",
   "ttveg"
  ],
  "note": "Mostly water, little nutrition."
 },
 {
  "id": "celery",
  "name": "Celery",
  "scientific": "Apium graveolens",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "groupfood",
   "ttveg"
  ],
  "note": "High in sodium. Only one source so far."
 },
 {
  "id": "peas-and-green-beans",
  "name": "Peas and green beans",
  "scientific": "Pisum, Phaseolus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "trust",
   "club",
   "ttveg"
  ],
  "note": "Too much protein: linked to kidney problems. The Tortoise Table allows green beans in moderation but not peas; we take the cautious side."
 },
 {
  "id": "corn",
  "name": "Corn",
  "scientific": "Zea mays",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "groupfood",
   "club",
   "ttveg"
  ],
  "note": "Too much sugar and starch."
 },
 {
  "id": "cat-or-dog-food",
  "name": "Cat or dog food",
  "scientific": "—",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "trust",
   "groupfood",
   "club"
  ],
  "note": "Too much protein and too little fiber."
 },
 {
  "id": "bread-and-crackers",
  "name": "Bread and crackers",
  "scientific": "—",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "club",
   "groupfood"
  ],
  "note": "No nutritional value for tortoises; often salty."
 },
 {
  "id": "timothy-hay",
  "name": "Timothy hay",
  "scientific": "Phleum pratense",
  "category": "weed",
  "where": "Pet stores",
  "rating": "free",
  "parts": "Hay",
  "sources": [
   "rvc",
   "group",
   "ttgrass"
  ],
  "note": "Good fiber, especially when fresh weeds are scarce."
 },
 {
  "id": "groundsel",
  "name": "Groundsel",
  "scientific": "Senecio vulgaris",
  "category": "weed",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "aground",
   "inchem",
   "ttwild"
  ],
  "note": "Contains liver toxins that can build up over time. One UK vet school lists it as food; we rate it toxic."
 },
 {
  "id": "prickly-sow-thistle",
  "name": "Prickly sow thistle",
  "scientific": "Sonchus asper",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "trustlist",
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "milk-thistle",
  "name": "Milk thistle",
  "scientific": "Silybum marianum",
  "category": "weed",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Leaves, spines removed",
  "sources": [
   "rvc",
   "ttwild"
  ],
  "note": "Remove the spines first."
 },
 {
  "id": "vetch",
  "name": "Vetch",
  "scientific": "Vicia spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "trustlist",
   "club",
   "ttwild"
  ],
  "note": "Legume: higher protein."
 },
 {
  "id": "henbit-and-dead-nettle",
  "name": "Henbit and dead nettle",
  "scientific": "Lamium spp.",
  "category": "weed",
  "where": "NorCal",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "trustlist",
   "club",
   "ttwild"
  ],
  "note": "Dead nettle is a staple; the Tortoise Table says feed henbit sparingly."
 },
 {
  "id": "cleavers-goosegrass",
  "name": "Cleavers (goosegrass)",
  "scientific": "Galium aparine",
  "category": "weed",
  "where": "NorCal",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "club",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "black-nightshade",
  "name": "Black nightshade",
  "scientific": "Solanum nigrum",
  "category": "weed",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "buttercup",
  "name": "Buttercup",
  "scientific": "Ranunculus spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "ttwild"
  ],
  "note": ""
 },
 {
  "id": "scarlet-pimpernel",
  "name": "Scarlet pimpernel",
  "scientific": "Anagallis arvensis",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "castor-bean",
  "name": "Castor bean",
  "scientific": "Ricinus communis",
  "category": "weed",
  "where": "SoCal; riverbeds",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "tttree"
  ],
  "note": "Seeds are deadly."
 },
 {
  "id": "tree-tobacco",
  "name": "Tree tobacco",
  "scientific": "Nicotiana glauca",
  "category": "weed",
  "where": "SoCal; vacant lots",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ucmarin",
   "aspcadog"
  ],
  "note": "Deadly."
 },
 {
  "id": "angel-s-trumpet-and-jimsonweed",
  "name": "Angel's trumpet and jimsonweed",
  "scientific": "Brugmansia, Datura",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ucmarin",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "lupine",
  "name": "Lupine",
  "scientific": "Lupinus spp.",
  "category": "weed",
  "where": "Statewide; hills and roadsides",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "uceld",
   "groupbad",
   "ttgarden"
  ],
  "note": "Common California wildflower."
 },
 {
  "id": "evening-primrose",
  "name": "Evening primrose",
  "scientific": "Oenothera spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "club",
   "group",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "sedum",
  "name": "Sedum",
  "scientific": "Sedum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves",
  "sources": [
   "rvc",
   "trustlist",
   "club",
   "ttsucc"
  ],
  "note": ""
 },
 {
  "id": "honeysuckle",
  "name": "Honeysuckle",
  "scientific": "Lonicera spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc",
   "trustlist",
   "club",
   "tttree"
  ],
  "note": "Tortoise Trust notes Hermann's tortoises prefer it."
 },
 {
  "id": "hollyhock",
  "name": "Hollyhock",
  "scientific": "Alcea rosea",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "clubweb",
   "group",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "petunia",
  "name": "Petunia",
  "scientific": "Petunia hybrida",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "kaplan",
   "group"
  ],
  "note": "A treat, not a staple."
 },
 {
  "id": "gazania",
  "name": "Gazania",
  "scientific": "Gazania spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Flowers",
  "sources": [
   "group",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "fuchsia",
  "name": "Fuchsia",
  "scientific": "Fuchsia spp.",
  "category": "garden",
  "where": "Coastal",
  "rating": "mod",
  "parts": "Flowers and leaves",
  "sources": [
   "club",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "periwinkle-vinca",
  "name": "Periwinkle (vinca)",
  "scientific": "Vinca spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "uceld",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "hydrangea",
  "name": "Hydrangea",
  "scientific": "Hydrangea spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "iris",
  "name": "Iris",
  "scientific": "Iris spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "ttgarden"
  ],
  "note": ""
 },
 {
  "id": "heavenly-bamboo-nandina",
  "name": "Heavenly bamboo (nandina)",
  "scientific": "Nandina domestica",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "groupbad",
   "aspcadog"
  ],
  "note": ""
 },
 {
  "id": "boxwood",
  "name": "Boxwood",
  "scientific": "Buxus sempervirens",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "juniper",
  "name": "Juniper",
  "scientific": "Juniperus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "eucalyptus",
  "name": "Eucalyptus",
  "scientific": "Eucalyptus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "toyon",
  "name": "Toyon",
  "scientific": "Heteromeles arbutifolia",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "uceld"
  ],
  "note": "California native shrub."
 },
 {
  "id": "sago-palm",
  "name": "Sago palm",
  "scientific": "Cycas revoluta",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ucmarin",
   "aspcadog"
  ],
  "note": ""
 },
 {
  "id": "morning-glory",
  "name": "Morning glory",
  "scientific": "Ipomoea spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "ttgarden"
  ],
  "note": "Seeds are highly toxic. One keeper group lists it as a plant to grow; we take the cautious side."
 },
 {
  "id": "firethorn-pyracantha",
  "name": "Firethorn (pyracantha)",
  "scientific": "Pyracantha spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "tttree"
  ],
  "note": ""
 },
 {
  "id": "agave",
  "name": "Agave",
  "scientific": "Agave spp.",
  "category": "garden",
  "where": "SoCal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "ttsucc"
  ],
  "note": "The Tortoise Table allows a little, but UC lists the sap as irritating; we take the cautious side."
 },
 {
  "id": "aloe-vera",
  "name": "Aloe vera",
  "scientific": "Aloe vera",
  "category": "house",
  "where": "Indoors; SoCal gardens",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "aaloe",
   "club",
   "ttsucc"
  ],
  "note": "The Tortoise Table allows it in moderation, but the ASPCA lists it toxic to pets; we take the cautious side."
 },
 {
  "id": "spider-plant",
  "name": "Spider plant",
  "scientific": "Chlorophytum comosum",
  "category": "house",
  "where": "Indoors",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "aspider"
  ],
  "note": "Non-toxic to pets. Only one source so far."
 },
 {
  "id": "jade-plant",
  "name": "Jade plant",
  "scientific": "Crassula ovata",
  "category": "house",
  "where": "Indoors",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "ttsucc"
  ],
  "note": "The Tortoise Table allows it in moderation, but UC lists it as mildly toxic; we take the cautious side."
 },
 {
  "id": "snake-plant",
  "name": "Snake plant",
  "scientific": "Sansevieria spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "aspcadog"
  ],
  "note": ""
 },
 {
  "id": "peace-lily",
  "name": "Peace lily",
  "scientific": "Spathiphyllum spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "aspcadog"
  ],
  "note": "Needle-like oxalate crystals."
 },
 {
  "id": "philodendron",
  "name": "Philodendron",
  "scientific": "Philodendron spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad"
  ],
  "note": "Needle-like oxalate crystals."
 },
 {
  "id": "dumb-cane",
  "name": "Dumb cane",
  "scientific": "Dieffenbachia spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "ucmarin"
  ],
  "note": "Needle-like oxalate crystals."
 },
 {
  "id": "poinsettia",
  "name": "Poinsettia",
  "scientific": "Euphorbia pulcherrima",
  "category": "house",
  "where": "Indoors",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "weeping-fig-ficus",
  "name": "Weeping fig (ficus)",
  "scientific": "Ficus spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad",
   "kaplan"
  ],
  "note": "Milky sap irritates."
 },
 {
  "id": "sunflower",
  "name": "Sunflower",
  "scientific": "Helianthus annuus",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Petals and leaves",
  "sources": [
   "asun"
  ],
  "note": "Non-toxic to pets. Only one source so far."
 },
 {
  "id": "english-daisy",
  "name": "English daisy",
  "scientific": "Bellis perennis",
  "category": "weed",
  "where": "NorCal lawns",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ttwild",
   "ucanr"
  ],
  "note": "Once a common UK tortoise food, but the Tortoise Table now says don't feed it."
 },
 {
  "id": "oxeye-daisy",
  "name": "Oxeye daisy",
  "scientific": "Leucanthemum vulgare",
  "category": "weed",
  "where": "NorCal roadsides",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "shasta-daisy",
  "name": "Shasta daisy",
  "scientific": "Leucanthemum × superbum",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "chrysanthemum-mums",
  "name": "Chrysanthemum (mums)",
  "scientific": "Chrysanthemum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "adaisy"
  ],
  "note": "Contains irritants and natural insecticides (pyrethrins)."
 },
 {
  "id": "marguerite-daisy",
  "name": "Marguerite daisy",
  "scientific": "Argyranthemum frutescens",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": "The Tortoise Table allows a little, but UC lists it as mildly toxic; we take the cautious side."
 },
 {
  "id": "african-daisy",
  "name": "African daisy",
  "scientific": "Osteospermum spp.",
  "category": "garden",
  "where": "Statewide; common in landscaping",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "cornflower-bachelor-s-button",
  "name": "Cornflower (bachelor's button)",
  "scientific": "Centaurea cyanus",
  "category": "garden",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden",
   "ttwild",
   "club"
  ],
  "note": ""
 },
 {
  "id": "french-marigold",
  "name": "French marigold",
  "scientific": "Tagetes spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": "Not the same as pot marigold (calendula), which is safe."
 },
 {
  "id": "cosmos",
  "name": "Cosmos",
  "scientific": "Cosmos spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "dahlia",
  "name": "Dahlia",
  "scientific": "Dahlia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "aspcadog"
  ],
  "note": "The Tortoise Table allows it in moderation, but the ASPCA lists it toxic to pets; we take the cautious side."
 },
 {
  "id": "snapdragon",
  "name": "Snapdragon",
  "scientific": "Antirrhinum majus",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "campanula-bellflower",
  "name": "Campanula (bellflower)",
  "scientific": "Campanula spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden",
   "club"
  ],
  "note": ""
 },
 {
  "id": "hardy-geranium-cranesbill",
  "name": "Hardy geranium (cranesbill)",
  "scientific": "Geranium spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden",
   "ttwild",
   "club"
  ],
  "note": "Not the same as the common garden geranium (Pelargonium)."
 },
 {
  "id": "hosta",
  "name": "Hosta",
  "scientific": "Hosta spp.",
  "category": "garden",
  "where": "NorCal; shade gardens",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "ttgarden",
   "club"
  ],
  "note": ""
 },
 {
  "id": "sweet-alyssum",
  "name": "Sweet alyssum",
  "scientific": "Lobularia maritima",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "coneflower-echinacea",
  "name": "Coneflower (echinacea)",
  "scientific": "Echinacea spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden",
   "rtort"
  ],
  "note": "Rated safe by the Tortoise Table."
 },
 {
  "id": "black-eyed-susan",
  "name": "Black-eyed Susan",
  "scientific": "Rudbeckia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "california-poppy",
  "name": "California poppy",
  "scientific": "Eschscholzia californica",
  "category": "weed",
  "where": "Statewide; hills and roadsides",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden",
   "rtort"
  ],
  "note": "California's state flower."
 },
 {
  "id": "carnation-and-dianthus",
  "name": "Carnation and dianthus",
  "scientific": "Dianthus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": "The Tortoise Table allows a little; UC and Tortoise Group list it as toxic. We take the cautious side."
 },
 {
  "id": "aster",
  "name": "Aster",
  "scientific": "Aster spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "lobelia",
  "name": "Lobelia",
  "scientific": "Lobelia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "primrose",
  "name": "Primrose",
  "scientific": "Primula spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ttwild",
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "chamomile",
  "name": "Chamomile",
  "scientific": "Chamaemelum nobile",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "achamo"
  ],
  "note": "The Tortoise Table allows a little, but the ASPCA lists it toxic to pets; we take the cautious side."
 },
 {
  "id": "poppy-corn-and-iceland",
  "name": "Poppy (corn and Iceland)",
  "scientific": "Papaver spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": "One keeper club lists corn poppy as food; the Tortoise Table and UC say no."
 },
 {
  "id": "borage",
  "name": "Borage",
  "scientific": "Borago officinalis",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "aspcadog"
  ],
  "note": ""
 },
 {
  "id": "comfrey",
  "name": "Comfrey",
  "scientific": "Symphytum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "club"
  ],
  "note": "One keeper club lists soft comfrey; the Tortoise Table says don't feed it."
 },
 {
  "id": "daylily",
  "name": "Daylily",
  "scientific": "Hemerocallis spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden",
   "rtort"
  ],
  "note": ""
 },
 {
  "id": "gerbera-daisy",
  "name": "Gerbera daisy",
  "scientific": "Gerbera jamesonii",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "jasmine",
  "name": "Jasmine",
  "scientific": "Jasminum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "ttgarden",
   "ajasmine"
  ],
  "note": "Non-toxic to pets. Don't confuse it with Carolina jessamine, which is toxic."
 },
 {
  "id": "carolina-jessamine",
  "name": "Carolina jessamine",
  "scientific": "Gelsemium sempervirens",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad"
  ],
  "note": "Often sold as yellow jasmine."
 },
 {
  "id": "gladiolus",
  "name": "Gladiolus",
  "scientific": "Gladiolus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "freesia",
  "name": "Freesia",
  "scientific": "Freesia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "canna-lily",
  "name": "Canna lily",
  "scientific": "Canna spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "peruvian-lily-alstroemeria",
  "name": "Peruvian lily (alstroemeria)",
  "scientific": "Alstroemeria spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "bird-of-paradise",
  "name": "Bird of paradise",
  "scientific": "Strelitzia reginae",
  "category": "garden",
  "where": "SoCal; coastal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "lily-true-lilies",
  "name": "Lily (true lilies)",
  "scientific": "Lilium spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": "Very dangerous to cats too."
 },
 {
  "id": "hyacinth",
  "name": "Hyacinth",
  "scientific": "Hyacinthus orientalis",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "cyclamen",
  "name": "Cyclamen",
  "scientific": "Cyclamen spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "delphinium-and-larkspur",
  "name": "Delphinium and larkspur",
  "scientific": "Delphinium spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "columbine",
  "name": "Columbine",
  "scientific": "Aquilegia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "lily-of-the-valley",
  "name": "Lily of the valley",
  "scientific": "Convallaria majalis",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": "Contains heart toxins."
 },
 {
  "id": "euphorbia-spurges",
  "name": "Euphorbia (spurges)",
  "scientific": "Euphorbia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr",
   "groupbad"
  ],
  "note": "Milky sap irritates."
 },
 {
  "id": "four-o-clock",
  "name": "Four o'clock",
  "scientific": "Mirabilis jalapa",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "anemone",
  "name": "Anemone",
  "scientific": "Anemone spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "coreopsis",
  "name": "Coreopsis",
  "scientific": "Coreopsis spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "impatiens-busy-lizzie",
  "name": "Impatiens (busy Lizzie)",
  "scientific": "Impatiens walleriana",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "baby-s-breath",
  "name": "Baby's breath",
  "scientific": "Gypsophila paniculata",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "heliotrope",
  "name": "Heliotrope",
  "scientific": "Heliotropium arborescens",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "moss-rose",
  "name": "Moss rose",
  "scientific": "Portulaca grandiflora",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "aspcadog",
   "group"
  ],
  "note": "One US keeper group lists it as a plant to grow, but the Tortoise Table says don't feed it and the ASPCA lists it toxic to pets."
 },
 {
  "id": "bristly-oxtongue",
  "name": "Bristly oxtongue",
  "scientific": "Picris echioides",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "pineapple-weed",
  "name": "Pineapple weed",
  "scientific": "Matricaria discoidea",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "mayweed-chamomile",
  "name": "Mayweed chamomile",
  "scientific": "Anthemis cotula",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "common-knotweed",
  "name": "Common knotweed",
  "scientific": "Polygonum aviculare",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "lambsquarters",
  "name": "Lambsquarters",
  "scientific": "Chenopodium album",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "Also called fat-hen. Only one source so far."
 },
 {
  "id": "pigweed-and-amaranth",
  "name": "Pigweed and amaranth",
  "scientific": "Amaranthus spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "horseweed-and-fleabane",
  "name": "Horseweed and fleabane",
  "scientific": "Conyza (Erigeron) spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "spotted-spurge",
  "name": "Spotted spurge",
  "scientific": "Euphorbia maculata",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": "Milky sap irritates."
 },
 {
  "id": "yellow-starthistle",
  "name": "Yellow starthistle",
  "scientific": "Centaurea solstitialis",
  "category": "weed",
  "where": "Statewide; roadsides and fields",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucipm_yst"
  ],
  "note": "Deadly to horses, and its spines injure mouths and eyes."
 },
 {
  "id": "fiddleneck",
  "name": "Fiddleneck",
  "scientific": "Amsinckia spp.",
  "category": "weed",
  "where": "Statewide; fields and hills",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucmg_fiddle"
  ],
  "note": "Contains liver toxins (pyrrolizidine alkaloids)."
 },
 {
  "id": "bull-thistle",
  "name": "Bull thistle",
  "scientific": "Cirsium vulgare",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and young leaves",
  "sources": [
   "ttwild"
  ],
  "note": "Rated safe by the Tortoise Table (as spear thistle). Only one source so far."
 },
 {
  "id": "canada-thistle",
  "name": "Canada thistle",
  "scientific": "Cirsium arvense",
  "category": "weed",
  "where": "NorCal",
  "rating": "spar",
  "parts": "Flowers and young leaves",
  "sources": [
   "ttwild",
   "rtort"
  ],
  "note": "Rated safe by the Tortoise Table (as creeping thistle)."
 },
 {
  "id": "wild-carrot-queen-anne-s-lace",
  "name": "Wild carrot (Queen Anne's lace)",
  "scientific": "Daucus carota",
  "category": "weed",
  "where": "Statewide",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "Looks very like deadly poison hemlock. Don't pick wild carrot-like plants."
 },
 {
  "id": "yarrow",
  "name": "Yarrow",
  "scientific": "Achillea millefolium",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "aspcadog"
  ],
  "note": ""
 },
 {
  "id": "wild-oats",
  "name": "Wild oats",
  "scientific": "Avena fatua",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Young green leaves",
  "sources": [
   "ttgrass"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "ryegrass",
  "name": "Ryegrass",
  "scientific": "Lolium spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Growing grass",
  "sources": [
   "ttgrass",
   "kaplan"
  ],
  "note": ""
 },
 {
  "id": "fescue",
  "name": "Fescue",
  "scientific": "Festuca spp.",
  "category": "weed",
  "where": "Lawns",
  "rating": "spar",
  "parts": "Growing grass",
  "sources": [
   "ttgrass",
   "ucanr",
   "rtort"
  ],
  "note": "UC lists it only as a skin irritant."
 },
 {
  "id": "kikuyu-grass",
  "name": "Kikuyu grass",
  "scientific": "Pennisetum clandestinum",
  "category": "weed",
  "where": "Coastal lawns",
  "rating": "spar",
  "parts": "Growing grass",
  "sources": [
   "ttgrass"
  ],
  "note": "Rated at the genus level. Only one source so far."
 },
 {
  "id": "stinging-nettle",
  "name": "Stinging nettle",
  "scientific": "Urtica spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttwild",
   "ucanr",
   "rtort"
  ],
  "note": "Stings skin."
 },
 {
  "id": "self-heal",
  "name": "Self-heal",
  "scientific": "Prunella vulgaris",
  "category": "weed",
  "where": "NorCal",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "field-madder",
  "name": "Field madder",
  "scientific": "Sherardia arvensis",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "persian-speedwell",
  "name": "Persian speedwell",
  "scientific": "Veronica persica",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild",
   "club"
  ],
  "note": ""
 },
 {
  "id": "corn-spurry",
  "name": "Corn spurry",
  "scientific": "Spergula arvensis",
  "category": "weed",
  "where": "NorCal",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "swinecress",
  "name": "Swinecress",
  "scientific": "Lepidium didymum",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttwild"
  ],
  "note": "Mustard family. Only one source so far."
 },
 {
  "id": "hedge-mustard-and-london-rocket",
  "name": "Hedge mustard and London rocket",
  "scientific": "Sisymbrium spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Young leaves",
  "sources": [
   "ttwild",
   "trustlist"
  ],
  "note": "Mustard family: rotate."
 },
 {
  "id": "sheep-sorrel",
  "name": "Sheep sorrel",
  "scientific": "Rumex acetosella",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "High in oxalic acid."
 },
 {
  "id": "creeping-woodsorrel",
  "name": "Creeping woodsorrel",
  "scientific": "Oxalis corniculata",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ivis",
   "aspcadog"
  ],
  "note": "High in soluble oxalates."
 },
 {
  "id": "cutleaf-geranium",
  "name": "Cutleaf geranium",
  "scientific": "Geranium dissectum",
  "category": "weed",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild",
   "club"
  ],
  "note": "A wild cranesbill."
 },
 {
  "id": "whitestem-filaree",
  "name": "Whitestem filaree",
  "scientific": "Erodium moschatum",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "salsify",
  "name": "Salsify",
  "scientific": "Tragopogon porrifolius",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild",
   "club"
  ],
  "note": "Rated by its relative goat's beard."
 },
 {
  "id": "poison-oak",
  "name": "Poison oak",
  "scientific": "Toxicodendron diversilobum",
  "category": "weed",
  "where": "Statewide; hills and woods",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": "Causes severe rashes in people; don't handle it."
 },
 {
  "id": "groundcherry",
  "name": "Groundcherry",
  "scientific": "Physalis spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "ttgarden"
  ],
  "note": "The Tortoise Table rates its relative, Chinese lantern, do not feed."
 },
 {
  "id": "other-nightshades",
  "name": "Other nightshades",
  "scientific": "Solanum spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr",
   "groupbad"
  ],
  "note": "Includes silverleaf and hairy nightshade."
 },
 {
  "id": "wild-onion-and-garlic",
  "name": "Wild onion and garlic",
  "scientific": "Allium spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "blackberry",
  "name": "Blackberry",
  "scientific": "Rubus spp.",
  "category": "weed",
  "where": "Statewide; creeks and hedges",
  "rating": "mod",
  "parts": "Young leaves and shoots",
  "sources": [
   "tttree",
   "club"
  ],
  "note": "Remove thorny canes."
 },
 {
  "id": "dichondra",
  "name": "Dichondra",
  "scientific": "Dichondra repens",
  "category": "weed",
  "where": "Lawns",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": "Also called kidney weed. The Tortoise Table rates it safe; UC lists it as a skin irritant."
 },
 {
  "id": "sweet-clover",
  "name": "Sweet clover",
  "scientific": "Melilotus spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "bird-s-foot-trefoil",
  "name": "Bird's foot trefoil",
  "scientific": "Lotus corniculatus",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "club"
  ],
  "note": "One club lists trefoils as food; the Tortoise Table says no."
 },
 {
  "id": "willowherb",
  "name": "Willowherb",
  "scientific": "Epilobium spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttwild"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "mistletoe",
  "name": "Mistletoe",
  "scientific": "Phoradendron spp.",
  "category": "garden",
  "where": "On oaks and other trees",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "wild-fennel",
  "name": "Wild fennel",
  "scientific": "Foeniculum vulgare",
  "category": "weed",
  "where": "Statewide; roadsides",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttwild",
   "rtort"
  ],
  "note": ""
 },
 {
  "id": "clarkia-farewell-to-spring",
  "name": "Clarkia (farewell-to-spring)",
  "scientific": "Clarkia spp.",
  "category": "weed",
  "where": "Statewide; hills",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "ttgarden"
  ],
  "note": "California native. Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "sticky-monkeyflower",
  "name": "Sticky monkeyflower",
  "scientific": "Diplacus (Mimulus) spp.",
  "category": "weed",
  "where": "Statewide; hills",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "ttgarden"
  ],
  "note": "California native. Only one source so far."
 },
 {
  "id": "phacelia",
  "name": "Phacelia",
  "scientific": "Phacelia spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "blue-eyed-grass",
  "name": "Blue-eyed grass",
  "scientific": "Sisyrinchium bellum",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild"
  ],
  "note": "California native. Only one source so far."
 },
 {
  "id": "elderberry",
  "name": "Elderberry",
  "scientific": "Sambucus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "oak-acorns-and-leaves",
  "name": "Oak (acorns and leaves)",
  "scientific": "Quercus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "willow",
  "name": "Willow",
  "scientific": "Salix spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "bottlebrush",
  "name": "Bottlebrush",
  "scientific": "Callistemon spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "pittosporum",
  "name": "Pittosporum",
  "scientific": "Pittosporum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "photinia",
  "name": "Photinia",
  "scientific": "Photinia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "privet",
  "name": "Privet",
  "scientific": "Ligustrum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "star-jasmine",
  "name": "Star jasmine",
  "scientific": "Trachelospermum jasminoides",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Very common in California yards. Only one source so far."
 },
 {
  "id": "plumbago",
  "name": "Plumbago",
  "scientific": "Plumbago auriculata",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "passion-flower",
  "name": "Passion flower",
  "scientific": "Passiflora spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "bougainvillea",
  "name": "Bougainvillea",
  "scientific": "Bougainvillea spp.",
  "category": "garden",
  "where": "SoCal; mild NorCal",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": "Thorny stems."
 },
 {
  "id": "lavender",
  "name": "Lavender",
  "scientific": "Lavandula spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "aspcadog"
  ],
  "note": "The Tortoise Table allows it in moderation, but the ASPCA lists it toxic to pets; we take the cautious side."
 },
 {
  "id": "rosemary",
  "name": "Rosemary",
  "scientific": "Salvia rosmarinus",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "crape-myrtle",
  "name": "Crape myrtle",
  "scientific": "Lagerstroemia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "flowering-maple-abutilon",
  "name": "Flowering maple (abutilon)",
  "scientific": "Abutilon spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree",
   "rtort"
  ],
  "note": "Rated safe by the Tortoise Table."
 },
 {
  "id": "rose-of-sharon",
  "name": "Rose of Sharon",
  "scientific": "Hibiscus syriacus",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree",
   "group"
  ],
  "note": ""
 },
 {
  "id": "lavatera-tree-mallow",
  "name": "Lavatera (tree mallow)",
  "scientific": "Lavatera spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree",
   "club"
  ],
  "note": ""
 },
 {
  "id": "hebe",
  "name": "Hebe",
  "scientific": "Hebe spp.",
  "category": "garden",
  "where": "Coastal",
  "rating": "free",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree",
   "club"
  ],
  "note": ""
 },
 {
  "id": "butterfly-bush-buddleia",
  "name": "Butterfly bush (buddleia)",
  "scientific": "Buddleja spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree",
   "club"
  ],
  "note": ""
 },
 {
  "id": "jacaranda",
  "name": "Jacaranda",
  "scientific": "Jacaranda mimosifolia",
  "category": "garden",
  "where": "SoCal",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "tttree"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "olive-tree",
  "name": "Olive tree",
  "scientific": "Olea europaea",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "fig-tree",
  "name": "Fig tree",
  "scientific": "Ficus carica",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": "Milky sap irritates."
 },
 {
  "id": "citrus-tree",
  "name": "Citrus tree",
  "scientific": "Citrus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ttveg",
   "kaplan"
  ],
  "note": ""
 },
 {
  "id": "pine",
  "name": "Pine",
  "scientific": "Pinus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "magnolia",
  "name": "Magnolia",
  "scientific": "Magnolia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "camellia",
  "name": "Camellia",
  "scientific": "Camellia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "elm",
  "name": "Elm",
  "scientific": "Ulmus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "free",
  "parts": "Leaves",
  "sources": [
   "tttree",
   "group"
  ],
  "note": ""
 },
 {
  "id": "wisteria",
  "name": "Wisteria",
  "scientific": "Wisteria spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": "Seeds and pods are the most toxic."
 },
 {
  "id": "clematis",
  "name": "Clematis",
  "scientific": "Clematis spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "mandevilla",
  "name": "Mandevilla",
  "scientific": "Mandevilla spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "tree-of-heaven",
  "name": "Tree of heaven",
  "scientific": "Ailanthus altissima",
  "category": "garden",
  "where": "Statewide; vacant lots",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "black-locust",
  "name": "Black locust",
  "scientific": "Robinia pseudoacacia",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "english-laurel",
  "name": "English laurel",
  "scientific": "Prunus laurocerasus",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "st-john-s-wort",
  "name": "St. John's wort",
  "scientific": "Hypericum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": "Not the same as rose of Sharon hibiscus, though both share the name."
 },
 {
  "id": "holly",
  "name": "Holly",
  "scientific": "Ilex spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "daphne",
  "name": "Daphne",
  "scientific": "Daphne spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "gardenia",
  "name": "Gardenia",
  "scientific": "Gardenia jasminoides",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "ceanothus-california-lilac",
  "name": "Ceanothus (California lilac)",
  "scientific": "Ceanothus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "tttree"
  ],
  "note": "California native. Only one source so far."
 },
 {
  "id": "echeveria-hens-and-chicks",
  "name": "Echeveria (hens and chicks)",
  "scientific": "Echeveria spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttsucc"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "aeonium",
  "name": "Aeonium",
  "scientific": "Aeonium spp.",
  "category": "garden",
  "where": "Coastal",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttsucc"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "heartleaf-iceplant",
  "name": "Heartleaf iceplant",
  "scientific": "Aptenia cordifolia",
  "category": "garden",
  "where": "Coastal; SoCal",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttsucc",
   "rtort"
  ],
  "note": "Rated safe by the Tortoise Table. The second source rates its plant family, not this species."
 },
 {
  "id": "trailing-ice-plant",
  "name": "Trailing ice plant",
  "scientific": "Delosperma spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttsucc",
   "rtort"
  ],
  "note": "The second source rates its plant family, not this species."
 },
 {
  "id": "haworthia",
  "name": "Haworthia",
  "scientific": "Haworthia spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttsucc"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "kalanchoe",
  "name": "Kalanchoe",
  "scientific": "Kalanchoe blossfeldiana",
  "category": "house",
  "where": "Indoors",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttsucc",
   "aspcadog"
  ],
  "note": ""
 },
 {
  "id": "christmas-cactus",
  "name": "Christmas cactus",
  "scientific": "Schlumbergera spp.",
  "category": "house",
  "where": "Indoors",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "ttsucc",
   "rtort"
  ],
  "note": ""
 },
 {
  "id": "pampas-grass",
  "name": "Pampas grass",
  "scientific": "Cortaderia selloana",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgrass",
   "ucanr"
  ],
  "note": "The Tortoise Table rates it safe, but UC lists it as highly toxic; we take the cautious side."
 },
 {
  "id": "fountain-grass",
  "name": "Fountain grass",
  "scientific": "Pennisetum setaceum",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttgrass"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "boston-fern",
  "name": "Boston fern",
  "scientific": "Nephrolepis exaltata",
  "category": "house",
  "where": "Indoors",
  "rating": "spar",
  "parts": "Fronds",
  "sources": [
   "ttgrass"
  ],
  "note": "Unlike most ferns, rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "ferns-and-bracken",
  "name": "Ferns and bracken",
  "scientific": "Various",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgrass"
  ],
  "note": "Most ferns aren't safe. Boston fern is the exception."
 },
 {
  "id": "giant-reed",
  "name": "Giant reed",
  "scientific": "Arundo donax",
  "category": "weed",
  "where": "Statewide; creeks",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgrass"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "bamboo",
  "name": "Bamboo",
  "scientific": "Various",
  "category": "garden",
  "where": "Statewide",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttgrass"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "bok-choy",
  "name": "Bok choy",
  "scientific": "Brassica rapa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttveg",
   "club"
  ],
  "note": "Mustard family. The Tortoise Table allows it in moderation; one club advises against cabbage-family greens."
 },
 {
  "id": "napa-cabbage",
  "name": "Napa cabbage",
  "scientific": "Brassica rapa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttveg",
   "club"
  ],
  "note": "Mustard family. The Tortoise Table allows it in moderation; one club advises against cabbage-family greens."
 },
 {
  "id": "zucchini",
  "name": "Zucchini",
  "scientific": "Cucurbita pepo",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Flesh and flowers",
  "sources": [
   "ttveg"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "brussels-sprouts",
  "name": "Brussels sprouts",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttveg",
   "rvc",
   "club"
  ],
  "note": "Sources range from moderation to avoid; can affect the thyroid."
 },
 {
  "id": "cauliflower",
  "name": "Cauliflower",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "rvc"
  ],
  "note": "The Tortoise Table says don't feed it."
 },
 {
  "id": "kohlrabi",
  "name": "Kohlrabi",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "club",
   "groupfood"
  ],
  "note": "Cabbage family: can affect the thyroid."
 },
 {
  "id": "globe-artichoke",
  "name": "Globe artichoke",
  "scientific": "Cynara cardunculus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttveg",
   "rtort"
  ],
  "note": "Rated safe by the Tortoise Table."
 },
 {
  "id": "dill",
  "name": "Dill",
  "scientific": "Anethum graveolens",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttveg"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "frisee",
  "name": "Frisée",
  "scientific": "Cichorium endivia",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "ttveg",
   "ness"
  ],
  "note": "A curly endive."
 },
 {
  "id": "radish-and-daikon",
  "name": "Radish and daikon",
  "scientific": "Raphanus sativus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves and root",
  "sources": [
   "ttveg",
   "kaplan"
  ],
  "note": "Low nutrition."
 },
 {
  "id": "okra",
  "name": "Okra",
  "scientific": "Abelmoschus esculentus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Pods",
  "sources": [
   "ttveg"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "asparagus",
  "name": "Asparagus",
  "scientific": "Asparagus officinalis",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Spears",
  "sources": [
   "ttveg",
   "ucanr"
  ],
  "note": "UC lists it only as a skin irritant."
 },
 {
  "id": "carrot",
  "name": "Carrot",
  "scientific": "Daucus carota sativus",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Root",
  "sources": [
   "ttveg"
  ],
  "note": "Sugary for Mediterranean tortoises. Only one source so far."
 },
 {
  "id": "sweet-potato",
  "name": "Sweet potato",
  "scientific": "Ipomoea batatas",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "potato",
  "name": "Potato",
  "scientific": "Solanum tuberosum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "ucanr"
  ],
  "note": "Green parts are toxic."
 },
 {
  "id": "eggplant",
  "name": "Eggplant",
  "scientific": "Solanum melongena",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "ucanr"
  ],
  "note": "Nightshade family."
 },
 {
  "id": "onion-garlic-chives-and-leeks",
  "name": "Onion, garlic, chives and leeks",
  "scientific": "Allium spp.",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "avocado",
  "name": "Avocado",
  "scientific": "Persea americana",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttveg",
   "groupbad"
  ],
  "note": ""
 },
 {
  "id": "rhubarb",
  "name": "Rhubarb",
  "scientific": "Rheum rhabarbarum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttveg",
   "ucanr",
   "groupfood"
  ],
  "note": "Leaves are especially toxic."
 },
 {
  "id": "wild-mushrooms",
  "name": "Wild mushrooms",
  "scientific": "Various",
  "category": "weed",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ttveg",
   "ucmarin"
  ],
  "note": "Some, like the death cap, are deadly. Remove any that pop up in the enclosure."
 },
 {
  "id": "bean-sprouts",
  "name": "Bean sprouts",
  "scientific": "Various",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "kaplan"
  ],
  "note": ""
 },
 {
  "id": "chili-peppers",
  "name": "Chili peppers",
  "scientific": "Capsicum spp.",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "parsnip",
  "name": "Parsnip",
  "scientific": "Pastinaca sativa",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "rvc"
  ],
  "note": ""
 },
 {
  "id": "garden-cress",
  "name": "Garden cress",
  "scientific": "Lepidium sativum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "ttveg"
  ],
  "note": "Mustard family. Only one source so far."
 },
 {
  "id": "citrus-fruit",
  "name": "Citrus fruit",
  "scientific": "Citrus spp.",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttveg",
   "kaplan"
  ],
  "note": "Too acidic and sugary."
 },
 {
  "id": "goldfields",
  "name": "Goldfields",
  "scientific": "Lasthenia spp.",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "baby-blue-eyes",
  "name": "Baby blue eyes",
  "scientific": "Nemophila menziesii",
  "category": "weed",
  "where": "Statewide; grassy slopes",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "five-spot",
  "name": "Five spot",
  "scientific": "Nemophila maculata",
  "category": "weed",
  "where": "Sierra foothills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "owl-s-clover",
  "name": "Owl's clover",
  "scientific": "Castilleja exserta",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "indian-paintbrush",
  "name": "Indian paintbrush",
  "scientific": "Castilleja spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "tidy-tips",
  "name": "Tidy tips",
  "scientific": "Layia platyglossa",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "blue-dicks",
  "name": "Blue dicks",
  "scientific": "Dipterostemon capitatus",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "popcorn-flower",
  "name": "Popcorn flower",
  "scientific": "Plagiobothrys spp.",
  "category": "weed",
  "where": "Statewide; fields",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "red-maids",
  "name": "Red maids",
  "scientific": "Calandrinia menziesii",
  "category": "weed",
  "where": "Statewide; fields and gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "mule-s-ears",
  "name": "Mule's ears",
  "scientific": "Wyethia spp.",
  "category": "weed",
  "where": "Foothills and mountains",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "mariposa-lily",
  "name": "Mariposa lily",
  "scientific": "Calochortus spp.",
  "category": "weed",
  "where": "Statewide; hills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "soap-plant",
  "name": "Soap plant",
  "scientific": "Chlorogalum pomeridianum",
  "category": "weed",
  "where": "Statewide; hills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "checkerbloom",
  "name": "Checkerbloom",
  "scientific": "Sidalcea malviflora",
  "category": "weed",
  "where": "Coastal and NorCal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native in the mallow family, but not rated itself."
 },
 {
  "id": "chinese-houses",
  "name": "Chinese houses",
  "scientific": "Collinsia heterophylla",
  "category": "weed",
  "where": "Statewide; shady slopes",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "globe-gilia",
  "name": "Globe gilia",
  "scientific": "Gilia capitata",
  "category": "weed",
  "where": "Statewide",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "bird-s-eye-gilia",
  "name": "Bird's eye gilia",
  "scientific": "Gilia tricolor",
  "category": "weed",
  "where": "Central Valley and foothills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "cream-cups",
  "name": "Cream cups",
  "scientific": "Platystemon californicus",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "meadowfoam",
  "name": "Meadowfoam",
  "scientific": "Limnanthes douglasii",
  "category": "weed",
  "where": "NorCal; wet meadows",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "tarweed",
  "name": "Tarweed",
  "scientific": "Madia and Centromadia spp.",
  "category": "weed",
  "where": "Statewide; summer fields",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "gumplant",
  "name": "Gumplant",
  "scientific": "Grindelia spp.",
  "category": "weed",
  "where": "Coastal and valleys",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "golden-yarrow",
  "name": "Golden yarrow",
  "scientific": "Eriophyllum confertiflorum",
  "category": "weed",
  "where": "Statewide; dry slopes",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "california-fuchsia",
  "name": "California fuchsia",
  "scientific": "Epilobium canum",
  "category": "garden",
  "where": "Statewide; dry slopes and gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "pacific-aster",
  "name": "Pacific aster",
  "scientific": "Symphyotrichum chilense",
  "category": "weed",
  "where": "Coastal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "chia-california",
  "name": "Chia (California)",
  "scientific": "Salvia columbariae",
  "category": "weed",
  "where": "SoCal and foothills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native. Not the grocery chia (Salvia hispanica)."
 },
 {
  "id": "desert-dandelion",
  "name": "Desert dandelion",
  "scientific": "Malacothrix glabrata",
  "category": "weed",
  "where": "SoCal deserts",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "brittlebush",
  "name": "Brittlebush",
  "scientific": "Encelia farinosa",
  "category": "garden",
  "where": "SoCal deserts",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "purple-needlegrass",
  "name": "Purple needlegrass",
  "scientific": "Stipa pulchra",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California's state grass."
 },
 {
  "id": "hummingbird-sage",
  "name": "Hummingbird sage",
  "scientific": "Salvia spathacea",
  "category": "garden",
  "where": "Coastal; shade gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "white-sage",
  "name": "White sage",
  "scientific": "Salvia apiana",
  "category": "garden",
  "where": "SoCal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "black-sage",
  "name": "Black sage",
  "scientific": "Salvia mellifera",
  "category": "garden",
  "where": "Coastal; SoCal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "yerba-buena",
  "name": "Yerba buena",
  "scientific": "Clinopodium douglasii",
  "category": "weed",
  "where": "Coastal; woodlands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "matilija-poppy",
  "name": "Matilija poppy",
  "scientific": "Romneya coulteri",
  "category": "garden",
  "where": "SoCal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "coyote-brush",
  "name": "Coyote brush",
  "scientific": "Baccharis pilularis",
  "category": "garden",
  "where": "Statewide; coastal hills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "manzanita",
  "name": "Manzanita",
  "scientific": "Arctostaphylos spp.",
  "category": "garden",
  "where": "Statewide; hills",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "california-buckwheat",
  "name": "California buckwheat",
  "scientific": "Eriogonum fasciculatum",
  "category": "garden",
  "where": "Statewide; dry slopes",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "western-redbud",
  "name": "Western redbud",
  "scientific": "Cercis occidentalis",
  "category": "garden",
  "where": "Foothills and gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "pacific-madrone",
  "name": "Pacific madrone",
  "scientific": "Arbutus menziesii",
  "category": "garden",
  "where": "NorCal; woodlands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "lemonade-berry",
  "name": "Lemonade berry",
  "scientific": "Rhus integrifolia",
  "category": "garden",
  "where": "SoCal; coastal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "western-sycamore",
  "name": "Western sycamore",
  "scientific": "Platanus racemosa",
  "category": "garden",
  "where": "Statewide; creeks",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "douglas-fir",
  "name": "Douglas fir",
  "scientific": "Pseudotsuga menziesii",
  "category": "garden",
  "where": "NorCal; forests",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "chaparral-yucca",
  "name": "Chaparral yucca",
  "scientific": "Hesperoyucca whipplei",
  "category": "garden",
  "where": "SoCal; dry slopes",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "ocean-spray",
  "name": "Ocean spray",
  "scientific": "Holodiscus discolor",
  "category": "garden",
  "where": "NorCal; woodlands",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": "California native."
 },
 {
  "id": "new-zealand-flax",
  "name": "New Zealand flax",
  "scientific": "Phormium tenax",
  "category": "garden",
  "where": "Statewide; gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": ""
 },
 {
  "id": "indian-hawthorn",
  "name": "Indian hawthorn",
  "scientific": "Rhaphiolepis indica",
  "category": "garden",
  "where": "Statewide; gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": ""
 },
 {
  "id": "mexican-fan-palm",
  "name": "Mexican fan palm",
  "scientific": "Washingtonia robusta",
  "category": "garden",
  "where": "SoCal",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": ""
 },
 {
  "id": "society-garlic",
  "name": "Society garlic",
  "scientific": "Tulbaghia violacea",
  "category": "garden",
  "where": "Statewide; gardens",
  "rating": "nyr",
  "parts": "",
  "sources": [],
  "note": ""
 },
 {
  "id": "shooting-star",
  "name": "Shooting star",
  "scientific": "Primula (Dodecatheon) spp.",
  "category": "weed",
  "where": "Statewide; grasslands",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttgarden",
   "ucanr"
  ],
  "note": "California native. Rated by its genus (Primula)."
 },
 {
  "id": "seaside-daisy",
  "name": "Seaside daisy",
  "scientific": "Erigeron glaucus",
  "category": "garden",
  "where": "Coastal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": "California native. UC lists its genus (Erigeron) as irritating."
 },
 {
  "id": "wild-strawberry",
  "name": "Wild strawberry",
  "scientific": "Fragaria spp.",
  "category": "weed",
  "where": "Coastal and woodlands",
  "rating": "spar",
  "parts": "Leaves and flowers",
  "sources": [
   "club",
   "rtort"
  ],
  "note": "California has native wild strawberries."
 },
 {
  "id": "california-sagebrush",
  "name": "California sagebrush",
  "scientific": "Artemisia californica",
  "category": "garden",
  "where": "Coastal; SoCal hills",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": "California native. Rated by its genus (Artemisia)."
 },
 {
  "id": "coffeeberry",
  "name": "Coffeeberry",
  "scientific": "Frangula californica",
  "category": "garden",
  "where": "Statewide; hills",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": "California native. Only one source so far."
 },
 {
  "id": "california-buckeye",
  "name": "California buckeye",
  "scientific": "Aesculus californica",
  "category": "garden",
  "where": "Statewide; foothills",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "aspcadog",
   "tttree"
  ],
  "note": "California native. Seeds are the most toxic. The Tortoise Table rates its relative, horse chestnut, do not feed."
 },
 {
  "id": "california-bay-laurel",
  "name": "California bay laurel",
  "scientific": "Umbellularia californica",
  "category": "garden",
  "where": "Statewide; woodlands",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr",
   "aspcadog"
  ],
  "note": "California native."
 },
 {
  "id": "snowberry",
  "name": "Snowberry",
  "scientific": "Symphoricarpos spp.",
  "category": "garden",
  "where": "Statewide; woodlands",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": "California native."
 },
 {
  "id": "flowering-currant",
  "name": "Flowering currant",
  "scientific": "Ribes sanguineum",
  "category": "garden",
  "where": "Coastal and NorCal",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree"
  ],
  "note": "California native. Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "california-wild-grape",
  "name": "California wild grape",
  "scientific": "Vitis californica",
  "category": "garden",
  "where": "NorCal; creeks",
  "rating": "free",
  "parts": "Young leaves, no fruit",
  "sources": [
   "rvc",
   "club",
   "group"
  ],
  "note": "California native. Rated by its genus (Vitis), like garden grape."
 },
 {
  "id": "california-wild-rose",
  "name": "California wild rose",
  "scientific": "Rosa californica",
  "category": "garden",
  "where": "Statewide; creeks",
  "rating": "free",
  "parts": "Petals and leaves",
  "sources": [
   "trust",
   "club",
   "kaplan"
  ],
  "note": "California native. Rated by its genus (Rosa)."
 },
 {
  "id": "thimbleberry",
  "name": "Thimbleberry",
  "scientific": "Rubus parviflorus",
  "category": "garden",
  "where": "NorCal; woodlands",
  "rating": "mod",
  "parts": "Young leaves",
  "sources": [
   "tttree",
   "club"
  ],
  "note": "California native. Rated by its genus (Rubus), like blackberry."
 },
 {
  "id": "milkweed",
  "name": "Milkweed",
  "scientific": "Asclepias spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ttwild",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "death-camas",
  "name": "Death camas",
  "scientific": "Toxicoscordion spp.",
  "category": "weed",
  "where": "Statewide; meadows",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": "California native. Deadly. Only one source so far."
 },
 {
  "id": "coast-redwood",
  "name": "Coast redwood",
  "scientific": "Sequoia sempervirens",
  "category": "garden",
  "where": "Coastal NorCal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": "California native. Only one source so far."
 },
 {
  "id": "rockrose",
  "name": "Rockrose",
  "scientific": "Cistus spp.",
  "category": "garden",
  "where": "Statewide; gardens",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "lilac",
  "name": "Lilac",
  "scientific": "Syringa vulgaris",
  "category": "garden",
  "where": "Statewide; gardens",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree"
  ],
  "note": "Rated safe by the Tortoise Table. Only one source so far."
 },
 {
  "id": "abelia",
  "name": "Abelia",
  "scientific": "Abelia spp.",
  "category": "garden",
  "where": "Statewide; hedges",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "escallonia",
  "name": "Escallonia",
  "scientific": "Escallonia spp.",
  "category": "garden",
  "where": "Coastal; hedges",
  "rating": "spar",
  "parts": "Flowers",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "cape-honeysuckle",
  "name": "Cape honeysuckle",
  "scientific": "Tecomaria capensis",
  "category": "garden",
  "where": "SoCal; hedges",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Not a true honeysuckle. Only one source so far."
 },
 {
  "id": "myoporum",
  "name": "Myoporum",
  "scientific": "Myoporum laetum",
  "category": "garden",
  "where": "Coastal; hedges",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": "Common coastal hedge. Only one source so far."
 },
 {
  "id": "natal-plum",
  "name": "Natal plum",
  "scientific": "Carissa macrocarpa",
  "category": "garden",
  "where": "SoCal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "cotoneaster",
  "name": "Cotoneaster",
  "scientific": "Cotoneaster spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree",
   "ucanr"
  ],
  "note": ""
 },
 {
  "id": "silk-tree-mimosa",
  "name": "Silk tree (mimosa)",
  "scientific": "Albizia julibrissin",
  "category": "garden",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tttree"
  ],
  "note": "Only one source so far."
 },
 {
  "id": "pepper-tree",
  "name": "Pepper tree",
  "scientific": "Schinus molle, S. terebinthifolius",
  "category": "garden",
  "where": "SoCal",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "ucanr"
  ],
  "note": ""
 }
];
