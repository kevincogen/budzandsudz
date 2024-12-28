const express = require('express');
const path = require('path');  // Added for absolute path
const app = express();
const port = 3000;
// Data for the playlist submissions
const people = [
  { 
    name: "Kevin", 
    songs: [
      "Eyes and Mouth - The Smile",
      "Talk to me - Champion, Four Tet, Skrillex",
      "I Got Heaven - Mannequin Pussy",
      "Teleharmonic - The Smile",
      "Empires Never Know - Jessica Pratt"
    ]
  },
  { 
    name: "Jared", 
    songs: [
      "Alesis - Mk.gee",
      "Tell Me Who You Are Today - Beth Gibbons",
      "Starbursters - Fontaines DC",
      "Ticking - SPRINTS",
      "Sad In Carolina - Dexter and the Moonrocks"
    ]
  },
  { 
    name: "Fiona", 
    songs: [
      "Soak - Abby Sage",
      "Bubba - Hovvdy",
      "Cardinal - Kasey Musgraves",
      "Like I Say (I runaway )- Nilufer Yanya",
      "Run Your Mouth - The Maria's"
    ]
  },
  { 
    name: "Brooke", 
    songs: [
      "Negative spaces - Poppy",
      "Sonido Cósmico - Hermanos Gutiérrez",
      "Starfire Maelstrom - Bewitcher",
      "NY State of Mind - OMA",
      "Pon Pón - Khruangbin"
    ]
  },
  { 
    name: "Tim", 
    songs: [
      "Mint Chocolate - 1999 Write the Future & BBNG",
      "Satellite - Dimension & Alison Wonderland",
      "You - RY X & Hermanos Gutierrez",
      "Neverender - Justice & Tame Impala* 3Pick Ryan, Andrew",
      "No Pun Intended - Boldy James & Nicholas Craven"
    ]
  },
  { 
    name: "Warren", 
    songs: [
      "Wristwatch - MJ Lenderman",
      "Scooter Blues - Johnny Blue Skies * 2Pick Kevin",
      "Hanna - Oscar Louis & Chris Vincent",
      "Light the Light - Tim Baker",
      "Not Like Us - Kendrick Lamar"
    ]
  },
  { 
    name: "Jack", 
    songs: [
      "Lucky (Song 7) - Busty And The Bass",
      "Dream Police - Mk.gee",
      "I CAN'T LOSE YOU - Confidence Man",
      "POP POP POP - IDLES",
      "KISSES MAKE SURE - Strick, James Blake, Young Thug"
    ]
  },
  { 
    name: "Andrew", 
    songs: [
      "Bloodlines - Franc Moody",
      "Hotel Bed - Geoffroy",
      "Housewife Dreams of America - Gia Ford",
      "BLUE SKY - Kid Cudi",
      "Broken man - St Vincent",
      "(Let it be Known that Neverender-Justice was his most played song)"
    ]
  },
  { 
    name: "Victoria", 
    songs: [
      "Risk - Gracie Abrams",
      "Juno - Sabrina Carpenter* 2Pick Ryan",
      "The Kill - Maggie Rogers",
      "Down Bad - Taylor Swift",
      "If Now Was Then - Maggie Rogers"
    ]
  },
  { 
    name: "Caitlin", 
    songs: [
      "All in Good Time - Iron & Wine, Fiona Apple",
      "Deeper Well - Kacey Musgraves",
      "American Dreaming - Sierra Ferrell",
      "II MOST WANTED - Beyoncé, Miley Cyrus",
      "Buffalo - Hurray for the Riff Raff"
    ]
  },
  { 
    name: "Ben", 
    songs: [
      "Broke My Heart - Caribou",
      "Baby - Harry Hayes",
      "Tiny Moves - Bleachers",
      "Right Back to It - Waxahatchee, MJ Lenderman *4Pick: Kevin, Caitlin, Warren",
      "Riverbed - Til Howl"
    ]
  },
  { 
    name: "Ian", 
    songs: [
      "R&B - MIKE, Tony Seltzer",
      "Breaking Point - Erick the Architect, Baby Rose, Pale Jay, RUDE CAT",
      "Balloon - Tyler the Creator, Doechii",
      "NISSAN ALTIMA - Doechii",
      "Hoe-nouns - Smino, Thundercat, reggie"
    ]
  },
  { 
    name: "Olivia", 
    songs: [
      "Exceptional - Cadence Weapon",
      "Do You Still - Charlotte day Wilson",
      "Leaving Toronto - Mustafa",
      "Luther - Kendrick (with sza)",
      "Still - Kaytranada (ft Charlotte day Wilson)"
    ]
  },
  { 
    name: "Ryan", 
    songs: [
      "One Night/All Nights - Justice",
      "Let Go - Foster The People",
      "Polaris - Til Howl",
      "Illusion - Dua Lipa",
      "Yearning - Ray LaMontagne"
    ]
  },
  { 
    name: "Lee (and Odessa?)", 
    songs: [
      "Vulfmon - Disco Snails",
      "Mk.gee - Are You Looking Up",
      "Justice - Explorer",
      "Apple - Charlie Xcx",
      "Espresso - Sabrina Carpenter"
    ]
  }
];


// Set view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' folder using an absolute path
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views')); // Explicitly set the views directory


// Route for the main page
app.get('/', (req, res) => {
    res.render('index', { people });
});

// Export the app to be used by Vercel
module.exports = app;

//Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
