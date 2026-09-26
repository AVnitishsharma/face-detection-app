# 🎵 MoodTune — AI-Powered Facial Emotion & Mood Music Player

> An intelligent, real-time facial expression & emotion detection web application that curates and plays music tailored to your exact mood. Powered by MediaPipe Face Landmarker AI, React, Node.js, and MongoDB.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=vercel)](YOUR_LIVE_LINK_HERE)
[![React](https://img.shields.io/badge/Frontend-React_19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js_Express-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MediaPipe](https://img.shields.io/badge/AI-MediaPipe_Vision-orange?style=for-the-badge&logo=google)](https://ai.google.dev/edge/mediapipe/solutions/guide)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

---

## 🖼️ Application Preview

<!-- REPLACE 'YOUR_IMAGE_URL_HERE' WITH YOUR ACTUAL SCREENSHOT OR GIF URL -->
![MoodTune Application Preview](YOUR_IMAGE_URL_HERE)

---

## 🚀 Live Demo

Check out the live application here:  
👉 **[Click Here to Open Live App](YOUR_LIVE_LINK_HERE)**

---

## ✨ Features

- 🎭 **Real-Time Emotion Detection**: Detects facial blendshapes (Happy, Sad, Angry, Surprised, Neutral, Fear, Disgust) live using your webcam via Google MediaPipe Face Landmarker.
- 🎶 **Mood-Based Music Curation**: Dynamically suggests and auto-plays curated playlists matched to detected emotions.
- 📺 **Integrated YouTube Audio Player**: Seamless playback control with play/pause, volume adjustment, track switching, and seek slider.
- 📊 **Mood History & Analytics**: Tracks past detected emotions over time to give insights into your mood trends.
- 🔍 **YouTube Song Search**: Search and stream any song directly from YouTube within the application.
- ➕ **Custom Song Manager**: Add your own custom songs to mood playlists with video URLs and titles.
- 🎛️ **Interactive Audio Visualizer**: Dynamic visualizer synced with audio playback state.
- 🔒 **User Authentication & Cloud Sync**: Node.js/Express backend with JWT auth, MongoDB database, and Redis caching.
- 🎨 **Futuristic UI/UX**: Dark mode glassmorphism design with responsive controls and micro-animations.

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React 19 + Vite 8
- **AI / Computer Vision:** `@mediapipe/tasks-vision` (Face Landmarker)
- **Styling:** Modern Vanilla CSS (Glassmorphism design, CSS Variables)
- **Media Player:** YouTube IFrame API

### **Backend**
- **Runtime:** Node.js + Express 5
- **Database:** MongoDB (via Mongoose)
- **Caching & Sessions:** Redis (`ioredis`)
- **Authentication:** JWT (JSON Web Tokens) & `cookie-parser`
- **Security:** `bcryptjs`, CORS

---

## 📂 Project Structure

```
face-dect/
├── backend/
│   ├── src/
│   │   ├── config/       # Database & Redis configuration
│   │   ├── controller/   # Route controllers (Auth, Music, User)
│   │   ├── middleware/   # JWT authentication middleware
│   │   ├── model/        # Mongoose schemas (User, Song, MoodLog)
│   │   ├── routes/       # Express API routes
│   │   └── app.js        # Express application setup
│   ├── .env              # Backend environment variables
│   ├── server.js         # Backend server entry point
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/   # React Components (WebcamView, ExpressionBox, YouTubePlayer, etc.)
    │   ├── hooks/        # Custom React hooks (useFaceLandmarker)
    │   ├── utils/        # Local mood song database & helpers
    │   ├── App.jsx       # Main App component & state management
    │   └── index.css     # Global styles & theme definitions
    ├── public/
    ├── index.html
    └── package.json
```

---

## ⚡ Getting Started

Follow these steps to set up and run the project locally on your machine.

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas instance)
- A device with a working webcam (for facial detection)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/face-dect.git
cd face-dect
```

---

### 2️⃣ Backend Setup

Navigate to the `backend` directory, install dependencies, and configure environment variables:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder with the following variables:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```

Start the backend development server:

```bash
npm run dev
```
> Server will start on `http://localhost:3000`.

---

### 3️⃣ Frontend Setup

Open a new terminal window, navigate to the `frontend` directory, and install dependencies:

```bash
cd frontend
npm install
```

Start the Vite development server:

```bash
npm run dev
```
> App will open at `http://localhost:5173`.

---

## ⚙️ Environment Variables Summary

| Directory | Variable | Description |
|---|---|---|
| `backend` | `PORT` | Backend server port (Default: `3000`) |
| `backend` | `MONGO_URI` | MongoDB Atlas / Local connection string |
| `backend` | `JWT_SECRET` | Secret key for JWT signing |
| `backend` | `REDIS_HOST` | Redis database host |
| `backend` | `REDIS_PORT` | Redis database port |
| `backend` | `REDIS_PASSWORD` | Redis database password |

---

## 📌 How It Works

1. **Webcam Stream Capture**: The frontend accesses the user's camera feed via `navigator.mediaDevices.getUserMedia`.
2. **Landmark Detection**: MediaPipe Face Landmarker extracts 478 3D facial landmarks and blendshapes in real-time.
3. **Emotion Score Calculation**: Blendshape scores (jawOpen, mouthSmileLeft, browDownLeft, etc.) are processed to identify dominant emotions (Happy, Neutral, Sad, Angry, Surprised).
4. **Song Trigger**: Upon emotion detection, the app filters songs mapped to that mood and starts playback through the custom embedded YouTube Player.
5. **Mood Logging**: Detected moods and playback activity are recorded to keep track of mood trends.

---

## 📄 Placeholder Cheat-Sheet (For Quick Edits)

When ready to update your image and live link in this README:
- Replace `YOUR_IMAGE_URL_HERE` with your image URL (e.g., `https://i.imgur.com/example.png` or `docs/preview.png`).
- Replace `YOUR_LIVE_LINK_HERE` with your deployed URL (e.g., `https://moodtune.vercel.app`).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [Issues page](https://github.com/YOUR_USERNAME/face-dect/issues).

---

## 📜 License

This project is licensed under the **ISC License**.
