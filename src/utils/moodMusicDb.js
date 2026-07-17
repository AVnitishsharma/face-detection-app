export const MOOD_DETAILS = {
  "😊 Happy": {
    name: "Happy",
    emoji: "😊",
    genres: ["Happy", "Party", "Pop"],
    themeClass: "mood-happy",
    description: "Get ready to smile and dance! Upbeat hits to lift your spirits.",
  },
  "😢 Sad": {
    name: "Sad",
    emoji: "😢",
    genres: ["Calm", "Soft", "Lo-fi"],
    themeClass: "mood-sad",
    description: "Comforting, soft tunes and gentle lo-fi beats for reflection.",
  },
  "😠 Angry": {
    name: "Angry",
    emoji: "😠",
    genres: ["Relax", "Meditation", "Soft"],
    themeClass: "mood-angry",
    description: "Cool down and soothe your mind with deeply calming, meditative soundscapes.",
  },
  "😲 Surprise": {
    name: "Surprise",
    emoji: "😲",
    genres: ["Energetic", "Dance"],
    themeClass: "mood-surprise",
    description: "Exciting, high-tempo beats that match your shocked energy!",
  },
  "😐 Neutral": {
    name: "Neutral",
    emoji: "😐",
    genres: ["Chill", "Instrumental"],
    themeClass: "mood-neutral",
    description: "Relaxed background vibes, smooth jazz, and steady beats.",
  },
  "😴 Sleepy": {
    name: "Sleepy",
    emoji: "😴",
    genres: ["Focus", "Lo-fi", "Piano"],
    themeClass: "mood-sleepy",
    description: "Dreamy piano chords and sleepy lo-fi to help you drift away or study.",
  }
};

