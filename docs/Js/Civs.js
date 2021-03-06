

    var civilizations = [
      {
        "id": 1,
        "name": "Aztecs",
        "expansion": "The Conquerors",
        "army_type": "Infantry and Monk",
        "unique_unit": [
          "Jaguar warrior"
        ],
        "unique_tech": [
          "Garland wars"
        ],
        "team_bonus": "Relics generate +33% gold.",
        "civilization_bonus": [
          "Villagers carry +5.",
          "Military units created 15% faster.",
          "+5 Monk hit points for each Monastery technology.",
          "Loom free."
        ],
        "Shield": "images/Civs/menu_techtree_aztecs.png",
        "Sound": "sound/civTheme__Pista1.mp3"
      },
      {
        "id": 2,
        "name": "Berbers.",
        "expansion": "The African Kingdoms.",
        "army_type": "Navy and cavalry.",
        "unique_unit": [
          "Camel archer.",
          "Genitour."
        ],
        "unique_tech": [
          "Kasbah"
        ],
        "team_bonus": "Genitour are available at the Archery Range.",
        "civilization_bonus": [
          "Villagers move +10% faster.",
          "Stable units are 15%/20% cheaper in the Castle/Imperial Age.",
          "Ships move +10% faster."
        ],
        "Shield": "images/Civs/menu_techtree_berber.png",
        "Sound": "sound/civTheme__Pista2.mp3"
      },
      {
        "id": 3,
        "name": "Britons",
        "expansion": "Age of Kings",
        "army_type": "Foot Archer",
        "unique_unit": [
          "Longbowman"
        ],
        "unique_tech": [
          "Yeomen"
        ],
        "team_bonus": "Archery Ranges work 20% faster",
        "civilization_bonus": [
          "Town Centers cost -50% wood upon reaching the Castle Age",
          "Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
          "Shepherds work 25% faster"
        ],
        "Shield": "images/Civs/menu_techtree_britons.png",
        "Sound": "sound/civTheme__Pista3.mp3"
      },
      {
        "id": 4,
        "name": "Bulgarians",
        "expansion": "Definitive Edition",
        "army_type": "Infantry and Cavalry",
        "unique_unit": [
          "Konnik"
        ],
        "unique_tech": [
          "Stirrups"
        ],
        "team_bonus": "Blacksmiths work 50% faster.",
        "civilization_bonus": [
          "Militia-line upgrades free.",
          "Town Centers cost -50% stone.",
          "Can build Krepost."
        ],
        "Shield": "images/Civs/menu_techtree_bulgarians.png",
        "Sound": "sound/civTheme__Pista4.mp3"
      },
      {
        "id": 5,
        "name": "Burmese",
        "expansion": "Rise of The Rajas",
        "army_type": "Monks and elephants",
        "unique_unit": [
          "Arambai"
        ],
        "unique_tech": [
          "Howdah"
        ],
        "team_bonus": "Relics are visible on the map from the game start.",
        "civilization_bonus": [
         "Lumber Camp technologies are free.",
          "Infantry has +1/+2/+3 attack in the Feudal/Castle/Imperial Age.",
          "Monastery technologies are 50% cheaper."
        ],
        "Shield": "images/Civs/menu_techtree_burmese.png",
        "Sound": "sound/civTheme__Pista5.mp3"
      },
      {
        "id": 6,
        "name": "Bizantines",
        "expansion": "Age of Kings",
        "army_type": "Defensive",
        "unique_unit": [
          "Cataphract"
        ],
        "unique_tech": [
          "Logistica"
        ],
        "team_bonus": "Monks +50% heal speed",
        "civilization_bonus": [
          "Buildings (except gates) have +10% HP in Dark Age / +20% HP in Feudal Age  / +30% in Castle Age / +40% in Imperial Age",
          "Spearman skirmisher and camel lines cost 25% less",
          "Fire Ships attack 20% faster",
          "Imperial Age costs -33%",
          "Town Watch is free"
        ],
        "Shield": "images/Civs/menu_techtree_byzantines.png",
        "Sound": "sound/civTheme__Pista6.mp3"
      },
      {
        "id": 7,
        "name": "Celts",
        "expansion": "Age of Kings",
        "army_type": "Infantry",
        "unique_unit": [
          "Woad Raider"
        ],
        "unique_tech": [
          "Furor Celtica"
        ],
        "team_bonus": "Siege Workshops work 20% faster",
        "civilization_bonus": [
          "Infantry moves 15% faster",
          "Lumberjacks work 15% faster",
          "Siege weapons reload 20% faster",
          "Sheep cannot be stolen if within one Celt unit's line of sight"
        ],
        "Shield": "images/Civs/menu_techtree_celts.png",
        "Sound": "sound/civTheme__Pista7.mp3"
      },
      {
        "id": 8,
        "name": "Chinese",
        "expansion": "Age of Kings",
        "army_type": "Archer",
        "unique_unit": [
          "Chu ko nu"
        ],
        "unique_tech": [
          "Rocketry"
        ],
        "team_bonus": "Famrs provide +45 food",
        "civilization_bonus": [
          "Start game with 3 extra villagers but -50 wood and -200 food",
          "Technologies cost -10% in Feudal Age/ -15% in Castle Age/-20% in Imperial Age",
          "Town Centers support 10 population instead of 5",
          "Demolition Ships have +50% HP"
        ],
        "Shield": "images/Civs/menu_techtree_chinese.png",
        "Sound": "sound/civTheme__Pista8.mp3"
      },
      {
        "id": 9,
        "name": "Cumans",
        "expansion": "Definitive Edition",
        "army_type": "Cavalry",
        "unique_unit": [
          "Kipchak"
        ],
        "unique_tech": [
          "Steppe Husbandry"
        ],
        "team_bonus": "Palisade Walls have +50% hit points.",
        "civilization_bonus": [
          "Additional Town Center can be built in the Feudal Age.",
          "Siege Workshops and Battering Ram/Capped Ram available in the Feudal/Castle Age.",
          "Cavalry move 5% faster in the Feudal Age, 10% faster in the Castle Age, and 15% faster in the Imperial Age."
        ],
        "Shield": "images/Civs/menu_techtree_cumans.png",
        "Sound": "sound/civTheme__Pista9.mp3"
      },
      {
        "id": 10,
        "name": "Ethiopians",
        "expansion": "The African Kingdoms",
        "army_type": "Archers and siege weapons",
        "unique_unit": [
          "Shotel Warrior"
        ],
        "unique_tech": [
          "Royal Heirs"
        ],
        "team_bonus": "Towers and Outposts have +3 Line of Sight.",
        "civilization_bonus": [
          "Archers fire +15% faster.",
          "Receive +100 food and +100 gold whenever a new Age is reached.",
          "The Pikeman upgrade is free."
        ],
        "Shield": "images/Civs/menu_techtree_ethiopians.png",
        "Sound": "sound/civTheme__Pista10.mp3"
      },
      {
        "id": 11,
        "name": "Franks",
        "expansion": "Age of Kings",
        "army_type": "Cavalry",
        "unique_unit": [
          "Throwing axeman"
        ],
        "unique_tech": [
          "Bearded axe"
        ],
        "team_bonus": "Knights have +2 line of sight",
        "civilization_bonus": [
          "Castles are 25% cheaper",
          "Knights have +20% HP",
          "Farm upgrades are free (Mill is required to receive bonus)"
        ],
        "Shield": "images/Civs/menu_techtree_franks.png",
        "Sound": "sound/civTheme__Pista11.mp3"
      },
      {
        "id": 12,
        "name": "Goths",
        "expansion": "Age of Kings",
        "army_type": "Infantry",
        "unique_unit": [
          "Huskarl"
        ],
        "unique_tech": [
          "Anarchy",
          "Perfusion"
        ],
        "team_bonus": "Barracks operate 20% faster",
        "civilization_bonus": [
          "Infantry cost 35% less (starting in Feudal Age)",
          "Infantry have +1 attack against buildings",
          "Villagers have +5 attack versus wild boar",
          "Hunters carry +15 meat",
          "+10 to population limit in Imperial Age"
        ],
        "Shield": "images/Civs/menu_techtree_goths.png",
        "Sound": "sound/civTheme__Pista12.mp3"
      },
      {
        "id": 13,
        "name": "Huns",
        "expansion": "The Conquerors",
        "army_type": "Cavalry",
        "unique_unit": [
          "Tarkan"
        ],
        "unique_tech": [
          "Atheism"
        ],
        "team_bonus": "Stables are 20% faster",
        "civilization_bonus": [
          "Houses are not required to support population",
          "Start game with -100 Wood",
          "Cavalry Archers cost -25% in Castle Age/ -30% in Imperial Age",
          "Trebuchets are 35% more accurate."
        ],
        "Shield": "images/Civs/menu_techtree_huns.png",
        "Sound": "sound/civTheme__Pista13.mp3"
      },
      {
        "id": 14,
        "name": "Inca",
        "expansion": "The Forgotten Empires",
        "army_type": "Infantry",
        "unique_unit": [
          "Kamayuk",
          "Slinger"
        ],
        "unique_tech": [
          "Andean Sling"
        ],
        "team_bonus": "Farms are built 50% faster.",
        "civilization_bonus": [
          "Start the game with an Eagle Scout.",
          "Start with a free Llama.",
          "Villagers benefit from Blacksmith infantry upgrades.",
          "Houses support 10 population.",
          "Buildings cost -15% stone."
        ],
        "Shield": "images/Civs/menu_techtree_inca.png",
        "Sound": "sound/civTheme__Pista14.mp3"
      },
      {
        "id": 15,
        "name": "Indians",
        "expansion": "The Forgotten Empires",
        "army_type": "Camel Riders and gunpowder units",
        "unique_unit": [
          "Elephant Archer",
          "Imperial Camel Rider"
        ],
        "unique_tech": [
          "Sultans"
        ],
        "team_bonus": "Team bonus: Camels have +6 attack against buildings.",
        "civilization_bonus": [
          "Fishermen work 15% faster and carry +15 food.",
          "Villagers are 10%/15%/20%/25% cheaper in the Dark/Feudal/Castle/Imperial Age.",
          "Villagers benefit from Blacksmith infantry upgrades.",
          "Camel Riders have +1 pierce armor."
        ],
        "Shield": "images/Civs/menu_techtree_indians.png",
        "Sound": "sound/civTheme__Pista15.mp3"
      },
      {
        "id": 16,
        "name": "Italians",
        "expansion": "The Forgotten Empires",
        "army_type": "Navy and archers",
        "unique_unit": [
          "Genoese Crossbowman",
          "Condottiero"
        ],
        "unique_tech": [
          "Pavise"
        ],
        "team_bonus": "Condottieri are available at the Barracks.",
        "civilization_bonus": [
          "Advancing to the next Age is 15% cheaper.",
          "Dock technologies are 50% cheaper.",
          "Fishing Ships are 20% cheaper.",
          "Gunpowder units are 20% cheaper."
        ],
        "Shield": "images/Civs/menu_techtree_italians.png",
        "Sound": "sound/civTheme__Pista16.mp3"
      },
      {
        "id": 17,
        "name": "Japanese",
        "expansion": "Age of Kings",
        "army_type": "Infantry",
        "unique_unit": [
          "Samurai"
        ],
        "unique_tech": [
          "Kataparuto"
        ],
        "team_bonus": "Galleys have +50% line of sight",
        "civilization_bonus": [
          "Fishing Ships have 2x HP and +2 pierce armor",
          "Fishing Ships work +5% faster in Dark Age/ +10% in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
          "Lumber Camps / Mining Camps / Mills are 50% cheaper",
          "Infantry attack 25% faster (starting in Feudal Age)"
        ],
        "Shield": "images/Civs/menu_techtree_japanese.png",
        "Sound": "sound/civTheme__Pista17.mp3"
      },
      {
        "id": 18,
        "name": "Khmer",
        "expansion": "Rise of the Rajas",
        "army_type": "Siege weapons and elephants",
        "unique_unit": [
          "Ballista Elephant"
        ],
        "unique_tech": [
          "Tusk Swords"
        ],
        "team_bonus": "Scorpions have +1 range.",
        "civilization_bonus": [
          "No buildings are required to construct certain buildings or advance in Age.",
          "Battle Elephants move +15% faster.",
          "Khmer Villagers drop off food from farms (1 unit at a time) without needing a drop site.",
          "Villagers can garrison in Houses."
        ],
        "Shield": "images/Civs/menu_techtree_khmer.png",
        "Sound": "sound/civTheme__Pista18.mp3"
      },
      {
        "id": 19,
        "name": "Koreans",
        "expansion": "The Conquerors",
        "army_type": "Tower and naval",
        "unique_unit": [
          "War wagon",
          "Turtle Ship"
        ],
        "unique_tech": [
          "Shinkichon"
        ],
        "team_bonus": "Mangonel line has +1 range",
        "civilization_bonus": [
          "Villagers have +3 line of sight",
          "Stone miners work 20% faster",
          "Guard Tower and Keep upgrades are free",
          "Towers (except bombard towers) have +1 range in Castle Age/ +2 in Imperial Age"
        ],
        "Shield": "images/Civs/menu_techtree_koreans.png",
        "Sound": "sound/civTheme__Pista19.mp3"
      },
      {
        "id": 20,
        "name": "Lithuanians",
        "expansion": "Definitive Edition",
        "army_type": "Cavalry and Monks",
        "unique_unit": [
          "Leitis"
        ],
        "unique_tech": [
          "Hill Forts"
        ],
        "team_bonus": "Monastery works 20% faster.",
        "civilization_bonus": [
          "Start with +150 food.",
          "Spearman-line and Skirmishers move 10% faster.",
          "Each garrisoned Relic gives +1 attack to Knights and Leitis (maximum +4)."
        ],
        "Shield": "images/Civs/menu_techtree_lithuanians.png",
        "Sound": "sound/civTheme__Pista20.mp3"
      },
      {
        "id": 21,
        "name": "Magyars",
        "expansion": "The Forgotten Empires",
        "army_type": "Cavalry",
        "unique_unit": [
          "Magyar Huszar"
        ],
        "unique_tech": [
          "Corvinian Army"
        ],
        "team_bonus": "Foot archers have +2 Line of Sight.",
        "civilization_bonus": [
          "Forging, Iron Casting, and Blast Furnace are free.",
          "Scout Cavalry line is 15% cheaper.",
          "Villagers kill wild animals in one strike."
        ],
        "Shield": "images/Civs/menu_techtree_magyars.png",
        "Sound": "sound/civTheme__Pista21.mp3"
      },
      {
        "id": 22,
        "name": "Malay",
        "expansion": "Rise of the Rajas",
        "army_type": "Navy",
        "unique_unit": [
          "Karambit Warrior"
        ],
        "unique_tech": [
          "Thalassocracy"
        ],
        "team_bonus": "Docks have double Line of Sight.",
        "civilization_bonus": [
          "Advancing in Age is +80% faster.",
          "Fish Traps are 33% cheaper.",
          "Fish Traps provide unlimited food.",
          "Battle Elephants are 30% cheaper."
        ],
        "Shield": "images/Civs/menu_techtree_malay.png",
        "Sound": "sound/civTheme__Pista22.mp3"
      },
      {
        "id": 23,
        "name": "Malians",
        "expansion": "Rise of the Rajas",
        "army_type": "Infantry",
        "unique_unit": [
          "Gbeto"
        ],
        "unique_tech": [
          "Tigui"
        ],
        "team_bonus": "Docks have double Line of Sight.",
        "civilization_bonus": [
          "Buildings cost -15% wood (except Farms).",
          "Barracks units have +1/+2/+3 pierce armor in the Feudal/Castle/Imperial Age.",
          "Gold Mining is free."
        ],
        "Shield": "images/Civs/menu_techtree_malians.png",
        "Sound": "sound/civTheme__Pista23.mp3"
      },
      {
        "id": 24,
        "name": "Mayans",
        "expansion": "The Conquerors",
        "army_type": "Archer",
        "unique_unit": [
          "Plumed archer"
        ],
        "unique_tech": [
          "El Dorado"
        ],
        "team_bonus": "Walls are 50% cheaper",
        "civilization_bonus": [
          "Start game with 1 extra villager but -50 food",
          "Natural resources last 20% longer",
          "Archers cost -10% in Feudal Age/ -20% in Castle Age/ -30% in Imperial Age"
        ],
        "Shield": "images/Civs/menu_techtree_mayans.png",
        "Sound": "sound/civTheme__Pista24.mp3"
      },
      {
        "id": 25,
        "name": "Mongols",
        "expansion": "Age of Kings",
        "army_type": "Cavalry Archer",
        "unique_unit": [
          "Mangudai"
        ],
        "unique_tech": [
          "Mrill"
        ],
        "team_bonus": "Scout line has +2 Line of sight",
        "civilization_bonus": [
          "Cavalry Archers reload 20% faster",
          "Light Cavalry and Hussars have +30% HP",
          "Hunters work 50% faster"
        ],
        "Shield": "images/Civs/menu_techtree_mongols.png",
        "Sound": "sound/civTheme__Pista25.mp3"
      },      
      {
        "id": 26,
        "name": "Persians",
        "expansion": "Age of Kings",
        "army_type": "Cavalry",
        "unique_unit": [
          "War Elephant"
        ],
        "unique_tech": [
          "Mahouts"
        ],
        "team_bonus": "Knights have +2 attack versus Archers",
        "civilization_bonus": [
          "Start game with +50 wood and food",
          "Town Center and Docks have 2x HP",
          "Town Centers and Docks operate +10% faster in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age"
        ],
        "Shield": "images/Civs/menu_techtree_persians.png",
        "Sound": "sound/civTheme__Pista26.mp3"
      },
      {
        "id": 27,
        "name": "Portuguese",
        "expansion": "The Forgotten Empires",
        "army_type": "Navy and gunpowder units",
        "unique_unit": [
          "Organ Gun",
          "Caravel"
        ],
        "unique_tech": [
          "Carrack"
        ],
        "team_bonus": "Free Cartography from the beginning of the game.",
        "civilization_bonus": [
          "All units cost -15% gold.",
          "All ships have +10% HP.",
          "The Feitoria becomes available for building in the Imperial Age."
        ],
        "Shield": "images/Civs/menu_techtree_portuguese.png",
        "Sound": "sound/civTheme__Pista27.mp3"
      },
      {
        "id": 28,
        "name": "Saracens",
        "expansion": "Age of Kings",
        "army_type": "Camel and naval",
        "unique_unit": [
          "Mameluke"
        ],
        "unique_tech": [
          "Zealotry"
        ],
        "team_bonus": "Foot archers have +2 attack bonus against buildings",
        "civilization_bonus": [
          "Market trade cost is only 5%",
          "Transport Ships have 2x HP and carry capacity",
          "Galleys attack 20% faster",
          "Cavalry Archers have +4 attack bonus against buildings"
        ],
        "Shield": "images/Civs/menu_techtree_saracens.png",
        "Sound": "sound/civTheme__Pista28.mp3"
      },
      {
        "id": 29,
        "name": "Slavs",
        "expansion": "The Forgotten Empires",
        "army_type": "Infantry and siege weapons",
        "unique_unit": [
          "Boyar"
        ],
        "unique_tech": [
          "Orthodoxy"
        ],
        "team_bonus": "Military buildings (excluding Castles and Docks) provide +5 population.",
        "civilization_bonus": [
          "Farmers work 15% faster.",
          "Tracking is free. Since the Definitve Edition, Supplies is free.",
          "Siege Workshop units are 15% cheaper."
        ],
        "Shield": "images/Civs/menu_techtree_slavs.png",
        "Sound": "sound/civTheme__Pista29.mp3"
      },
      {
        "id": 30,
        "name": "Spanish",
        "expansion": "The Conquerors",
        "army_type": "Gunpowder and Monk",
        "unique_unit": [
          "Conquistador",
          "Missionary"
        ],
        "unique_tech": [
          "Supremacy"
        ],
        "team_bonus": "Trade units generate +25% Gold",
        "civilization_bonus": [
          "Villagers construct buildings 30% faster",
          "Blacksmith upgrades do not cost any gold",
          "Cannon Galleons benefit from Ballistics (less reload time and more accuracy)",
          "Hand Cannoneers and Bombard Cannons reload 15% faster"
        ],
        "Shield": "images/Civs/menu_techtree_spanish.png",
        "Sound": "sound/civTheme__Pista30.mp3"
      },
      {
        "id": 31,
        "name": "Tatars",
        "expansion": "Definitive Edition",
        "army_type": "Cavalry archers",
        "unique_unit": [
          "Keshik",
          "Flaming Camel"
        ],
        "unique_tech": [
          "Silk Armor"
        ],
        "team_bonus": "Trade units generate +25% Gold",
        "civilization_bonus": [
          "Herdables contain +50% food.",
          "Units deal +25% damage when attacking from hills (stacks with the regular hill attack bonus).",
          "Thumb Ring is free.",
          "Parthian Tactics is free."
        ],
        "Shield": "images/Civs/menu_techtree_tatars.png",
        "Sound": "sound/civTheme__Pista31.mp3"
      },
      {
        "id": 32,
        "name": "Teutons",
        "expansion": "Age of Kings",
        "army_type": "Infantry",
        "unique_unit": [
          "Teutonic Knight"
        ],
        "unique_tech": [
          "Crenellations"
        ],
        "team_bonus": "Units are more resistant to conversion",
        "civilization_bonus": [
          "Monks have 2x healing range",
          "Towers can garrison 2x units (more arrows)",
          "Murder Holes is free",
          "Farms cost 33% less",
          "Town Centers have +1 attack and +5 line of sight"
        ],
        "Shield": "images/Civs/menu_techtree_teutons.png",
        "Sound": "sound/civTheme__Pista32.mp3"
      },
      {
        "id": 33,
        "name": "Turks",
        "expansion": "Age of Kings",
        "army_type": "Gunpowder",
        "unique_unit": [
          "Janissary"
        ],
        "unique_tech": [
          "Artillery"
        ],
        "team_bonus": "Gunpowder units are created 20% faster",
        "civilization_bonus": [
          "Gunpowder Units have +25% HP",
          "Gunpowder technologies cost 50% less",
          "Chemistry is free",
          "Gold miners work 15% faster",
          "Light Cavalry and Hussar upgrades are free"
        ],
        "Shield": "images/Civs/menu_techtree_turks.png",
        "Sound": "sound/civTheme__Pista33.mp3"
      },
      {
        "id": 34,
        "name": "Vietnamese",
        "expansion": "Rise of the Rajas",
        "army_type": "Archers",
        "unique_unit": [
          "Rattan Archer",
          "Imperial Skirmisher"
        ],
        "unique_tech": [
          "Chatras"
        ],
        "team_bonus": "Imperial Skirmishers are available at the Archery Range.",
        "civilization_bonus": [
          "Reveal enemy positions at game start.",
          "Archery Range units have +20% HP.",
          "Conscription is free."
        ],
        "Shield": "images/Civs/menu_techtree_vietnamese.png",
        "Sound": "sound/civTheme__Pista34.mp3"
      },
      {
        "id": 35,
        "name": "Vikings",
        "expansion": "Age of Kings",
        "army_type": "Infantry and naval",
        "unique_unit": [
          "Berserk",
          "Longboat"
        ],
        "unique_tech": [
          "Berserkergang"
        ],
        "team_bonus": "Docks are 25% cheaper",
        "civilization_bonus": [
          "Warships cost 20% less",
          "Infantry have +10% HP in Feudal Age/ +15% in Castle Age/ +20% in Imperial Age",
          "Wheelbarrow and Hand Cart are free"
        ],
        "Shield": "images/Civs/menu_techtree_vikings.png",
        "Sound": "sound/civTheme__Pista35.mp3"
      }
    ]

    export { civilizations }
    

