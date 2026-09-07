import React, { useState } from "react";
import { extractYoutubeId } from "../utils/youtubePlayer";

export default function YouTubeSearch({ onPlayCustomSong, isOpen, onClose }) {
  const [searchInput, setSearchInput] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handlePlaySubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!searchInput.trim()) return;

    const ytId = extractYoutubeId(searchInput);
    if (!ytId) {
      setErrorMsg("Please enter a valid YouTube link or 11-character video ID!");
      return;
    }

    const customSong = {
      id: `custom_${Date.now()}`,
      mood: "🎵 Custom Track",
      title: songTitle.trim() || `YouTube Track (${ytId})`,
      artist: artistName.trim() || "YouTube Creator",
      youtubeId: ytId,
      duration: "Live",
      genre: "YouTube Custom",
      cover: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
    };

    onPlayCustomSong(customSong);
    setSearchInput("");
    setSongTitle("");
    setArtistName("");
    onClose && onClose();
  };

  const presetTracks = [
    { title: "Coke Studio Pasoori", artist: "Ali Sethi", ytId: "5Eqb_-j3FDA" },
    { title: "Kesariya", artist: "Arijit Singh", ytId: "BddP6PYo2gs" },
    { title: "Blinding Lights", artist: "The Weeknd", ytId: "fHI8X4OXluQ" },
    { title: "Lofi Hip Hop Radio", artist: "Lofi Girl", ytId: "jfKfPfyJRdk" }
  ];

  if (!isOpen) return null;

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <div>
            <h3>Play Any YouTube Song</h3>
            <p>Paste a YouTube URL or Video ID to stream instantly</p>
          </div>
          <button className="btn-close-modal" onClick={onClose}>
            ✕
          </button>
        </div>

        <form onSubmit={handlePlaySubmit} className="search-modal-form">
          <div className="form-group">
            <label>YouTube Link or Video ID *</label>
            <input
              type="text"
              placeholder="e.g. https://www.youtube.com/watch?v=BddP6PYo2gs"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-input"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Song Title (Optional)</label>
              <input
                type="text"
                placeholder="Song Title"
                value={songTitle}
                onChange={(e) => setSongTitle(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="form-group">
              <label>Artist Name (Optional)</label>
              <input
                type="text"
                placeholder="Artist"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          {errorMsg && <p className="error-badge">{errorMsg}</p>}

          <button type="submit" className="btn btn-primary full-width">
            ▶ Play Song Now
          </button>
        </form>

        <div className="quick-presets">
          <p className="presets-label">Popular YouTube Hits:</p>
          <div className="preset-chips">
            {presetTracks.map((item) => (
              <button
                key={item.ytId}
                className="preset-chip"
                onClick={() => {
                  onPlayCustomSong({
                    id: `custom_${item.ytId}`,
                    mood: "🎵 Custom Track",
                    title: item.title,
                    artist: item.artist,
                    youtubeId: item.ytId,
                    duration: "Live",
                    genre: "Popular Hit",
                    cover: `https://img.youtube.com/vi/${item.ytId}/hqdefault.jpg`,
                  });
                  onClose();
                }}
              >
                ▶ {item.title} ({item.artist})
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
