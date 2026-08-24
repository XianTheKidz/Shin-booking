import { useCallback, useEffect, useRef, useState } from "react";
import {
  Shuffle,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  X,
  Music,
} from "lucide-react";

const songs = [
  {
    title: "Sunshine",
    artist: "OneRepublic",
    src: "/music/Sunshine.mp3",
    cover: "/covers/sunshine.jpg",
  },
  {
    title: "Super Far",
    artist: "LANY",
    src: "/music/super-far.mp3",
    cover: "/covers/LANY.jpg",
  },
  {
    title: "Adore You",
    artist: "Harry Styles",
    src: "/music/adore-you.mp3",
    cover: "/covers/fine-line.jpg",
  },
  {
    title: "Potential",
    artist: "sombr",
    src: "/music/potential.mp3",
    cover: "/covers/Potential.jpg",
  },
  {
    title: "Beautiful People",
    artist: "Ed Sheeran (feat. Khalid)",
    src: "/music/beautiful-people.mp3",
    cover: "/covers/No.6-collaborations-project.jpg",
  },
  {
    title: "No Control",
    artist: "One Direction",
    src: "/music/no-control.mp3",
    cover: "/covers/four.jpg",
  },
  {
    title: "JUST A DREAM",
    artist: "Yel",
    src: "/music/just-a-dream.mp3",
    cover: "/covers/just-a-dream.jpg",
  },
  {
    title: "beach song",
    artist: "Yung Kai",
    src: "/music/beach-song.mp3",
    cover: "/covers/stay-with-the-ocean,i'll-find-you.jpg",
  },
  {
    title: "Borderline",
    artist: "Tame Impala",
    src: "/music/borderline.mp3",
    cover: "/covers/the-slow-rush.jpg",
  },
  {
    title: "sunny days",
    artist: "wave to earth",
    src: "/music/sunny-days.mp3",
    cover: "/covers/0.1-flaws-and-all.jpg",
  },
  {
    title: "Less than a lover",
    artist: "JENNIE",
    src: "/music/less-than-a-lover.mp3",
    cover: "/covers/less-than-a-lover.jpg",
  },
  {
    title: "The Sound",
    artist: "The 1975",
    src: "/music/the-sound.mp3",
    cover: "/covers/the-sound.jpg",
  },
  {
    title: "Say",
    artist: "keshi",
    src: "/music/say.mp3",
    cover: "/covers/Requiem.jpg",
  },
  {
    title: "This Feeling",
    artist: "The Chainsmokers",
    src: "/music/this-feeling.mp3",
    cover: "/covers/sick-boy.jpg",
  },
  {
    title: "Love Me Not",
    artist: "Ravyn Lenae",
    src: "/music/love-me-not.mp3",
    cover: "/covers/love-me-not.jpg",
  },
];

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const shouldContinuePlayingRef = useRef(false);

  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const song = songs[currentSong];

  // =========================
  // AUTOPLAY
  // =========================
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        console.log(
          "Autoplay blocked. Waiting for user interaction."
        );
        setIsPlaying(false);
      }
    };

    startMusic();

    const handleFirstInteraction = () => {
      startMusic();

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  // =========================
  // NEXT SONG
  // =========================
  const nextSong = useCallback(() => {
    shouldContinuePlayingRef.current = true;

    setCurrentSong((prev) => {
      if (isShuffle) {
        let randomIndex;

        do {
          randomIndex = Math.floor(
            Math.random() * songs.length
          );
        } while (
          randomIndex === prev &&
          songs.length > 1
        );

        return randomIndex;
      }

      return (prev + 1) % songs.length;
    });
  }, [isShuffle]);

  // =========================
  // PREVIOUS SONG
  // =========================
  const previousSong = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
      return;
    }

    shouldContinuePlayingRef.current = isPlaying;

    setCurrentSong(
      (prev) => (prev - 1 + songs.length) % songs.length
    );
  }, [isPlaying]);

  // =========================
  // HANDLE SONG CHANGE
  // =========================
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    setCurrentTime(0);
    setDuration(0);

    audio.src = song.src;
    audio.load();

    const shouldPlay =
      isPlaying || shouldContinuePlayingRef.current;

    if (shouldPlay) {
      const playNewSong = async () => {
        try {
          await audio.play();

          setIsPlaying(true);
          shouldContinuePlayingRef.current = false;
        } catch (error) {
          console.error(
            "Unable to play new song:",
            error
          );

          setIsPlaying(false);
        }
      };

      playNewSong();
    }
  }, [currentSong]);

  // =========================
  // AUDIO EVENTS
  // =========================
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const updateDuration = () => {
      if (Number.isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      shouldContinuePlayingRef.current = true;

      setCurrentSong((prev) => {
        if (isShuffle) {
          let randomIndex;

          do {
            randomIndex = Math.floor(
              Math.random() * songs.length
            );
          } while (
            randomIndex === prev &&
            songs.length > 1
          );

          return randomIndex;
        }

        return (prev + 1) % songs.length;
      });
    };

    const handleError = () => {
      console.error(
        "Unable to load audio:",
        song.src
      );

      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener(
      "loadedmetadata",
      updateDuration
    );
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateTime
      );
      audio.removeEventListener(
        "loadedmetadata",
        updateDuration
      );
      audio.removeEventListener(
        "play",
        handlePlay
      );
      audio.removeEventListener(
        "pause",
        handlePause
      );
      audio.removeEventListener(
        "ended",
        handleEnded
      );
      audio.removeEventListener(
        "error",
        handleError
      );
    };
  }, [isShuffle, song.src]);

  // =========================
  // PLAY / PAUSE
  // =========================
  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error(
          "Unable to play audio:",
          error
        );

        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  // =========================
  // PROGRESS BAR
  // =========================
  const handleProgress = (e) => {
    const value = Number(e.target.value);
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = value;
    setCurrentTime(value);
  };

  // =========================
  // FORMAT TIME
  // =========================
  const formatTime = (time) => {
    if (!Number.isFinite(time) || time < 0) {
      return "00:00";
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={song.src}
        preload="metadata"
      />

      {isOpen ? (
        <div
          className="
            fixed bottom-6 right-6 z-50
            w-95 max-w-[calc(100vw-32px)]
            rounded-3xl
            border border-white/20
            bg-white/95
            p-4
            shadow-2xl
            backdrop-blur-xl
            dark:border-slate-700
            dark:bg-slate-900/95
          "
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute right-3 top-3
              flex h-7 w-7
              items-center justify-center
              rounded-full
              text-slate-500
              transition
              hover:bg-slate-200
              hover:text-slate-900
              dark:hover:bg-slate-700
              dark:hover:text-white
            "
            title="Close Music Player"
            aria-label="Close Music Player"
          >
            <X size={16} strokeWidth={2} />
          </button>

          {/* Song Information */}
          <div className="flex items-center gap-4">

            {/* Spinning Album Cover */}
            <div
              className={`
                relative
                h-24 w-24 shrink-0
                overflow-hidden
                rounded-full
                shadow-lg
                ${isPlaying ? "animate-spin" : ""}
              `}
              style={{
                animationDuration: "3s",
              }}
            >
              <img
                src={song.cover}
                alt={song.title}
                className="h-full w-full object-cover"
              />

              {/* Center Hole */}
              <div
                className="
                  absolute
                  left-1/2 top-1/2
                  h-7 w-7
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-white/90
                  shadow-inner
                "
              >
                <div
                  className="
                    absolute
                    left-1/2 top-1/2
                    h-2 w-2
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-slate-900
                  "
                />
              </div>
            </div>

            {/* Song Information */}
            <div className="min-w-0 flex-1 pr-5">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Shin Booking Music
              </p>

              <h3 className="truncate text-xl font-semibold text-slate-900 dark:text-white">
                {song.title}
              </h3>

              <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                {song.artist}
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={Math.min(currentTime, duration || 0)}
              onChange={handleProgress}
              disabled={!duration}
              className="
                h-1 w-full
                cursor-pointer
                accent-cyan-500
                disabled:cursor-not-allowed
              "
            />

            <div className="mt-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-4 flex items-center justify-center gap-5">

            {/* Shuffle */}
            <button
              onClick={() => setIsShuffle((prev) => !prev)}
              className={`
                transition
                ${
                  isShuffle
                    ? "text-cyan-500"
                    : "text-slate-500 dark:text-slate-400"
                }
                hover:text-cyan-500
              `}
              title={isShuffle ? "Shuffle On" : "Shuffle Off"}
              aria-label={
                isShuffle
                  ? "Disable shuffle"
                  : "Enable shuffle"
              }
            >
              <Shuffle size={20} strokeWidth={2} />
            </button>

            {/* Previous */}
            <button
              onClick={previousSong}
              className="
                text-2xl
                text-slate-700
                transition
                hover:text-cyan-500
                dark:text-white
              "
              title="Previous"
              aria-label="Previous song"
            >
              <SkipBack size={24} />
            </button>

            {/* Play / Pause */}
            <button
              onClick={togglePlay}
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                bg-cyan-500
                text-xl
                text-white
                shadow-lg
                shadow-cyan-500/30
                transition
                hover:scale-105
                hover:bg-cyan-400
              "
              title={isPlaying ? "Pause" : "Play"}
              aria-label={
                isPlaying
                  ? "Pause music"
                  : "Play music"
              }
            >
              {isPlaying ? (
                <Pause
                  size={22}
                  fill="currentColor"
                />
              ) : (
                <Play
                  size={22}
                  fill="currentColor"
                />
              )}
            </button>

            {/* Next */}
            <button
              onClick={nextSong}
              className="
                text-2xl
                text-slate-700
                transition
                hover:text-cyan-500
                dark:text-white
              "
              title="Next"
              aria-label="Next song"
            >
              <SkipForward size={24} />
            </button>
          </div>

          {/* Song Count */}
          <p className="mt-3 text-center text-xs text-slate-400">
            {currentSong + 1} / {songs.length}
          </p>
        </div>
      ) : (
        /* Small Button After Closing */
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed bottom-6 right-6 z-50
            flex h-14 w-14
            items-center justify-center
            rounded-full
            bg-cyan-500
            text-xl
            text-white
            shadow-xl
            shadow-cyan-500/30
            transition
            hover:scale-105
          "
          title="Open Music Player"
          aria-label="Open Music Player"
        >
          <Music size={22} />
        </button>
      )}
    </>
  );
};

export default MusicPlayer;