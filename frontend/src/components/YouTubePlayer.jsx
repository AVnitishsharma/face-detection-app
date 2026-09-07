import { useEffect, useRef, useState } from "react";
import { loadYoutubeApi } from "../utils/youtubePlayer";
import AudioVisualizer from "./AudioVisualizer";

export default function YouTubePlayer({
  currentSong,
  isPlaying,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  onSongEnd,
  moodName = "Neutral",
}) {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const intervalRef = useRef(null);
  const isChangingTrackRef = useRef(false);

  const [playerReady, setPlayerReady] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Initialize YT Player
  useEffect(() => {
    let ytInstance = null;
    let isCancelled = false;

    loadYoutubeApi().then((YT) => {
      if (isCancelled || !containerRef.current) return;

      ytInstance = new YT.Player(containerRef.current, {
        height: "100%",
        width: "100%",
        videoId: currentSong?.youtubeId || "BddP6PYo2gs",
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1,
          rel: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            playerRef.current = event.target;
            setPlayerReady(true);
            event.target.setVolume(80);
            if (isPlaying) {
              event.target.playVideo();
            }
          },
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PLAYING) {
              isChangingTrackRef.current = false;
              onPlay && onPlay();
              if (playerRef.current) {
                setDuration(playerRef.current.getDuration() || 0);
              }
            } else if (event.data === YT.PlayerState.PAUSED) {
              // Ignore temporary pause events when loading a new video track
              if (!isChangingTrackRef.current) {
                onPause && onPause();
              }
            } else if (event.data === YT.PlayerState.ENDED) {
              isChangingTrackRef.current = false;
              onSongEnd && onSongEnd();
            }
          },
          onError: (err) => {
            console.warn("YouTube Player Error:", err);
            isChangingTrackRef.current = false;
            onNext && onNext();
          },
        },
      });
    });

    return () => {
      isCancelled = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  // Instant track update when currentSong changes
  useEffect(() => {
    if (playerRef.current && currentSong?.youtubeId) {
      isChangingTrackRef.current = true;
      playerRef.current.loadVideoById({
        videoId: currentSong.youtubeId,
        startSeconds: 0,
      });
      setCurrentTime(0);
      setDuration(0);
      playerRef.current.playVideo();
      onPlay && onPlay();

      // Reset flag after safety timeout
      setTimeout(() => {
        isChangingTrackRef.current = false;
      }, 1200);
    }
  }, [currentSong?.youtubeId]);

  // Sync external isPlaying state with YT player
  useEffect(() => {
    if (!playerRef.current || !playerReady || isChangingTrackRef.current) return;
    if (isPlaying) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isPlaying, playerReady]);

  // Interval timer for track timeline progress
  useEffect(() => {
    if (isPlaying && playerReady) {
      intervalRef.current = setInterval(() => {
        if (playerRef.current && playerRef.current.getCurrentTime) {
          const curr = playerRef.current.getCurrentTime() || 0;
          const dur = playerRef.current.getDuration() || 0;
          setCurrentTime(curr);
          if (dur > 0) setDuration(dur);
        }
      }, 500);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, playerReady]);

  // Listen to browser native fullscreen change to sync state on Esc
  useEffect(() => {
    const handleFsChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    document.addEventListener("webkitfullscreenchange", handleFsChange);
    document.addEventListener("mozfullscreenchange", handleFsChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFsChange);
      document.removeEventListener("webkitfullscreenchange", handleFsChange);
      document.removeEventListener("mozfullscreenchange", handleFsChange);
    };
  }, []);

  // Global Keyboard Shortcuts (Space, ArrowRight, ArrowLeft, Esc, M, F)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        return;
      }

      // Escape key -> Exit Fullscreen & close video
      if (e.key === "Escape" || e.code === "Escape") {
        if (isFullScreen) {
          if (document.exitFullscreen && document.fullscreenElement) {
            document.exitFullscreen().catch(() => { });
          }
          setIsFullScreen(false);
        }
        return;
      }

      // Spacebar -> Toggle Play / Pause
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        handleTogglePlay();
        return;
      }

      // ArrowRight or 'N' -> Next Track
      if (e.key === "ArrowRight" || e.key === "n" || e.key === "N") {
        e.preventDefault();
        onNext && onNext();
        return;
      }

      // ArrowLeft or 'P' -> Previous Track
      if (e.key === "ArrowLeft" || e.key === "p" || e.key === "P") {
        e.preventDefault();
        onPrevious && onPrevious();
        return;
      }

      // 'M' -> Toggle Mute
      if (e.key === "m" || e.key === "M") {
        e.preventDefault();
        handleToggleMute();
        return;
      }

      // 'F' -> Toggle Fullscreen Video
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        if (showVideo) {
          handleToggleFullScreen();
        } else {
          setShowVideo(true);
        }
        return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, isFullScreen, showVideo, isMuted]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      onPause && onPause();
    } else {
      onPlay && onPlay();
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (playerRef.current) {
      playerRef.current.seekTo(newTime, true);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseInt(e.target.value, 10);
    setVolume(val);
    if (playerRef.current) {
      playerRef.current.setVolume(val);
      if (val === 0) {
        playerRef.current.mute();
        setIsMuted(true);
      } else if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  const handleToggleMute = () => {
    if (!playerRef.current) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const handleToggleFullScreen = () => {
    if (!isFullScreen) {
      if (videoWrapperRef.current && videoWrapperRef.current.requestFullscreen) {
        videoWrapperRef.current.requestFullscreen().catch(() => { });
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => { });
      }
      setIsFullScreen(false);
    }
  };

  const formatTime = (secs) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  if (!currentSong) return null;

  return (
    <div className={`youtube-player-dock ${isMinimized ? "minimized" : ""}`}>
      {/* YouTube Video Modal Container */}
      <div
        className={`yt-video-modal ${showVideo ? "visible" : "hidden"} ${isFullScreen ? "fullscreen" : ""
          }`}
        ref={videoWrapperRef}
      >
        <div className="yt-video-header-controls">
          <span className="video-title-tag">📺 {currentSong.title}</span>
          <div className="video-actions-group">
            <button
              className="btn-video-action"
              onClick={handleToggleFullScreen}
              title={isFullScreen ? "Exit Fullscreen (Esc)" : "Fullscreen (F)"}
            >
              {isFullScreen ? "🗗 Exit Fullscreen (Esc)" : "⛶ Fullscreen (F)"}
            </button>
            <button
              className="btn-video-action close"
              onClick={() => {
                setShowVideo(false);
                if (isFullScreen && document.exitFullscreen && document.fullscreenElement) {
                  document.exitFullscreen().catch(() => { });
                }
                setIsFullScreen(false);
              }}
              title="Close Video"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="yt-video-wrapper">
          <div ref={containerRef} id="yt-iframe-node" />
        </div>
      </div>

      {/* Dock Player Bar */}
      <div className="player-content-bar">
        {/* Left: Cover & Track Info */}
        <div className="player-track-info">
          <div className="track-cover-wrapper" onClick={() => setShowVideo(!showVideo)}>
            <img
              src={currentSong.cover || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&q=80"}
              alt={currentSong.title}
              className={`track-cover ${isPlaying ? "spin-subtle" : ""}`}
            />
            <span className="video-badge" title="Watch YouTube Video">
              🎬
            </span>
          </div>

          <div className="track-details">
            <h4 className="track-title">{currentSong.title}</h4>
            <p className="track-artist">{currentSong.artist}</p>
            <span className="track-mood-tag">
              Vibe: <strong>{moodName}</strong>
            </span>
          </div>

          <AudioVisualizer isPlaying={isPlaying} barCount={6} />
        </div>

        {/* Middle: Controls & Timeline Slider */}
        <div className="player-center-controls">
          <div className="control-buttons">
            <button
              className="player-btn icon-only"
              onClick={onPrevious}
              title="Previous Track (← or P)"
            >
              ⏮
            </button>

            <button
              className={`player-btn play-main ${isPlaying ? "playing" : ""}`}
              onClick={handleTogglePlay}
              title={isPlaying ? "Pause (Space)" : "Play (Space)"}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            <button
              className="player-btn icon-only"
              onClick={onNext}
              title="Next Track (→ or N)"
            >
              ⏭
            </button>
          </div>

          <div className="timeline-container">
            <span className="time-text">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="timeline-slider"
            />
            <span className="time-text">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Watch Video, Fullscreen Quick Button & Volume */}
        <div className="player-right-actions">
          <button
            className={`btn-video-toggle ${showVideo ? "active" : ""}`}
            onClick={() => setShowVideo(!showVideo)}
            title="Toggle YouTube Video Frame"
          >
            📺 {showVideo ? "Hide Video" : "Watch Video"}
          </button>

          {showVideo && (
            <button
              className="btn-fs-quick"
              onClick={handleToggleFullScreen}
              title={isFullScreen ? "Exit Fullscreen (Esc)" : "Fullscreen (F)"}
            >
              {isFullScreen ? "🗗" : "⛶"}
            </button>
          )}

          <div className="volume-control-group">
            <button className="volume-btn" onClick={handleToggleMute} title="Mute/Unmute (M)">
              {isMuted || volume === 0 ? "🔇" : volume < 50 ? "🔉" : "🔊"}
            </button>
            <input
              type="range"
              min={0}
              max={100}
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
          </div>

          <button
            className="btn-dock-minimize"
            onClick={() => setIsMinimized(!isMinimized)}
            title={isMinimized ? "Expand Player" : "Minimize Player"}
          >
            {isMinimized ? "▲" : "▼"}
          </button>
        </div>
      </div>
    </div>
  );
}
