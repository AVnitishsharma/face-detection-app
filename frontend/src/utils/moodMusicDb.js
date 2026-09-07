export const MOOD_DETAILS = {
  "😊 Happy": {
    name: "Happy",
    emoji: "😊",
    genres: ["Bollywood Dance", "Upbeat Hindi", "Punjabi Hits"],
    themeClass: "mood-happy",
    description: "Upbeat melodies, infectious energetic beats & high vibes!",
    accentColor: "#ff8a00",
  },
  "😢 Sad": {
    name: "Sad",
    emoji: "😢",
    genres: ["Arijit Melancholy", "Acoustic Hindi", "Lo-Fi Beats"],
    themeClass: "mood-sad",
    description: "Heartfelt, soft & reflective tunes to soothe your mind.",
    accentColor: "#6366f1",
  },
  "😠 Angry": {
    name: "Angry",
    emoji: "😠",
    genres: ["Deep Meditation", "Sitar & Flute", "Sufi Peaceful"],
    themeClass: "mood-angry",
    description: "Soothing zen soundscapes & Sufi tunes to help cool down and restore balance.",
    accentColor: "#ef4444",
  },
  "😲 Surprise": {
    name: "Surprise",
    emoji: "😲",
    genres: ["High Energy EDM", "Bollywood Party", "Club Anthems"],
    themeClass: "mood-surprise",
    description: "Thrilling drops & explosive beats matching your hyped mood!",
    accentColor: "#10b981",
  },
  "😐 Neutral": {
    name: "Neutral",
    emoji: "😐",
    genres: ["Indian Indie Flow", "Chill Grooves", "Smooth Fusion"],
    themeClass: "mood-neutral",
    description: "Relaxed background grooves, smooth beats & easy listening.",
    accentColor: "#0d9488",
  },
  "😴 Sleepy": {
    name: "Sleepy",
    emoji: "😴",
    genres: ["Hindi Sleep Lo-Fi", "Dreamy Piano", "Tranquil Rain"],
    themeClass: "mood-sleepy",
    description: "Soft piano lullabies, rain & Indian lo-fi to help you relax or sleep.",
    accentColor: "#8b5cf6",
  }
};

