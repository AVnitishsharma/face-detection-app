export const MOOD_DETAILS = {
  "😊 Happy": {
    name: "Happy",
    emoji: "😊",
    genres: ["Bollywood Pop", "Upbeat", "Dance Party"],
    themeClass: "mood-happy",
    description: "Upbeat melodies, infectious energetic beats & high vibes!",
    accentColor: "#ff8a00",
  },
  "😢 Sad": {
    name: "Sad",
    emoji: "😢",
    genres: ["Acoustic", "Melancholy", "Lo-Fi"],
    themeClass: "mood-sad",
    description: "Heartfelt, soft & reflective tunes to soothe your mind.",
    accentColor: "#6366f1",
  },
  "😠 Angry": {
    name: "Angry",
    emoji: "😠",
    genres: ["Deep Meditation", "Calm Chill", "Ambient Flute"],
    themeClass: "mood-angry",
    description: "Soothing zen soundscapes to help cool down and restore balance.",
    accentColor: "#ef4444",
  },
  "😲 Surprise": {
    name: "Surprise",
    emoji: "😲",
    genres: ["EDM Drop", "High Energy", "Club Anthems"],
    themeClass: "mood-surprise",
    description: "Thrilling beats & high-tempo tracks matching your hyped mood!",
    accentColor: "#10b981",
  },
  "😐 Neutral": {
    name: "Neutral",
    emoji: "😐",
    genres: ["Chill Groove", "Smooth Jazz", "Indie Flow"],
    themeClass: "mood-neutral",
    description: "Relaxed background grooves, smooth beats & easy listening.",
    accentColor: "#0d9488",
  },
  "😴 Sleepy": {
    name: "Sleepy",
    emoji: "😴",
    genres: ["Dreamy Piano", "Sleep Rain", "Study Lo-Fi"],
    themeClass: "mood-sleepy",
    description: "Soft piano lullabies & tranquil lo-fi to help you relax or sleep.",
    accentColor: "#8b5cf6",
  }
};

