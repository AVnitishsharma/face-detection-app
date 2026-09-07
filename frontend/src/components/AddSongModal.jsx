import React, { useState } from "react";
import { extractYoutubeId } from "../utils/youtubePlayer";

export default function AddSongModal({
  isOpen,
  onClose,
  onAddCustomSong,
  onCreatePlaylist,
  customPlaylists = [],
}) {
  const [modalMode, setModalMode] = useState("addSong"); // "addSong" | "createPlaylist"

  // Add Song Form State
  const [ytInput, setYtInput] = useState("");
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [targetMood, setTargetMood] = useState("😊 Happy");
  const [genre, setGenre] = useState("Custom");
  const [errorMsg, setErrorMsg] = useState("");

  // Create Playlist Form State
  const [playlistName, setPlaylistName] = useState("");
  const [playlistEmoji, setPlaylistEmoji] = useState("🎵");

  const handleAddSongSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    const ytId = extractYoutubeId(ytInput);
    if (!ytId) {
      setErrorMsg("Please enter a valid YouTube link or 11-character Video ID!");
      return;
    }

    const newTrack = {
      id: `custom_song_${Date.now()}`,
      mood: targetMood,
      title: title.trim() || `YouTube Song (${ytId})`,
      artist: artist.trim() || "User Custom Track",
      youtubeId: ytId,
      duration: "Custom",
      genre: genre.trim() || "User Track",
      cover: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
      isCustom: true,
    };

    onAddCustomSong(newTrack);
    setYtInput("");
    setTitle("");
    setArtist("");
    setErrorMsg("");
    onClose();
  };

  const handleCreatePlaylistSubmit = (e) => {
    e.preventDefault();
    if (!playlistName.trim()) return;

    const newPlaylist = {
      id: `playlist_${Date.now()}`,
      name: playlistName.trim(),
      emoji: playlistEmoji || "🎵",
      songs: [],
    };

    onCreatePlaylist(newPlaylist);
    setPlaylistName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="search-modal-header">
          <div className="modal-tabs">
            <button
              className={`modal-tab-btn ${modalMode === "addSong" ? "active" : ""}`}
              onClick={() => setModalMode("addSong")}
            >
              ➕ Add Song to Mood
            </button>
            <button
              className={`modal-tab-btn ${modalMode === "createPlaylist" ? "active" : ""}`}
              onClick={() => setModalMode("createPlaylist")}
            >
              📁 Create Custom Playlist
            </button>
          </div>
          <button className="btn-close-modal" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Mode 1: Add Song to Mood */}
        {modalMode === "addSong" && (
          <form onSubmit={handleAddSongSubmit} className="search-modal-form">
            <div className="form-group">
              <label>YouTube Link or Video ID *</label>
              <input
                type="text"
                placeholder="e.g. https://www.youtube.com/watch?v=BddP6PYo2gs"
                value={ytInput}
                onChange={(e) => setYtInput(e.target.value)}
                className="search-input"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Song Title *</label>
                <input
                  type="text"
                  placeholder="Song Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="search-input"
                  required
                />
              </div>
              <div className="form-group">
                <label>Artist Name</label>
                <input
                  type="text"
                  placeholder="Artist"
                  value={artist}
                  onChange={(e) => setArtist(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Target Mood Category *</label>
                <select
                  value={targetMood}
                  onChange={(e) => setTargetMood(e.target.value)}
                  className="search-input"
                >
                  <option value="😊 Happy">Happy 😊</option>
                  <option value="😢 Sad">Sad 😢</option>
                  <option value="😠 Angry">Angry 😠</option>
                  <option value="😲 Surprise">Surprise 😲</option>
                  <option value="😐 Neutral">Neutral 😐</option>
                  <option value="😴 Sleepy">Sleepy 😴</option>
                </select>
              </div>
              <div className="form-group">
                <label>Genre / Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Bollywood, Lo-Fi, EDM"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            {errorMsg && <p className="error-badge">{errorMsg}</p>}

            <button type="submit" className="btn btn-primary full-width">
              ➕ Save Song to {targetMood}
            </button>
          </form>
        )}

        {/* Mode 2: Create Custom Playlist */}
        {modalMode === "createPlaylist" && (
          <form onSubmit={handleCreatePlaylistSubmit} className="search-modal-form">
            <div className="form-group">
              <label>Playlist Name *</label>
              <input
                type="text"
                placeholder="e.g. Workout Hits, Chill Beats, Favorite Arijit"
                value={playlistName}
                onChange={(e) => setPlaylistName(e.target.value)}
                className="search-input"
                required
              />
            </div>

            <div className="form-group">
              <label>Playlist Emoji Icon</label>
              <select
                value={playlistEmoji}
                onChange={(e) => setPlaylistEmoji(e.target.value)}
                className="search-input"
              >
                <option value="🎵">🎵 Music Note</option>
                <option value="🔥">🔥 Hot Beats</option>
                <option value="🎧">🎧 Headphones</option>
                <option value="❤️">❤️ Favorite Vibe</option>
                <option value="🌙">🌙 Night Chill</option>
                <option value="⚡">⚡ Workout Energy</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary full-width">
              📁 Create Playlist Now
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