export const moodMusicDb = [
  // 😊 Happy Mood (Hindi / Indian Pop / Punjabi Hits)
  {
    id: "h1",
    mood: "😊 Happy",
    title: "Kesariya",
    artist: "Arijit Singh, Pritam",
    duration: "4:28",
    youtubeId: "BddP6PYo2gs",
    genre: "Bollywood Romantic",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80"
  },
  {
    id: "h2",
    mood: "😊 Happy",
    title: "Gallan Goodiyaan",
    artist: "Yashita Sharma, Manish Kumar Tipu",
    duration: "4:56",
    youtubeId: "jCEdTq3j-0U",
    genre: "Bollywood Party",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80"
  },
  {
    id: "h3",
    mood: "😊 Happy",
    title: "Tum Hi Ho Bandhu",
    artist: "Neeraj Shridhar, Kavita Seth",
    duration: "4:42",
    youtubeId: "o1RducJbUdc",
    genre: "Bollywood Groove",
    cover: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&q=80"
  },
  {
    id: "h4",
    mood: "😊 Happy",
    title: "Subah Subah",
    artist: "Arijit Singh, Prakriti Kakar",
    duration: "3:12",
    youtubeId: "pvyJQQ7zIJ0",
    genre: "Fresh Pop",
    cover: "https://images.unsplash.com/photo-1623517272043-cae1572afc96?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "h5",
    mood: "😊 Happy",
    title: "Badtameez Dil",
    artist: "Benny Dayal, Shefali Alvares",
    duration: "4:12",
    youtubeId: "II2EO3Nw4m0",
    genre: "High Energy Dance",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
  },
  {
    id: "h6",
    mood: "😊 Happy",
    title: "Kala Chashma",
    artist: "Amar Arshi, Badshah, Neha Kakkar",
    duration: "3:07",
    youtubeId: "k4yXQkG2s1E",
    genre: "Punjabi Party",
    cover: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80"
  },
  {
    id: "h7",
    mood: "😊 Happy",
    title: "Naacho Naacho (RRR)",
    artist: "Vishal Mishra, Rahul Sipligunj",
    duration: "3:34",
    youtubeId: "sAzlWScHTc4",
    genre: "Folk Energy",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
  },
  {
    id: "h8",
    mood: "😊 Happy",
    title: "London Thumakda",
    artist: "Labh Janjua, Sonu Kakkar",
    duration: "3:50",
    youtubeId: "udra3Mfw2oo",
    genre: "Wedding Dance",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80"
  },
  {
    id: "h9",
    mood: "😊 Happy",
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:30",
    youtubeId: "OPf0YbXqDm0",
    genre: "Funk Pop",
    cover: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&q=80"
  },

  // 😢 Sad Mood (Hindi / Arijit Singh / Melancholy)
  {
    id: "s1",
    mood: "😢 Sad",
    title: "Channa Mereya",
    artist: "Arijit Singh, Pritam",
    duration: "4:49",
    youtubeId: "284Ov7ysmfA",
    genre: "Bollywood Emotion",
    cover: "https://images.unsplash.com/photo-1499578124509-1611b77778c8?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "s2",
    mood: "😢 Sad",
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    duration: "5:41",
    youtubeId: "sK7riqg254H",
    genre: "Acoustic Soft",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80"
  },
  {
    id: "s3",
    mood: "😢 Sad",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "4:22",
    youtubeId: "IJq0yyWug1k",
    genre: "Heartbreak Anthem",
    cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80"
  },
  {
    id: "s4",
    mood: "😢 Sad",
    title: "Tujhe Kitna Chahne Lage",
    artist: "Arijit Singh, Mithoon",
    duration: "4:44",
    youtubeId: "AgX2II9si7w",
    genre: "Emotional Soul",
    cover: "https://images.unsplash.com/photo-1787612498856-b8bb946c1967?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "s5",
    mood: "😢 Sad",
    title: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    duration: "5:21",
    youtubeId: "g0eO74UmRBs",
    genre: "Classic Nostalgia",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
  },
  {
    id: "s6",
    mood: "😢 Sad",
    title: "Bekhayali",
    artist: "Sachet Tandon",
    duration: "6:11",
    youtubeId: "VOLKJJvfAbg",
    genre: "Rock Ballad",
    cover: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&q=80"
  },
  {
    id: "s7",
    mood: "😢 Sad",
    title: "Hamari Adhuri Kahani",
    artist: "Arijit Singh",
    duration: "6:38",
    youtubeId: "f3FFOBrMmdg",
    genre: "Deep Melancholy",
    cover: "https://images.unsplash.com/photo-1521136095380-08fbd7be93c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "s8",
    mood: "😢 Sad",
    title: "Ja Raanjhan",
    artist: "Parampara Tandon, Sachet Tandon",
    duration: "3:00",
    youtubeId: "lBvbNxiVmZA",
    genre: "Sad Bollywood",
    cover: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=400&q=80"
  },

  // 😠 Angry Mood (Calm / Zen / Sufi Peaceful Soundscapes)
  {
    id: "a1",
    mood: "😠 Angry",
    title: "Sadda Haq",
    artist: "Mohit Chauhan, A.R. Rahman",
    duration: "6:49",
    youtubeId: "p9DQINKZxWE",
    genre: "Rock / Rebellion",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80"
  },
  {
    id: "a2",
    mood: "😠 Angry",
    title: "Dangal - Title Track",
    artist: "Daler Mehndi, Pritam",
    duration: "4:59",
    youtubeId: "jMfvlh0tjyo",
    genre: "Power / Motivation",
    cover: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&q=80"
  },
  {
    id: "a3",
    mood: "😠 Angry",
    title: "Chak De! India",
    artist: "Sukhwinder Singh, Salim Merchant, Marianne D'Cruz",
    duration: "4:43",
    youtubeId: "bnqLzCsffwY",
    genre: "Power Anthem",
    cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80"
  },
  {
    id: "a4",
    mood: "😠 Angry",
    title: "Zinda",
    artist: "Siddharth Mahadevan",
    duration: "3:33",
    youtubeId: "fP6MNznzVcQ",
    genre: "Rock / Motivation",
    cover: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?w=400&q=80"
  },
  {
    id: "a5",
    mood: "😠 Angry",
    title: "Sultan - Title Track",
    artist: "Sukhwinder Singh",
    duration: "4:41",
    youtubeId: "x_7YlGv9u1g",
    genre: "Power / Sports",
    cover: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80"
  },
  {
    id: "a6",
    mood: "😠 Angry",
    title: "Brothers Anthem",
    artist: "Vishal Dadlani, Ajay-Atul",
    duration: "5:54",
    youtubeId: "IjBAgWKW12Y",
    genre: "Aggressive / Motivation",
    cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
  },
  {
    id: "a7",
    mood: "😠 Angry",
    title: "Kar Har Maidaan Fateh",
    artist: "Sukhwinder Singh, Shreya Ghoshal",
    duration: "5:11",
    youtubeId: "9iIX4PBplAY",
    genre: "Power / Inspirational",
    cover: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80"
  },

  // 😲 Surprise Mood (High Energy / Bollywood Club Hits)

  {
    id: "su1",
    mood: "😲 Surprise",
    title: "Bang Bang Title Track",
    artist: "Vishal-Shekhar, Benny Dayal",
    duration: "5:20",
    youtubeId: "jZyAB2KFDls",
    genre: "Bollywood Club Anthem",
    cover: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80"
  },
  {
    id: "su2",
    mood: "😲 Surprise",
    title: "Malhari",
    artist: "Vishal Dadlani, Sanjay Leela Bhansali",
    duration: "4:05",
    youtubeId: "l_MyUGq7pgs",
    genre: "Explosive Energy",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80"
  },
  {
    id: "su3",
    mood: "😲 Surprise",
    title: "Jai Jai Shivshankar",
    artist: "Vishal Dadlani, Benny Dayal",
    duration: "3:50",
    youtubeId: "oGneAab3e88",
    genre: "Bollywood Dance Off",
    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80"
  },
  {
    id: "su4",
    mood: "😲 Surprise",
    title: "Ghungroo",
    artist: "Arijit Singh, Shilpa Rao",
    duration: "5:02",
    youtubeId: "qFkNATtc3mc",
    genre: "Party Groove",
    cover: "https://images.unsplash.com/photo-1630395822970-acd6a691d97e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "su5",
    mood: "😲 Surprise",
    title: "Muqabla",
    artist: "Yash Narvekar, Parampara Tandon",
    duration: "2:56",
    youtubeId: "l75z7FrYRXI",
    genre: "Dance Drop",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80"
  },
  {
    id: "su6",
    mood: "😲 Surprise",
    title: "Aankh Marey",
    artist: "Neha Kakkar, Mika Singh, Kumar Sanu",
    duration: "3:32",
    youtubeId: "H1-RSRXmdpo",
    genre: "Bollywood Party",
    cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80"
  },

  // 😐 Neutral Mood (Indian Indie / Chill Grooves)
  {
    id: "n1",
    mood: "😐 Neutral",
    title: "Pasoori",
    artist: "Ali Sethi x Shae Gill",
    duration: "4:36",
    youtubeId: "5Eqb_-j3FDA",
    genre: "Indie Folk Fusion",
    cover: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80"
  },
  {
    id: "n2",
    mood: "😐 Neutral",
    title: "Tu Aake Dekhle",
    artist: "King",
    duration: "4:20",
    youtubeId: "6CB9pO9s-Gc",
    genre: "Hip-Hop Melodic",
    cover: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80"
  },
  {
    id: "n3",
    mood: "😐 Neutral",
    title: "Kasoor",
    artist: "Prateek Kuhad",
    duration: "3:17",
    youtubeId: "BmUe3-sfr7E",
    genre: "Acoustic Indie",
    cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
  },
  {
    id: "n4",
    mood: "😐 Neutral",
    title: "Baarishein",
    artist: "Anuv Jain",
    duration: "3:26",
    youtubeId: "PJWemSzExXs",
    genre: "Soft Indie",
    cover: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&q=80"
  },
  {
    id: "n5",
    mood: "😐 Neutral",
    title: "Chaand Baaliyan",
    artist: "Aditya A",
    duration: "1:43",
    youtubeId: "7c3-Gei5j4w",
    genre: "Ukulele Chill",
    cover: "https://images.unsplash.com/photo-1486016006115-74a41448aea2?w=400&q=80"
  },
  {
    id: "n6",
    mood: "😐 Neutral",
    title: "Husn",
    artist: "Anuv Jain",
    duration: "3:37",
    youtubeId: "gJLVTKhTnog",
    genre: "Indian Indie",
    cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&q=80"
  },

  // 😴 Sleepy Mood (Hindi Sleep Lo-Fi / Piano)
  {
    id: "sl1",
    mood: "😴 Sleepy",
    title: "Phir Le Aaya Dil",
    artist: "Arijit Singh",
    duration: "5:05",
    youtubeId: "OHqJRf94xrc",
    genre: "Soft / Soulful",
    cover: "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "sl2",
    mood: "😴 Sleepy",
    title: "Kabira (Encore)",
    artist: "Arijit Singh, Harshdeep Kaur",
    duration: "4:29",
    youtubeId: "jHNNMj5bNQw",
    genre: "Peaceful / Soulful",
    cover: "https://images.unsplash.com/photo-1486551937199-baf066858de7?w=400&q=80"
  },
  {
    id: "sl3",
    mood: "😴 Sleepy",
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    duration: "5:41",
    youtubeId: "qoq8B8ThgEM",
    genre: "Peaceful Romantic",
    cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80"
  },
  {
    id: "sl4",
    mood: "😴 Sleepy",
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    duration: "4:22",
    youtubeId: "Umqb9KENgmk",
    genre: "Soft Romantic",
    cover: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?w=400&q=80"
  },
  {
    id: "sl5",
    mood: "😴 Sleepy",
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik, Arijit Singh",
    duration: "5:41",
    youtubeId: "sK7riqg2mr4",
    genre: "Emotional / Soft",
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80"
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
