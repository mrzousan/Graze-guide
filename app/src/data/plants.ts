// Generated from the Graze Guide spreadsheet by tools/build_data.py. Edit the spreadsheet, not this file by hand.
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

export const SOURCES: Record<string, Source> = {
 "tt1": {
  "title": "The Tortoise Table",
  "url": "https://www.thetortoisetable.org.uk/plant-database/trees-shrubs-climbers",
  "org": "tt"
 },
 "tt2": {
  "title": "The Tortoise Table",
  "url": "https://www.thetortoisetable.org.uk/plant-database/cacti-succulents",
  "org": "tt"
 },
 "azeah1": {
  "title": "Edible plants and weeds for tortoises (azeah.com list)",
  "url": "https://azeah.com/node/229",
  "org": "azeah"
 },
 "tt3": {
  "title": "The Tortoise Table",
  "url": "https://www.thetortoisetable.org.uk/plant-database/garden-and-house-plants/",
  "org": "tt"
 },
 "ucanr1": {
  "title": "UC ANR toxic plants list",
  "url": "https://ccfruitandnuts.ucanr.edu/sites/default/files/2022-02/363609.pdf",
  "org": "ucanr"
 },
 "aspca1": {
  "title": "ASPCA: aloe",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/aloe",
  "org": "aspca"
 },
 "club1": {
  "title": "Norfolk Tortoise Club food list",
  "url": "https://www.tortoiseclub.org/s/3_HEALTHY_TORTOISE_FOOD_23.pdf",
  "org": "club"
 },
 "ucanr2": {
  "title": "UC Marin Master Gardeners",
  "url": "https://ucanr.edu/node/170536",
  "org": "ucanr"
 },
 "rvc1": {
  "title": "Royal Veterinary College care sheet",
  "url": "https://www.rvc.ac.uk/Media/Default/small-animal/documents/Mediterranean-tortoise-care%20-%20UPDATED-1.pdf",
  "org": "rvc"
 },
 "tt4": {
  "title": "The Tortoise Table",
  "url": "https://www.thetortoisetable.org.uk/plant-database/fruit-vegetables",
  "org": "tt"
 },
 "group1": {
  "title": "Tortoise Group poisonous plants",
  "url": "https://tortoisegroup.org/plants-poisonous-to-tortoises",
  "org": "group"
 },
 "ucanr3": {
  "title": "UC El Dorado Master Gardeners",
  "url": "https://ccfruitandnuts.ucanr.edu/sites/default/files/2018-11/294865.pdf",
  "org": "ucanr"
 },
 "tt5": {
  "title": "The Tortoise Table",
  "url": "https://www.thetortoisetable.org.uk/plant-database/grasses-ferns",
  "org": "tt"
 },
 "kaplan1": {
  "title": "Melissa Kaplan tortoise diet",
  "url": "https://anapsid.org/tortdiet.html",
  "org": "kaplan"
 },
 "group2": {
  "title": "Tortoise Group food page",
  "url": "https://tortoisegroup.org/food",
  "org": "group"
 },
 "trust1": {
  "title": "Tortoise Trust feeding guide",
  "url": "https://www.tortoisetrust.org/articles/basicmedfood.htm",
  "org": "trust"
 },
 "ivis.org1": {
  "title": "IVIS vet guide: oxalis",
  "url": "https://www.ivis.org/library/guide-to-poisonous-house-and-garden-plants/oxalis-species-sorrel",
  "org": "ivis.org"
 },
 "poisonousplants.massey.ac.nz1": {
  "title": "Massey University: Bermuda buttercup",
  "url": "https://poisonousplants.massey.ac.nz/data/bermuda_buttercup/bermBcup.html",
  "org": "poisonousplants.massey.ac.nz"
 },
 "group3": {
  "title": "Tortoise Group plants to grow",
  "url": "https://dev.tortoisegroup.org/wp-content/uploads/2026/01/Plants-List-TG-Flyer-1.pdf",
  "org": "group"
 },
 "tt6": {
  "title": "The Tortoise Table",
  "url": "https://www.thetortoisetable.org.uk/plant-database/wild-flowers/",
  "org": "tt"
 },
 "aspca2": {
  "title": "ASPCA: plants toxic to dogs",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list",
  "org": "aspca"
 },
 "aspca3": {
  "title": "ASPCA: pot marigold",
  "url": "https://www.aspca.org/node/5287",
  "org": "aspca"
 },
 "rt1": {
  "title": "RussianTortoise.org edible plants",
  "url": "https://russiantortoise.net/edible_plants.htm",
  "org": "rt"
 },
 "trust2": {
  "title": "Tortoise Trust plant list",
  "url": "https://www.tortoisetrust.org/articles/plantfoods.html",
  "org": "trust"
 },
 "club2": {
  "title": "Norfolk Tortoise Club plant guide",
  "url": "https://www.tortoiseclub.org/?p=19",
  "org": "club"
 },
 "aspca4": {
  "title": "ASPCA: chamomile",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/chamomile",
  "org": "aspca"
 },
 "aspca5": {
  "title": "ASPCA: daisy (chrysanthemum)",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/daisy",
  "org": "aspca"
 },
 "mdc.mo.gov1": {
  "title": "Missouri Dept. of Conservation: curly dock",
  "url": "https://mdc.mo.gov/node/269121",
  "org": "mdc.mo.gov"
 },
 "tortoise-protection-group.org.uk1": {
  "title": "Tortoise Protection Group forum",
  "url": "https://tortoise-protection-group.org.uk/site/tpg_members_forum_130.asp?tID=3509",
  "org": "tortoise-protection-group.org.uk"
 },
 "nessexotic.com1": {
  "title": "Ness Exotic Wellness Center care sheet",
  "url": "https://nessexotic.com/wp-content/uploads/2022/04/Reptile-Russian_Tortoise_Care.pdf",
  "org": "nessexotic.com"
 },
 "aspca6": {
  "title": "ASPCA: English ivy",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/english-ivy",
  "org": "aspca"
 },
 "ucanr4": {
  "title": "UC Master Gardeners: fiddleneck",
  "url": "https://ccfruitandnuts.ucanr.edu/sites/default/files/2021-06/352143.pdf",
  "org": "ucanr"
 },
 "sigmaaldrich.com1": {
  "title": "Bindweed mouse feeding study",
  "url": "https://www.sigmaaldrich.com/MX/es/tech-docs/paper/328091",
  "org": "sigmaaldrich.com"
 },
 "aspca7": {
  "title": "ASPCA: foxglove",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/foxglove",
  "org": "aspca"
 },
 "kaplan2": {
  "title": "Melissa Kaplan edible plants list",
  "url": "https://anapsid.org/resources/edible.html",
  "org": "kaplan"
 },
 "aspca8": {
  "title": "ASPCA: groundsel",
  "url": "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/groundsel",
  "org": "aspca"
 },
 "inchem.org1": {
  "title": "IPCS INCHEM: Senecio",
  "url": "https://inchem.org/documents/pims/plant/senecio.htm",
  "org": "inchem.org"
 },
 "rvc2": {
  "title": "Royal Veterinary College care sheet (2024)",
  "url": "https://rvc.ac.uk/Media/Default/Beaumont%20Sainsbury%20Animal%20Hospital/EXOTICS/Animal%20Care%20Factsheets/Mediterranean%20tortoise%20care%202024%20jh.pdf",
  "org": "rvc"
 },
 "aspca9": {
  "title": "ASPCA: jasmine",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/jasmine",
  "org": "aspca"
 },
 "lsu.edu1": {
  "title": "LSU Vet School: agapanthus",
  "url": "https://lsu.edu/vetmed/toxic_plants/agapanthus.php",
  "org": "lsu.edu"
 },
 "furrycritter.com1": {
  "title": "Furry Critter tortoise food guide",
  "url": "https://www.furrycritter.com/pages/articles/reptiles/tortoise_food.htm",
  "org": "furrycritter.com"
 },
 "aspca10": {
  "title": "ASPCA: golden pothos",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/golden-pothos",
  "org": "aspca"
 },
 "pubs.usgs.gov1": {
  "title": "USGS desert tortoise study",
  "url": "https://pubs.usgs.gov/publication/70250364",
  "org": "pubs.usgs.gov"
 },
 "aspca11": {
  "title": "ASPCA: spider plant",
  "url": "https://www.aspca.org/node/5398",
  "org": "aspca"
 },
 "aspca12": {
  "title": "ASPCA: sunflower",
  "url": "https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants/sunflower",
  "org": "aspca"
 },
 "ucanr5": {
  "title": "UC IPM: yellow starthistle",
  "url": "https://ipm.ucanr.edu/home-and-landscape/yellow-starthistle/",
  "org": "ucanr"
 }
};

