var amenplay = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function runTheIDM() {
    var MASTERDATA = [
        "0'33'", "137 (Rinse)", "50 Cycles", "54 Cymru Beats", "6IE.CR", "7th Dimension",
        "90101-5l-l", "90101-61-01", "A Real Woman", "Acid Blue", "Acid Tape Track",
        "Acrid Avid Jam Shred", "Acroyear2", "Actium", "Afx237 V7", "Ageispolis",
        "Alberto Balsalm", "Altibzz", "Altichyre", "Amalgam", "An Arched Pathway",
        "Anaclasis", "Andrei", "Anirog D9", "Anstromm-Feck 4", "Aqueduct", "Arch Carrier",
        "Atlas", "Augmatic Disport", "Aussois", "Autriche", "Avril 14th", "B.U.G.",
        "Bad Trails", "Basscadet", "Bbydhyonchord", "Beep Street", "Beguotto",
        "Beskhu3epnm", "Big Head", "Bike", "Bine", "Birth Control", "Bit4",
        "Black Sabbath Medley Reversible", "Blancidiot", "Bliezzaning Möltz",
        "Blimmguass", "Blue Calx", "Body & Soul", "Boneville Occident", "Bonze From Hell",
        "Brixon Varromiks", "Bronchus 2", "Bronchusevenmx24", "Bríxön Varrömiks",
        "Btoum-Roumada", "Bubble Life", "Bupphairodazz", "Burning Stone", "C-Town Smash",
        "C/Pach", "Calbruc", "Caliper Remote", "Calnac", "Camvodia", "Carn Marth",
        "Cathastrophe", "Cathechism", "Celledomi Guazto", "Cfern", "Chin Hippy",
        "Chittam Irangaayo", "Chunk-S", "Cichli", "Cipater", "Circlewave",
        "Circular Flexing", "Classical Music Medley", "Clipper", "Cock/Ver10",
        "Come On You Slags!", "Comme a la radio", "Conc 2 Symmetriac", "Cool Veil",
        "Coopers World", "Corc", "Cornish Acid", "Cow Cud Is a Twin", "Cozhritto",
        "Cramm", "Creepies", "Crisis", "Cronecker King", "Curve 1", "Czerudmuntzail",
        "Dadaism", "Dael", "Dagdad", "Dapp", "Ddiamondd", "Dedicated Loop", 
        "Deep Fried Pizza", "Del Fanci Kant", "Delphium", "Delta-V", "Der Strudel",
        "Dhaskrive", "Dimotane Co", "District Line II", "Divided", "Djubatczegromm",
        "Do You Know Squarepusher?", "Doctrine", "Don't Go Plastic", "Drane2",
        "Drebin", "Drunken Style", "Duotone Moonbeam", "Dust Switch", "Dél Fãnci Känt",
        "Dölnnén Vlãst", "E8 Boogie", "Eccentric Ditch", "Economic Mond Possa",
        "Eggshell", "Eidetic Casein", "Empty Hands", "Entropy", "Epigonen",
        "Essential Logic", "Etymology", "Europe", "Eutow", "Every Day I Love",
        "Exciton", "F-Train", "Fall Out", "Fat Controller", "Father", "Faux Numero",
        "Fermium", "Ffenniko", "Ffilhizabmn", "Fingerbib", "Fluxgate", "Foil",
        "Fol3", "Fold4,Wrap5", "Fragment", "Freeway", "Further", "Future Gibbon",
        "Garbagemx36", "Gharaviss Perrdoh", "Girl/Boy Song", "Glitch", "Gnit",
        "Go! Spastic", "Gold Stone", "Goodbye Rute", "Goodnight Jade", "Goon Gumpas",
        "Government", "Gravestone", "Graviyaunosch", "Green Calx", "Greenways Trajectory",
        "Grubandgo", "Grudge", "Guamallapish", "Gurthemvhail", "Gwarek2", "Gwely Mernans",
        "Hail", "Hallelujah!", "Hanningfield Window", "Hard Rock Medley", "Heavy Water",
        "Hedphelym", "Heliosphan", "Hello Meow", "Heraklion", "Hexagon", "Hole Bones",
        "Holebones", "Hub", "Human Being", "Hy A Scullyas Lyf A Dhagrow",
        "Hyderomastgroningem", "I Fulcrum", "I Wish You Could Talk", "IO",
        "IV VV IV VV VIII", "Iambic 9 Poetry", "Icct Hedral", "Ideorogy", "Iera",
        "Ill Descent", "Infect", "Infinity", "Ipacial Section", "Iron Lady",
        "Issighirudoh", "Jallamjikko", "Jarregoh", "Jynweythek", "Kalpol Introl",
        "Katoman", "Kesson Daslef", "Kibbutz", "Kill Robok", "Kippssidamn",
        "Kladfvgbung Micshk", "Knaftt!!", "Kodack", "Komnigriss", "Komorebi",
        "Korromda Peimm", "Kpaligoth", "LCC", "Laipthcig", "Larikoschodel",
        "Last Ap Roach", "Last Rushup 10", "Leterel", "Leyendecker", "Logan Rock Witch",
        "Lornaderek", "Love", "Love Will Tear Us Apart", "Lowride", "Macarom Iyaike",
        "Maetl", "Magne", "Mahavishnu Orchestra Medley", "Male Pill, Part 13",
        "Masacari", "Medrey", "Meltphace 6", "Melve", "Memories of Zwõrrisdéh",
        "Menelec", "Mennevuogth", "Messiaen", "Metteng Excuske v1.2", "Mind Rubbers",
        "Misonta", "Modern Bass Guitar", "Mokchilco", "Montreal", "Mookid",
        "Mt Saint Michel Mix + St Michaels Mount", "Muoljimbog", "Mutilation Colony",
        "My Red Hot Car", "My Sound", "Nanou2", "Negotiation", "Next Heap With",
        "Nil", "Nine", "Nivaftopoftz", "Nocturne", "Noise Trade", "North Circular",
        "Notwo", "Nuane", "O=0", "October", "Octopus", "Octopuus", "Omgyjya Switch7",
        "Onyx", "Open Society", "Orban Eq Trx4", "Ordinary People in Idaho",
        "Orient Orange", "Out Burn", "Outh9X", "Overand", "P.:NTIL",
        "Pachtseills", "Pagoda", "Pallaschtom", "Papalon", "Parallelogram Bin",
        "Parhelic Triangle", "Patiently", "Peek 824545201", "Pen Expers",
        "Penty Harmonium", "Perlence", "Perlence range3", "Petiatil Cx Htdui",
        "Phylopn", "Piezo", "Pig Brag Crack", "Piobmx19", "Plaistow Flex Out",
        "Planet Gear", "Planetarium", "Plexus", "Plotinus", "Pontemcorary Music #1",
        "Pontemcorary Music #2", "Potential Govaner", "Power Shift", "Praha in Spring",
        "Prep Gwarlek 36", "Prismism", "Pro Radii", "Progressive Rock Medley",
        "Prrifth", "Ptolemy", "Pule", "Pulsewidth", "Quadrature", "Quetzalcoatl",
        "Quopern", "Race : In", "Race : Out", "Rae", "Rainbow", "Ramification",
        "Rat/P's and Q's", "Real Jam", "Rebus", "Recury", "Redhark", "Refusal Fossil",
        "Reniform Puls", "Reset", "Rettic AC", "Ripples", "Rotar", "Rotate Electrolyte",
        "Rsdio", "Ruglen Holon", "Ruin", "Rushup I Bank 12", "Rustic Raver", "Sac",
        "Sanctuary", "Savollodix", "Schizm Track #1", "Schottkey 7th Path", "Schvostess",
        "Second Bad Vilbel", "Second Peng", "Second Scepe", "Second Scout", "Shin Triad",
        "Shiz Ko E", "Shostak Ombrich", "Sill Life", "Silverside", "Sim Gishel", "Simmm",
        "Skhanddraviza", "Skyscraper", "Slash", "Slip", "Smedleys Melody", "Snake Pass",
        "Snare", "Snare Hangar", "SonDEre-ix", "SonDEremawe", "Spazm Cambilist",
        "Spèèd Bãll", "Square Rave", "Squarepusher Theme", "Star Time 2",
        "Stara Planina", "Start as You Mean to Go On", "Steels", "Steinbolt",
        "Step 1", "Stone Eater", "Stone Henge", "Stonehenge", "Strotha Tynhe", "Stud",
        "Sublimit", "Surripere", "Synthacon 9", "TAPR", "Taking Control", "Tankakern",
        "Tankraken", "Teartear", "Telluric Piece", "Tensor in Green", "Tesko",
        "Tetra-Sync", "Tewe", "Tha", "The 'Eye'", "The Coathanger",
        "The Exploding Psychology", "The Glass Road", "The Plc", "The PlclCpC",
        "The Swifty", "The Trees", "The Waxen Pith", "Thebes",
        "Theme From Ernest Borgnine", "Theme From Goodbye Renaldo",
        "Theme From Vertical Hold", "Theme from Sprite", "Theme of Sudden Roundabout",
        "Theswere", "Thrive", "Thrived", "Tij", "Time Borb", "To Cure a Weakling Child",
        "Tommib", "Tommib Help Buss", "Tomorrow World", "Tonto", "Treale", "Tundra",
        "Tzomborgha", "U.F.O.'s Over Leytonstone", "Ulnastricter", "Ultravisitor",
        "Under BOAC", "Uskilsdos Zaimm", "Uviol", "V-PROC", "VI Scose Poise",
        "VL AL 5", "Vacuum Garden", "Ventolin", "Vexoprakta", "Vic Acid",
        "Vletrmx21", "Vordhosbn", "Vose In", "Vrresto", "WNSN", "Wanzhemvergg",
        "Warrido", "We Are the Music Makers", "Welcome to Europe", "Wet Tip Hen Ax",
        "Windscale 2", "Windwind", "Xtal", "Xylin Room", "Yawiquo", "Yellow Calx",
        "Yes Sequitur", "Yo", "Yulquen", "Yuop", "Zajyu", "Zasca Coska",
        "Ziggomatic V17", "Zil", "Znohjmo", "Zumn-Vigo", "Zurna Taksïm", "bnc Castl",
        "chenc9", "chenc9-x", "d-sho qub", "fol4", "fwzE", "ilanders", "known(1)",
        "krYlon", "nofour", "os veix3", "paralel Suns", "plyPhon", "pt2ph8", "qplay",
        "r ess", "rale", "redfall", "see on see", "st epreo"
    ]
    
    // Need to loop five times
    var multiArr = [];
    var titleArr = [];
    for (let reps = 0; reps < 5; reps++) {
        titleArr = [];
        titleArr.push(document.getElementById('idmword').value);
        var randIter = Math.floor((Math.random() * 10) + 1);
        for (let iter = 0; iter < randIter; iter++) {
            randTitleNum = Math.floor(Math.random() * MASTERDATA.length);
            randTitle = MASTERDATA[randTitleNum];
            titleArr.push(randTitle.slice(1,2));
        }
        var finishedTitle = titleArr.join('');
        multiArr.push(finishedTitle);
    }
    document.getElementById('idmoutput').innerHTML = "<p style='text-align: center;'>Your semi random, (very) likely incomprehensible IDM names are:</p> \
         <p style='text-align: center;'>" + multiArr[0] + "</p> \
         <p style='text-align: center;'>" + multiArr[1] + "</p> \
         <p style='text-align: center;'>" + multiArr[2] + "</p> \
         <p style='text-align: center;'>" + multiArr[3] + "</p> \
         <p style='text-align: center;'>" + multiArr[4] + "</p>";
}

async function amenSeqRun() {
    var amenString = document.getElementById('amenseqstr').value;
    while (amenplay) {
        for (let x in amenString) {
            if (amenString[x] == " ") {
            await sleep(100);
            continue;
            }
            var currSlice = document.querySelector('.amen-' + amenString[x]);
            currSlice.classList.add('pressed');
            var clip = new Audio("./amen/" + amenString[x] + ".wav");
            clip.play();
            await sleep(100);
            currSlice.classList.remove('pressed');
        }
    }
}

document.getElementById('amenbutton').addEventListener('mousedown', function() {
    if (document.getElementById('amenseqstr').value != '') {
        amenplay = true;
        amenSeqRun();
    }
});

document.getElementById('amenbutton').addEventListener('mouseup', function() {
    amenplay = false;
});