export const moodMusicDb = [
  // 😊 Happy Mood (Pop / Party)
  {
    id: "h1",
    mood: "😊 Happy",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:30",
    youtubeId: "OPf0YbXqDm0",
    spotifyId: "32Oa2mIS6X3gB17R2Pt76Z",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80"
  },
  {
    id: "h2",
    mood: "😊 Happy",
    title: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    duration: "3:56",
    youtubeId: "ru0K8uYEZWw",
    spotifyId: "6JV2hp0Fk286Iy6jZY776w",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80"
  },
  {
    id: "h3",
    mood: "😊 Happy",
    title: "Happy",
    artist: "Pharrell Williams",
    duration: "4:00",
    youtubeId: "ZbZSe6N_BXs",
    spotifyId: "60nZcImufRMA1w6l61463v",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&q=80"
  },
  {
    id: "h4",
    mood: "😊 Happy",
    title: "Dynamite",
    artist: "BTS",
    duration: "3:43",
    youtubeId: "gdZLi9oWNZg",
    spotifyId: "5Qdy8Av1WEnC67Xeh5766B",
    cover: "https://images.unsplash.com/photo-1487180142328-054b783fc471?w=300&q=80"
  },
  {
    id: "h5",
    mood: "😊 Happy",
    title: "Shake It Off",
    artist: "Taylor Swift",
    duration: "4:01",
    youtubeId: "nfWlot6h_JM",
    spotifyId: "0VE4kJnLYiJ34cr4o1KJa5",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&q=80"
  },
  {
    id: "h6",
    mood: "😊 Happy",
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "3:50",
    youtubeId: "TUVcZfQe-Kw",
    spotifyId: "39LLxExzy6HrmSBii86AXc",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=80"
  },
  {
    id: "h7",
    mood: "😊 Happy",
    title: "Sugar",
    artist: "Maroon 5",
    duration: "5:01",
    youtubeId: "09R8_2nJtjg",
    spotifyId: "22sWj50H26Lz9L64es345C",
    cover: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
  },
  {
    id: "h8",
    mood: "😊 Happy",
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: "3:21",
    youtubeId: "fHI8X4OXluQ",
    spotifyId: "0VjIjW4GlmCkg6J2WZS34Q",
    cover: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=300&q=80"
  },
  {
    id: "h9",
    mood: "😊 Happy",
    title: "I Wanna Dance with Somebody",
    artist: "Whitney Houston",
    duration: "4:52",
    youtubeId: "eH3giaIzONA",
    spotifyId: "2tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=300&q=80"
  },
  {
    id: "h10",
    mood: "😊 Happy",
    title: "Good Vibrations",
    artist: "The Beach Boys",
    duration: "3:37",
    youtubeId: "Eab_beh07HU",
    spotifyId: "5t90n4J1HMA0676ZfES290",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80"
  },

  // 😢 Sad Mood (Calm / Soft / Lo-fi)
  {
    id: "s1",
    mood: "😢 Sad",
    title: "Lovely",
    artist: "Billie Eilish & Khalid",
    duration: "3:20",
    youtubeId: "V1Pl8CzNzCw",
    spotifyId: "0u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1484712401471-05c7215a39eb?w=300&q=80"
  },
  {
    id: "s2",
    mood: "😢 Sad",
    title: "Someone Like You",
    artist: "Adele",
    duration: "4:44",
    youtubeId: "hLQl3WQQoQ0",
    spotifyId: "14D16X3gB17R2Pt76Z60nv",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&q=80"
  },
  {
    id: "s3",
    mood: "😢 Sad",
    title: "Fix You",
    artist: "Coldplay",
    duration: "4:54",
    youtubeId: "k4V3_Gky40Y",
    spotifyId: "7LVFV4360nZcImufRMA1w6",
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=300&q=80"
  },
  {
    id: "s4",
    mood: "😢 Sad",
    title: "Stay With Me",
    artist: "Sam Smith",
    duration: "2:52",
    youtubeId: "pB-5XG-DbAA",
    spotifyId: "5Nm96B5XGDbAAPb5XGDbAA",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=300&q=80"
  },
  {
    id: "s5",
    mood: "😢 Sad",
    title: "Say Something",
    artist: "A Great Big World ft. Christina Aguilera",
    duration: "3:52",
    youtubeId: "-2U0Ivkn2Ds",
    spotifyId: "6JV2hp0Fk286Iy6jZY776w",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80"
  },
  {
    id: "s6",
    mood: "😢 Sad",
    title: "Let Her Go",
    artist: "Passenger",
    duration: "4:12",
    youtubeId: "RBumgq5yVrA",
    spotifyId: "0JHiJea34cr4o1KJa5",
    cover: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=300&q=80"
  },
  {
    id: "s7",
    mood: "😢 Sad",
    title: "All I Want",
    artist: "Kodaline",
    duration: "5:05",
    youtubeId: "mtf7hC17IBM",
    spotifyId: "04280390367361c6d9f3",
    cover: "https://images.unsplash.com/photo-1445217143695-467124037176?w=300&q=80"
  },
  {
    id: "s8",
    mood: "😢 Sad",
    title: "Soft Lo-fi Study Rain",
    artist: "Lofi Library",
    duration: "2:40",
    youtubeId: "5yx6GyYB5Ux",
    spotifyId: "3u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=300&q=80"
  },
  {
    id: "s9",
    mood: "😢 Sad",
    title: "Skinny Love",
    artist: "Bon Iver",
    duration: "3:58",
    youtubeId: "aNzCDt2eidg",
    spotifyId: "3tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80"
  },
  {
    id: "s10",
    mood: "😢 Sad",
    title: "Photograph",
    artist: "Ed Sheeran",
    duration: "4:19",
    youtubeId: "nSDgHBxUbVQ",
    spotifyId: "14D16X3gB17R2Pt76Z60nv",
    cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&q=80"
  },

  // 😠 Angry Mood (Relax / Meditation / Soft)
  {
    id: "a1",
    mood: "😠 Angry",
    title: "Weightless (Calming Sound)",
    artist: "Marconi Union",
    duration: "8:00",
    youtubeId: "UfcAVejslrU",
    spotifyId: "6Bh5V4360nZcImufRMA1w6",
    cover: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=300&q=80"
  },
  {
    id: "a2",
    mood: "😠 Angry",
    title: "Gymnopédie No. 1",
    artist: "Erik Satie",
    duration: "3:08",
    youtubeId: "S-Xm7s9PhM8",
    spotifyId: "5t90n4J1HMA0676ZfES290",
    cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&q=80"
  },
  {
    id: "a3",
    mood: "😠 Angry",
    title: "Clair de Lune",
    artist: "Claude Debussy",
    duration: "5:05",
    youtubeId: "WNCSURrQ4L4",
    spotifyId: "60nZcImufRMA1w6l61463v",
    cover: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=300&q=80"
  },
  {
    id: "a4",
    mood: "😠 Angry",
    title: "Spiegel im Spiegel",
    artist: "Arvo Pärt",
    duration: "8:12",
    youtubeId: "FZb3yCgBNoM",
    spotifyId: "0VE4kJnLYiJ34cr4o1KJa5",
    cover: "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?w=300&q=80"
  },
  {
    id: "a5",
    mood: "😠 Angry",
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    duration: "3:57",
    youtubeId: "33890367361c6d9f3ab",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80"
  },
  {
    id: "a6",
    mood: "😠 Angry",
    title: "Watermark",
    artist: "Enya",
    duration: "2:25",
    youtubeId: "7L8i9eX0lF4",
    spotifyId: "5Nm96B5XGDbAAPb5XGDbAA",
    cover: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=300&q=80"
  },
  {
    id: "a7",
    mood: "😠 Angry",
    title: "River Flows in You",
    artist: "Yiruma",
    duration: "3:05",
    youtubeId: "7maJOI3QMu0",
    spotifyId: "3u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1486551937199-baf066858de7?w=300&q=80"
  },
  {
    id: "a8",
    mood: "😠 Angry",
    title: "Ambient Meditation Sound",
    artist: "Zen Harmony",
    duration: "6:20",
    youtubeId: "wD1V_a0sP28",
    spotifyId: "39LLxExzy6HrmSBii86AXc",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
  },
  {
    id: "a9",
    mood: "😠 Angry",
    title: "Deep Relaxing Flute Music",
    artist: "Meditation Oasis",
    duration: "7:45",
    youtubeId: "2tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&q=80"
  },
  {
    id: "a10",
    mood: "😠 Angry",
    title: "Intro",
    artist: "The xx",
    duration: "2:08",
    youtubeId: "pmV3eS6e_Xg",
    spotifyId: "22sWj50H26Lz9L64es345C",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80"
  },

  // 😲 Surprise Mood (Energetic / Dance)
  {
    id: "su1",
    mood: "😲 Surprise",
    title: "Wake Me Up",
    artist: "Avicii",
    duration: "4:09",
    youtubeId: "IcrbM1l_BoI",
    spotifyId: "0VjIjW4GlmCkg6J2WZS34Q",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=300&q=80"
  },
  {
    id: "su2",
    mood: "😲 Surprise",
    title: "Animals",
    artist: "Martin Garrix",
    duration: "5:04",
    youtubeId: "gCYcHz2k5OI",
    spotifyId: "5t90n4J1HMA0676ZfES290",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=80"
  },
  {
    id: "su3",
    mood: "😲 Surprise",
    title: "Titanium",
    artist: "David Guetta ft. Sia",
    duration: "4:05",
    youtubeId: "JRfuAkrVq5Y",
    spotifyId: "3u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&q=80"
  },
  {
    id: "su4",
    mood: "😲 Surprise",
    title: "Clarity",
    artist: "Zedd ft. Foxes",
    duration: "4:31",
    youtubeId: "IxxstCcJlps",
    spotifyId: "60nZcImufRMA1w6l61463v",
    cover: "https://images.unsplash.com/photo-1487180142328-054b783fc471?w=300&q=80"
  },
  {
    id: "su5",
    mood: "😲 Surprise",
    title: "Don't You Worry Child",
    artist: "Swedish House Mafia",
    duration: "3:32",
    youtubeId: "1y6smkh6c-0",
    spotifyId: "22sWj50H26Lz9L64es345C",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&q=80"
  },
  {
    id: "su6",
    mood: "😲 Surprise",
    title: "Levels",
    artist: "Avicii",
    duration: "3:20",
    youtubeId: "_ovdm2y5tWY",
    spotifyId: "5Nm96B5XGDbAAPb5XGDbAA",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&q=80"
  },
  {
    id: "su7",
    mood: "😲 Surprise",
    title: "Scary Monsters and Nice Sprites",
    artist: "Skrillex",
    duration: "4:03",
    youtubeId: "WSeNSzJ2-Jw",
    spotifyId: "3tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&q=80"
  },
  {
    id: "su8",
    mood: "😲 Surprise",
    title: "Turn Down for What",
    artist: "DJ Snake & Lil Jon",
    duration: "3:33",
    youtubeId: "HMUDVMiITOU",
    spotifyId: "0VE4kJnLYiJ34cr4o1KJa5",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&q=80"
  },
  {
    id: "su9",
    mood: "😲 Surprise",
    title: "Scream & Shout",
    artist: "will.i.am & Britney Spears",
    duration: "4:49",
    youtubeId: "kYtGl1dX5qI",
    spotifyId: "6Bh5V4360nZcImufRMA1w6",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=80"
  },
  {
    id: "su10",
    mood: "😲 Surprise",
    title: "Alone",
    artist: "Marshmello",
    duration: "3:20",
    youtubeId: "ALZHF5UqnU4",
    spotifyId: "0VjIjW4GlmCkg6J2WZS34Q",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&q=80"
  },

  // 😐 Neutral Mood (Chill / Instrumental)
  {
    id: "n1",
    mood: "😐 Neutral",
    title: "Resonance",
    artist: "HOME",
    duration: "3:32",
    youtubeId: "8GW6sLrK40k",
    spotifyId: "2tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&q=80"
  },
  {
    id: "n2",
    mood: "😐 Neutral",
    title: "Time",
    artist: "Hans Zimmer",
    duration: "4:35",
    youtubeId: "RxabLA7UQ9k",
    spotifyId: "3u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80"
  },
  {
    id: "n3",
    mood: "😐 Neutral",
    title: "So What",
    artist: "Miles Davis",
    duration: "9:22",
    youtubeId: "ylXk1g089kA",
    spotifyId: "5t90n4J1HMA0676ZfES290",
    cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=300&q=80"
  },
  {
    id: "n4",
    mood: "😐 Neutral",
    title: "Take Five",
    artist: "Dave Brubeck Quartet",
    duration: "5:24",
    youtubeId: "vmDDOFXSgAs",
    spotifyId: "60nZcImufRMA1w6l61463v",
    cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=300&q=80"
  },
  {
    id: "n5",
    mood: "😐 Neutral",
    title: "Strasbourg / St. Denis",
    artist: "Roy Hargrove",
    duration: "4:39",
    youtubeId: "qxeb0crtr_I",
    spotifyId: "22sWj50H26Lz9L64es345C",
    cover: "https://images.unsplash.com/photo-1486016006115-74a41448aea2?w=300&q=80"
  },
  {
    id: "n6",
    mood: "😐 Neutral",
    title: "We Move Lightly",
    artist: "Dustin O'Halloran",
    duration: "3:08",
    youtubeId: "q5qC1K66Lsc",
    spotifyId: "5Nm96B5XGDbAAPb5XGDbAA",
    cover: "https://images.unsplash.com/photo-1445217143695-467124037176?w=300&q=80"
  },
  {
    id: "n7",
    mood: "😐 Neutral",
    title: "Morning Chillhop",
    artist: "Chillhop Beats",
    duration: "2:54",
    youtubeId: "g6fS6d9y7P0",
    spotifyId: "3tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80"
  },
  {
    id: "n8",
    mood: "😐 Neutral",
    title: "Nightmarket",
    artist: "Burial",
    duration: "7:25",
    youtubeId: "3u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80"
  },
  {
    id: "n9",
    mood: "😐 Neutral",
    title: "Warm Breeze",
    artist: "Lofi Beats",
    duration: "2:15",
    youtubeId: "14D16X3gB17R2Pt76Z60nv",
    cover: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=300&q=80"
  },
  {
    id: "n10",
    mood: "😐 Neutral",
    title: "Midnight City (Instrumental)",
    artist: "M83",
    duration: "4:03",
    youtubeId: "UDoEqA2t8u4",
    spotifyId: "0VjIjW4GlmCkg6J2WZS34Q",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&q=80"
  },

  // 😴 Sleepy Mood (Focus / Lo-fi / Piano)
  {
    id: "sl1",
    mood: "😴 Sleepy",
    title: "Nuvole Bianche",
    artist: "Ludovico Einaudi",
    duration: "5:58",
    youtubeId: "4VR-6u0YLz4",
    spotifyId: "3u2P5u6UIvoaGoFNvUi8oZ",
    cover: "https://images.unsplash.com/photo-1511289081367-46c7c2865625?w=300&q=80"
  },
  {
    id: "sl2",
    mood: "😴 Sleepy",
    title: "Comptine d'un autre été: L'après-midi",
    artist: "Yann Tiersen",
    duration: "2:20",
    youtubeId: "H7Co5HsBY94",
    spotifyId: "5t90n4J1HMA0676ZfES290",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
  },
  {
    id: "sl3",
    mood: "😴 Sleepy",
    title: "Sleep Lofi Study Beats",
    artist: "Lofi Girl",
    duration: "3:15",
    youtubeId: "wD1V_a0sP28",
    spotifyId: "60nZcImufRMA1w6l61463v",
    cover: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?w=300&q=80"
  },
  {
    id: "sl4",
    mood: "😴 Sleepy",
    title: "Moonlight Sonata (Adagio)",
    artist: "Ludwig van Beethoven",
    duration: "5:10",
    youtubeId: "4Tr0otuiQuU",
    spotifyId: "22sWj50H26Lz9L64es345C",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80"
  },
  {
    id: "sl5",
    mood: "😴 Sleepy",
    title: "Lullaby",
    artist: "Johannes Brahms",
    duration: "2:32",
    youtubeId: "w192yY_F6x8",
    spotifyId: "5Nm96B5XGDbAAPb5XGDbAA",
    cover: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=300&q=80"
  },
  {
    id: "sl6",
    mood: "😴 Sleepy",
    title: "Rain & Piano for Study",
    artist: "Sleepy beats",
    duration: "4:00",
    youtubeId: "5yx6GyYB5Ux",
    spotifyId: "3tUB6XOIeeIS774Ef2O243",
    cover: "https://images.unsplash.com/photo-1486551937199-baf066858de7?w=300&q=80"
  },
  {
    id: "sl7",
    mood: "😴 Sleepy",
    title: "Focus Study Session Lofi",
    artist: "Lofi Focus Cafe",
    duration: "2:50",
    youtubeId: "g6fS6d9y7P0",
    spotifyId: "0VE4kJnLYiJ34cr4o1KJa5",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&q=80"
  },
  {
    id: "sl8",
    mood: "😴 Sleepy",
    title: "Piano Improvisation",
    artist: "Classical Comfort",
    duration: "3:40",
    youtubeId: "WNCSURrQ4L4",
    spotifyId: "6Bh5V4360nZcImufRMA1w6",
    cover: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&q=80"
  },
  {
    id: "sl9",
    mood: "😴 Sleepy",
    title: "Deep Sleep Ocean Sound",
    artist: "Nature Sounds",
    duration: "5:30",
    youtubeId: "7L8i9eX0lF4",
    spotifyId: "0VjIjW4GlmCkg6J2WZS34Q",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80"
  },
  {
    id: "sl10",
    mood: "😴 Sleepy",
    title: "Rest & Relax Lofi",
    artist: "Lofi Sleepyhead",
    duration: "3:02",
    youtubeId: "pmV3eS6e_Xg",
    spotifyId: "14D16X3gB17R2Pt76Z60nv",
    cover: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=300&q=80"
  }
];
