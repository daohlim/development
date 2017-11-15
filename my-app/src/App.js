import React, { Component } from 'react';
import './App.css';
import ListManager from './ListManager';
/*
This list of produce that is passed into the FilteredList component.
Notice that it is a list of javascript objects where {key: value}.
*/

const produce =
  [ { "desc" : "Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for her and dreamt of one day...",
      "winrate" : 60,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/18/AhriSquare.png/revision/latest?cb=20150402215212",
      "name" : "Ahri",
      "tags" : [ "assassin",
          "mage",
          "ranged"
        ]
    },
    { "desc" : "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou and it employs a triumvirate...",
      "winrate" : 59,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a5/AkaliSquare.png/revision/latest?cb=20150402215220",
      "name" : "Akali",
      "tags" : [ "assassin",
          "melee",
          "stealth"
        ]
    },
    { "desc" : "As the mightiest warrior to ever emerge from the Minotaur tribes of the Great Barrier, Alistar defended his tribe from Valoran's many dangers; that is, until the coming of the Noxian army. Alistar was lured from his village by the machinations of Keiran Darkwill, General Boram...",
      "winrate" : 40,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/34/AlistarSquare.png/revision/latest?cb=20150402215238",
      "name" : "Alistar",
      "tags" : [ "tank",
          "pusher",
          "melee"
        ]
    },
    { "desc" : "Perhaps one of the oddest champions in the League of Legends is the yordle known as Amumu. His life before joining the League remains unknown... especially to Amumu. All he remembers is that he woke up alone inside a pyramid within the Shurima Desert. He was entwined in mummy...",
      "winrate" : 45,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/26/AmumuSquare.png/revision/latest?cb=20150402215322",
      "name" : "Amumu",
      "tags" : [ "tank",
          "melee"
        ]
    },
    { "desc" : "In most lore, the phoenix is a creature of fire that rises from its own ashes. What few know, however, is that phoenixes are elemental beings, formed by the eternal essences of their native world. Anivia was conceived on a world such as this - a being of the coldest winter, a...",
      "winrate" : 43,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/01/AniviaSquare.png/revision/latest?cb=20151218185051",
      "name" : "Anivia",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "In the time shortly before the League, there were those within the sinister city-state of Noxus who did not agree with the evils perpetrated by the Noxian High Command. The High Command had just put down a coup attempt from the self-proclaimed Crown Prince Raschallion, and a...",
      "winrate" : 59,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6f/AnnieSquare.png/revision/latest?cb=20150404100758",
      "name" : "Annie",
      "tags" : [ "mage",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "One of the perennial favorites of summoners in the League of Legends is the Freljordian beauty known as Ashe. She is a direct descendant of Avarosa - one of three legendary sisters who each claimed dominion over the scattered tribes dwelling in the icy tundra of northern Valoran....",
      "winrate" : 42,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4a/AsheSquare.png/revision/latest?cb=20150402215403",
      "name" : "Ashe",
      "tags" : [ "carry",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "The city of Zaun is a place where both magic and science have gone awry. The unchecked nature of experimentation has taken its toll on the city.  However, Zaun's lenient restrictions allow their researchers and inventors the leeway to push the bounds of science at an accelerated...",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5b/BlitzcrankSquare.png/revision/latest?cb=20150402215457",
      "name" : "Blitzcrank",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people's way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a monster; to others, just a man....",
      "winrate" : 63,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ab/BrandSquare.png/revision/latest?cb=20150402215533",
      "name" : "Brand",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "One of the reasons Piltover is known as the City of Progress is because it has an extraordinarily low crime rate. This hasn't always been the case; brigands and thieves of all sorts used to find the city-state an ideal mark for plunder, primarily due to the valuable resources...",
      "winrate" : 51,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e6/CaitlynSquare.png/revision/latest?cb=20150402215548",
      "name" : "Caitlyn",
      "tags" : [ "carry",
          "ranged"
        ]
    },
    { "desc" : "While her sister Katarina has always been the most celebrated member of the household, the Du Couteau family has a long history of service to Noxus. It has often been said that no soldier has ever been as fortunate as General Du Couteau to have been graced with daughters. His...",
      "winrate" : 59,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/ca/CassiopeiaSquare.png/revision/latest?cb=20150402215553",
      "name" : "Cassiopeia",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "There is a place between dimensions, between worlds.  To some it is known as the Outside, to others it is the Unknown.  To those that truly know, however, it is called the Void.  Despite its name, the Void is not an empty place, but rather the home of unspeakable things - horrors...",
      "winrate" : 41,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ae/Cho%27GathSquare.png/revision/latest?cb=20150402215703",
      "name" : "Cho'Gath",
      "tags" : [ "bruiser",
          "mage",
          "melee"
        ]
    },
    { "desc" : "When Heimerdinger and his yordle colleagues migrated to Piltover, they embraced science as a way of life, and they immediately made several groundbreaking contributions to the techmaturgical community.  What yordles lack in stature, they make up for with industriousness.  Corki,...",
      "winrate" : 42,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3d/CorkiSquare.png/revision/latest?cb=20160629191728",
      "name" : "Corki",
      "tags" : [ "ranged",
          "carry"
        ]
    },
    { "desc" : "It is said that the man now known as Dr. Mundo was born without any sort of conscience.  Instead, he had an unquenchable desire to inflict pain through experimentation. By the time he was five, most of the pets in the Zaun neighborhood where Mundo grew up had gone missing. By...",
      "winrate" : 46,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/35/Dr._MundoSquare.png/revision/latest?cb=20160526212401",
      "name" : "Dr. Mundo",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Evelynn's origins are shrouded in mystery - a mystery she herself helps to perpetuate.  What everyone does know about Evelynn, however, is that she is one of the most skilled assassins in Valoran.  It is clear upon first meeting her that she is not quite human.  Some theorize...",
      "winrate" : 48,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5b/EvelynnSquare.png/revision/latest?cb=20170926190158",
      "name" : "Evelynn",
      "tags" : [ "assassin",
          "stealth",
          "melee"
        ]
    },
    { "desc" : "Ezreal was born with the gift of magic flowing through his veins. Ezreal, however, was also born with a much stronger sense of wanderlust. Put into school to become a skilled techmaturgist, Ezreal quickly became bored with magical studies. By the time the boy genius was eight...",
      "winrate" : 65,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c3/EzrealSquare.png/revision/latest?cb=20150402220010",
      "name" : "Ezreal",
      "tags" : [ "carry",
          "ranged"
        ]
    },
    { "desc" : "For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War.  Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home.  It is here that the Harbinger of Doom keeps a silent...",
      "winrate" : 49,
      "tier" : 2,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7c/FiddlesticksSquare.png/revision/latest?cb=20160412193130",
      "name" : "Fiddlesticks",
      "tags" : [ "mage",
          "jungler",
          "ranged"
        ]
    },
    { "desc" : "Centuries ago, an ancient water-dwelling race built a hidden city beneath a mountain in the sea. Though these creatures had their enemies, the city was an impenetrable fortress, and, in the safety it provided, they grew complacent. Fizz, however, harbored a curious spirit that...",
      "winrate" : 51,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/db/FizzSquare.png/revision/latest?cb=20150402220015",
      "name" : "Fizz",
      "tags" : [ "bruiser",
          "assassin",
          "melee"
        ]
    },
    { "desc" : "Long before the League's regulation of such magic, mages experimented with the creation of artificial life.  Now forbidden, instilling golems with reason was once not so uncommon a practice amongst the more expert of craftsmen.  One such visionary was the Demacian artificer,...",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/40/GalioSquare.png/revision/latest?cb=20170308183135",
      "name" : "Galio",
      "tags" : [ "tank",
          "support",
          "melee"
        ]
    },
    { "desc" : "Gangplank was born the son of the dread pirate captain Vincent the Shadow - one of the most wealthy and feared pirates in all of Blue Flame Island.  One might think this would have spoiled the boy with a cushioned life of privilege, but the truth is quite the opposite.  Growing...",
      "winrate" : 41,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fe/GangplankSquare.png/revision/latest?cb=20151218185426",
      "name" : "Gangplank",
      "tags" : [ "bruiser",
          "melee",
          "carry"
        ]
    },
    { "desc" : "Throughout Valoran, the resolve of Demacia's military is alternately celebrated or despised, but always respected.  Their ''zero tolerance'' moral code is strictly upheld by civilians and soldiers alike.  In combat, this means Demacian troops may not make excuses, flee, or surrender...",
      "winrate" : 56,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ea/GarenSquare.png/revision/latest?cb=20150402220048",
      "name" : "Garen",
      "tags" : [ "bruiser",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "The foothills of the Great Barrier are home to the hardiest people found anywhere on Valoran. Only those with great fortitude and endurance dwell in what is perhaps the most rugged and unforgiving environment anywhere on the face of Runeterra. It is here that the mighty Gragas...",
      "winrate" : 59,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/67/GragasSquare.png/revision/latest?cb=20150402220132",
      "name" : "Gragas",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Malcolm Graves was born in the back of a Bilgewater tavern and left there with a bottle of spiked milk.  He survived a childhood in the pirate-run slums using every dirty trick in the book.  Intent on building a new life for himself, he stowed away on the first ship to the mainland...",
      "winrate" : 54,
      "tier" : 2,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/26/GravesSquare.png/revision/latest?cb=20170813121658",
      "name" : "Graves",
      "tags" : [ "carry",
          "ranged"
        ]
    },
    { "desc" : "It is unusual to see yordles outside of Bandle City, but the lure of science was something Heimerdinger could not resist.  By the time he'd completed his third doctorate, he had already become the greatest of all yordle scientists and there was little his home could still offer...",
      "winrate" : 44,
      "tier" : 2,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/58/HeimerdingerSquare.png/revision/latest?cb=20150402220126",
      "name" : "Heimerdinger",
      "tags" : [ "mage",
          "pusher",
          "ranged"
        ]
    },
    { "desc" : "The Ionians have developed some of the most breathtaking and deadly martial arts on all of Runeterra - just one manifestation of their pursuit of enlightenment. The most remarkable blade style to emerge, however, was the unusual byproduct of foreign intervention. Master Lito...",
      "winrate" : 49,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/72/IreliaSquare.png/revision/latest?cb=20160326091020",
      "name" : "Irelia",
      "tags" : [ "assassin",
          "melee"
        ]
    },
    { "desc" : "There are those sorcerers who give themselves over to the primal powers of nature, forgoing the learned practice of magic. Such a sorceress is Janna, who first learned magic as an orphan growing up admist the chaos that is the city-state of Zaun. Janna eked out what living she...",
      "winrate" : 40,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/3/3f/JannaSquare.png/revision/latest?cb=20150402220208",
      "name" : "Janna",
      "tags" : [ "support",
          "ranged"
        ]
    },
    { "desc" : "As the royal family of Demacia for centuries, members of the Lightshield line have spent their lives waging war against any who opposed Demacian ethics. It is said that every Lightshield is born with anti-Noxian sentiment in his blood. Jarvan IV is no exception, even though he...",
      "winrate" : 59,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6c/Jarvan_IVSquare.png/revision/latest?cb=20150402220210",
      "name" : "Jarvan IV",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "It is seldom the case where a champion is defined by his actions after joining the League of Legends rather than before. Such is the case with Jax, for whom the argument could be made that he is the most prolific tournament fighter currently at the Institute of War. Before joining...",
      "winrate" : 54,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0f/JaxSquare.png/revision/latest?cb=20150402220202",
      "name" : "Jax",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Even in her youth, Karma exhibited almost superhuman composure. While her peers explored the torrent of emotions that came with adolescence, Karma meditated in the Lotus Gardens. She was convinced that the true path to enlightenment was a journey inward, to a place within the...",
      "winrate" : 43,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4f/KarmaSquare.png/revision/latest?cb=20150402220251",
      "name" : "Karma",
      "tags" : [ "support",
          "ranged"
        ]
    },
    { "desc" : "The vast quantities of physical magic that were consumed and destroyed during Valoran's numerous Rune Wars have scarred much of Valoran.  Many locations far from civilization have been morphed into hazardous and dangerous locales.  The Howling Marsh is one of these places, and...",
      "winrate" : 50,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e1/KarthusSquare.png/revision/latest?cb=20160326090500  ",
      "name" : "Karthus",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "There is a place between dimensions and between worlds. To some it is known as the Outside, to others it is the Unknown. To most, however, it is called the Void. Despite its name, the Void is not an empty place, but rather the home of unspeakable things, horrors not meant for...",
      "winrate" : 48,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/57/KassadinSquare.png/revision/latest?cb=20150402220329",
      "name" : "Kassadin",
      "tags" : [ "assassin",
          "mage",
          "melee"
        ]
    },
    { "desc" : "As a militaristic state, it would perhaps come as no surprise that the primary responsibilities of Noxian women are raising strong children and providing succor for husbands who walk the path of soldiery. There are some, however, for whom nurture is not nature, and Katarina is...",
      "winrate" : 55,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ae/KatarinaSquare.png/revision/latest?cb=20150402220331",
      "name" : "Katarina",
      "tags" : [ "assassin",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "In a world far away where an ancient war still rages, Kayle was a great hero - the strongest of an immortal race committed to destroying evil wherever it could be found.  For ten thousand years, Kayle fought tirelessly for her people, wielding her flaming sword forged before...",
      "winrate" : 60,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bd/KayleSquare.png/revision/latest?cb=20150402220333",
      "name" : "Kayle",
      "tags" : [ "bruiser",
          "support"
        ]
    },
    { "desc" : "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou and it employs a triumvirate...",
      "winrate" : 55,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/69/KennenSquare.png/revision/latest?cb=20160510182835",
      "name" : "Kennen",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "When the prophet Malzahar was reborn in Icathia, he was led there by an ominous voice which thereafter anchored itself to his psyche. From within, this voice bestowed upon him terrible purpose, and though Malzahar was no longer tormented by its call, the voice did not cease its...",
      "winrate" : 56,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/45/Kog%27MawSquare.png/revision/latest?cb=20150402220409",
      "name" : "Kog'Maw",
      "tags" : [ "ranged",
          "carry"
        ]
    },
    { "desc" : "Every city has its dark side, even one whose reputation is already of a questionable hue. Noxus - though its name is already invoked with a mixture of reverence and revulsion - is no exception to this simple truth. Deep within the winding dungeons that honeycomb the earth beneath...",
      "winrate" : 57,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f1/LeBlancSquare.png/revision/latest?cb=20160526213056",
      "name" : "LeBlanc",
      "tags" : [ "assassin",
          "mage",
          "ranged"
        ]
    },
    { "desc" : "As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League's High Councilor at the time. While studying at the Arcanum Majoris, Lee Sin became frustrated...",
      "winrate" : 44,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4f/Lee_SinSquare.png/revision/latest?cb=20170321025728",
      "name" : "Lee Sin",
      "tags" : [ "assassin",
          "melee"
        ]
    },
    { "desc" : "On the upper slopes of Mount Targon, the warriors of Rakkor live and breathe only for war.  However, Targon's peak is reserved for a special group of Rakkoran who answer to a ''higher'' calling.  Members of this group, called the Solari, retire their mantles of war, choosing...",
      "winrate" : 49,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/54/LeonaSquare.png/revision/latest?cb=20150402220518",
      "name" : "Leona",
      "tags" : [ "tank",
          "melee"
        ]
    },
    { "desc" : "Born to the prestigious Crownguards,  the paragon family of Demacian service, Luxanna was destined for greatness.  She grew up as the family's only daughter, and she immediately took to the advanced education and lavish parties required of families as high profile as the Crownguards....",
      "winrate" : 59,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/01/LuxSquare.png/revision/latest?cb=20150402220552",
      "name" : "Lux",
      "tags" : [ "mage",
          "support",
          "ranged"
        ]
    },
    { "desc" : "There is a world of perfect harmony, where all are part of the whole. The Monolith is the essence of all creation, and its denizens are but singular pieces of it. It is beautiful in its symmetry, and in its almost complete lack of uncertainty. The rocky beings that live there...",
      "winrate" : 54,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6f/MalphiteSquare.png/revision/latest?cb=20150402220554",
      "name" : "Malphite",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Many men have gone mad beneath the glare of the Shurima sun, but it was during the night's chilling embrace that Malzahar relinquished his sanity.  Malzahar was born a seer, blessed with the gift of prophecy.  His talent, though unrefined, promised to be one of Runeterra's greatest...",
      "winrate" : 60,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a7/MalzaharSquare.png/revision/latest?cb=20160419185355",
      "name" : "Malzahar",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "The twisting magical energies unleashed by mages during the Rune Wars caused an incredible amount of devastation to the natural world.  The League was established to control the use of this magic by confining it to the Fields of Justice.  By limiting its use to there, they thought...",
      "winrate" : 57,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/64/MaokaiSquare.png/revision/latest?cb=20150402220612",
      "name" : "Maokai",
      "tags" : [ "tank",
          "pusher",
          "melee"
        ]
    },
    { "desc" : "Keeper of the ancient art of Wuju, Master Yi is a mystical warrior from the isle of Ionia.  He descended from one of the few tribes dedicated to the preservation of Wuju, a martial art founded with the principles of absolute spiritual awareness of one's self and one's enemy....",
      "winrate" : 50,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b2/Master_YiSquare.png/revision/latest?cb=20150402220630  ",
      "name" : "Master Yi",
      "tags" : [ "carry",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "For those who brave the harsh seas of Runeterra, attaining one's own ship and crew is the pinnacle of success. Sarah Fortune, a well-respected (some would say legendary) bounty hunter from Bilgewater, was able to achieve this feat just after her sixteenth birthday, etching out...",
      "winrate" : 51,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/53/Miss_FortuneSquare.png/revision/latest?cb=20170221050257",
      "name" : "Miss Fortune",
      "tags" : [ "ranged",
          "carry"
        ]
    },
    { "desc" : "During the most recent winter solstice - when no other night during the year is longer - a being like no other emerged from the forgotten alleyways of Noxus. Standing eight feet tall, and concealed within a razor-sharp armored shell, he came to be known only as Mordekaiser. The...",
      "winrate" : 52,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4d/MordekaiserSquare.png/revision/latest?cb=20150402220635",
      "name" : "Mordekaiser",
      "tags" : [ "bruiser",
          "pusher",
          "melee"
        ]
    },
    { "desc" : "There is a world far away populated by graceful and beautiful winged beings gifted with immortality, where an ancient conflict still rages. Like so many conflicts, this war split families. One side proclaimed themselves as beings of perfect order and justice, fighting to unite...",
      "winrate" : 45,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d8/MorganaSquare.png/revision/latest?cb=20150402220702",
      "name" : "Morgana",
      "tags" : [ "mage",
          "support",
          "ranged"
        ]
    },
    { "desc" : "The enigmatic creature known as Nasus came to the League from a faraway world, and served as part of a vast and learned desert empire. There he was a respected and enlightened individual, having been made the Keeper of the Great Library. However, he was also part of a race of...",
      "winrate" : 45,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/58/NasusSquare.png/revision/latest?cb=20150402220659",
      "name" : "Nasus",
      "tags" : [ "bruiser",
          "pusher",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "There are few dwellers, let alone champions, residing in the blasted and dangerous lands that lie south of the Great Barrier. Much of that world still bears the scars of past Runes Wars, especially the mysterious Kumungu Jungle. There are long-forgotten treasures in these strange...",
      "winrate" : 46,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7c/NidaleeSquare.png/revision/latest?cb=20150402220734",
      "name" : "Nidalee",
      "tags" : [ "support",
          "pusher"
        ]
    },
    { "desc" : "Before Nocturne, people believed that dreams were figments of their imagination, meaningless images that flashed through the mind when one slept. This belief was put to the test when a rash of sleep-related incidents started afflicting summoners of the League. Some would wake...",
      "winrate" : 56,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/65/NocturneSquare.png/revision/latest?cb=20150402220735",
      "name" : "Nocturne",
      "tags" : [ "assassin",
          "melee"
        ]
    },
    { "desc" : "Freljord is an unforgiving land covered in snow and ice. Travel, especially in the winter, can be very dangerous. The elements often claim even those who have spent their entire lives there. The boy known as Nunu is defined by such tragedy. One day when he was a young child,...",
      "winrate" : 52,
      "tier" : 2,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ef/NunuSquare.png/revision/latest?cb=20150402220737",
      "name" : "Nunu",
      "tags" : [ "bruiser",
          "melee",
          "jungler",
          "recommended"
        ]
    },
    { "desc" : "On an uncharted continent beyond Valoran's grasping clutches, the conqueror named Olaf was born to a long tradition of soldiers unlike most others.  Berserkers, as they tout themselves, are warriors who channel fury deep from their cores, unleashing pure and savage wrath upon...",
      "winrate" : 52,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/2b/OlafSquare.png/revision/latest?cb=20150402220802",
      "name" : "Olaf",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "There once was a Piltovian man named Corin Reveck who had a daughter named Orianna, whom he loved more than anything else in the world. Though Orianna had incredible talent for dancing, she was deeply fascinated by the champions of the League of Legends. This fascination compelled...",
      "winrate" : 51,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b0/OriannaSquare.png/revision/latest?cb=20150402220803",
      "name" : "Orianna",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "Far above the clouds on Mount Targon resides a stalwart tribe of people known as the Rakkor who still revere combat and war as ultimate artforms. They remember the Rune Wars of Runeterra and know that the League of Legends can only repress the rising tides of violence for so...",
      "winrate" : 60,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9b/PantheonSquare.png/revision/latest?cb=20160526213517",
      "name" : "Pantheon",
      "tags" : [ "assassin",
          "melee"
        ]
    },
    { "desc" : "While other young yordle girls played skip-step and braided wreathes out of posies, Poppy spent her youth earning calluses and grease stains in her father's armor shop.  Blomgrun, her father, was Bandle City's finest smith.  The only thing he loved as much as his work was his...",
      "winrate" : 58,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e3/PoppySquare.png/revision/latest?cb=20151124204455",
      "name" : "Poppy",
      "tags" : [ "bruiser",
          "assassin",
          "melee"
        ]
    },
    { "desc" : "Ravaged by Rune Wars long past, the lands south of the Great Barrier are wrecked by chaotic magical storms, leaving the grasp of nature's rule tenuous at best. While abnormal flora or fauna are the norm rather than the exception in these ruined areas, perhaps none is more curious...",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7c/RammusSquare.png/revision/latest?cb=20160413190405",
      "name" : "Rammus",
      "tags" : [ "tank",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "On a faraway world, Renekton was born a member of a race of bestial guardians created to serve as the rulers and protectors of their people. Alongside his brother Nasus, Renekton oversaw the upkeep of the Great Library, which served as both a vault of ancient knowledge and the...",
      "winrate" : 58,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fc/RenektonSquare.png/revision/latest?cb=20150402220903",
      "name" : "Renekton",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "In Noxus, any citizen may rise to power regardless of race, gender, or social standing - strength is all that matters. It was with committed faith in this ideal that Riven strove to greatness. She showed early potential as a soldier, forcing herself to master the weight of a...",
      "winrate" : 62,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/46/RivenSquare.png/revision/latest?cb=20150402220906",
      "name" : "Riven",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Even amongst yordles, Rumble was always the runt of the litter. As such, he was used to being bullied. In order to survive, he had to be scrappier and more resourceful than his peers. He developed a quick temper and a reputation for getting even, no matter who crossed him. This...",
      "winrate" : 58,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/13/RumbleSquare.png/revision/latest?cb=20150402220909",
      "name" : "Rumble",
      "tags" : [ "mage",
          "melee",
          "pusher"
        ]
    },
    { "desc" : "There are many on Runeterra who are attracted to the study of magic or, in recent times, the emerging field of techmaturgy. For most, pursuit of such knowledge is formalized in a college or university. The halls of traditional study were never for Ryze, however, who felt a more...",
      "winrate" : 63,
      "tier" : 2,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/28/RyzeSquare.png/revision/latest?cb=20160630224634",
      "name" : "Ryze",
      "tags" : [ "mage",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "When Sejuani was born, the mystics of her tribe foretold that she would be the one to unite and lead the divided territories of Freljord.  Her people had suffered for centuries, as a losing war on the frozen tundra pushed them farther and farther from Freljord's limited food...",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/93/SejuaniSquare.png/revision/latest?cb=20150402220939",
      "name" : "Sejuani",
      "tags" : [ "tank",
          "jungler",
          "melee"
        ]
    },
    { "desc" : "Most would say that death isn't funny. It isn't, unless you're Shaco - then it's hysterical. He is Valoran's first fully functioning homicidal comic; he jests until someone dies, and then he laughs. The figure that has come to be known as the Demon Jester is an enigma. No one...",
      "winrate" : 55,
      "tier" : 2,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/93/ShacoSquare.png/revision/latest?cb=20150402220937",
      "name" : "Shaco",
      "tags" : [ "assassin",
          "stealth",
          "melee"
        ]
    },
    { "desc" : "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance.  Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe.  This order is known as the Kinkou and it employs a triumvirate...",
      "winrate" : 57,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d3/ShenSquare.png/revision/latest?cb=20160113232959",
      "name" : "Shen",
      "tags" : [ "tank",
          "support",
          "melee"
        ]
    },
    { "desc" : "Half-Dragons are the forbidden scions of humans and shape-shifting dragons. There have been few in the world, as they are typically hunted down by their draconian relatives. The scarce and reclusive dragons left on Runeterra find it disgusting to mix their blood with the frivolous...",
      "winrate" : 57,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f6/ShyvanaSquare.png/revision/latest?cb=20150402221059",
      "name" : "Shyvana",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Singed descended from a long line of Zaun's revered chemists. Even in his youth, his talent for concocting potions far outstripped that of his peers, and he quickly distinguished himself from his less extraordinary chemist compatriots. It came as no surprise to anyone when he...",
      "winrate" : 47,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/96/SingedSquare.png/revision/latest?cb=20150402221057",
      "name" : "Singed",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "Prior to the creation of the League of Legends, the city-states of Demacia and Noxus were locked in a brutal series of on-again-off-again wars that spanned the course of centuries.  Both powers sought an advantage over the other, but Noxus was the city-state willing to forego...",
      "winrate" : 47,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/61/SionSquare.png/revision/latest?cb=20150402221054",
      "name" : "Sion",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "The beautiful and deadly champion known as Sivir has been a favorite of League summoners for close to a decade.  A soldier-for-hire outside of the Fields of Justice, she is the embodiment of a highly successful mercenary on modern day Runeterra.  Sivir has little interest in...",
      "winrate" : 56,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e1/SivirSquare.png/revision/latest?cb=20150402221110",
      "name" : "Sivir",
      "tags" : [ "carry",
          "pusher",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "Centuries ago, there lived a race of creatures as ferocious as they were wise. The brackern were unusual beings blessed with the earth's primal magic, embodied in the form of crystals. Their kind knew of an arcane ritual to bind their life's essence to a crystal, communing with...",
      "winrate" : 56,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/80/SkarnerSquare.png/revision/latest?cb=20150402221137",
      "name" : "Skarner",
      "tags" : [ "bruiser",
          "jungler",
          "melee"
        ]
    },
    { "desc" : "Sona has no memories of her true parents. As an infant, she was found abandoned on the doorstep of an Ionian adoption house, nestled atop an ancient instrument in an exquisite case of unknown origins. She was an unusually well-behaved child, always quiet and content. Her caretakers...",
      "winrate" : 54,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/56/SonaSquare.png/revision/latest?cb=20150402221141",
      "name" : "Sona",
      "tags" : [ "support",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "Soraka, the Starchild of Ionia, was the first of her kind. While there are many who tap into the rich magical energies of Valoran, she was the first to tap into the magic of the cosmos itself - the celestial sea in which it is theorized that Runeterra swims among other like bodies....",
      "winrate" : 51,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8d/SorakaSquare.png/revision/latest?cb=20150402221143",
      "name" : "Soraka",
      "tags" : [ "support",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "The earliest account of Swain's existence comes from a Noxian infirmary doctor's notes. According to them, Swain limped into the ward without cry or complaint; his right leg was snapped in half, with bone protruding from the skin. A small, scowling bird seemed affixed to his...",
      "winrate" : 50,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8c/SwainSquare.png/revision/latest?cb=20160412192239",
      "name" : "Swain",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "Talon's earliest memories are the darkness of Noxus' underground passages and the reassuring steel of a blade. He remembers no family, warmth, or kindness. Instead, the clink of stolen gold and the security of a wall at his back are all the kinship he has ever craved. Kept alive...",
      "winrate" : 51,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f9/TalonSquare.png/revision/latest?cb=20150402221208",
      "name" : "Talon",
      "tags" : [ "assassin",
          "melee"
        ]
    },
    { "desc" : "There is a form of magic unknown to many Runeterrans and discredited by the few who are even aware of its existence. It is the magic of the earth, drawing power from the resonance of crystals and gems. Taric, the Gem Knight, is Runeterra's sole practitioner of this form of magic,...",
      "winrate" : 44,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c4/TaricSquare.png/revision/latest?cb=20160405191023",
      "name" : "Taric",
      "tags" : [ "tank",
          "support",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "Teemo is a legend among his yordle brothers and sisters in Bandle City. As far as yordles are concerned, there is something just slightly off about him. While Teemo enjoys the companionship of other yordles, he also insists on frequent solo missions in the ongoing defense of...",
      "winrate" : 57,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/04/TeemoSquare.png/revision/latest?cb=20150402221254",
      "name" : "Teemo",
      "tags" : [ "support",
          "stealth",
          "ranged"
        ]
    },
    { "desc" : "The Megling Commandos are something of a legend in Bandle City. They have a history that spans centuries, and they remain the oldest yordle military unit still in service. They are renowned for their courage, deadliness, and ruthlessness, making them the most respected and feared...",
      "winrate" : 47,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/0/06/TristanaSquare.png/revision/latest?cb=20150402221501",
      "name" : "Tristana",
      "tags" : [ "carry",
          "ranged",
          "recommended"
        ]
    },
    { "desc" : "Trolls have never been well-regarded beings of Valoran. Generally speaking, they are barbaric, cannibalistic, and sneaky. They are creatures relegated to the murky recesses of the world, hidden away from most intelligent beings. Despite their maleficent natures, however, the...",
      "winrate" : 48,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c4/TrundleSquare.png/revision/latest?cb=20150402221506",
      "name" : "Trundle",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "There are those who choose not to live in one of the great city-states of Valoran. Instead, they live in remote locales, often as part of a nomad or barbarian tribe. While perils abound in these untamed lands, there is also great freedom in being removed from the politics of...",
      "winrate" : 47,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/5/5f/TryndamereSquare.png/revision/latest?cb=20150402221636",
      "name" : "Tryndamere",
      "tags" : [ "carry",
          "melee"
        ]
    },
    { "desc" : "Although born to poor gypsy parents, the champion known as Twisted Fate was able to gamble his way to prosperity as a card shark in the seedy underground gambling circuits of Demacia and Noxus.  No matter how close the authorities came to catching him, the rogue always found...",
      "winrate" : 47,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fb/Twisted_FateSquare.png/revision/latest?cb=20150402221634",
      "name" : "Twisted Fate",
      "tags" : [ "assassin",
          "pusher",
          "ranged"
        ]
    },
    { "desc" : "The city-state of Zaun is a twisted realm of science, mercantilism, and magic run amok.  While the young science of techmaturgy does much to advance civilization, its research and use in Zaun pushes the boundaries of morality on a daily basis.  Zaun, choked with pollution from...",
      "winrate" : 51,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/79/TwitchSquare.png/revision/latest?cb=20150402221633",
      "name" : "Twitch",
      "tags" : [ "carry",
          "stealth",
          "ranged"
        ]
    },
    { "desc" : "The mystics of Ionia delve into the deepest mysteries of Valoran, pioneering the most inner depths of spirituality.  Their adepts are some of the most devout proponents of enlightenment and harmony...but as is always the case, there are those who follow a very different path....",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d1/UdyrSquare.png/revision/latest?cb=20150402221631",
      "name" : "Udyr",
      "tags" : [ "bruiser",
          "melee"
        ]
    },
    { "desc" : "There are warriors who become great for their strength, cunning, or skill with arms.  Others simply refuse to die.  Urgot, once a great soldier of Noxus, may constitute a case in support of the latter.  Prone to diving headlong into enemy battle lines, Urgot sewed chaos throughout...",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/88/UrgotSquare.png/revision/latest?cb=20170711190113",
      "name" : "Urgot",
      "tags" : [ "bruiser",
          "ranged"
        ]
    },
    { "desc" : "The world is not always as civilized as people might think. There are still those who would follow the blackest paths of magic and become corrupted by the darker powers that flow through Runeterra. Shauna Vayne knows this fact well. As a young privileged girl in the heart of...",
      "winrate" : 53,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/95/VayneSquare.png/revision/latest?cb=20150402222338",
      "name" : "Vayne",
      "tags" : [ "carry",
          "ranged",
          "assassin",
          "stealth"
        ]
    },
    { "desc" : "To most, thoughts of yordles do not conjure images to be feared. The easygoing half-pint race, though fierce, is often regarded with some degree of joviality. Their high-pitched voices and naturally cute forms inspire something of a protective instinct in the larger races, or...",
      "winrate" : 55,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/VeigarSquare.png/revision/latest?cb=20150402222337",
      "name" : "Veigar",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "Early in life, Viktor discovered his passion for science and invention, particularly in the field of mechanical automation.  He attended Zaun's prestigious College of Techmaturgy and led the team that constructed Blitzcrank – a scientific breakthrough that he expected to vault...",
      "winrate" : 43,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/a3/ViktorSquare.png/revision/latest?cb=20150402222333",
      "name" : "Viktor",
      "tags" : [ "mage",
          "ranged",
          "pusher"
        ]
    },
    { "desc" : "There is a temple hidden in the mountains between Noxus and the Tempest Flats, where the secrets of an ancient and terrifying sorcery are kept.  The area surrounding the temple is littered with the exsanguinated corpses of those who have mistakenly wandered too close.  These...",
      "winrate" : 41,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/75/VladimirSquare.png/revision/latest?cb=20150402222423",
      "name" : "Vladimir",
      "tags" : [ "bruiser",
          "mage",
          "ranged"
        ]
    },
    { "desc" : "Though the northern reaches of Freljord are some of the most unforgiving lands in Valoran, the Ursine have survived upon the region's barren, stormy tundra for centuries. As a fierce and respected warrior of the Ursine, Volibear devoted his life to the protection of his people...",
      "winrate" : 41,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/f/f9/VolibearSquare.png/revision/latest?cb=20160526214257 ",
      "name" : "Volibear",
      "tags" : [ "tank",
          "bruiser",
          "jungler",
          "melee"
        ]
    },
    { "desc" : "Warwick counted himself amongst the most powerful and revered men in his home city-state of Zaun.  Over the course of his infamous career as an alchemist, Warwick won many honors for his craft, not the least of which was a lucrative offer for service in the Noxian military during...",
      "winrate" : 41,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/42/WarwickSquare.png/revision/latest?cb=20170110204118",
      "name" : "Warwick",
      "tags" : [ "bruiser",
          "jungler",
          "melee",
          "recommended"
        ]
    },
    { "desc" : "During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who were particularly empowered...",
      "winrate" : 43,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/6d/WukongSquare.png/revision/latest?cb=20150402222522",
      "name" : "Wukong",
      "tags" : [ "bruiser",
          "melee",
          "stealth"
        ]
    },
    { "desc" : "In the ancient civilization of Shurima, the mage called Xerath practiced magic with undying passion. He believed that with enough magical power, he could gaze into the heart of Runeterra to know the secrets of history and the universe beyond. Such magic was beyond the limitations...",
      "winrate" : 45,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7a/XerathSquare.png/revision/latest?cb=20150402222520",
      "name" : "Xerath",
      "tags" : [ "mage",
          "ranged"
        ]
    },
    { "desc" : "Whenever Jarvan III, the king of Demacia, delivers one of his rallying speeches from the glinting marble balcony atop the Royal Palace, Xin Zhao is at his side. Coined the Seneschal of Demacia, Xin Zhao is the personal steward of the Lightshield Dynasty. His enigmatic, silent...",
      "winrate" : 45,
      "tier" : 5,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/6/63/Xin_ZhaoSquare.png/revision/latest?cb=20160406214802",
      "name" : "Xin Zhao",
      "tags" : [ "bruiser",
          "assassin",
          "melee"
        ]
    },
    { "desc" : "The work of gravediggers is essential amongst the living, but invaluable in the Shadow Isles. There are many shades of death there, and each is embraced rather than feared or reviled. One can only ascend from one state to the next with the magical aid of a skilled professional....",
      "winrate" : 47,
      "tier" : 3,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d8/YorickSquare.png/revision/latest?cb=20160823190542",
      "name" : "Yorick",
      "tags" : [ "bruiser",
          "pusher",
          "melee"
        ]
    },
    { "desc" : "In the wastelands of Urtistan, there was once a great city. It perished long ago in a terrible Rune War, like most of the lands below the Great Barrier. Nevertheless, one man survived: a sorcerer named Zilean. Being obsessed with time, it was only fitting that he dwelled in the...",
      "winrate" : 49,
      "tier" : 4,
      "imgLink" : "https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ac/ZileanSquare.png/revision/latest?cb=20150402222614",
      "name" : "Zilean",
      "tags" : [ "mage",
          "support",
          "ranged"
        ]
    }
  ];

class App extends Component {
    render() {
        return (
          <div className="container">
            <div className="header">
              <h1> League of Legends </h1>
                <h2> Champion Search </h2>
            </div>
            <div className="App">
                <ListManager items={produce} />
            </div>
          </div>
        )
    }
}

export default App;