export const PLANTS: Plant[] = [
 {
  "id": "abelia",
  "name": "Abelia",
  "scientific": "Abelia spp.",
  "category": "garden",
  "where": "Statewide; hedges",
  "rating": "spar",
  "parts": "Flowers and leaves",
  "sources": [
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "abelia-1.jpg",
    "line": "Photo: A. Barra, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Abelia_chinensis_RJB1.jpg"
   }
  ]
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
   "tt2",
   "azeah1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "aeonium-1.jpg",
    "line": "Photo: Humarkus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aeonium_undulatum.JPG"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "african-daisy-1.jpg",
    "line": "Photo: SAplants, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Osteospermum_spinosum_var._spinosum_1DS-II_1-9738.jpg"
   },
   {
    "f": "african-daisy-2.jpg",
    "line": "Photo: Terragio67, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Osteospermum_flower.jpg"
   },
   {
    "f": "african-daisy-3.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Osteospermum_hybrid_August_2026-9.jpg"
   },
   {
    "f": "african-daisy-4.jpg",
    "line": "Photo: AdvaitaMakaranda, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:African_Daisy_in_Utah.jpg"
   }
  ]
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
   "ucanr1",
   "tt2"
  ],
  "note": "The Tortoise Table allows a little, but UC lists the sap as irritating; we take the cautious side.",
  "reason": "Irritating sap",
  "warning": "",
  "photos": [
   {
    "f": "agave-1.jpg",
    "line": "Photo: Marc Ryckaert (MJJR), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Agave_americana_R01.jpg"
   }
  ]
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
   "aspca1",
   "club1",
   "tt2"
  ],
  "note": "The Tortoise Table allows it in moderation, but the ASPCA lists it toxic to pets; we take the cautious side.",
  "reason": "Listed as toxic to pets (ASPCA); no tortoise data",
  "warning": "",
  "photos": [
   {
    "f": "aloe-vera-1.jpg",
    "line": "Photo: H. Zell, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aloe_vera_Lanzarote.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "anemone-1.jpg",
    "line": "Photo: Aviad2001, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Anemones5.jpg"
   },
   {
    "f": "anemone-2.jpg",
    "line": "Photo: AmaryllisGardener, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Blue_Anemone_coronaria.JPG"
   },
   {
    "f": "anemone-3.jpg",
    "line": "Photo: Eric Hunt, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Anemone_virginiana_var._virginiana_(1).jpg"
   },
   {
    "f": "anemone-4.jpg",
    "line": "Photo: Hectonichus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ranuncolaceae_-_Anemone_hortensis-2.JPG"
   }
  ]
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
   "ucanr1",
   "ucanr2",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "angel-s-trumpet-and-jimsonweed-1.jpg",
    "line": "Photo: Dewi Kusuma Ayu, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brugmansia_Suaveolens_(Terompet_Malaikat).jpg"
   },
   {
    "f": "angel-s-trumpet-and-jimsonweed-2.jpg",
    "line": "Photo: Petro Stelte, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brugmansia-Sitia-Crete-Greece.jpg"
   },
   {
    "f": "angel-s-trumpet-and-jimsonweed-3.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Angel_Trumpets_--_Brugmansia_suaveolens.jpg"
   },
   {
    "f": "angel-s-trumpet-and-jimsonweed-4.jpg",
    "line": "Photo: Dlarsen, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Datura_wrightii_flower2.jpg"
   }
  ]
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
   "rvc1",
   "club1",
   "tt4"
  ],
  "note": "Mustard family: rotate.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "arugula-rocket-1.jpg",
    "line": "Photo: Stefan.lefnaer, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Eruca_sativa_sl11.jpg"
   }
  ]
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
   "tt4",
   "ucanr1"
  ],
  "note": "UC lists it only as a skin irritant.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "asparagus-1.jpg",
    "line": "Photo: Evan-Amos, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Asparagus-Bundle.jpg"
   }
  ]
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
   "tt3",
   "azeah1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "aster-1.jpg",
    "line": "Photo: Robert Flogaus-Faust, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aster_amellus_RF.jpg"
   },
   {
    "f": "aster-2.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloeiwijze_van_Aster_x_frikartii_'M%C3%B6nch'._Locatie,_Tuinreservaat_Jonkervallei_02.jpg"
   },
   {
    "f": "aster-3.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloeiwijze_van_een_herfstaster_(Aster)._02-10-2026._(d.j.b)_02.jpg"
   },
   {
    "f": "aster-4.jpg",
    "line": "Photo: Agnieszka Kwiecień, Nova, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aster_'Diana'_2017-10-15_01.jpg"
   }
  ]
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
   "tt4",
   "group1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "avocado-1.jpg",
    "line": "Photo: B.navez, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Persea_americana_fruit_2.JPG"
   },
   {
    "f": "avocado-2.jpg",
    "line": "Photo: Forest and Kim Starr, CC BY 3.0 us, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr-110215-1356-Persea_americana-leaves-KiHana_Nursery_Kihei-Maui_(24958024902).jpg"
   },
   {
    "f": "avocado-3.jpg",
    "line": "Photo: A16898, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Persea_americana_flowers_D3150074.JPG"
   },
   {
    "f": "avocado-4.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Persea_americana_kz01.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr3",
   "group1",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "azalea-rhododendron-1.jpg",
    "line": "Photo: albert kok, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Alpenroos.jpg"
   },
   {
    "f": "azalea-rhododendron-2.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Azalea_--_Rhododendron.jpg"
   },
   {
    "f": "azalea-rhododendron-3.jpg",
    "line": "Photo: Kritzolina, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rhododendron_Hybrid_'Susan'_im_botanischen_Garten_in_M%C3%BCnchen_01.jpg"
   },
   {
    "f": "azalea-rhododendron-4.jpg",
    "line": "Photo: Atudu, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rhododendron_(%E0%A6%97%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%B8)02.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "baby-blue-eyes-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nemophila_menziesii_7794.JPG"
   },
   {
    "f": "baby-blue-eyes-2.jpg",
    "line": "Photo: Cliff Hutson, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Baby_Blue_Eyes_o.jpg"
   },
   {
    "f": "baby-blue-eyes-3.jpg",
    "line": "Photo: Miwasatoshi, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nemophila-menziesii-20080330.JPG"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "baby-s-breath-1.jpg",
    "line": "Photo: Stefan.lefnaer, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gypsophila_paniculata_sl17.jpg"
   }
  ]
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
   "tt5",
   "azeah1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bamboo-1.jpg",
    "line": "Photo: Jules Verne Times Two, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bamboo_(Phyllostachys_edulis),_Jardim_da_Funda%C3%A7%C3%A3o_Calouste_Gulbenkian,_Lisbon,_Portugal_julesvernex2.jpg"
   }
  ]
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
   "tt4",
   "kaplan1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "bean-sprouts-1.jpg",
    "line": "Photo: pics_pd, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Mung_bean_sprouts,_close-up.jpg"
   }
  ]
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
   "group2",
   "tt4"
  ],
  "note": "High in oxalic acid. The Tortoise Table allows a little beetroot; we take the cautious side.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "beet-greens-1.jpg",
    "line": "Photo: Evan-Amos, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Beets-Bundle.jpg"
   }
  ]
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
   "rvc1",
   "trust1",
   "tt4"
  ],
  "note": "A fruit: too much sugar for Mediterranean tortoises.",
  "reason": "Too sugary",
  "warning": "",
  "photos": [
   {
    "f": "bell-pepper-1.jpg",
    "line": "Photo: Kham Tran - www.khamtran.com, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Green-Yellow-Red-Pepper-2009.jpg"
   }
  ]
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
   "ivis.org1",
   "poisonousplants.massey.ac.nz1"
  ],
  "note": "High in soluble oxalates, which bind calcium.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "bermuda-buttercup-sourgrass-1.jpg",
    "line": "Photo: MathKnight and Zachi Evenor, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Oxalis-pes-caprae-16c-Zachi-Evenor.jpg"
   }
  ]
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
   "rvc1",
   "kaplan1",
   "group3"
  ],
  "note": "Let them graze it. Not clippings, and only untreated lawns.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bermuda-grass-1.jpg",
    "line": "Photo: Bidgee, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cynodon_dactylon_2.jpg"
   }
  ]
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
   "tt3",
   "group1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "bird-of-paradise-1.jpg",
    "line": "Photo: Gabriel Collares, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ave-do-para%C3%ADso,_Strelitzia_reginae,_em_Bag%C3%A9,_Rio_Grande_do_Sul,_Brasil_-_55211233712.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bird-s-eye-gilia-1.jpg",
    "line": "Photo: Salicyna, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gilia_tricolor_2015-07-28_5320.jpg"
   }
  ]
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
   "tt6",
   "club1"
  ],
  "note": "One club lists trefoils as food; the Tortoise Table says no.",
  "reason": "The Tortoise Table says don't feed it",
  "warning": "",
  "photos": [
   {
    "f": "bird-s-foot-trefoil-1.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Lotus_corniculatus_-_Plant_habit.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "black-locust-1.jpg",
    "line": "Photo: Pollinator at English Wikipedia, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Robina9146.JPG"
   },
   {
    "f": "black-locust-2.jpg",
    "line": "Photo: Marija Gajić, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Robinia_pseudoacacia_(1).JPG"
   },
   {
    "f": "black-locust-3.jpg",
    "line": "Photo: Ввласенко, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Robinia_pseudoacacia_blossom.jpg"
   },
   {
    "f": "black-locust-4.jpg",
    "line": "Photo: Andrey Butko, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Flowers_of_Robinia_pseudoacacia.jpg"
   }
  ]
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
   "club1",
   "group2"
  ],
  "note": "Mustard family: can affect the thyroid. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "black-mustard-1.jpg",
    "line": "Photo: Missvain, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brassica_nigra_-_March_2024_-_Sarah_Stierch_02.jpg"
   }
  ]
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
   "ucanr1",
   "group1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "black-nightshade-1.jpg",
    "line": "Photo: Harald Hubich, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Solanum_nigrum_flower.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "black-sage-1.jpg",
    "line": "Photo: Curtis Clark, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Salvia_mellifera_flowers_2003-03-12.jpg"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "black-eyed-susan-1.jpg",
    "line": "Photo: Dcoetzee, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rudbeckia_hirta_flower_closeup.jpg"
   }
  ]
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
   "tt1",
   "club1"
  ],
  "note": "Remove thorny canes.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "blackberry-1.jpg",
    "line": "Photo: Kolforn, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:-2020-09-23_Blackberrys,_Coast_Path,_Trimingham.JPG"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "Looks like deadly death camas. Not yet rated: don't feed.",
  "photos": [
   {
    "f": "blue-dicks-1.jpg",
    "line": "Photo: Curtis Clark, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dichelostemma_capitatum_2003-02-04.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "California native.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "blue-eyed-grass-1.jpg",
    "line": "Photo: Eric Hunt, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sisyrinchium_bellum_Ring_Mtn.jpg"
   }
  ]
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
   "tt4",
   "club1"
  ],
  "note": "Mustard family. The Tortoise Table allows it in moderation; one club advises against cabbage-family greens.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bok-choy-1.jpg",
    "line": "Photo: spurekar, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bok_Choy_(49553125456).jpg"
   }
  ]
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
   "tt6",
   "aspca2"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "borage-1.jpg",
    "line": "Photo: Christian Orlandi, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Borago_officinalis_(2025).jpg"
   }
  ]
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
   "tt5",
   "azeah1"
  ],
  "note": "Unlike most ferns, rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "boston-fern-1.jpg",
    "line": "Photo: Homer Edward Price, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Boston_Fern_(2873392811).png"
   }
  ]
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
   "tt1",
   "azeah1"
  ],
  "note": "One list includes it as food, but the Tortoise Table says don't feed it; we take the cautious side.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "bottlebrush-1.jpg",
    "line": "Photo: Amos T Fairchild, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Red_bottle_brush.jpg"
   },
   {
    "f": "bottlebrush-2.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bottlebrush_or_Little_John_--_Dwarf_Callistemon.jpg"
   },
   {
    "f": "bottlebrush-3.jpg",
    "line": "Photo: Kurt Stüber [1], CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Callistemon_pallidus1.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "Thorny stems.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bougainvillea-1.jpg",
    "line": "Photo: Clint Budd, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bougainvillea_closeup.jpg"
   },
   {
    "f": "bougainvillea-2.jpg",
    "line": "Photo: Jeevan Jose, Kerala, India, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bougainvillea_glabra_at_Kadavoor.jpg"
   },
   {
    "f": "bougainvillea-3.jpg",
    "line": "Photo: Kuldeepburjbhalaike, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bougainvillea_at_Guru_Ram_Rai_Darbar,_Dehradun.jpg"
   },
   {
    "f": "bougainvillea-4.jpg",
    "line": "Photo: Andrey Butko, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B8%D0%BA%D0%B8%D1%82%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4_022.jpg"
   }
  ]
 },
 {
  "id": "boxwood",
  "name": "Boxwood",
  "scientific": "Buxus sempervirens",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr1",
   "group1",
   "tt1"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "boxwood-1.jpg",
    "line": "Photo: MPF, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Buxus_sempervirens.jpg"
   }
  ]
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
   "club1",
   "group2"
  ],
  "note": "No nutritional value for tortoises; often salty.",
  "reason": "No nutritional value; often salty",
  "warning": "",
  "photos": [
   {
    "f": "bread-and-crackers-1.jpg",
    "line": "Photo: FranHogan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fresh_made_bread_05.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bristly-oxtongue-1.jpg",
    "line": "Photo: Stefan.lefnaer, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Helminthotheca_echioides_sl67.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "brittlebush-1.jpg",
    "line": "Photo: Gentry George, U.S. Fish and Wildlife Service, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brittlebush_stands_out_on_this_hillside.jpg"
   }
  ]
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
   "rvc1",
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "broadleaf-plantain-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Grote_weegbree_bloeiwijze_Plantago_major_subsp._major.jpg"
   }
  ]
 },
 {
  "id": "broccoli",
  "name": "Broccoli",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves and florets",
  "sources": [
   "club1",
   "group2",
   "kaplan1",
   "tt4"
  ],
  "note": "Can affect the thyroid. One vet school allows it in moderation. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "broccoli-1.jpg",
    "line": "Photo: U.S. Department of Agriculture, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fire-Tuscarora_Organic_Growers_-_Broccoli_head.jpg"
   }
  ]
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
   "tt4",
   "rvc1",
   "club1"
  ],
  "note": "Sources range from moderation to avoid; can affect the thyroid.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "brussels-sprouts-1.jpg",
    "line": "Photo: Eric Hunt, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brussels_sprout_closeup.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "Rated safe by the Tortoise Table (as spear thistle).",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bull-thistle-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cirsium_vulgare_-_Keila2.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "Legume: higher protein.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "bur-clover-1.jpg",
    "line": "Photo: Ixitixel, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Medicago_polymorpha_(Flower).jpg"
   }
  ]
 },
 {
  "id": "buttercup",
  "name": "Buttercup",
  "scientific": "Ranunculus spp.",
  "category": "weed",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr1",
   "group1",
   "tt6"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "buttercup-1.jpg",
    "line": "Photo: Jason Hollinger, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ranunculus_eschscholtzii.jpg"
   },
   {
    "f": "buttercup-2.jpg",
    "line": "Photo: Hanay, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Persian_buttercup_(Ranunculus_asiaticus).jpg"
   },
   {
    "f": "buttercup-3.jpg",
    "line": "Photo: Agnes Monkelbaan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Boterbloem_(Ranunculus)_26-04-2020._(actm.)_01.jpg"
   },
   {
    "f": "buttercup-4.jpg",
    "line": "Photo: Joydeep Sen Sarma, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Heart_of_gold.JPG"
   }
  ]
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
   "tt1",
   "club1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "butterfly-bush-buddleia-1.jpg",
    "line": "Photo: Lupin, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:White_buddleia_closeup.jpg"
   },
   {
    "f": "butterfly-bush-buddleia-2.jpg",
    "line": "Photo: Fernando Losada Rodríguez, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Buddleja_davidii.001_-_A_Pontenova.jpg"
   },
   {
    "f": "butterfly-bush-buddleia-3.jpg",
    "line": "Photo: Flobbadob, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Buddleja_globosa_single_flower_cluster_closeup.jpg"
   },
   {
    "f": "butterfly-bush-buddleia-4.jpg",
    "line": "Photo: Addihockey10, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Buddleja_asiatica.jpg"
   }
  ]
 },
 {
  "id": "cabbage",
  "name": "Cabbage",
  "scientific": "Brassica oleracea",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "spar",
  "parts": "Leaves",
  "sources": [
   "club1",
   "group2",
   "kaplan1",
   "tt4"
  ],
  "note": "Can affect the thyroid. One vet school allows it in moderation. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cabbage-1.jpg",
    "line": "Photo: CharlesPoterai, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fresh_green_cabbage_heads.jpg"
   }
  ]
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
   "aspca3",
   "rt1",
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "calendula-1.jpg",
    "line": "Photo: Betty Cai, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calendula_officinalis,_pot_marigold.JPG"
   },
   {
    "f": "calendula-2.jpg",
    "line": "Photo: Ermell, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ringelblume_(Calendula_officinalis)_Bl%C3%BCte_focus_stack-20220623-RM-174041.jpg"
   },
   {
    "f": "calendula-3.jpg",
    "line": "Photo: Joydeep, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calendula_officinalis_03012015_(2).jpg"
   },
   {
    "f": "calendula-4.jpg",
    "line": "Photo: 4018 Wiki, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Indoor_Asian_breed.jpg"
   }
  ]
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
   "ucanr1",
   "aspca2"
  ],
  "note": "California native.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "california-bay-laurel-1.jpg",
    "line": "Photo: Awinch1001, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Mature_Umbellularia_californica_Huckleberry_Preserve_19.jpg"
   },
   {
    "f": "california-bay-laurel-2.jpg",
    "line": "Photo: Benny White, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Umbellularia_californica_leaves.jpg"
   },
   {
    "f": "california-bay-laurel-3.jpg",
    "line": "Photo: Awinch1001, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Umbellularia_californica_fog_moisture_Picnic_View_Ridge_Berkeley_Hills_19.jpg"
   },
   {
    "f": "california-bay-laurel-4.jpg",
    "line": "Photo: Eugene Zelenko, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Umbellularia_californica_03.jpg"
   }
  ]
 },
 {
  "id": "california-buckeye",
  "name": "California buckeye",
  "scientific": "Aesculus californica",
  "category": "garden",
  "where": "Statewide; foothills",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr1",
   "aspca2",
   "tt1"
  ],
  "note": "California native. Seeds are the most toxic. The Tortoise Table rates its relative, horse chestnut, do not feed.",
  "reason": "Seeds are toxic",
  "warning": "",
  "photos": [
   {
    "f": "california-buckeye-1.jpg",
    "line": "Photo: Eric Hunt, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aesculus_californica_Mt_Burdell.jpg"
   },
   {
    "f": "california-buckeye-2.jpg",
    "line": "Photo: Krzysztof Golik, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aesculus_californica_in_Hackfalls_Arboretum_(3).jpg"
   },
   {
    "f": "california-buckeye-3.jpg",
    "line": "Photo: Stickpen, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aesculus_californica_1.jpg"
   },
   {
    "f": "california-buckeye-4.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aesculus_californica_kz03.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "california-buckwheat-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Eriogonum_fasciculatum_5.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "california-fuchsia-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Zauschneria_flowers-500px.jpg"
   }
  ]
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
   "tt3",
   "rt1"
  ],
  "note": "California's state flower.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "california-poppy-1.jpg",
    "line": "Photo: Kaldari, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kaldari_Eschscholzia_californica_01.jpg"
   },
   {
    "f": "california-poppy-2.jpg",
    "line": "Photo: Peter D. Tillman from USA, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Three_late-seasom_poppies_(41645205590).jpg"
   },
   {
    "f": "california-poppy-3.jpg",
    "line": "Photo: Mx. Granger, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:California_poppies_open.jpg"
   },
   {
    "f": "california-poppy-4.jpg",
    "line": "Photo: Mx. Granger, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:California_poppies_closed.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "California native. Rated by its genus (Artemisia).",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "california-sagebrush-1.jpg",
    "line": "Photo: Antandrus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:ArtemisiaCalifornica-GaviotaCA.jpg"
   }
  ]
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
   "rvc1",
   "club1",
   "group3"
  ],
  "note": "California native. Rated by its genus (Vitis), like garden grape.",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "california-wild-grape-1.jpg",
    "line": "Photo: KP Botany, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Vitis_californica_with_grapes.jpg"
   }
  ]
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
   "trust1",
   "club1",
   "kaplan1"
  ],
  "note": "California native. Rated by its genus (Rosa).",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "california-wild-rose-1.jpg",
    "line": "Photo: Curtis Clark, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rosa_californica_2004-07-20.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr3",
   "group1"
  ],
  "note": "Needle-like oxalate crystals.",
  "reason": "Needle-like oxalate crystals",
  "warning": "",
  "photos": [
   {
    "f": "calla-lily-1.jpg",
    "line": "Photo: Eric Hunt, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Zantedeschia_aethiopica_-1.jpg"
   },
   {
    "f": "calla-lily-2.jpg",
    "line": "Photo: Anna.Massini, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fiore_di_Calla_-_Zantedeschia_aethiopica.jpg"
   },
   {
    "f": "calla-lily-3.jpg",
    "line": "Photo: Alvesgaspar, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Jarro-2.jpg"
   },
   {
    "f": "calla-lily-4.jpg",
    "line": "Photo: Anna.Massini, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calla_fiorita_-_Zantedeschia_aethiopica.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "camellia-1.jpg",
    "line": "Photo: junichiro aoyama from Kyoto, Japan, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Camellia_sasanqua1JAM343.jpg"
   },
   {
    "f": "camellia-2.jpg",
    "line": "Photo: BS Thurner Hof, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Camellia_hyb_Yuri_s_Yellow_Kalenderkopie.jpg"
   },
   {
    "f": "camellia-3.jpg",
    "line": "Photo: Agnes Monkelbaan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloem_van_een_Camellia_%C3%97_williamsii_'Roger_Hall'._20-04-2021_(actm.)_01.jpg"
   },
   {
    "f": "camellia-4.jpg",
    "line": "Photo: Trish Hartmann, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pink_Perfection_Camellia_flower,_Tampa,_Florida,_US.jpg"
   }
  ]
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
   "tt3",
   "club1"
  ],
  "note": "",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "campanula-bellflower-1.jpg",
    "line": "Photo: Wilson44691, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Campanula_persicifolia_Tehumardi_Saaremaa.jpg"
   },
   {
    "f": "campanula-bellflower-2.jpg",
    "line": "Photo: Robert Flogaus-Faust, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Campanula_glomerata_2_RF.jpg"
   },
   {
    "f": "campanula-bellflower-3.jpg",
    "line": "Photo: JLPC, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Campanule_FR_2012.jpg"
   },
   {
    "f": "campanula-bellflower-4.jpg",
    "line": "Photo: Agnieszka Kwiecień, Nova, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Campanula_'Pink_Octopus'_2019-06-09_05.jpg"
   }
  ]
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
   "tt6",
   "rt1"
  ],
  "note": "Rated safe by the Tortoise Table (as creeping thistle).",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "canada-thistle-1.jpg",
    "line": "Photo: Richard Bartz, Munich aka Makro Freak, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cirsium_arvense_with_Bees_Richard_Bartz.jpg"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "canna-lily-1.jpg",
    "line": "Photo: Dolon Prova, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Canna_indica_Flower.jpg"
   },
   {
    "f": "canna-lily-2.jpg",
    "line": "Photo: Giantsshoulders at English Wikipedia, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Canna_Oberon_02.JPG"
   },
   {
    "f": "canna-lily-3.jpg",
    "line": "Photo: SKsiddhartthan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Canna_Lily.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "Not a true honeysuckle.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "cape-honeysuckle-1.jpg",
    "line": "Photo: Vengolis, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tecoma_capensis_2922.jpg"
   }
  ]
 },
 {
  "id": "carnation-and-dianthus",
  "name": "Carnation and dianthus",
  "scientific": "Dianthus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "The Tortoise Table allows a little; UC and Tortoise Group list it as toxic. We take the cautious side.",
  "reason": "Listed as toxic (UC and Tortoise Group)",
  "warning": "",
  "photos": [
   {
    "f": "carnation-and-dianthus-1.jpg",
    "line": "Photo: Zeynel Cebeci, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dianthus_caryophyllus_L_(Clove_pink).JPG"
   },
   {
    "f": "carnation-and-dianthus-2.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_070730-7932_Dianthus_caryophyllus.jpg"
   },
   {
    "f": "carnation-and-dianthus-3.jpg",
    "line": "Photo: Uoaei1, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dianthus_carthusianorum_Neulengbach_20160611_01.jpg"
   },
   {
    "f": "carnation-and-dianthus-4.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dianthus_sp._4.jpg"
   }
  ]
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
   "ucanr1",
   "group1"
  ],
  "note": "Often sold as yellow jasmine.",
  "reason": "",
  "warning": "Often sold as 'yellow jasmine' but it isn't true jasmine. Never swap it for jasmine.",
  "photos": [
   {
    "f": "carolina-jessamine-1.jpg",
    "line": "Photo: KENPEI, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gelsemium_sempervirens3.jpg"
   },
   {
    "f": "carolina-jessamine-2.jpg",
    "line": "Photo: David J. Stang, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gelsemium_sempervirens_8zz.jpg"
   },
   {
    "f": "carolina-jessamine-3.jpg",
    "line": "Photo: H. Zell, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gelsemium_sempervirens_003.JPG"
   },
   {
    "f": "carolina-jessamine-4.jpg",
    "line": "Photo: H. Zell, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gelsemium_sempervirens_002.JPG"
   }
  ]
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
   "tt4"
  ],
  "note": "Sugary for Mediterranean tortoises.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "carrot-1.jpg",
    "line": "Photo: Evan-Amos, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Vegetable-Carrot-Bundle-wStalks.jpg"
   }
  ]
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
   "rvc1"
  ],
  "note": "",
  "reason": "",
  "warning": "Only use tops from store-bought or home-grown carrots. Wild carrot-like plants include deadly poison hemlock.",
  "photos": [
   {
    "f": "carrot-tops-1.jpg",
    "line": "Photo: Kumar gyan prakash, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Carrot_leaves.jpg"
   }
  ]
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
   "ucanr1",
   "group1",
   "tt1"
  ],
  "note": "Seeds are deadly.",
  "reason": "Seeds are deadly",
  "warning": "",
  "photos": [
   {
    "f": "castor-bean-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ricinus_March_2010-1.jpg"
   },
   {
    "f": "castor-bean-2.jpg",
    "line": "Photo: Krzysztof Golik, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Leaf_of_Ricinus_communis.jpg"
   },
   {
    "f": "castor-bean-3.jpg",
    "line": "Photo: Vinayaraj, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ricinus_communis_leaves_at_Kanichar.jpg"
   },
   {
    "f": "castor-bean-4.jpg",
    "line": "Photo: Aris riyanto, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arya_-_ricinus_communis_-_jarak_Pilangsari_2019_1.jpg"
   }
  ]
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
   "trust1",
   "group2",
   "club1"
  ],
  "note": "Too much protein and too little fiber.",
  "reason": "Too much protein",
  "warning": "",
  "photos": [
   {
    "f": "cat-or-dog-food-1.jpg",
    "line": "Photo: Anne Jea., CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dry_cat_food_02.jpg"
   }
  ]
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
   "trust2",
   "club1",
   "club2",
   "tt6"
  ],
  "note": "Often mistaken for dandelion. Cat's ear has solid stems; dandelion's are hollow.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cat-s-ear-1.jpg",
    "line": "Photo: Roc0ast3r, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hypochaeris_radicata_at_Game_Farm_Park_in_Auburn,_Washington.jpg"
   }
  ]
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
   "tt4",
   "rvc1"
  ],
  "note": "The Tortoise Table says don't feed it.",
  "reason": "The Tortoise Table says don't feed it",
  "warning": "",
  "photos": [
   {
    "f": "cauliflower-1.jpg",
    "line": "Photo: Coyau, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chou-fleur_02.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "ceanothus-california-lilac-1.jpg",
    "line": "Photo: unknown author, USFWS, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ceanothus_americanus.jpg"
   },
   {
    "f": "ceanothus-california-lilac-2.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Ceanothus_thyrsiflorus_'Skylark'_-_inflorescence.jpg"
   },
   {
    "f": "ceanothus-california-lilac-3.jpg",
    "line": "Photo: Theactivistuk, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ceanothus_Impressus.jpg"
   }
  ]
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
   "group2",
   "tt4"
  ],
  "note": "High in sodium.",
  "reason": "High in sodium",
  "warning": "",
  "photos": [
   {
    "f": "celery-1.jpg",
    "line": "Photo: Lombroso, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Celery_1.jpg"
   }
  ]
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
   "tt6",
   "aspca4"
  ],
  "note": "The Tortoise Table allows a little, but the ASPCA lists it toxic to pets; we take the cautious side.",
  "reason": "Listed as toxic to pets (ASPCA); no tortoise data",
  "warning": "",
  "photos": [
   {
    "f": "chamomile-1.jpg",
    "line": "Photo: Petruss, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chamaemelum_nobile_flower.JPG"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "chaparral-yucca-1.jpg",
    "line": "Photo: Antony-22, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yucca_flowers_2019.jpg"
   }
  ]
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
  "note": "California native in the mallow family, but not rated itself.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "checkerbloom-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sidalcea_malviflora_ssp_malviflora_3.jpg"
   }
  ]
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
   "club1",
   "kaplan1",
   "tt6"
  ],
  "note": "Sources rate mallow as a group, not this species specifically.",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "cheeseweed-mallow-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Malva_parviflora_small.jpg"
   }
  ]
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
  "note": "California native. Not the grocery chia (Salvia hispanica).",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "chia-california-1.jpg",
    "line": "Photo: Joshua Tree National Park, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chia_(Salvia_columbariae)%3B_Quail_Wash_(12525773563).jpg"
   }
  ]
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
   "rvc1",
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "chickweed-1.jpg",
    "line": "Photo: Kaldari, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kaldari_Stellaria_media_01.jpg"
   }
  ]
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
   "tt4"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "chili-peppers-1.jpg",
    "line": "Photo: Takeaway, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Madame_Jeanette_and_other_chillies.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "chinese-houses-1.jpg",
    "line": "Photo: Stickpen, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Collinsiaheterophylla.jpg"
   }
  ]
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
   "tt2",
   "rt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "christmas-cactus-1.jpg",
    "line": "Photo: Empereur Day, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cactus_de_no%C3%ABl_rev.jpg"
   }
  ]
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
   "ucanr1",
   "aspca5"
  ],
  "note": "Contains irritants and natural insecticides (pyrethrins).",
  "reason": "Contains irritants and natural insecticides",
  "warning": "",
  "photos": [
   {
    "f": "chrysanthemum-mums-1.jpg",
    "line": "Photo: AjayDas, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chrysanthemum_%C3%97_morifolium_Flowers_10.jpg"
   },
   {
    "f": "chrysanthemum-mums-2.jpg",
    "line": "Photo: Jebulon, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chrysanthemum_%C3%97_morifolium_Dompierre_1.jpg"
   },
   {
    "f": "chrysanthemum-mums-3.jpg",
    "line": "Photo: Shagil Muzhappilangad, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chrysanthemum_flowers,_specifically_a_variety_known_for_its_bi-color_blooms_with_striped_pink_and_white_petals.jpg"
   },
   {
    "f": "chrysanthemum-mums-4.jpg",
    "line": "Photo: Jebulon, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chrysanthemum_x_morifolium_Dompierre_3.jpg"
   }
  ]
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
   "rvc1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cilantro-1.jpg",
    "line": "Photo: HaJunkiyada, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Liat_Portal_for_Foodie_Disorder_-_Cilantro_from_San_Francisco_Farmers_Market.jpg"
   }
  ]
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
   "tt4",
   "kaplan1"
  ],
  "note": "Too acidic and sugary.",
  "reason": "Too acidic and sugary",
  "warning": "",
  "photos": [
   {
    "f": "citrus-fruit-1.jpg",
    "line": "Photo: USDA Agricultural Research Service, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ambersweet_oranges.jpg"
   }
  ]
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
   "tt1",
   "tt4",
   "kaplan1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "citrus-tree-1.jpg",
    "line": "Photo: James Steakley, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Citrus_sinensis_'Washington'_-_Navel_orange.jpg"
   },
   {
    "f": "citrus-tree-2.jpg",
    "line": "Photo: SAplants, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Citrus_hystrix_1DS-II_2-6143.jpg"
   },
   {
    "f": "citrus-tree-3.jpg",
    "line": "Photo: Ανώνυμος Βικιπαιδιστής, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Citrus_blossom.jpg"
   },
   {
    "f": "citrus-tree-4.jpg",
    "line": "Photo: Eric Polk, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Citrus_%C3%97_microcarpa_blossom_-_HLABG.png"
   }
  ]
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
   "tt3"
  ],
  "note": "California native. Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "clarkia-farewell-to-spring-1.jpg",
    "line": "Photo: Stephen Lea (seglea), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clarkia_amoena.jpg"
   },
   {
    "f": "clarkia-farewell-to-spring-2.jpg",
    "line": "Photo: MeadowLore, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clarkia_amoena_subsp._lindleyi.jpg"
   },
   {
    "f": "clarkia-farewell-to-spring-3.jpg",
    "line": "Photo: Jesse Rorabaugh, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clarkia_dudleyana_3461898.jpg"
   },
   {
    "f": "clarkia-farewell-to-spring-4.jpg",
    "line": "Photo: Dinkum, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clarkia_pulchella_-_Jardin_des_Plantes.jpg"
   }
  ]
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
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cleavers-goosegrass-1.jpg",
    "line": "Photo: Kieran Roy Powell, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Galium_aparine_Lincolnshire_2024.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "clematis-1.jpg",
    "line": "Photo: Jolly Janner, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clematis_'Nelly_Moser'.JPG"
   },
   {
    "f": "clematis-2.jpg",
    "line": "Photo: Andrew Dunn, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clematis_Montana_02.jpg"
   },
   {
    "f": "clematis-3.jpg",
    "line": "Photo: Ksd5, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clematis_macro_1.JPG"
   },
   {
    "f": "clematis-4.jpg",
    "line": "Photo: Ermell, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Clematis_'Parisienne'_2019-05-29_09-20-43_(C).jpg"
   }
  ]
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
   "ucanr1"
  ],
  "note": "California native.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "coast-redwood-1.jpg",
    "line": "Photo: Crusier, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sequoia_sempervirens_OB_Wroc%C5%82aw_2025_3.jpg"
   },
   {
    "f": "coast-redwood-2.jpg",
    "line": "Photo: Naotake Murayama from Los Altos, CA, USA, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sequoia_sempervirens_foliage_Mendocino.jpg"
   },
   {
    "f": "coast-redwood-3.jpg",
    "line": "Photo: KENPEI, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sequoia_sempervirens4.jpg"
   },
   {
    "f": "coast-redwood-4.jpg",
    "line": "Photo: Ilya Katsnelson from Mountain View, USA, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sequoia_sempervirens_foliage_cones_Mount_Tamalpais_2.jpg"
   }
  ]
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
   "ucanr1"
  ],
  "note": "California native.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "coffeeberry-1.jpg",
    "line": "Photo: Brofri, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:CoffeeBerryFruit.jpg"
   }
  ]
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
   "kaplan1",
   "group2"
  ],
  "note": "Can affect the thyroid. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "collard-greens-1.jpg",
    "line": "Photo: Evan-Amos, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Collard-Greens-Bundle.jpg"
   }
  ]
 },
 {
  "id": "columbine",
  "name": "Columbine",
  "scientific": "Aquilegia spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "columbine-1.jpg",
    "line": "Photo: Python (Peter Rühr), CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Wald-Akelei.JPG"
   },
   {
    "f": "columbine-2.jpg",
    "line": "Photo: Agnieszka Kwiecień, Nova, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aquilegia_'Nora_Barlow'_Orlik_miesza%C5%84cowy_2010-05-29_03.jpg"
   },
   {
    "f": "columbine-3.jpg",
    "line": "Photo: MtBotany, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aquilegia_coerulea_var._coerulea_01.jpg"
   },
   {
    "f": "columbine-4.jpg",
    "line": "Photo: Harald Süpfle, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Schwarzviolette_Akelei_(Aquilegia_atrata)_02.jpg"
   }
  ]
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
   "tt6",
   "club1"
  ],
  "note": "One keeper club lists soft comfrey; the Tortoise Table says don't feed it.",
  "reason": "The Tortoise Table says don't feed it",
  "warning": "",
  "photos": [
   {
    "f": "comfrey-1.jpg",
    "line": "Photo: Robert Flogaus-Faust, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Symphytum_officinale_RF.jpg"
   }
  ]
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
   "club2",
   "club1",
   "rt1",
   "tt6"
  ],
  "note": "Same species as radicchio.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "common-chicory-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cichorium_intybus-alvesgaspar1.jpg"
   }
  ]
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
   "tt6",
   "azeah1"
  ],
  "note": "One list includes it as food, but the Tortoise Table says don't feed it; we take the cautious side.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "common-knotweed-1.jpg",
    "line": "Photo: Dalgial, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Polygonum_aviculare_4.JPG"
   }
  ]
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
   "rt1",
   "tt6"
  ],
  "note": "Sources disagree: one lists it as food, but the Tortoise Table says don't feed it. It's also high in oxalates, so we take the cautious side.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "common-purslane-1.jpg",
    "line": "Photo: Tyler Ekholm, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Common_Purslane,_United_States_imported_from_iNaturalist_photo_541953905.jpg"
   }
  ]
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
   "rvc1",
   "trust1",
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "common-sow-thistle-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sonchus_February_2008-1.jpg"
   }
  ]
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
   "tt3",
   "rt1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "coneflower-echinacea-1.jpg",
    "line": "Photo: Ulf Eliasson, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:EchinaceaPurpureaMaxima1a.UME.JPG"
   },
   {
    "f": "coneflower-echinacea-2.jpg",
    "line": "Photo: Diego Delso, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Echinacea_purpurea,_Jard%C3%ADn_Bot%C3%A1nico,_M%C3%BAnich,_Alemania,_2013-09-08,_DD_01.jpg"
   },
   {
    "f": "coneflower-echinacea-3.jpg",
    "line": "Photo: Neilarmstrong101, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fasciation_on_an_Echinacea_purpurea.jpg"
   },
   {
    "f": "coneflower-echinacea-4.jpg",
    "line": "Photo: W. Bulach, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:00_5002_Purpur-Sonnenhut_(Echinacea_purpurea).jpg"
   }
  ]
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
   "tt3",
   "azeah1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "coreopsis-1.jpg",
    "line": "Photo: docentjoyce, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Coreopsisgigantea.jpg"
   },
   {
    "f": "coreopsis-2.jpg",
    "line": "Photo: PK2Morgan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lanceleaf_Coreopsis_flowers.jpg"
   },
   {
    "f": "coreopsis-3.jpg",
    "line": "Photo: Bob Peterson from North Palm Beach, Florida, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Florida_tickseed_(Coreopsis_floridana)_(6462812285).jpg"
   },
   {
    "f": "coreopsis-4.jpg",
    "line": "Photo: Kaldari, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Coreopsis_P8022391.jpg"
   }
  ]
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
   "group2",
   "club1",
   "tt4"
  ],
  "note": "Too much sugar and starch.",
  "reason": "Too much sugar and starch",
  "warning": "",
  "photos": [
   {
    "f": "corn-1.jpg",
    "line": "Photo: Dalia fathallah, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow_corn.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "corn-spurry-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gewone_spurrie_plant_Spergula_arvensis.jpg"
   }
  ]
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
   "tt3",
   "tt6",
   "club1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cornflower-bachelor-s-button-1.jpg",
    "line": "Photo: Orikrin1998, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Centaurea_cyanus_flower_001.jpg"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cosmos-1.jpg",
    "line": "Photo: Wilfredor, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cosmos_bipinnatus_in_Jardin_universitaire_Roger-Van_den_Hende,_Quebec_city,_Quebec,_Canada.jpg"
   },
   {
    "f": "cosmos-2.jpg",
    "line": "Photo: Kryesmin, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cosmos_bipinnatus_(flowers)_01.jpg"
   },
   {
    "f": "cosmos-3.jpg",
    "line": "Photo: Zuhairali, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cosmos_sulphureus_with_bee_Mallika5.jpg"
   },
   {
    "f": "cosmos-4.jpg",
    "line": "Photo: Uoaei1, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cosmos_bipinnatus_Hirschstetten_20240720.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "cotoneaster-1.jpg",
    "line": "Photo: MPF, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cotoneaster_frigidus.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "coyote-brush-1.jpg",
    "line": "Photo: Franco Folini from San Francisco, USA, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Coyote_brush_(Baccharis_pilularis)_(6989163087).jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "crape-myrtle-1.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Lagerstroemia_indica_-_inflorescences.jpg"
   },
   {
    "f": "crape-myrtle-2.jpg",
    "line": "Photo: Stockstill, Tiffany, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:CrapeMyrtleLouisiana.jpg"
   },
   {
    "f": "crape-myrtle-3.jpg",
    "line": "Photo: Naryiitmandi, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Crepe_Myrtle_in_Mandi,_Himachal_Pradesh.jpg"
   },
   {
    "f": "crape-myrtle-4.jpg",
    "line": "Photo: Vinayaraj, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lagerstroemia_speciosa_27.JPG"
   },
   {
    "f": "crape-myrtle-5.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_080716-9502_Lagerstroemia_indica.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cream-cups-1.jpg",
    "line": "Photo: Linda Tanner, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Platystemon_californicus,_Shell_Creek_Road.jpg"
   }
  ]
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
   "ivis.org1",
   "aspca2"
  ],
  "note": "High in soluble oxalates.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "creeping-woodsorrel-1.jpg",
    "line": "Photo: Norio Nomura, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Oxalis_corniculata23.jpg"
   }
  ]
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
   "club1",
   "kaplan1",
   "tt4"
  ],
  "note": "Mostly water, little nutrition.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cucumber-1.jpg",
    "line": "Photo: Stephen Ausmus, USDA ARS, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:ARS_cucumber.jpg"
   }
  ]
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
   "mdc.mo.gov1",
   "tortoise-protection-group.org.uk1",
   "tt6"
  ],
  "note": "High in oxalic acid. One vet school lists dock as food; we take the cautious side.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "curly-dock-1.jpg",
    "line": "Photo: Olivier Pichard, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rumex_crispus_vallee-de-grace-amiens_80_12062007_3.jpg"
   }
  ]
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
   "tt6",
   "club1"
  ],
  "note": "A wild cranesbill.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "cutleaf-geranium-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Geranium_February_2008-1.jpg"
   }
  ]
 },
 {
  "id": "cyclamen",
  "name": "Cyclamen",
  "scientific": "Cyclamen spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "cyclamen-1.jpg",
    "line": "Photo: Stefan.lefnaer, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cyclamen_purpurascens_sl3.jpg"
   },
   {
    "f": "cyclamen-2.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cyclamen_coum_(d.j.b.)_02.jpg"
   },
   {
    "f": "cyclamen-3.jpg",
    "line": "Photo: Robert Flogaus-Faust, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cyclamen_purpurascens_RF.jpg"
   },
   {
    "f": "cyclamen-4.jpg",
    "line": "Photo: masaki ikeda, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cyclamen_persicum_Mill_08DEC06.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr2",
   "group1",
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "daffodil-1.jpg",
    "line": "Photo: Tigerente, improved by Olei, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Narcissus_poeticus_subsp._radiiflorus.1658.jpg"
   },
   {
    "f": "daffodil-2.jpg",
    "line": "Photo: AnRo0002, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:20140212Narcissus_pseudonarcissus5.jpg"
   },
   {
    "f": "daffodil-3.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Narcissus_'Ice_Follies'_02.jpg"
   },
   {
    "f": "daffodil-4.jpg",
    "line": "Photo: John O'Neill, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow_daffodils_-_floriade_canberra.jpg"
   }
  ]
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
   "tt3",
   "aspca2"
  ],
  "note": "The Tortoise Table allows it in moderation, but the ASPCA lists it toxic to pets; we take the cautious side.",
  "reason": "Listed as toxic to pets (ASPCA); no tortoise data",
  "warning": "",
  "photos": [
   {
    "f": "dahlia-1.jpg",
    "line": "Photo: BRPever, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Garden_Dahlia_flower_001.jpg"
   },
   {
    "f": "dahlia-2.jpg",
    "line": "Photo: Marktee1, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:BRACKENRIDGE_BALLERINAweb.jpg"
   },
   {
    "f": "dahlia-3.jpg",
    "line": "Photo: Aleksandrs Balodis, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dahlia_'Biedermannsdorf'_01.JPG"
   },
   {
    "f": "dahlia-4.jpg",
    "line": "Photo: Marktee1, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:3265_ALOHA_(BRIDGE_VIEW).jpg"
   }
  ]
 },
 {
  "id": "dandelion",
  "name": "Dandelion",
  "scientific": "Taraxacum officinale",
  "category": "weed",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Leaves and flowers",
  "sources": [
   "rvc1",
   "trust1",
   "club1",
   "group3"
  ],
  "note": "Young tortoises: sources disagree. One club warns against large amounts for very young tortoises; another calls it important for hatchlings. The Tortoise Table rates it feed in moderation.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "dandelion-1.jpg",
    "line": "Photo: Sankar 1995, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Common_Dandelion_Yellow_Flower_-_Ooty_Botanical_Garden.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "daphne-1.jpg",
    "line": "Photo: Herby talk thyme, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Daphne_Odora_flower.jpg"
   }
  ]
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
   "tt3",
   "rt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "daylily-1.jpg",
    "line": "Photo: Doronenko, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hemerocallis_lilioasphodelus.jpg"
   },
   {
    "f": "daylily-2.jpg",
    "line": "Photo: Steve Karg, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Orange_Daylily.jpg"
   },
   {
    "f": "daylily-3.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hemerocallis_sp._(day_lily)_(Newark,_Ohio,_USA)_13.jpg"
   },
   {
    "f": "daylily-4.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Daylily_--_Hemerocallis_'Wayside_King_Royale'.jpg"
   }
  ]
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
   "ucanr1"
  ],
  "note": "California native. Deadly.",
  "reason": "Deadly",
  "warning": "Deadly. Looks like wild onion and blue dicks. Never feed wild bulbs or grass-like plants you haven't identified.",
  "photos": [
   {
    "f": "death-camas-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Zigadenus_paniculatus_9369.JPG"
   },
   {
    "f": "death-camas-2.jpg",
    "line": "Photo: Craig Martin, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Toxicoscordion_venenosum_-_Craig_Martin_01.jpg"
   },
   {
    "f": "death-camas-3.jpg",
    "line": "Photo: brewbooks from near Seattle, USA, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Zigadenus_venenosus_-_Flickr_-_brewbooks.jpg"
   },
   {
    "f": "death-camas-4.jpg",
    "line": "Photo: Walter Siegmund, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Zigadenus_venenosus_16940.JPG"
   }
  ]
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
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "delphinium-and-larkspur-1.jpg",
    "line": "Photo: Ermell, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Delphinium_elatum-20200616-RM-080831.jpg"
   },
   {
    "f": "delphinium-and-larkspur-2.jpg",
    "line": "Photo: Darorcilmir, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Delph_1.jpg"
   },
   {
    "f": "delphinium-and-larkspur-3.jpg",
    "line": "Photo: Reinhold Möller Ermell, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rittersporn_(Delphinium_elatum)_mit_Wassertropfen-20160612-RM-123819.jpg"
   },
   {
    "f": "delphinium-and-larkspur-4.jpg",
    "line": "Photo: USFWS - Pacific Region, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:USFWS_delphinium_menziesii_(23748428721).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "desert-dandelion-1.jpg",
    "line": "Photo: Sberardi, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Desert_dandelion.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "Also called kidney weed. The Tortoise Table rates it safe; UC lists it as a skin irritant.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "dichondra-1.jpg",
    "line": "Photo: Harry Rose from South West Rocks, Australia, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dichondra_repens_flower1_(8427835587).jpg"
   }
  ]
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
   "tt4"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "dill-1.jpg",
    "line": "Photo: JLPC, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aneth_FR_2012.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "douglas-fir-1.jpg",
    "line": "Photo: Allyzilla, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Douglas_Fir_Female_Cone_and_Needles.jpg"
   },
   {
    "f": "douglas-fir-2.jpg",
    "line": "Photo: Sten Porse, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pseudotsuga-menziesii-needles-buds-2010-02-11.jpg"
   },
   {
    "f": "douglas-fir-3.jpg",
    "line": "Photo: Walter Siegmund, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pseudotsuga_menziesii_28226.JPG"
   },
   {
    "f": "douglas-fir-4.jpg",
    "line": "Photo: USDA-NRCS PLANTS Database, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pseudotsuga_menziesii_glauca_cones.jpg"
   }
  ]
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
   "ucanr1",
   "group1",
   "ucanr2"
  ],
  "note": "Needle-like oxalate crystals.",
  "reason": "Needle-like oxalate crystals",
  "warning": "",
  "photos": [
   {
    "f": "dumb-cane-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dieffenbachia_oerstedii_kz2.jpg"
   }
  ]
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
   "tt2",
   "azeah1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "echeveria-hens-and-chicks-1.jpg",
    "line": "Photo: Eria Wei, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Echeveria_elegans_-_1.jpg"
   }
  ]
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
   "tt4",
   "ucanr1"
  ],
  "note": "Nightshade family.",
  "reason": "Nightshade family",
  "warning": "",
  "photos": [
   {
    "f": "eggplant-1.jpg",
    "line": "Photo: Joydeep, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Solanum_melongena_24_08_2012_(1).JPG"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "elderberry-1.jpg",
    "line": "Photo: Edal Anton Lefterov, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sambucus-berries.jpg"
   },
   {
    "f": "elderberry-2.jpg",
    "line": "Photo: Sebastian Martin Dicke, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sambucus_nigra_leaves_in_Muttental.jpg"
   },
   {
    "f": "elderberry-3.jpg",
    "line": "Photo: Jonathan Billinger, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Elder_flowers,_Sambucus_nigra_-_geograph.org.uk_-_5006459.jpg"
   },
   {
    "f": "elderberry-4.jpg",
    "line": "Photo: Andrikkos, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sambucus_nigra_flowers_1.JPG"
   }
  ]
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
   "tt1",
   "group3"
  ],
  "note": "",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "elm-1.jpg",
    "line": "Photo: Ptelea, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:East_Coker_elm,_2.jpg"
   },
   {
    "f": "elm-2.jpg",
    "line": "Photo: Tom elm, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Leaves_of_Ulmus_laevis_-_Oxford_Terrace,_Edinburgh.jpg"
   },
   {
    "f": "elm-3.jpg",
    "line": "Photo: Judy Gallagher, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:American_Elm_-_Ulmus_americana,_Occoquan_Regional_Park,_Lorton,_Virginia.jpg"
   },
   {
    "f": "elm-4.jpg",
    "line": "Photo: Ayotte, Gilles, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ulmus_americana_15-p.bot-ulmu.amer-39.jpg"
   }
  ]
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
   "nessexotic.com1",
   "kaplan1",
   "tt4"
  ],
  "note": "The best store-bought green, but weeds are better.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "endive-escarole-1.jpg",
    "line": "Photo: Oceancetaceen - Alice Chodura, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG"
   }
  ]
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
   "tt3",
   "tt6",
   "ucanr1"
  ],
  "note": "Once a common UK tortoise food, but the Tortoise Table now says don't feed it.",
  "reason": "The Tortoise Table says don't feed it",
  "warning": "",
  "photos": [
   {
    "f": "english-daisy-1.jpg",
    "line": "Photo: Stefan.lefnaer, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bellis_perennis_sl1.jpg"
   }
  ]
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
   "ucanr1",
   "aspca6",
   "group1",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "english-ivy-1.jpg",
    "line": "Photo: kallerna, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hedera_helix_Dover.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "english-laurel-1.jpg",
    "line": "Photo: Karduelis, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Karayemi%C5%9F-8.jpg"
   },
   {
    "f": "english-laurel-2.jpg",
    "line": "Photo: Chris Light, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Prunus_laurocerasus_7531.jpg"
   },
   {
    "f": "english-laurel-3.jpg",
    "line": "Photo: Pmau, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Prunus_laurocerasus,_Besan%C3%A7on_-_img_33278.jpg"
   },
   {
    "f": "english-laurel-4.jpg",
    "line": "Photo: Fritz Geller-Grimm, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Prunus_laurocerasus_fg01.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "escallonia-1.jpg",
    "line": "Photo: Sten Porse, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Escallonia-virgata-close.jpg"
   }
  ]
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
   "ucanr1",
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "eucalyptus-1.jpg",
    "line": "Photo: Ethel Aardvark, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Eucalyptus_tereticornis_flowers,_capsules,_buds_and_foliage.jpeg"
   },
   {
    "f": "eucalyptus-2.jpg",
    "line": "Photo: Forest and Kim Starr, CC BY 3.0 us, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr-100401-4145-Eucalyptus_globulus-leaves-Polipoli-Maui_(24659234329).jpg"
   },
   {
    "f": "eucalyptus-3.jpg",
    "line": "Photo: Geekstreet, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Eucalyptus_robusta_-_flowers.jpg"
   },
   {
    "f": "eucalyptus-4.jpg",
    "line": "Photo: John Robert McPherson, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Eucalyptus_sideroxylon_flowers,_Marchant_Park_Aspley_IMGP4722.jpg"
   }
  ]
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
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "Milky sap irritates.",
  "reason": "Irritating sap",
  "warning": "",
  "photos": [
   {
    "f": "euphorbia-spurges-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Euphorbia_February_2008-2.jpg"
   }
  ]
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
   "club1",
   "group3",
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "evening-primrose-1.jpg",
    "line": "Photo: George Chernilevsky, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Oenothera_rubricaulis_2014_G1.jpg"
   },
   {
    "f": "evening-primrose-2.jpg",
    "line": "Photo: Jerzy Opioła, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Oenothera_macrocarpa_a1.JPG"
   },
   {
    "f": "evening-primrose-3.jpg",
    "line": "Photo: Kirisame, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Oenothera_rosea.JPG"
   },
   {
    "f": "evening-primrose-4.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Oenothera_caespitosa_var_marginata_4.jpg"
   }
  ]
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
   "tt5"
  ],
  "note": "Most ferns aren't safe. Boston fern is the exception.",
  "reason": "Most ferns aren't safe",
  "warning": "",
  "photos": [
   {
    "f": "ferns-and-bracken-1.jpg",
    "line": "Photo: Suntooooth, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pteridium_aquilinum_(northern_bracken_fern)_2024-06-25.jpg"
   }
  ]
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
   "tt5",
   "ucanr1",
   "rt1"
  ],
  "note": "UC lists it only as a skin irritant.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "fescue-1.jpg",
    "line": "Photo: USDA-NRCS PLANTS Database, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lolium-pratense1web.jpg"
   }
  ]
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
   "ucanr4"
  ],
  "note": "Contains liver toxins (pyrrolizidine alkaloids).",
  "reason": "Contains liver toxins (pyrrolizidine alkaloids)",
  "warning": "",
  "photos": [
   {
    "f": "fiddleneck-1.jpg",
    "line": "Photo: Tom Hilton, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Amsinckia_eastwoodiae.jpg"
   }
  ]
 },
 {
  "id": "field-bindweed",
  "name": "Field bindweed",
  "scientific": "Convolvulus arvensis",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "rvc1",
   "club1",
   "sigmaaldrich.com1",
   "tt6"
  ],
  "note": "Keeper groups list it, but a lab study found liver damage in mice fed only bindweed. Occasional only.",
  "reason": "A lab study found liver damage in mice",
  "warning": "",
  "photos": [
   {
    "f": "field-bindweed-1.jpg",
    "line": "Photo: Krzysztof Golik, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Convolvulus_arvensis_in_Aveyron_(2).jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "field-madder-1.jpg",
    "line": "Photo: Strobilomyces, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sherardia_arvensis_050731.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "Milky sap irritates.",
  "reason": "Irritating sap",
  "warning": "",
  "photos": [
   {
    "f": "fig-tree-1.jpg",
    "line": "Photo: Stefan Thiesen, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ripe_fig_fruit_on_tree_(Ficus_Carica)_in_Southern_France.JPG"
   },
   {
    "f": "fig-tree-2.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_carica_July_2026-1.jpg"
   },
   {
    "f": "fig-tree-3.jpg",
    "line": "Photo: Daniel Capilla, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_carica_leaves_and_fruits.jpg"
   },
   {
    "f": "fig-tree-4.jpg",
    "line": "Photo: Tangopaso, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_carica_bonsai_A_D150915_fig.jpg"
   }
  ]
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
   "ucanr1",
   "group1",
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "firethorn-pyracantha-1.jpg",
    "line": "Photo: Laitr Keiows, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Red_pommes_of_Firethorn_(Pyracantha).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "five-spot-1.jpg",
    "line": "Photo: Dreammoose, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nemophila_maculata3.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "California native. Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "flowering-currant-1.jpg",
    "line": "Photo: Mark Robinson from Williton, UK, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pink_Flowering_Currant_closeup,_Ribes_sanguineum.jpg"
   }
  ]
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
   "tt1",
   "rt1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "flowering-maple-abutilon-1.jpg",
    "line": "Photo: Jsfouche, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Redvein_Abutilon.jpg"
   },
   {
    "f": "flowering-maple-abutilon-2.jpg",
    "line": "Photo: Dinesh Valke from Thane, India, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Abutilon_indicum_(4149186385).jpg"
   },
   {
    "f": "flowering-maple-abutilon-3.jpg",
    "line": "Photo: Rhododendrites, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Abutilon_Biltmore_Ballgown_(80891).jpg"
   }
  ]
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
   "tt5"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "fountain-grass-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_040217-0077_Pennisetum_setaceum.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "four-o-clock-1.jpg",
    "line": "Photo: Khalid Mahmood at English Wikipedia, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gul-Abas-4-O'clock_plant.JPG"
   }
  ]
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
   "ucanr1",
   "aspca7",
   "group1",
   "tt6",
   "tt3"
  ],
  "note": "Contains heart toxins.",
  "reason": "Contains heart toxins",
  "warning": "",
  "photos": [
   {
    "f": "foxglove-1.jpg",
    "line": "Photo: Jörg Hempel, CC BY-SA 3.0 de, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Digitalis_purpurea_LC0101.jpg"
   },
   {
    "f": "foxglove-2.jpg",
    "line": "Photo: Llywelyn2000, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bysedd_y_cwn_ger_Solfach_-_Foxgloves_near_Solva,_Sir_Benfro_Pembrokeshire,_Wales_10.jpg"
   },
   {
    "f": "foxglove-3.jpg",
    "line": "Photo: Felix Gertz, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Digitalis_purpurea_alba_01-Juni.jpg"
   },
   {
    "f": "foxglove-4.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Foxglove_-_Digitalis_purpurea.jpg"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "freesia-1.jpg",
    "line": "Photo: Jeantosti, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Freesia.jpg"
   },
   {
    "f": "freesia-2.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Flower_March_2010-2.jpg"
   },
   {
    "f": "freesia-3.jpg",
    "line": "Photo: Pethan, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Anomatheca_laxa01.JPG"
   },
   {
    "f": "freesia-4.jpg",
    "line": "Photo: Andrew Gillespie, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Freesia_verrucosa_97692625.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "Not the same as pot marigold (calendula), which is safe.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "french-marigold-1.jpg",
    "line": "Photo: Ezhuttukari, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tagetes_erecta_chendumalli_chedi.jpg"
   },
   {
    "f": "french-marigold-2.jpg",
    "line": "Photo: George Chernilevsky, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:French_marigold_garden_2009_G1.jpg"
   },
   {
    "f": "french-marigold-3.jpg",
    "line": "Photo: Ramon FVelasquez, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Marigoldjf.JPG"
   },
   {
    "f": "french-marigold-4.jpg",
    "line": "Photo: Sabina Bajracharya, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tagetes_Erecta-Flower_04.jpg"
   }
  ]
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
   "tt4",
   "nessexotic.com1"
  ],
  "note": "A curly endive.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "frisee-1.jpg",
    "line": "Photo: Oceancetaceen - Alice Chodura, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cichorium_endivia_-_Botanischer_Garten_Mainz_IMG_5453.JPG"
   }
  ]
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
   "trust1",
   "club1"
  ],
  "note": "Too much sugar for Mediterranean tortoises.",
  "reason": "Too sugary",
  "warning": "",
  "photos": [
   {
    "f": "fruit-strawberries-apples-etc-1.jpg",
    "line": "Photo: روتانا, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fruit_Platter-_Seasonal_Fruits.jpg"
   }
  ]
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
   "club1",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "fuchsia-1.jpg",
    "line": "Photo: Gold Bernard, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brincos_De_Princesa.jpg"
   },
   {
    "f": "fuchsia-2.jpg",
    "line": "Photo: O'Dea, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fuchsia_2008.jpg"
   },
   {
    "f": "fuchsia-3.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fuchsia_'Violetkoningin'_02.jpg"
   },
   {
    "f": "fuchsia-4.jpg",
    "line": "Photo: 松岡明芳, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fuchsia_flower%E3%83%95%E3%82%AF%E3%82%B7%E3%82%A2%E3%81%AE%E8%8A%B17137619.jpg"
   }
  ]
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
   "tt4"
  ],
  "note": "Mustard family.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "garden-cress-1.jpg",
    "line": "Photo: Salicyna, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lepidium_sativum_2019-05-04_2820.jpg"
   }
  ]
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
   "kaplan2",
   "group3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "garden-geranium-1.jpg",
    "line": "Photo: Andrew massyn, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pelargonium_cucullatum_Contour_Path_Rhodes_Mem.JPG"
   },
   {
    "f": "garden-geranium-2.jpg",
    "line": "Photo: Gothika, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Angeleyes_Randy.jpg"
   },
   {
    "f": "garden-geranium-3.jpg",
    "line": "Photo: Summi, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Geraniaceae.jpg"
   },
   {
    "f": "garden-geranium-4.jpg",
    "line": "Photo: Mister rf, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:01_Pelargonium_flower_close-up.jpg"
   }
  ]
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
   "tt1",
   "group1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "gardenia-1.jpg",
    "line": "Photo: Adriel anv00, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gardenia_jasminoides_flower_Argentina.jpg"
   }
  ]
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
   "group3",
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "gazania-1.jpg",
    "line": "Photo: Raffi Kojian, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gardenology.org-IMG_0043_rbgm10dec.jpg"
   },
   {
    "f": "gazania-2.jpg",
    "line": "Photo: HitroMilanese, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gazania_Rigens_Yellow_White_(1).jpg"
   },
   {
    "f": "gazania-3.jpg",
    "line": "Photo: Krzysztof Golik, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gazania_rigens_cultivar_in_Conques.jpg"
   },
   {
    "f": "gazania-4.jpg",
    "line": "Photo: Diego Delso, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gazania_(Gazania_rigens),_jard%C3%ADn_del_molino,_Sierra_de_San_Felipe,_Set%C3%BAbal,_Portugal,_2012-05-11,_DD_03.JPG"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "gerbera-daisy-1.jpg",
    "line": "Photo: Alexey Yakovlev, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gerbera_jamesonii_(Asteraceae).jpg"
   },
   {
    "f": "gerbera-daisy-2.jpg",
    "line": "Photo: LadaPash, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:%D0%93%D0%B5%D1%80%D0%B1%D0%B5%D1%80%D0%B0_%D0%94%D0%B6%D0%B5%D0%BC%D1%81%D0%BE%D0%BD%D0%B0_(Lat._Gerbera_Jamesonii).jpg"
   },
   {
    "f": "gerbera-daisy-3.jpg",
    "line": "Photo: Bernard DUPONT from FRANCE, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Barberton_Daisy_(Gerbera_jamesonii)_(32372962303).jpg"
   },
   {
    "f": "gerbera-daisy-4.jpg",
    "line": "Photo: Gitartha.bordoloi, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Barberton_daisy_(Gerbera_jamesonii)_in_Jorhat,_Assam.jpg"
   }
  ]
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
   "tt5"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "giant-reed-1.jpg",
    "line": "Photo: Ryan Hodnett, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Giant_Reed_(Canna_Comune)_(Arundo_donax)_-_Rome,_Italy_2024-03-02.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "gladiolus-1.jpg",
    "line": "Photo: Jean-Pol GRANDMONT, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:0_Gladiolus_italicus_-_Samo%C3%ABns_(1).JPG"
   },
   {
    "f": "gladiolus-2.jpg",
    "line": "Photo: 3268zauber, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gartengladiole_apricot.JPG"
   },
   {
    "f": "gladiolus-3.jpg",
    "line": "Photo: Timothy A. Gonsalves, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gladiolus_dalenii_flower_Ooty_Jul25_A7CR_06187-224_zsp.jpg"
   },
   {
    "f": "gladiolus-4.jpg",
    "line": "Photo: Suyash.dwivedi, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow_Gladiolus_Flower_in_Bhopal,_October_2025_(95732).jpg"
   }
  ]
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
   "tt4",
   "rt1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "globe-artichoke-1.jpg",
    "line": "Photo: Jamain, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Artichoke_J1.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "globe-gilia-1.jpg",
    "line": "Photo: parande, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Gilia_capitata.JPG"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "golden-yarrow-1.jpg",
    "line": "Photo: Curtis Clark, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Eriophyllum_confertiflorum_2004-04-07.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "goldfields-1.jpg",
    "line": "Photo: Cliff Hutson, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lasthenia_glabrata_1.JPG"
   }
  ]
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
   "rvc1",
   "club1",
   "group3",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "grape-leaves-1.jpg",
    "line": "Photo: BerndtF, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cabernet_Sauvignon_Gaillac.jpg"
   }
  ]
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
   "ucanr1",
   "tt3"
  ],
  "note": "The Tortoise Table rates its relative, Chinese lantern, do not feed.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "groundcherry-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_061225-2955_Physalis_peruviana.jpg"
   }
  ]
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
   "aspca8",
   "inchem.org1",
   "tt6"
  ],
  "note": "Contains liver toxins that can build up over time. One UK vet school lists it as food; we rate it toxic.",
  "reason": "Contains liver toxins that can build up over time. One UK vet school lists it as food; we rate it toxic",
  "warning": "",
  "photos": [
   {
    "f": "groundsel-1.jpg",
    "line": "Photo: carol, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Common_Groundsel-first_fruits.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "gumplant-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Grindelia_integrifolia_3109.JPG"
   }
  ]
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
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "hairy-bittercress-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kleine_veldkers_Cardamine_hirsuta_plant.jpg"
   }
  ]
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
   "tt3",
   "tt6",
   "club1"
  ],
  "note": "Not the same as the common garden geranium (Pelargonium).",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "hardy-geranium-cranesbill-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Geranium_February_2008-1.jpg"
   },
   {
    "f": "hardy-geranium-cranesbill-2.jpg",
    "line": "Photo: OliveiraTP, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Geranium_(probably_'Johnson's_Blue').jpg"
   },
   {
    "f": "hardy-geranium-cranesbill-3.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Geranium_wallichianum_'Crystal_Lake'_06.JPG"
   },
   {
    "f": "hardy-geranium-cranesbill-4.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Geranium_x_oxonianum_01.JPG"
   }
  ]
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
   "tt2"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "haworthia-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Haworthia_cymbiformis_1.jpg"
   }
  ]
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
   "tt2",
   "rt1"
  ],
  "note": "Rated safe by the Tortoise Table. The second source rates its plant family, not this species.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "heartleaf-iceplant-1.jpg",
    "line": "Photo: KENPEI, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Aptenia_cordifolia1.jpg"
   }
  ]
 },
 {
  "id": "heavenly-bamboo-nandina",
  "name": "Heavenly bamboo (nandina)",
  "scientific": "Nandina domestica",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "group1",
   "aspca2"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "heavenly-bamboo-nandina-1.jpg",
    "line": "Photo: KENPEI, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nandina_domestica_cv_Otafukunante1.jpg"
   }
  ]
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
   "tt1",
   "club1"
  ],
  "note": "",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "hebe-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Veronica_speciosa_kz2.jpg"
   },
   {
    "f": "hebe-2.jpg",
    "line": "Photo: judy dean, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hebe_bush_seen_at_the_Botanic_Gardens_in_Birmingham.jpg"
   }
  ]
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
   "tt6",
   "trust2"
  ],
  "note": "Mustard family: rotate.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "hedge-mustard-and-london-rocket-1.jpg",
    "line": "Photo: TeunSpaans, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sisymbrium_altissimum_plant.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "heliotrope-1.jpg",
    "line": "Photo: Derek Ramsey (Ram-Man), CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Heliotropium_arborescens_'Mini_Marine'_Heliotrope_Flower_2500px.jpg"
   },
   {
    "f": "heliotrope-2.jpg",
    "line": "Photo: David J. Stang, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Heliotropium_arborescens_Marine_2zz.jpg"
   },
   {
    "f": "heliotrope-3.jpg",
    "line": "Photo: Kurt Stüber, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Heliotropium_arborescens1.jpg"
   }
  ]
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
   "trust2",
   "club1",
   "tt6"
  ],
  "note": "Dead nettle is a staple; the Tortoise Table says feed henbit sparingly.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "henbit-and-dead-nettle-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lamium_purpureum_-_verev_imin%C3%B5ges_Keilas.jpg"
   }
  ]
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
   "rvc2",
   "club1",
   "group3",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "hibiscus-1.jpg",
    "line": "Photo: Andy / Andrew Fogg from near Cambridge, UK, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hibiscus_Brilliant.jpg"
   },
   {
    "f": "hibiscus-2.jpg",
    "line": "Photo: Tubifex, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:3935_-_Chinesischer_Roseneibisch_(Hibiscus_rosa-sinensis).JPG"
   },
   {
    "f": "hibiscus-3.jpg",
    "line": "Photo: Diego Delso, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cayena_(Hibiscus_rosa-sinensis),_jard%C3%ADn_del_molino,_Sierra_de_San_Felipe,_Set%C3%BAbal,_Portugal,_2012-05-11,_DD_02.JPG"
   },
   {
    "f": "hibiscus-4.jpg",
    "line": "Photo: Nvineeth, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hibiscus_petal.jpg"
   }
  ]
 },
 {
  "id": "holly",
  "name": "Holly",
  "scientific": "Ilex spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "holly-1.jpg",
    "line": "Photo: Jürgen Howaldt, CC BY-SA 2.0 de, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ilex-aquifolium_(Europaeische_Stechpalme-1).jpg"
   },
   {
    "f": "holly-2.jpg",
    "line": "Photo: Michel Langeveld, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ilex_aquifolium_172179490.jpg"
   },
   {
    "f": "holly-3.jpg",
    "line": "Photo: Peter Andersen, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ilex_aquifolium_163250782.jpg"
   },
   {
    "f": "holly-4.jpg",
    "line": "Photo: Michel Langeveld, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ilex_aquifolium_145607515.jpg"
   }
  ]
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
   "club2",
   "group3",
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "hollyhock-1.jpg",
    "line": "Photo: PJDespa, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Alcea_rosea_purple.jpg"
   },
   {
    "f": "hollyhock-2.jpg",
    "line": "Photo: Follavoine (follavoine.net), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Alcea_rosea01.jpg"
   },
   {
    "f": "hollyhock-3.jpg",
    "line": "Photo: Muffet, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hollyhock_1r.jpg"
   },
   {
    "f": "hollyhock-4.jpg",
    "line": "Photo: Isidre blanc, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:ALCEA_ROSEA_-_TOR%C3%80_-_IB-737_(Malva_reial).jpg"
   }
  ]
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
   "rvc1",
   "trust2",
   "club1",
   "tt1"
  ],
  "note": "Tortoise Trust notes Hermann's tortoises prefer it.",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "honeysuckle-1.jpg",
    "line": "Photo: Meneerke bloem, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lonicera_caprifolium001.jpg"
   },
   {
    "f": "honeysuckle-2.jpg",
    "line": "Photo: Qwert1234, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lonicera_sempervirens_5.JPG"
   },
   {
    "f": "honeysuckle-3.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloemknoppen_van_een_Kamperfoelie_(Lonicera)_19-07-2020_(d.j.b.)_01.jpg"
   },
   {
    "f": "honeysuckle-4.jpg",
    "line": "Photo: Dandarmkd, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lonicera_-_%D0%91%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%BA%D0%B0_%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%BD%D0%B0_%D0%A1%D0%BA%D0%BE%D0%BF%D1%98%D0%B5_03.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "horseweed-and-fleabane-1.jpg",
    "line": "Photo: SAplants, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Conyza_podocephala_1DS-II_4-2778.jpg"
   }
  ]
 },
 {
  "id": "hosta",
  "name": "Hosta",
  "scientific": "Hosta spp.",
  "category": "garden",
  "where": "NorCal; shade gardens",
  "rating": "avoid",
  "parts": "",
  "sources": [
   "tt3",
   "club1"
  ],
  "note": "The Tortoise Table allows it, but the ASPCA lists it toxic to pets; we take the cautious side.",
  "reason": "Listed as toxic to pets (saponins)",
  "warning": "",
  "photos": [
   {
    "f": "hosta-1.jpg",
    "line": "Photo: Qwertzy2, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hosta_Bressingham_Blue.JPG"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "hummingbird-sage-1.jpg",
    "line": "Photo: Antandrus, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hummingbird_sage.jpg"
   }
  ]
 },
 {
  "id": "hyacinth",
  "name": "Hyacinth",
  "scientific": "Hyacinthus orientalis",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "hyacinth-1.jpg",
    "line": "Photo: Plantman, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hyacinth_flower.jpg"
   },
   {
    "f": "hyacinth-2.jpg",
    "line": "Photo: Agnieszka Kwiecień, Nova, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hyacinthus_orientalis_'Aqua'_Hiacynt_wschodni_2023-04-16_02.jpg"
   },
   {
    "f": "hyacinth-3.jpg",
    "line": "Photo: Gogerr, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pink_Hyacinthus_orientalis_in_Ontario.jpg"
   },
   {
    "f": "hyacinth-4.jpg",
    "line": "Photo: Bryn Armstrong, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hyacinthus_orientalis_118473647.jpg"
   }
  ]
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
   "ucanr1",
   "group1",
   "tt3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "hydrangea-1.jpg",
    "line": "Photo: Jacob Malcom, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hydrangea_arborescens_139866012.jpg"
   },
   {
    "f": "hydrangea-2.jpg",
    "line": "Photo: GhePeU, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Blue_Hydrangea.jpg"
   },
   {
    "f": "hydrangea-3.jpg",
    "line": "Photo: Joanne Bergenwall Aw, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hortensiapink.JPG"
   },
   {
    "f": "hydrangea-4.jpg",
    "line": "Photo: Jesus Dos Santos, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hydrangea-08-10-08.JPG"
   }
  ]
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
   "tt2",
   "rt1"
  ],
  "note": "Also called Hottentot fig. The second source rates its plant family, not this species.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "ice-plant-1.jpg",
    "line": "Photo: Andreiflorea993, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hottentot_Fig_-_Flowering.jpg"
   },
   {
    "f": "ice-plant-2.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Carpobrotus_edulis_kz10.jpg"
   },
   {
    "f": "ice-plant-3.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Carpobrotus_edulis_kz06.jpg"
   }
  ]
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
   "trust1",
   "club1",
   "kaplan1"
  ],
  "note": "Almost no nutrition or fiber.",
  "reason": "Almost no nutrition or fiber",
  "warning": "",
  "photos": [
   {
    "f": "iceberg-lettuce-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Iceberg_lettuce_(IJssla_krop).jpg"
   }
  ]
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
   "tt3"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "impatiens-busy-lizzie-1.jpg",
    "line": "Photo: Thegreenj, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Impatienswalleriana.jpg"
   },
   {
    "f": "impatiens-busy-lizzie-2.jpg",
    "line": "Photo: Donarreiskoffer, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Impatiens_walleriana.JPG"
   },
   {
    "f": "impatiens-busy-lizzie-3.jpg",
    "line": "Photo: M108t, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Impatiens_walleriana_purple_flower_in_Ishigaki,_Okinawa.jpg"
   },
   {
    "f": "impatiens-busy-lizzie-4.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_070906-8884_Impatiens_walleriana.jpg"
   }
  ]
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
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "indian-hawthorn-1.jpg",
    "line": "Photo: Dave Whitinger, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Indian_Hawthorn,_India_Hawthorn_(Rhaphiolepis_indica).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "indian-paintbrush-1.jpg",
    "line": "Photo: Michael Tidwell, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Castilleja_integra_-_Michael_Tidwell_01.jpg"
   },
   {
    "f": "indian-paintbrush-2.jpg",
    "line": "Photo: Kollibri1969, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Desert_Paintbrush_(Castilleja_chromosa)_near_Paonia,_Colorado,_USA,_with_Mt._Lamborn_in_background.jpg"
   },
   {
    "f": "indian-paintbrush-3.jpg",
    "line": "Photo: Mattsjc, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow_Indian_Paintbrush_in_Mima_Mounds_Natural_Area_Preserve_01.jpg"
   }
  ]
 },
 {
  "id": "iris",
  "name": "Iris",
  "scientific": "Iris spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr1",
   "group1",
   "tt3"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "iris-1.jpg",
    "line": "Photo: Lufe2514, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Iris_germanica_flower.jpg"
   },
   {
    "f": "iris-2.jpg",
    "line": "Photo: Kritzolina, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Iris_im_botanischen_Garten_M%C3%BCnchen-Nymphenburg_29.jpg"
   },
   {
    "f": "iris-3.jpg",
    "line": "Photo: Kritzolina, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Iris_im_botanischen_Garten_M%C3%BCnchen-Nymphenburg_26.jpg"
   },
   {
    "f": "iris-4.jpg",
    "line": "Photo: Ermell, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Verschiedenfarbige_Schwertlilie_(Iris_versicolor)-20200603-RM-100257.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "jacaranda-1.jpg",
    "line": "Photo: O Tupinólogo, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Jacarand%C3%A1-mimoso_(do_tupi_%C3%AEakarand%C3%A1)_-_54942878507_02.jpg"
   },
   {
    "f": "jacaranda-2.jpg",
    "line": "Photo: Anna Anichkova, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Jacaranda_mimosifolia_5334.jpg"
   },
   {
    "f": "jacaranda-3.jpg",
    "line": "Photo: Forest and Kim Starr, CC BY 3.0 us, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr-110331-4400-Jacaranda_mimosifolia-leaves-Shibuya_Farm_Kula-Maui_(24962289972).jpg"
   },
   {
    "f": "jacaranda-4.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_010419-0080_Jacaranda_mimosifolia.jpg"
   }
  ]
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
   "ucanr1",
   "tt2"
  ],
  "note": "The Tortoise Table allows it in moderation, but UC lists it as mildly toxic; we take the cautious side.",
  "reason": "Mildly toxic",
  "warning": "",
  "photos": [
   {
    "f": "jade-plant-1.jpg",
    "line": "Photo: sannse, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Crassula_ovata_700.jpg"
   }
  ]
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
   "tt3",
   "aspca9"
  ],
  "note": "Non-toxic to pets. Don't confuse it with Carolina jessamine, which is toxic.",
  "reason": "",
  "warning": "Don't confuse with Carolina jessamine (often sold as 'yellow jasmine'), which is toxic.",
  "photos": [
   {
    "f": "jasmine-1.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Common_Jasmine.jpg"
   }
  ]
 },
 {
  "id": "juniper",
  "name": "Juniper",
  "scientific": "Juniperus spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr1",
   "group1",
   "tt1"
  ],
  "note": "",
  "reason": "On published tortoise toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "juniper-1.jpg",
    "line": "Photo: Fcb981, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Juniperus_osteosperma_1.jpg"
   },
   {
    "f": "juniper-2.jpg",
    "line": "Photo: Juan Carlos from Tàrbena, Alicante - Alcublas, Valencia, Spain, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Juniperus_oxycedrus_foliage_detail.jpg"
   },
   {
    "f": "juniper-3.jpg",
    "line": "Photo: Gogerr, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cones_of_Juniperus_chinensis,_Guelph,_Ontario_1.jpg"
   },
   {
    "f": "juniper-4.jpg",
    "line": "Photo: Wojciech Przybylski from Bytom, Polska, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Juniperus_phoenicea_foliage_cones.jpg"
   }
  ]
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
   "tt2",
   "aspca2"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "kalanchoe-1.jpg",
    "line": "Photo: বাক্যবাগীশ, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kalanchoe_blossfeldiana_3.jpg"
   },
   {
    "f": "kalanchoe-2.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Kalanchoe_blossfeldiana_-_inflorescence.jpg"
   },
   {
    "f": "kalanchoe-3.jpg",
    "line": "Photo: Sabalo22, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kalanchoe_blossfeldiana_(Florist_Kalanchoe).jpg"
   },
   {
    "f": "kalanchoe-4.jpg",
    "line": "Photo: Sabina Bajracharya, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kalanchoe_blossfeldiana_Plant_07.jpg"
   }
  ]
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
   "kaplan1",
   "group2",
   "tt4"
  ],
  "note": "Can affect the thyroid. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "kale-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Boerenkool.jpg"
   }
  ]
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
   "tt5",
   "azeah1"
  ],
  "note": "Rated at the genus level.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "kikuyu-grass-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_020911-0028_Pennisetum_clandestinum.jpg"
   }
  ]
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
   "tt4",
   "club1",
   "group2"
  ],
  "note": "Cabbage family: can affect the thyroid.",
  "reason": "Can affect the thyroid",
  "warning": "",
  "photos": [
   {
    "f": "kohlrabi-1.jpg",
    "line": "Photo: Unknown, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brassica_oleracea_var._gongylodes_(kohlrabi).jpg"
   }
  ]
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
   "club1",
   "tt6",
   "tt4"
  ],
  "note": "Also called corn salad.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "lamb-s-lettuce-mache-1.jpg",
    "line": "Photo: Schwäbin, CC BY-SA 3.0 de, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ackersalat02.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "Also called fat-hen.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "lambsquarters-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Melganzenvoet_bloeiwijze_Chenopodium_album.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr3",
   "group1",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "lantana-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:LantanaFlowerLeaves.jpg"
   },
   {
    "f": "lantana-2.jpg",
    "line": "Photo: Zeynel Cebeci, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lantana_camara_-_Mine_%C3%A7al%C4%B1s%C4%B1_01.jpg"
   },
   {
    "f": "lantana-3.jpg",
    "line": "Photo: PEAK99, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:%E0%B8%9C%E0%B8%81%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%87_Lantana_camara_L_(1).jpg"
   },
   {
    "f": "lantana-4.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lantana_August_2007-1.jpg"
   }
  ]
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
   "tt1",
   "club1"
  ],
  "note": "",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "lavatera-tree-mallow-1.jpg",
    "line": "Photo: Luis Fernández García, CC BY-SA 2.5 es, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Malva-sylvestris-20070430-1.jpg"
   }
  ]
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
   "tt1",
   "aspca2"
  ],
  "note": "The Tortoise Table allows it in moderation, but the ASPCA lists it toxic to pets; we take the cautious side.",
  "reason": "Listed as toxic to pets (ASPCA); no tortoise data",
  "warning": "",
  "photos": [
   {
    "f": "lavender-1.jpg",
    "line": "Photo: Валерія Матвєєва, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lavandula_angustifolia_june.jpg"
   },
   {
    "f": "lavender-2.jpg",
    "line": "Photo: Tyler C., CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lavender_Flower_Closeup_2.jpg"
   },
   {
    "f": "lavender-3.jpg",
    "line": "Photo: Juan Emilio Prades Bel, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Campo_sembrado_de_Lavandula_(Espa%C3%B1a).jpg"
   },
   {
    "f": "lavender-4.jpg",
    "line": "Photo: Xemenendura, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lavandula_stoechas_en_Ceuta.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "lemonade-berry-1.jpg",
    "line": "Photo: Oabjf34Q (talk), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lemonadeberry2.jpg"
   }
  ]
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
   "tt1",
   "azeah1"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "lilac-1.jpg",
    "line": "Photo: Jjron, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lilac_Flower%26Leaves,_SC,_Vic,_13.10.2007.jpg"
   },
   {
    "f": "lilac-2.jpg",
    "line": "Photo: GT1976, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:2018-05-13_(139)_Syringa_vulgaris_(common_lilac)_at_Bichlh%C3%A4usl_in_Frankenfels,_Austria.jpg"
   },
   {
    "f": "lilac-3.jpg",
    "line": "Photo: Helge Klaus Rieder, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:FliederblueteH2a.jpg"
   },
   {
    "f": "lilac-4.jpg",
    "line": "Photo: ToxicFlame427, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lilac_Spring_Bloom_-_Butterfield,_Minnesota.jpg"
   }
  ]
 },
 {
  "id": "lily-true-lilies",
  "name": "Lily (true lilies)",
  "scientific": "Lilium spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt3",
   "ucanr1"
  ],
  "note": "Very dangerous to cats too.",
  "reason": "Very dangerous to cats; lilies are on toxic-plant lists",
  "warning": "",
  "photos": [
   {
    "f": "lily-true-lilies-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lilium_candidum_1.jpg"
   },
   {
    "f": "lily-true-lilies-2.jpg",
    "line": "Photo: Derek Ramsey (Ram-Man), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lily_Lilium_'Citronella'_Flower.jpg"
   },
   {
    "f": "lily-true-lilies-3.jpg",
    "line": "Photo: Ernst Gügel, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lil_chalcedonicum_01EB_Griechenland_Hrisomiglia_17_07_01.jpg"
   },
   {
    "f": "lily-true-lilies-4.jpg",
    "line": "Photo: Offnfopt, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dwarf_Asiatic_Lily_Hybrid-Lilium_'Matrix'-Offnfopt_4635.JPG"
   }
  ]
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
   "ucanr1",
   "lsu.edu1",
   "group1",
   "tt3"
  ],
  "note": "Mildly toxic unless eaten in quantity.",
  "reason": "Mildly toxic",
  "warning": "",
  "photos": [
   {
    "f": "lily-of-the-nile-1.jpg",
    "line": "Photo: Kurt Stüber, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Agapanthus_africanus1.jpg"
   },
   {
    "f": "lily-of-the-nile-2.jpg",
    "line": "Photo: Victorrocha, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Agapanthus_Prebloom.jpg"
   },
   {
    "f": "lily-of-the-nile-3.jpg",
    "line": "Photo: Dietmar Rabich, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Agapanthus_--_2025_--_8392.jpg"
   }
  ]
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
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "Contains heart toxins.",
  "reason": "Contains heart toxins",
  "warning": "",
  "photos": [
   {
    "f": "lily-of-the-valley-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Convallaria_majalis_inflorescence_-_Keila.jpg"
   },
   {
    "f": "lily-of-the-valley-2.jpg",
    "line": "Photo: Agnes Monkelbaan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lelietje-van-dalen_of_meiklokje_(Convallaria_majalis)._14-05-2021_(actm.)_02.jpg"
   },
   {
    "f": "lily-of-the-valley-3.jpg",
    "line": "Photo: Alex Abair, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Convallaria_majalis_378348204.jpg"
   },
   {
    "f": "lily-of-the-valley-4.jpg",
    "line": "Photo: Markus Krieger, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Convallaria_majalis_128594429.jpg"
   }
  ]
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
   "tt3",
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "lobelia-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lobelia_erinus_kz01.jpg"
   },
   {
    "f": "lobelia-2.jpg",
    "line": "Photo: Stephencdickson, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lobelia_erinus_in_an_alpine_border.jpg"
   },
   {
    "f": "lobelia-3.jpg",
    "line": "Photo: Maciej Opaliński, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lobelia_flower.jpg"
   },
   {
    "f": "lobelia-4.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lobelia_tupa_inflorescence.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr3",
   "group1",
   "tt3"
  ],
  "note": "Common California wildflower.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "lupine-1.jpg",
    "line": "Photo: Cheongweei Gan, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lupinus_polyphyllus_526960203.jpg"
   },
   {
    "f": "lupine-2.jpg",
    "line": "Photo: Mr. Tickle, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Flores_de_lupino_(Ushuaia).jpg"
   },
   {
    "f": "lupine-3.jpg",
    "line": "Photo: Khootkheng, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lupins,_Lake_Tekapo,_NZ.jpg"
   },
   {
    "f": "lupine-4.jpg",
    "line": "Photo: Cori Haisler, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lupins_in_Pacific_Northwest_Washington.png"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "magnolia-1.jpg",
    "line": "Photo: William (Ned) Friedman, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Magnolia_sieboldii_flower_1.jpg"
   },
   {
    "f": "magnolia-2.jpg",
    "line": "Photo: James F., CC BY 1.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Magnolia_%C3%97_soulangeana_blossom.jpg"
   },
   {
    "f": "magnolia-3.jpg",
    "line": "Photo: Roy Lindman, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:MagnoliaTreeInFullGlory.jpg"
   },
   {
    "f": "magnolia-4.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_080103-1424_Magnolia_grandiflora.jpg"
   },
   {
    "f": "magnolia-5.jpg",
    "line": "Photo: Luis Fernández García, CC BY-SA 2.5 es, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Magnolia-grandiflora-fruto.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "mandevilla-1.jpg",
    "line": "Photo: Calimo, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Mandevilla_sanderi_red_1.jpg"
   },
   {
    "f": "mandevilla-2.jpg",
    "line": "Photo: Stalinsunnykvj, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:White_dipladenia.jpg"
   },
   {
    "f": "mandevilla-3.jpg",
    "line": "Photo: M. Rehemtulla, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:PinkMandevilla.jpg"
   },
   {
    "f": "mandevilla-4.jpg",
    "line": "Photo: KENPEI, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Mandevilla_cv_Best_Red1.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "manzanita-1.jpg",
    "line": "Photo: Walter Siegmund, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arctostaphylos_patula_08154.JPG"
   },
   {
    "f": "manzanita-2.jpg",
    "line": "Photo: Dean Wm. Taylor, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arctostaphylos_montereyensis_backlit_DSC_4501_(25593554293).jpg"
   },
   {
    "f": "manzanita-3.jpg",
    "line": "Photo: Pete Klosterman, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arctostaphylos_pallida.jpg"
   },
   {
    "f": "manzanita-4.jpg",
    "line": "Photo: Pete Klosterman, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arctostaphylos_tomentosa_ssp._crustacea.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "The Tortoise Table allows a little, but UC lists it as mildly toxic; we take the cautious side.",
  "reason": "Mildly toxic",
  "warning": "",
  "photos": [
   {
    "f": "marguerite-daisy-1.jpg",
    "line": "Photo: Dryas, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Argyranthemum_frutescens_subsp._canariae.JPG"
   },
   {
    "f": "marguerite-daisy-2.jpg",
    "line": "Photo: Alphama, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Argyranthemum_frutescens_'Pomponette_Pink'.jpg"
   },
   {
    "f": "marguerite-daisy-3.jpg",
    "line": "Photo: George E. Koronaios, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Marguerite_Daisy_(Argyranthemum_Frutescens)_in_Athens_on_April_30,_2023.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "mariposa-lily-1.jpg",
    "line": "Photo: C.Maylett, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sego_lily_cm.jpg"
   },
   {
    "f": "mariposa-lily-2.jpg",
    "line": "Photo: JerryFriedman, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calochortus_aureus_flora1.jpg"
   },
   {
    "f": "mariposa-lily-3.jpg",
    "line": "Photo: J Brew, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calochortus_macrocarpus.jpg"
   },
   {
    "f": "mariposa-lily-4.jpg",
    "line": "Photo: Tom Hilton, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calochortus_elegans_-_Flickr._004.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "matilija-poppy-1.jpg",
    "line": "Photo: Acabashi, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:'Romneya_coulteri'_Coulter's_Matilija_poppy_in_Walled_Garden_of_Parham_House,_West_Sussex,_England.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "mayweed-chamomile-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Anthemis_cotula_kz01.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "meadowfoam-1.jpg",
    "line": "Photo: Kurt Stüber, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Limnanthes_douglasii1.jpg"
   }
  ]
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
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "mexican-fan-palm-1.jpg",
    "line": "Photo: Emőke Dénes, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arecales_-_Washingtonia_robusta_-_1.jpg"
   },
   {
    "f": "mexican-fan-palm-2.jpg",
    "line": "Photo: Kmtextor, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Palm_leaf_washingtonia_robusta.jpg"
   },
   {
    "f": "mexican-fan-palm-3.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_010914-0077_Washingtonia_robusta.jpg"
   },
   {
    "f": "mexican-fan-palm-4.jpg",
    "line": "Photo: rbelshee, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:2023-03-18_Washingtonia_robusta,_Comond%C3%BA,_Baja_California_Sur,_Mexico.jpg"
   }
  ]
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
   "rvc1",
   "tt6"
  ],
  "note": "Remove the spines first.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "milk-thistle-1.jpg",
    "line": "Photo: Matankic, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Milk_thistle_%E2%80%93_Silybum_marianum_%E2%80%93_Be'er_Ya'akov.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "milkweed-1.jpg",
    "line": "Photo: R. A. Nonenmacher, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Danaus_plexippus_on_Asclepias_incarnata_4999.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "miner-s-lettuce-1.jpg",
    "line": "Photo: Robert Flogaus-Faust, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Claytonia_perfoliata_2_RF.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "mistletoe-1.jpg",
    "line": "Photo: Stickpen, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Phoradendroncalifornicum2.jpg"
   }
  ]
 },
 {
  "id": "morning-glory",
  "name": "Morning glory",
  "scientific": "Ipomoea spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "ucanr1",
   "tt3"
  ],
  "note": "Seeds are highly toxic. One keeper group lists it as a plant to grow; we take the cautious side.",
  "reason": "Seeds are toxic",
  "warning": "",
  "photos": [
   {
    "f": "morning-glory-1.jpg",
    "line": "Photo: A. J. T. Johnsingh, WWF-India and NCF, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ipomoea_pes-tigridis,_Corbett_TR,_September_2013._AJT_Johnsingh._DSCN8264.jpg"
   },
   {
    "f": "morning-glory-2.jpg",
    "line": "Photo: DkEgy, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:MorningGlory5.jpg"
   },
   {
    "f": "morning-glory-3.jpg",
    "line": "Photo: Minja Klarić, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pink_Ipomoea_flower_in_Stolac_-_Bosnia_and_Herzegovina_(2026)-bs.jpg"
   },
   {
    "f": "morning-glory-4.jpg",
    "line": "Photo: Horacio Cambeiro, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ipomoea_Cairica_in_Jard%C3%ADn_Am%C3%A9rica,_Misiones,_Argentina.jpg"
   }
  ]
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
   "tt3",
   "aspca2",
   "group3"
  ],
  "note": "One US keeper group lists it as a plant to grow, but the Tortoise Table says don't feed it and the ASPCA lists it toxic to pets.",
  "reason": "Tortoise Table says don't feed it; listed as toxic to pets",
  "warning": "",
  "photos": [
   {
    "f": "moss-rose-1.jpg",
    "line": "Photo: Anshik Kumar Tiwari, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:PortulacaGrandiflora.jpg"
   },
   {
    "f": "moss-rose-2.jpg",
    "line": "Photo: Rodrigo123456, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Portulaca.jpg"
   },
   {
    "f": "moss-rose-3.jpg",
    "line": "Photo: Joydeep, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Portulaca_grandiflora,_Burdwan,_31032014_(2).jpg"
   },
   {
    "f": "moss-rose-4.jpg",
    "line": "Photo: Joydeep, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Portulaca_grandiflora,_Burdwan,_31032014_(1).jpg"
   }
  ]
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
   "club1",
   "group3",
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "mulberry-leaves-1.jpg",
    "line": "Photo: Emőke Dénes, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rosales_-_Morus_alba_-_3.jpg"
   },
   {
    "f": "mulberry-leaves-2.jpg",
    "line": "Photo: Jaknouse, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Morus_alba-leaves.jpg"
   },
   {
    "f": "mulberry-leaves-3.jpg",
    "line": "Photo: Andre Abrahami, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Morus_alba_fruits_and_leaves.jpg"
   },
   {
    "f": "mulberry-leaves-4.jpg",
    "line": "Photo: gailhampshire from Cradley, Malvern, U.K, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:White_Mulberry,_Morus_alba,_so_sweet._(45647751371).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "mule-s-ears-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Wyethia_helenioides_2.jpg"
   }
  ]
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
   "kaplan1",
   "furrycritter.com1"
  ],
  "note": "Mustard family: can affect the thyroid. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "mustard-greens-1.jpg",
    "line": "Photo: Dalgial, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brassica_juncea_var._juncea.JPG"
   }
  ]
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
   "ucanr1"
  ],
  "note": "Common coastal hedge.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "myoporum-1.jpg",
    "line": "Photo: Júlio Reis, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Myoporum_laetum.jpg"
   }
  ]
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
   "tt4",
   "club1"
  ],
  "note": "Mustard family. The Tortoise Table allows it in moderation; one club advises against cabbage-family greens.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "napa-cabbage-1.jpg",
    "line": "Photo: Bayartai, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Napa_cabbages.png"
   }
  ]
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
   "rvc1",
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "narrowleaf-plantain-1.jpg",
    "line": "Photo: sannse, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ribwort_600.jpg"
   }
  ]
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
   "rvc2",
   "kaplan1",
   "tt3"
  ],
  "note": "Peppery mustard oils.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "nasturtium-1.jpg",
    "line": "Photo: George Chernilevsky, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tropaeolum_majus_2005_G1.jpg"
   },
   {
    "f": "nasturtium-2.jpg",
    "line": "Photo: Peter D. Tillman from USA, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nasturtium_%40_Cass_House_Garden,_Cayucos.jpg"
   },
   {
    "f": "nasturtium-3.jpg",
    "line": "Photo: Balise42, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow_Tropaeolum_Maju_with_leaves.jpg"
   }
  ]
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
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "natal-plum-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_010820-0009_Carissa_macrocarpa.jpg"
   }
  ]
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
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "new-zealand-flax-1.jpg",
    "line": "Photo: Kahuroa, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Phormium_tenax_Piha02.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "oak-acorns-and-leaves-1.jpg",
    "line": "Photo: Awinch1001, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Quercus_douglasii_Leaves_%26_acorns_Stanford_Dish_Park_6.jpg"
   },
   {
    "f": "oak-acorns-and-leaves-2.jpg",
    "line": "Photo: MPF, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Quercus_agrifolia_foliage.jpg"
   },
   {
    "f": "oak-acorns-and-leaves-3.jpg",
    "line": "Photo: Eugene Zelenko, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Quercus_agrifolia-10.jpg"
   },
   {
    "f": "oak-acorns-and-leaves-4.jpg",
    "line": "Photo: John Morgan from Walnut Creek, CA, USA, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Quercus_agrifolia_acorns_Mount_Diablo.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "ocean-spray-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Holodiscus_discolor_3007.JPG"
   }
  ]
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
   "tt4"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "okra-1.jpg",
    "line": "Photo: Earth100, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hong_Kong_Okra_Aug_25_2012.JPG"
   }
  ]
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
   "ucanr1",
   "ucanr2",
   "group3",
   "group1",
   "tt1"
  ],
  "note": "Every part is highly toxic.",
  "reason": "Every part is highly toxic",
  "warning": "",
  "photos": [
   {
    "f": "oleander-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nerium_oleander_flowers_leaves.jpg"
   },
   {
    "f": "oleander-2.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nerium_Oleander_(yellow,_unusual--may_be_Sue_Hawley_Oakes).jpg"
   },
   {
    "f": "oleander-3.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nerium_oleander_September_2007-1.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "olive-tree-1.jpg",
    "line": "Photo: Abu Shawka, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Olea_europaea_cuspidata-africana_Cape_Town.JPG"
   },
   {
    "f": "olive-tree-2.jpg",
    "line": "Photo: Javier martin, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Olea_europaea_FruitsandLeaves_2009December13_DehesaBoyaldePuertollano.jpg"
   },
   {
    "f": "olive-tree-3.jpg",
    "line": "Photo: Nefronus, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Olea_europaea_flowers_Mattinata.jpg"
   },
   {
    "f": "olive-tree-4.jpg",
    "line": "Photo: Forest and Kim Starr, CC BY 3.0 us, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr-180919-0979-Olea_europaea_subsp_europaea-flowers_leaves-Skyline_Zipline_Crater_Rd-Maui_(30876018697).jpg"
   }
  ]
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
   "tt4",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "onion-garlic-chives-and-leeks-1.jpg",
    "line": "Photo: Thomas Pusch, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ursa_ajlo_1.jpg"
   }
  ]
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
   "ucanr1",
   "group1"
  ],
  "note": "Includes silverleaf and hairy nightshade.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "other-nightshades-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_020323-0062_Solanum_seaforthianum.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "owl-s-clover-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Castilleja_exserta_8031.JPG"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "oxeye-daisy-1.jpg",
    "line": "Photo: Derek Ramsey (Ram-Man), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Leucanthemum_vulgare_'Filigran'_Flower_2200px.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "pacific-aster-1.jpg",
    "line": "Photo: John Rusk from Berkeley, CA, United States of America, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:J20170824-0034%E2%80%94Symphyotrichum_chilense%E2%80%94RPBG%E2%80%94DxO_(36851458535)_(cropped).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "pacific-madrone-1.jpg",
    "line": "Photo: Awinch1001, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arbutus_menziesii_Mount_Tam_Blithedale_Ridge_Road_6.jpg"
   },
   {
    "f": "pacific-madrone-2.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arbutus_menziesii_(Pacific_madrone_tree)_(near_Calistoga,_California,_USA)_1_(49095163082).jpg"
   },
   {
    "f": "pacific-madrone-3.jpg",
    "line": "Photo: Eugene Zelenko, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arbutus_menziesii-2.jpg"
   },
   {
    "f": "pacific-madrone-4.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Arbutus_menziesii_(Pacific_madrone_tree)_(near_Calistoga,_California,_USA)_4_(49094974721).jpg"
   }
  ]
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
   "tt5",
   "ucanr1"
  ],
  "note": "The Tortoise Table rates it safe, but UC lists it as highly toxic; we take the cautious side.",
  "reason": "Sources disagree on toxicity",
  "warning": "",
  "photos": [
   {
    "f": "pampas-grass-1.jpg",
    "line": "Photo: JLPC, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Herbe_Pampa_FR_2008.jpg"
   }
  ]
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
   "club1",
   "group3"
  ],
  "note": "The seeds are mildly toxic.",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "pansy-viola-1.jpg",
    "line": "Photo: Noumenon, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pansy_viola_x_wittrockiana_blue.jpg"
   },
   {
    "f": "pansy-viola-2.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Viola_sp._(garden_pansy)_68.jpg"
   },
   {
    "f": "pansy-viola-3.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Viola_sp._(garden_pansies)_41.jpg"
   },
   {
    "f": "pansy-viola-4.jpg",
    "line": "Photo: James St. John, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Viola_sp._(garden_pansies)_15.jpg"
   }
  ]
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
   "rvc1",
   "kaplan1"
  ],
  "note": "Contains oxalates.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "parsley-1.jpg",
    "line": "Photo: H. Zell, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Petroselinum_crispum_003.JPG"
   }
  ]
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
   "tt4",
   "rvc1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "parsnip-1.jpg",
    "line": "Photo: Jeffery Martin, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Parsnips_with_greens.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "passion-flower-1.jpg",
    "line": "Photo: Oliver P. Quillia, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:OQ_Passion_flower.jpg"
   },
   {
    "f": "passion-flower-2.jpg",
    "line": "Photo: Sripathiharsha, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:PassiFloraRed.jpg"
   },
   {
    "f": "passion-flower-3.jpg",
    "line": "Photo: PumpkinSky, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Passion_Vine_NBG_LR.jpg"
   }
  ]
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
   "ucanr1",
   "aspca2"
  ],
  "note": "Needle-like oxalate crystals.",
  "reason": "Needle-like oxalate crystals",
  "warning": "",
  "photos": [
   {
    "f": "peace-lily-1.jpg",
    "line": "Photo: JJ Harrison, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Spathiphyllum_cochlearispathum_RTBG.jpg"
   }
  ]
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
   "trust1",
   "club1",
   "tt4"
  ],
  "note": "Too much protein: linked to kidney problems. The Tortoise Table allows green beans in moderation but not peas; we take the cautious side.",
  "reason": "Too much protein",
  "warning": "",
  "photos": [
   {
    "f": "peas-and-green-beans-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Doperwt_rijserwt_bloemen_Pisum_sativum.jpg"
   }
  ]
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
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "pepper-tree-1.jpg",
    "line": "Photo: Squeezeweasel at en.wikipedia, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Schinus_Molle.jpg"
   },
   {
    "f": "pepper-tree-2.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_070313-5613_Schinus_molle.jpg"
   },
   {
    "f": "pepper-tree-3.jpg",
    "line": "Photo: Daderot, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Schinus_molle_-_Jard%C3%ADn_Bot%C3%A1nico_de_Barcelona_-_Barcelona,_Spain_-_DSC09305.JPG"
   },
   {
    "f": "pepper-tree-4.jpg",
    "line": "Photo: Milvus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pink_Peppercorns_(Schinus_terebinthifolius).JPG"
   }
  ]
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
   "ucanr1",
   "ucanr3",
   "group1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "periwinkle-vinca-1.jpg",
    "line": "Photo: Sleddog116 at English Wikipedia, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Vinca_major_closeup.jpg"
   },
   {
    "f": "periwinkle-vinca-2.jpg",
    "line": "Photo: Humoyun Mehridinov, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Vinca_L.jpg"
   },
   {
    "f": "periwinkle-vinca-3.jpg",
    "line": "Photo: Morinimnas, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Purple_flower_of_the_Vinca_major.jpg"
   },
   {
    "f": "periwinkle-vinca-4.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kleine_maagdenpalm_(Vinca_minor)_01.JPG"
   }
  ]
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
   "tt6",
   "club1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "persian-speedwell-1.jpg",
    "line": "Photo: Strobilomyces, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Veronica_persica_060403Fw.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "peruvian-lily-alstroemeria-1.jpg",
    "line": "Photo: JJ Harrison, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Alstroemeria_aurantiaca.jpg"
   },
   {
    "f": "peruvian-lily-alstroemeria-2.jpg",
    "line": "Photo: Dick Culbert from Gibsons, B.C., Canada, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Alstoemeria_ligtu_splendens_(8383790249).jpg"
   },
   {
    "f": "peruvian-lily-alstroemeria-3.jpg",
    "line": "Photo: Agnieszka Kwiecień, Nova, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Alstroemeria_'Katina'_Alstroemeria_2023-07-30_03.jpg"
   },
   {
    "f": "peruvian-lily-alstroemeria-4.jpg",
    "line": "Photo: Agnes Monkelbaan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloem_van_een_Alstroemeria_aurea._03-07-2021_(actm.).jpg"
   }
  ]
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
   "kaplan1",
   "group3"
  ],
  "note": "A treat, not a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "petunia-1.jpg",
    "line": "Photo: Rocksmoker 007, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:PetuniaFlower.JPG"
   },
   {
    "f": "petunia-2.jpg",
    "line": "Photo: Aftabbanoori, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Petunia-10.jpg"
   },
   {
    "f": "petunia-3.jpg",
    "line": "Photo: Jerzy Opioła, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Petunia_x_hybrida_a2.JPG"
   },
   {
    "f": "petunia-4.jpg",
    "line": "Photo: George E. Koronaios, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Petunia_x_Atkinsiana_on_May_11,_2023.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "phacelia-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Phacelia_tanacetifolia_7735.JPG"
   },
   {
    "f": "phacelia-2.jpg",
    "line": "Photo: Healthy Yards, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Phacelia_tanacetifolia_76030115.jpg"
   },
   {
    "f": "phacelia-3.jpg",
    "line": "Photo: Dcrjsr, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Phacelia_bicolor_trumpets.jpg"
   }
  ]
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
   "ucanr1",
   "group1"
  ],
  "note": "Needle-like oxalate crystals.",
  "reason": "Needle-like oxalate crystals",
  "warning": "",
  "photos": [
   {
    "f": "philodendron-1.jpg",
    "line": "Photo: Daderot, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Philodendron_giganteum_-_Laeken_Royal_Greenhouses_-_Royal_Castle_of_Laeken_-_Brussels,_Belgium_-_DSC07236.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "photinia-1.jpg",
    "line": "Photo: Wouter Hagens, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Photinia_fraseri_A.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "pigweed-and-amaranth-1.jpg",
    "line": "Photo: Kurt Stüber, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Amaranthus_tricolor0.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "pine-1.jpg",
    "line": "Photo: Vlad & Marina Butsky on Flickr, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pinus_jeffreyi_at_Lassen_Volcanic_National_Park.jpg"
   },
   {
    "f": "pine-2.jpg",
    "line": "Photo: Awinch1001, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pinus_sabiniana_needles_Mount_Diablo_13.jpg"
   },
   {
    "f": "pine-3.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pinus_coulteri_MHNT_Cone.jpg"
   },
   {
    "f": "pine-4.jpg",
    "line": "Photo: Crusier, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pinus_ponderosa_female_cones.JPG"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "pineapple-weed-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Matricaria_discoidea_-_l%C3%B5hnav_kummel_Keilas.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "pittosporum-1.jpg",
    "line": "Photo: A. Barra, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Pittosporum_heterophyllum.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "plumbago-1.jpg",
    "line": "Photo: Vengolis, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Plumbago_auriculata_2718.jpg"
   },
   {
    "f": "plumbago-2.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloem_van_een_Plumbago_auriculata._10-10-2023._(d.j.b).jpg"
   },
   {
    "f": "plumbago-3.jpg",
    "line": "Photo: El Golli Mohamed, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fleur_Plumbago_Auriculata_Zaghouan_NP.jpg"
   }
  ]
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
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "poinsettia-1.jpg",
    "line": "Photo: André Karwath aka Aka, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Weihnachtsstern_-_gro%C3%9F.jpg"
   },
   {
    "f": "poinsettia-2.jpg",
    "line": "Photo: Carlos Valenzuela, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Euphorbia_pulcherrima_Yellow_and_red_Mexico2019.jpg"
   },
   {
    "f": "poinsettia-3.jpg",
    "line": "Photo: Kryesmin, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Euphorbia_pulcherrima_in_Bangladesh_03.jpg"
   },
   {
    "f": "poinsettia-4.jpg",
    "line": "Photo: SAplants, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Euphorbia_pulcherrima_cultivar-C_5Dsr_4021.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr2",
   "tt6"
  ],
  "note": "Deadly. Looks like wild carrot.",
  "reason": "Deadly",
  "warning": "Deadly. Looks like wild carrot (Queen Anne's lace) and wild fennel. Never forage carrot-like plants for your tortoise. Hemlock stems are smooth and hairless with purple blotches; wild carrot stems are hairy.",
  "photos": [
   {
    "f": "poison-hemlock-1.jpg",
    "line": "Photo: William & Wilma Follette, USDA-NRCS PLANTS Database, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Conium.jpg"
   },
   {
    "f": "poison-hemlock-2.jpg",
    "line": "Photo: Аимаина хикари, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Conium_maculatum_Kiev2.JPG"
   },
   {
    "f": "poison-hemlock-3.jpg",
    "line": "Photo: Harry Rose from South West Rocks, Australia, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Conium_maculatum_stem1_(14681567742).jpg"
   },
   {
    "f": "poison-hemlock-4.jpg",
    "line": "Photo: Harry Rose from South West Rocks, Australia, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Conium_maculatum_leaf7_(14679505784).jpg"
   }
  ]
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
   "ucanr1"
  ],
  "note": "Causes severe rashes in people; don't handle it.",
  "reason": "Causes severe rashes in people",
  "warning": "",
  "photos": [
   {
    "f": "poison-oak-1.jpg",
    "line": "Photo: Elf (talk · contribs), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:PoisonOak_wb_biggerLeaves.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "popcorn-flower-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Plagiobothrys_jonesii_2.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "One keeper club lists corn poppy as food; the Tortoise Table and UC say no.",
  "reason": "The Tortoise Table says don't feed it",
  "warning": "",
  "photos": [
   {
    "f": "poppy-corn-and-iceland-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Papaver_April_2010-3.jpg"
   },
   {
    "f": "poppy-corn-and-iceland-2.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Papaver_ori%C3%ABntale._Locatie,_Tuinen_Mien_Ruys_02.jpg"
   },
   {
    "f": "poppy-corn-and-iceland-3.jpg",
    "line": "Photo: Agnes Monkelbaan, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Bloem_van_een_Papaver_(klaproos)._14-05-2021_(actm.)_01.jpg"
   },
   {
    "f": "poppy-corn-and-iceland-4.jpg",
    "line": "Photo: Derek Ramsey (Ram-Man), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Iceland_Poppy_Papaver_nudicaule_'Champagne_Bubbles'_Yellow_Center.jpg"
   }
  ]
 },
 {
  "id": "potato",
  "name": "Potato",
  "scientific": "Solanum tuberosum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt4",
   "ucanr1"
  ],
  "note": "Green parts are toxic.",
  "reason": "Green parts are toxic",
  "warning": "",
  "photos": [
   {
    "f": "potato-1.jpg",
    "line": "Photo: Scott Bauer, USDA ARS, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Patates.jpg"
   }
  ]
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
   "ucanr1",
   "aspca10",
   "group1"
  ],
  "note": "Needle-like oxalate crystals.",
  "reason": "Needle-like oxalate crystals",
  "warning": "",
  "photos": [
   {
    "f": "pothos-1.jpg",
    "line": "Photo: Mokkie, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Money_Plant_(Epipremnum_aureum)_4.jpg"
   }
  ]
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
   "tt6",
   "azeah1"
  ],
  "note": "One list includes it as food, but the Tortoise Table says don't feed it; we take the cautious side.",
  "reason": "The Tortoise Table says don't feed it",
  "warning": "",
  "photos": [
   {
    "f": "prickly-lettuce-1.jpg",
    "line": "Photo: U.S. Geological Survey, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lactucaserriola2web.jpg"
   }
  ]
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
   "club1",
   "group3",
   "kaplan1",
   "tt2"
  ],
  "note": "Remove every spine and the tiny hair-like glochids.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "prickly-pear-pads-1.jpg",
    "line": "Photo: YG01, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Dikenli_%C4%B0ncir_(Opuntia_ficus-indica)_Gaziantep_Turkey.IMG_1104.jpg"
   }
  ]
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
   "trust2",
   "club1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "prickly-sow-thistle-1.jpg",
    "line": "Photo: KENPEI, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sonchus_asper2.jpg"
   }
  ]
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
   "tt3",
   "tt6",
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "primrose-1.jpg",
    "line": "Photo: Robert Flogaus-Faust, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Primula_vulgaris_RF.jpg"
   },
   {
    "f": "primrose-2.jpg",
    "line": "Photo: Ralf Wimmer, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Auricula(1).jpg"
   },
   {
    "f": "primrose-3.jpg",
    "line": "Photo: André Karwath aka Aka, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Primula_aka.jpg"
   },
   {
    "f": "primrose-4.jpg",
    "line": "Photo: Горбунова М.С., CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Primula_veris_flowers.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "privet-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ligustrum_vulgare_kz01.jpg"
   }
  ]
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
  "note": "California's state grass.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "purple-needlegrass-1.jpg",
    "line": "Photo: Matt Lavin from Bozeman, Montana, USA, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Stipa_pulchra_(35034340452).jpg"
   }
  ]
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
   "furrycritter.com1",
   "rt1",
   "club2",
   "tt4"
  ],
  "note": "Same species as wild chicory.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "radicchio-1.jpg",
    "line": "Photo: Kasteelhoeve Puth at English Wikipedia, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:RadicchioNL.jpg"
   }
  ]
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
   "tt4",
   "kaplan1"
  ],
  "note": "Low nutrition.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "radish-and-daikon-1.jpg",
    "line": "Photo: Jengod, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Radish_3371103037_4ab07db0bf_o.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "red-maids-1.jpg",
    "line": "Photo: Stickpen, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Calandriniaciliata1.jpg"
   }
  ]
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
   "trust1",
   "kaplan1",
   "tt4"
  ],
  "note": "Low nutrition. One source says not to feed it at all, so keep it a small filler.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "red-or-green-leaf-lettuce-1.jpg",
    "line": "Photo: Jamain, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Red_leaf_lettuce_J1.JPG"
   }
  ]
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
   "group3",
   "pubs.usgs.gov1",
   "tt6"
  ],
  "note": "Wild desert tortoises eat it, but the Tortoise Table says feed sparingly.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "redstem-filaree-1.jpg",
    "line": "Photo: E Wusk, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Erodium_cicutarium_whole_plant.jpg"
   }
  ]
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
   "tt4",
   "ucanr1",
   "group2"
  ],
  "note": "Leaves are especially toxic.",
  "reason": "Leaves are especially toxic",
  "warning": "",
  "photos": [
   {
    "f": "rhubarb-1.jpg",
    "line": "Photo: Dieter Weber (User:Uellue), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rheum_rhabarbarum.2006-04-27.uellue.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "rockrose-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cistus_May_2014-7.jpg"
   },
   {
    "f": "rockrose-2.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cistus_May_2014-11.jpg"
   },
   {
    "f": "rockrose-3.jpg",
    "line": "Photo: Stickpen, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cistus-hybridus.jpg"
   }
  ]
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
   "rvc1",
   "trust1",
   "tt4"
  ],
  "note": "Low nutrition; use as a filler with weeds. One source says not to feed lettuce at all.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "romaine-lettuce-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_070730-7911_Lactuca_sativa.jpg"
   }
  ]
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
   "trust1",
   "club1",
   "kaplan1"
  ],
  "note": "Only from plants never sprayed.",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "rose-1.jpg",
    "line": "Photo: Subhrajyoti07, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:A_red_garden_rose_in_Kolkata.jpg"
   },
   {
    "f": "rose-2.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rosa_'Kent'_(d.j.b)_01.jpg"
   },
   {
    "f": "rose-3.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rosa_Gold_Glow_2.jpg"
   },
   {
    "f": "rose-4.jpg",
    "line": "Photo: Spring's Flowers, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:A_close-up_of_climbing_roses.jpg"
   }
  ]
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
   "tt1",
   "group3"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "rose-of-sharon-1.jpg",
    "line": "Photo: Eric Kounce TexasRaiser, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hibiscus_Syriacus.JPG"
   },
   {
    "f": "rose-of-sharon-2.jpg",
    "line": "Photo: Chrumps, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hibiscus-syriacus.jpg"
   },
   {
    "f": "rose-of-sharon-3.jpg",
    "line": "Photo: Heinz-Vale, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:0233bw_Blaue-Bl%C3%BCte-des-Straucheibisch-(Hibiscus-syriacus).jpg"
   },
   {
    "f": "rose-of-sharon-4.jpg",
    "line": "Photo: ImagePerson, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hibiscus_syriacus_Rose_of_Sharon_2017.jpg"
   }
  ]
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
   "tt1",
   "azeah1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "rosemary-1.jpg",
    "line": "Photo: Margalob, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rosemary_in_bloom.JPG"
   }
  ]
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
   "tt5",
   "kaplan1"
  ],
  "note": "",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "ryegrass-1.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_001026-9002_Lolium_perenne.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr2",
   "aspca2"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "sago-palm-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cycas_inflorescence.jpg"
   },
   {
    "f": "sago-palm-2.jpg",
    "line": "Photo: Forest & Kim Starr, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr_080117-2195_Cycas_revoluta.jpg"
   },
   {
    "f": "sago-palm-3.jpg",
    "line": "Photo: David J. Stang, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cycas_revoluta_13zz.jpg"
   },
   {
    "f": "sago-palm-4.jpg",
    "line": "Photo: Esculapio, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cycas_revoluta1327A.JPG"
   }
  ]
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
   "tt6",
   "club1"
  ],
  "note": "Rated by its relative goat's beard.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "salsify-1.jpg",
    "line": "Photo: Sarah Stierch, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Purple_Salsify_-_Stierch.jpg"
   }
  ]
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
   "ucanr1",
   "tt6"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "scarlet-pimpernel-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Flowers_March_2008-19.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "California native. UC lists its genus (Erigeron) as irritating.",
  "reason": "Listed as irritating",
  "warning": "",
  "photos": [
   {
    "f": "seaside-daisy-1.jpg",
    "line": "Photo: JJ Harrison, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Erigeron_Glaucus.jpg"
   }
  ]
 },
 {
  "id": "sedum",
  "name": "Sedum",
  "scientific": "Sedum spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "mod",
  "parts": "Leaves",
  "sources": [
   "rvc1",
   "trust2",
   "club1",
   "tt2"
  ],
  "note": "Rated by its genus; species vary. Feed only a species you have identified.",
  "reason": "",
  "warning": "Rated by its genus. Only feed species you've identified.",
  "photos": [
   {
    "f": "sedum-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sedum_acre_single_-_Niitv%C3%A4lja.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "self-heal-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Prunella_vulgaris_-_harilik_k%C3%A4bihein.jpg"
   }
  ]
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
   "ucanr1",
   "group1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "shasta-daisy-1.jpg",
    "line": "Photo: Captain-tucker, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Leucanthemum_x_superbum_'Becky'_in_NH.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "High in oxalic acid.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "sheep-sorrel-1.jpg",
    "line": "Photo: Henripekka Kallio, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ahosuolahein%C3%A4_(Rumex_acetosella).jpg"
   }
  ]
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
   "club1",
   "rt1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "shepherd-s-purse-1.jpg",
    "line": "Photo: SaltySemanticSchmuck, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:A_Field_of_Shepherd%E2%80%99s-purse.jpg"
   }
  ]
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
   "tt3",
   "ucanr1"
  ],
  "note": "California native. Rated by its genus (Primula).",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "shooting-star-1.jpg",
    "line": "Photo: Nicholaswei, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Primula_clevelandii_8S6A0312.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "silk-tree-mimosa-1.jpg",
    "line": "Photo: Famartin, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:2018-07-08_11_10_27_Rosea_Mimosa_blossoms_along_the_ramp_from_southbound_Interstate_95_(New_Jersey_Turnpike_Eastern_Spur)_to_westbound_Interstate_280_(Essex_Freeway)_in_the_New_Jersey_Meadowlands,_within_Kearny,_Hudson_County,_New_Jersey.jpg"
   },
   {
    "f": "silk-tree-mimosa-2.jpg",
    "line": "Photo: Kjoonlee, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Albizia_julibrissin_flower_closeup.jpg"
   },
   {
    "f": "silk-tree-mimosa-3.jpg",
    "line": "Photo: Σ64, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Albizia_julibrissin_05.jpg"
   },
   {
    "f": "silk-tree-mimosa-4.jpg",
    "line": "Photo: EgorovaSvetlana, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Albizia_julibrissin_flowers_Arnold_Arboretum.jpg"
   }
  ]
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
   "trust2",
   "club1",
   "rt1",
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "smooth-hawksbeard-1.jpg",
    "line": "Photo: Michael Becker, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Crepis_capillaris_2005.07.10_09.09.34.jpg"
   }
  ]
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
   "ucanr1",
   "aspca2"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "snake-plant-1.jpg",
    "line": "Photo: Krishnav25, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Snake_plant_(Sansevieria_trifasciata).jpg"
   }
  ]
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
   "tt3"
  ],
  "note": "Rated safe by the Tortoise Table.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "snapdragon-1.jpg",
    "line": "Photo: Craig Franklin, CC BY-SA 3.0 au, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Antirrhinum_majus_BCBG_(02).jpg"
   },
   {
    "f": "snapdragon-2.jpg",
    "line": "Photo: Jim Evans, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Snapdragon_--_Antirrhinum_majus.jpg"
   },
   {
    "f": "snapdragon-3.jpg",
    "line": "Photo: Sabina Bajracharya, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow-Snapdragon-Flower(Antirrhinum_majus)_08.jpg"
   },
   {
    "f": "snapdragon-4.jpg",
    "line": "Photo: Sabina Bajracharya, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Antirrhinum_majus-Flower_03.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "California native.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "snowberry-1.jpg",
    "line": "Photo: Walter Siegmund, CC BY 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Symphoricarpos_albus_7927.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "soap-plant-1.jpg",
    "line": "Photo: tomhilton, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chlorogalumpomeridianum.jpg"
   }
  ]
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
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "society-garlic-1.jpg",
    "line": "Photo: CatherineMunro, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tulbaghia_(Society_Garlic).jpg"
   }
  ]
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
   "aspca11"
  ],
  "note": "Non-toxic to pets.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "spider-plant-1.jpg",
    "line": "Photo: Dtarazona, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Hierbabuena_0611_Revised.jpg"
   }
  ]
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
   "group2",
   "club1",
   "tt4"
  ],
  "note": "High in oxalic acid, which blocks calcium.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "spinach-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Spinacia_oleracea_Spinazie_bloeiend.jpg"
   }
  ]
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
   "tt6",
   "ucanr1"
  ],
  "note": "Milky sap irritates.",
  "reason": "Irritating sap",
  "warning": "",
  "photos": [
   {
    "f": "spotted-spurge-1.jpg",
    "line": "Photo: Hardyplants at English Wikipedia, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chamaesyce.jpg"
   }
  ]
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
   "club1",
   "rvc1"
  ],
  "note": "Check the label: skip mixes with spinach, kale or cabbage.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "spring-mix-1.jpg",
    "line": "Photo: Evan Baldonado, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Mesclun_mix.png"
   }
  ]
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
   "rvc1",
   "tt4"
  ],
  "note": "Vegetables add little for Mediterranean tortoises.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "squash-and-pumpkin-1.jpg",
    "line": "Photo: Chiswick Chap, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Squashes_at_Kew_Gardens_IncrEdibles_2013.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "Not the same as rose of Sharon hibiscus, though both share the name.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "st-john-s-wort-1.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Hypericum_perforatum_flower_and_buttons.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "Very common in California yards.",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "star-jasmine-1.jpg",
    "line": "Photo: Scott Zona from USA, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Trachelospermum_jasminoides1215878198.jpg"
   }
  ]
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
   "tt3",
   "azeah1"
  ],
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "sticky-monkeyflower-1.jpg",
    "line": "Photo: Lars Rosengreen, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Diplacus_mephiticus.jpg"
   },
   {
    "f": "sticky-monkeyflower-2.jpg",
    "line": "Photo: Alan Rockefeller, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Diplacus-angustatus2.jpg"
   },
   {
    "f": "sticky-monkeyflower-3.jpg",
    "line": "Photo: Alicia Di Rado, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Diplacus_parviflorus_%C3%97_longiflorus.jpg"
   }
  ]
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
   "tt6",
   "ucanr1",
   "rt1"
  ],
  "note": "Stings skin.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "stinging-nettle-1.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Brandnetel,_Urtica_dioica,_Locatie,_Famberhorst.jpg"
   }
  ]
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
   "aspca12"
  ],
  "note": "Non-toxic to pets.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "sunflower-1.jpg",
    "line": "Photo: George Chernilevsky, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sunflower_head_2015_G1.jpg"
   },
   {
    "f": "sunflower-2.jpg",
    "line": "Photo: Moyra Turkington, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Helianthus_annuus_prado_red.jpg"
   },
   {
    "f": "sunflower-3.jpg",
    "line": "Photo: böhringer friedrich, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sonnenblume_Helianthus_2.JPG"
   }
  ]
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
   "tt3",
   "azeah1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "sweet-alyssum-1.jpg",
    "line": "Photo: w0zny, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Smagliczka_nadmorska_1.jpg"
   },
   {
    "f": "sweet-alyssum-2.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Lobularia_maritima_kz08.jpg"
   },
   {
    "f": "sweet-alyssum-3.jpg",
    "line": "Photo: Pharaoh Hound, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sweet_alyssum.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "sweet-clover-1.jpg",
    "line": "Photo: Dendrofil, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Melilotus_officinalis_PP_Oslava.JPG"
   }
  ]
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
   "tt4"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "sweet-potato-1.jpg",
    "line": "Photo: Llez, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ipomoea_batatas_006.JPG"
   }
  ]
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
   "tt6"
  ],
  "note": "Mustard family.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "swinecress-1.jpg",
    "line": "Photo: Rasbak, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Kleine_varkenskers_stukje_plant_Coronopus_didymus.jpg"
   }
  ]
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
   "group2",
   "kaplan1",
   "tt4"
  ],
  "note": "High in oxalic acid. The Tortoise Table allows a little; we take the cautious side.",
  "reason": "High in oxalates, which block calcium",
  "warning": "",
  "photos": [
   {
    "f": "swiss-chard-1.jpg",
    "line": "Photo: Neelix at English Wikipedia, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chard_(Beta_vulgaris_var_cicla).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "tarweed-1.jpg",
    "line": "Photo: Noah Elhardt, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Madia_elegans_flower.jpg"
   }
  ]
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
   "tt1",
   "club1"
  ],
  "note": "California native. Rated by its genus (Rubus), like blackberry.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "thimbleberry-1.jpg",
    "line": "Photo: Walter Siegmund (talk), CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Rubus_parviflorus_9481.JPG"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "tidy-tips-1.jpg",
    "line": "Photo: Seán A. O'Hara, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Layia_platyglossa_Tidy-Tips!_(hortulus)_001.jpg"
   }
  ]
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
   "rvc1",
   "group3",
   "tt5"
  ],
  "note": "Good fiber, especially when fresh weeds are scarce.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "timothy-hay-1.jpg",
    "line": "Photo: Blokenearexeter, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Timothy_grass.jpg"
   }
  ]
 },
 {
  "id": "tomato",
  "name": "Tomato",
  "scientific": "Solanum lycopersicum",
  "category": "grocery",
  "where": "Any grocery store",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "rvc1",
   "trust1",
   "ucanr1",
   "tt4"
  ],
  "note": "The leaves and vines are toxic. The fruit is also too sugary.",
  "reason": "The leaves and vines are toxic",
  "warning": "",
  "photos": [
   {
    "f": "tomato-1.jpg",
    "line": "Photo: Softeis, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tomato_je.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr3"
  ],
  "note": "California native shrub.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "toyon-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Heteromeles_arbutifolia_kz01.jpg"
   },
   {
    "f": "toyon-2.jpg",
    "line": "Photo: Awinch1001, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Heteromeles_arbutifolia_flowers_Wildcat_Canyon_Preserve_8.jpg"
   },
   {
    "f": "toyon-3.jpg",
    "line": "Photo: ALAN SCHMIERER, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:TOYON_(heteromeles_arbutifolia)_(2-18-09)_canet_-2_(3294205754).jpg"
   },
   {
    "f": "toyon-4.jpg",
    "line": "Photo: John Rusk from Berkeley, CA, United States of America, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:2015-07-04-13.00.05_ZS_PMax_Heteromeles_arbutifolia-1_(19232153488).jpg"
   }
  ]
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
   "tt2",
   "rt1"
  ],
  "note": "The second source rates its plant family, not this species.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "trailing-ice-plant-1.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Delosperma_cooperi_-_Flower.jpg"
   },
   {
    "f": "trailing-ice-plant-2.jpg",
    "line": "Photo: Ghislain118, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Delosperma_basuticum_1.jpg"
   },
   {
    "f": "trailing-ice-plant-3.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Delosperma_cooperi_kz01.jpg"
   },
   {
    "f": "trailing-ice-plant-4.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Delosperma_March_2015-2.jpg"
   }
  ]
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
   "tt1",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "tree-of-heaven-1.jpg",
    "line": "Photo: Darkone (talk · contribs), CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:G%C3%B6tterbaum_(Ailanthus_altissima).jpg"
   },
   {
    "f": "tree-of-heaven-2.jpg",
    "line": "Photo: Wayne National Forest, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ailanthus_altissima_foliage_(17678561472).jpg"
   },
   {
    "f": "tree-of-heaven-3.jpg",
    "line": "Photo: George E. Koronaios, CC BY-SA 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Tree_of_Heaven_(Ailanthus_altissima)_in_Athens_on_June_22,_2023.jpg"
   },
   {
    "f": "tree-of-heaven-4.jpg",
    "line": "Photo: Luis Fernández García, CC BY-SA 2.1 es, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ailanthus-altissima.jpg"
   }
  ]
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
   "ucanr1",
   "ucanr2",
   "aspca2"
  ],
  "note": "Deadly.",
  "reason": "Deadly",
  "warning": "",
  "photos": [
   {
    "f": "tree-tobacco-1.jpg",
    "line": "Photo: Dick Culbert from Gibsons, B.C., Canada, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nicotiana_glauca_(8694803666).jpg"
   },
   {
    "f": "tree-tobacco-2.jpg",
    "line": "Photo: SAplants, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nicotiana_glauca_1DS-II_5122.jpg"
   },
   {
    "f": "tree-tobacco-3.jpg",
    "line": "Photo: Syrio, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nicotiana_glauca_02.jpg"
   },
   {
    "f": "tree-tobacco-4.jpg",
    "line": "Photo: Juan Carlos Fonseca Mata, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Nicotiana_glauca_-_leaf,_flower_and_fruit.jpg"
   }
  ]
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
   "kaplan1",
   "furrycritter.com1"
  ],
  "note": "Mustard family: can affect the thyroid. Rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "turnip-greens-1.jpg",
    "line": "Photo: thebittenword.com, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Turnip_2622027.jpg"
   }
  ]
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
   "trust2",
   "club1",
   "tt6"
  ],
  "note": "Legume: higher protein.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "vetch-1.jpg",
    "line": "Photo: Fornax, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Vicia_orobus1_eF.jpg"
   }
  ]
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
   "rvc1",
   "kaplan1",
   "club1",
   "tt4"
  ],
  "note": "Mustard family: rotate.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "watercress-1.jpg",
    "line": "Photo: Masparasol, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Watercress_(2).JPG"
   }
  ]
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
   "ucanr1",
   "group1",
   "kaplan1"
  ],
  "note": "Milky sap irritates.",
  "reason": "Irritating sap",
  "warning": "",
  "photos": [
   {
    "f": "weeping-fig-ficus-1.jpg",
    "line": "Photo: Krzysztof Ziarnek, Kenraiz, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_benjamina_kz01.jpg"
   },
   {
    "f": "weeping-fig-ficus-2.jpg",
    "line": "Photo: Vijayanrajapuram, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_benjamina-weeping_fig-benjamin_fig_03.jpg"
   },
   {
    "f": "weeping-fig-ficus-3.jpg",
    "line": "Photo: Vinayaraj, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_benjamina_-_Weeping_Fig_at_Thenmala_2014_(6).jpg"
   },
   {
    "f": "weeping-fig-ficus-4.jpg",
    "line": "Photo: Vinayaraj, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ficus_benjamina_-_Weeping_Fig_at_Thenmala_2014_(3).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "western-redbud-1.jpg",
    "line": "Photo: Stan Shebs, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cercis_occidentalis_branch.jpg"
   },
   {
    "f": "western-redbud-2.jpg",
    "line": "Photo: Curtis Clark, CC BY-SA 2.5, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cercis_occidentalis_flowers_2004-03-10.jpg"
   },
   {
    "f": "western-redbud-3.jpg",
    "line": "Photo: John Rusk from Berkeley, CA, United States of America, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:2016-03-19-11.55.37_ZS_PMax_Cercis_occidentalis-1_(25916453515).jpg"
   },
   {
    "f": "western-redbud-4.jpg",
    "line": "Photo: John Comeau, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Cercis_occidentalis,_California.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "western-sycamore-1.jpg",
    "line": "Photo: Awinch1001, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Platanus_racemosa_Santa_Barbara.jpg"
   },
   {
    "f": "western-sycamore-2.jpg",
    "line": "Photo: Eugene Zelenko, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Platanus_racemosa-16.jpg"
   },
   {
    "f": "western-sycamore-3.jpg",
    "line": "Photo: Eugene Zelenko, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Platanus_racemosa-6.jpg"
   },
   {
    "f": "western-sycamore-4.jpg",
    "line": "Photo: Awinch1001, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Sunol_Preserve_Platanus_Racemosa_bark_2.jpg"
   }
  ]
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
   "trust1",
   "club2",
   "kaplan1",
   "tt6"
  ],
  "note": "Legume: higher protein. Occasional only for young tortoises.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "white-clover-1.jpg",
    "line": "Photo: Vinayaraj, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Trifolium_repens_-_white_clover_on_way_from_Govindghat_to_Gangria_at_Valley_of_Flowers_National_Park_-_during_LGFC_-_VOF_2019_(1).jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "white-sage-1.jpg",
    "line": "Photo: Joshua Tree National Park, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:White_sage_(Salvia_apiana)_(50699659533).jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "whitestem-filaree-1.jpg",
    "line": "Photo: E Wusk, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Erodium_moschatum_flower.jpg"
   }
  ]
 },
 {
  "id": "wild-carrot-queen-anne-s-lace",
  "name": "Wild carrot (Queen Anne's lace)",
  "scientific": "Daucus carota",
  "category": "weed",
  "where": "Statewide",
  "rating": "avoid",
  "parts": "",
  "sources": [],
  "note": "Looks very like deadly poison hemlock. Don't pick wild carrot-like plants. Rated Do not feed because of the lookalike, not because carrot tops themselves are unsafe.",
  "reason": "Looks like deadly poison hemlock",
  "warning": "Looks very like deadly poison hemlock. Don't pick carrot-like wild plants unless an expert has identified them.",
  "photos": [
   {
    "f": "wild-carrot-queen-anne-s-lace-1.jpg",
    "line": "Photo: Kieran Roy Powell, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Daucus_carota_Aberystwyth_2024_Far.jpg"
   },
   {
    "f": "wild-carrot-queen-anne-s-lace-2.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Daucus_carota_May_2008-1_edit.jpg"
   },
   {
    "f": "wild-carrot-queen-anne-s-lace-3.jpg",
    "line": "Photo: Forest and Kim Starr, CC BY 3.0 us, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr-141104-5262-Daucus_carota_subsp_carota-stems_and_leaves-HQ_HNP-Maui_(24621722653).jpg"
   },
   {
    "f": "wild-carrot-queen-anne-s-lace-4.jpg",
    "line": "Photo: Stefan.lefnaer, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Daucus_carota_subsp._carota_sl8.jpg"
   }
  ]
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
   "tt6",
   "rt1"
  ],
  "note": "",
  "reason": "",
  "warning": "Looks like deadly poison hemlock. Fennel smells of anise, but don't rely on smell alone. Don't forage it unless you're certain.",
  "photos": [
   {
    "f": "wild-fennel-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Foeniculum_July_2011-1a.jpg"
   },
   {
    "f": "wild-fennel-2.jpg",
    "line": "Photo: Harry Rose from South West Rocks, Australia, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Foeniculum_vulgare_flowerhead2_(14376976521).jpg"
   },
   {
    "f": "wild-fennel-3.jpg",
    "line": "Photo: Harry Rose from South West Rocks, Australia, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Foeniculum_vulgare_flowerhead3_(14380308525).jpg"
   },
   {
    "f": "wild-fennel-4.jpg",
    "line": "Photo: Forest and Kim Starr, CC BY 3.0 us, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Starr-170304-7222-Foeniculum_vulgare-flowers_leaves-Polipoli-Maui_(33383062015).jpg"
   }
  ]
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
   "tt4",
   "ucanr2"
  ],
  "note": "Some, like the death cap, are deadly. Remove any that pop up in the enclosure.",
  "reason": "Some, like the death cap, are deadly",
  "warning": "",
  "photos": [
   {
    "f": "wild-mushrooms-1.jpg",
    "line": "Photo: Satarker samiksha, CC0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Natural_wild_mushrooms_growing_on_a_forest_floor_during_monsoon.jpg"
   },
   {
    "f": "wild-mushrooms-2.jpg",
    "line": "Photo: George Chernilevsky, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_2011_G2.jpg"
   },
   {
    "f": "wild-mushrooms-3.jpg",
    "line": "Photo: George Chernilevsky, CC BY 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Amanita_phalloides_2025_G1.jpg"
   },
   {
    "f": "wild-mushrooms-4.jpg",
    "line": "Photo: Dominicus Johannes Bergsma, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Vliegenzwam_(Amanita_muscaria)._Locatie_De_Famberhorst._27-09-2020_(d.j.b.).jpg"
   }
  ]
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
   "tt5",
   "azeah1"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "wild-oats-1.jpg",
    "line": "Photo: Alvesgaspar, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Avena_May_2010-3.jpg"
   }
  ]
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
   "tt4",
   "ucanr1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "Death camas (Toxic) looks similar. Wild onions smell of onion, but don't rely on smell alone.",
  "photos": [
   {
    "f": "wild-onion-and-garlic-1.jpg",
    "line": "Photo: Thomas Pusch, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Ursa_ajlo_1.jpg"
   }
  ]
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
   "rt1",
   "tt4"
  ],
  "note": "Mustard family: rotate, never a staple.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "wild-radish-1.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:(MHNT)_Raphanus_raphanistrum_-_flowers.jpg"
   }
  ]
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
   "club1",
   "rt1"
  ],
  "note": "California has native wild strawberries.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "wild-strawberry-1.jpg",
    "line": "Photo: Ivar Leidus, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Fragaria_vesca_fruit_-_Keila.jpg"
   }
  ]
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
   "tt1"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "willow-1.jpg",
    "line": "Photo: Bruce Marlin, CC BY 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Salix_alba_Morton.jpg"
   },
   {
    "f": "willow-2.jpg",
    "line": "Photo: Juan Carlos Fonseca Mata, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Leaves_of_Salix_humboldtiana.jpg"
   },
   {
    "f": "willow-3.jpg",
    "line": "Photo: Didier Descouens, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Salix_caprea_Male.jpg"
   },
   {
    "f": "willow-4.jpg",
    "line": "Photo: Bernie, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Salix_caprea_02.jpg"
   }
  ]
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
   "tt6"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "willowherb-1.jpg",
    "line": "Photo: Frank Vincentz, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Epilobium_hirsutum_04_ies.jpg"
   }
  ]
 },
 {
  "id": "wisteria",
  "name": "Wisteria",
  "scientific": "Wisteria spp.",
  "category": "garden",
  "where": "Statewide",
  "rating": "toxic",
  "parts": "",
  "sources": [
   "tt1",
   "ucanr1"
  ],
  "note": "Seeds and pods are the most toxic.",
  "reason": "Seeds and pods are toxic",
  "warning": "",
  "photos": [
   {
    "f": "wisteria-1.jpg",
    "line": "Photo: 3268zauber, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Chinese_Wisteria_Bl%C3%BCtentrauben.JPG"
   },
   {
    "f": "wisteria-2.jpg",
    "line": "Photo: Oakley413, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Wisteria_MassachusettsUS.jpg"
   },
   {
    "f": "wisteria-3.jpg",
    "line": "Photo: Kızıl, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Wisteria%E2%80%93IMG_5778_02.jpg"
   }
  ]
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
   "ucanr1",
   "aspca2"
  ],
  "note": "",
  "reason": "Sources advise against feeding it",
  "warning": "",
  "photos": [
   {
    "f": "yarrow-1.jpg",
    "line": "Photo: SAplants, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Achillea_millefolium_(bright).jpg"
   },
   {
    "f": "yarrow-2.jpg",
    "line": "Photo: Bff, CC BY-SA 3.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Achillea20090912_079.jpg"
   },
   {
    "f": "yarrow-3.jpg",
    "line": "Photo: Zennora Brna, CC BY-SA 4.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:02_Achillea_sp..jpg"
   }
  ]
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
   "ucanr5"
  ],
  "note": "Deadly to horses, and its spines injure mouths and eyes.",
  "reason": "Spines injure mouth and eyes; toxic to horses",
  "warning": "",
  "photos": [
   {
    "f": "yellow-starthistle-1.jpg",
    "line": "Photo: Peggy Greb, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yellow_star_thistle.jpg"
   }
  ]
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
  "note": "California native.",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "yerba-buena-1.jpg",
    "line": "Photo: Joyce Cory on Flickr as docentjoyce, CC BY 2.0, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:Yerba_Buena_-_Clinopodium_douglasii.jpg"
   }
  ]
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
   "tt4"
  ],
  "note": "",
  "reason": "",
  "warning": "",
  "photos": [
   {
    "f": "zucchini-1.jpg",
    "line": "Photo: Evan-Amos, Public domain, via Wikimedia Commons",
    "page": "https://commons.wikimedia.org/wiki/File:CSA-Striped-Zucchini.jpg"
   }
  ]
 }
];