export const moodMusicDb = [
  // 😊 Happy Mood
  {
    id: "h1",
    mood: "😊 Happy",
    title: "Kesariya",
    artist: "Arijit Singh, Pritam",
    duration: "4:28",
    youtubeId: "BddP6PYo2gs",
    genre: "Bollywood Pop",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
  },
  {
    id: "h2",
    mood: "😊 Happy",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:30",
    youtubeId: "OPf0YbXqDm0",
    genre: "Funk / Pop",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80"
  },
  {
    id: "h3",
    mood: "😊 Happy",
    title: "Happy",
    artist: "Pharrell Williams",
    duration: "4:00",
    youtubeId: "ZbZSe6N_BXs",
    genre: "Pop / Upbeat",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80"
  },
  {
    id: "h4",
    mood: "😊 Happy",
    title: "Dil Dhadakne Do Title Track",
    artist: "Shankar-Ehsaan-Loy",
    duration: "3:46",
    youtubeId: "650A2w9w_zE",
    genre: "Bollywood Dance",
    cover: "https://images.unsplash.com/photo-1487180142328-054b783fc471?w=400&q=80"
  },
  {
    id: "h5",
    mood: "😊 Happy",
    title: "Levitating",
    artist: "Dua Lipa",
    duration: "3:50",
    youtubeId: "TUVcZfQe-Kw",
    genre: "Disco Pop",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
  },

  // 😢 Sad Mood
  {
    id: "s1",
    mood: "😢 Sad",
    title: "Channa Mereya",
    artist: "Arijit Singh, Pritam",
    duration: "4:49",
    youtubeId: "bzW9fmwcmXA",
    genre: "Bollywood Melancholy",
    cover: "https://images.unsplash.com/photo-1484712401471-05c7215a39eb?w=400&q=80"
  },
  {
    id: "s2",
    mood: "😢 Sad",
    title: "Lovely",
    artist: "Billie Eilish & Khalid",
    duration: "3:20",
    youtubeId: "V1Pl8CzNzCw",
    genre: "Indie Pop",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80"
  },
  {
    id: "s3",
    mood: "😢 Sad",
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    duration: "5:41",
    youtubeId: "sK7riqg254H",
    genre: "Acoustic Soft",
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80"
  },
  {
    id: "s4",
    mood: "😢 Sad",
    title: "Someone Like You",
    artist: "Adele",
    duration: "4:44",
    youtubeId: "hLQl3WQQoQ0",
    genre: "Piano Soul",
    cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd6a?w=400&q=80"
  },
  {
    id: "s5",
    mood: "😢 Sad",
    title: "Fix You",
    artist: "Coldplay",
    duration: "4:54",
    youtubeId: "k4V3_Gky40Y",
    genre: "Alternative Rock",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
  },

  // 😠 Angry Mood (Relaxing / Calm)
  {
    id: "a1",
    mood: "😠 Angry",
    title: "Weightless (Calm & Soothe)",
    artist: "Marconi Union",
    duration: "8:00",
    youtubeId: "UfcAVejslrU",
    genre: "Ambient Therapy",
    cover: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&q=80"
  },
  {
    id: "a2",
    mood: "😠 Angry",
    title: "River Flows in You",
    artist: "Yiruma",
    duration: "3:05",
    youtubeId: "7maJOI3QMu0",
    genre: "Peaceful Piano",
    cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80"
  },
  {
    id: "a3",
    mood: "😠 Angry",
    title: "Clair de Lune",
    artist: "Claude Debussy",
    duration: "5:05",
    youtubeId: "WNCSURrQ4L4",
    genre: "Classical Calm",
    cover: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=400&q=80"
  },
  {
    id: "a4",
    mood: "😠 Angry",
    title: "Deep Indian Bamboo Flute",
    artist: "Meditation Zen",
    duration: "10:00",
    youtubeId: "2OEL4P5ljh4",
    genre: "Flute Meditation",
    cover: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80"
  },

  // 😲 Surprise Mood
  {
    id: "su1",
    mood: "😲 Surprise",
    title: "Wake Me Up",
    artist: "Avicii",
    duration: "4:09",
    youtubeId: "IcrbM1l_BoI",
    genre: "EDM Festival",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80"
  },
  {
    id: "su2",
    mood: "😲 Surprise",
    title: "Animals",
    artist: "Martin Garrix",
    duration: "5:04",
    youtubeId: "gCYcHz2k5OI",
    genre: "Big Room House",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
  },
  {
    id: "su3",
    mood: "😲 Surprise",
    title: "Titanium",
    artist: "David Guetta ft. Sia",
    duration: "4:05",
    youtubeId: "JRfuAkrVq5Y",
    genre: "Dance Pop",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
  },
  {
    id: "su4",
    mood: "😲 Surprise",
    title: "Bang Bang",
    artist: "Vishal-Shekhar",
    duration: "4:15",
    youtubeId: "g_5RkI1c1Wc",
    genre: "Bollywood High Energy",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80"
  },

  // 😐 Neutral Mood
  {
    id: "n1",
    mood: "😐 Neutral",
    title: "Resonance",
    artist: "HOME",
    duration: "3:32",
    youtubeId: "8GW6sLrK40k",
    genre: "Synthwave Chill",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80"
  },
  {
    id: "n2",
    mood: "😐 Neutral",
    title: "Time (Inception Theme)",
    artist: "Hans Zimmer",
    duration: "4:35",
    youtubeId: "RxabLA7UQ9k",
    genre: "Cinematic Chill",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
  },
  {
    id: "n3",
    mood: "😐 Neutral",
    title: "Pasoori",
    artist: "Ali Sethi x Shae Gill",
    duration: "4:36",
    youtubeId: "5Eqb_-j3FDA",
    genre: "Indie Folk Groove",
    cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80"
  },
  {
    id: "n4",
    mood: "😐 Neutral",
    title: "Morning Chillhop Beats",
    artist: "Lofi Library",
    duration: "3:10",
    youtubeId: "g6fS6d9y7P0",
    genre: "Chillhop",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80"
  },

  // 😴 Sleepy Mood
  {
    id: "sl1",
    mood: "😴 Sleepy",
    title: "Nuvole Bianche",
    artist: "Ludovico Einaudi",
    duration: "5:58",
    youtubeId: "4VR-6u0YLz4",
    genre: "Neoclassical Piano",
    cover: "https://images.unsplash.com/photo-1511289081367-46c7c2865625?w=400&q=80"
  },
  {
    id: "sl2",
    mood: "😴 Sleepy",
    title: "Sleep Lofi Girl Beats",
    artist: "Lofi Girl",
    duration: "3:15",
    youtubeId: "jfKfPfyJRdk",
    genre: "Sleep Lo-Fi",
    cover: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?w=400&q=80"
  },
  {
    id: "sl3",
    mood: "😴 Sleepy",
    title: "Moonlight Sonata",
    artist: "Beethoven",
    duration: "5:10",
    youtubeId: "4Tr0otuiQuU",
    genre: "Classical Piano",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
  },
  {
    id: "sl4",
    mood: "😴 Sleepy",
    title: "Deep Sleep Gentle Rain",
    artist: "Nature Sleeping",
    duration: "6:00",
    youtubeId: "5yx6GyYB5Ux",
    genre: "Rain Sounds",
    cover: "https://images.unsplash.com/photo-1486551937199-baf066858de7?w=400&q=80"
  }
];

/**
 * Filter songs by mood string or search query
 */
export function getSongsByMood(moodKey, searchQuery = "") {
  let filtered = moodMusicDb;
  if (moodKey) {
    filtered = filtered.filter((s) => s.mood === moodKey || s.mood.toLowerCase().includes(moodKey.toLowerCase()));
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q) ||
        s.genre?.toLowerCase().includes(q)
    );
  }

  return filtered;
}
