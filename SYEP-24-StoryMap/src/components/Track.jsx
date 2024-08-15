import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Howl } from "howler";
import { TbPlayerPause } from "react-icons/tb";
import { TbPlayerPlay } from "react-icons/tb";

const Track = ({
  src,
  setIsPlaying,
  isPlaying,
  currentSong,
  setCurrentSong,
  index,
}) => {
  const [song, setSong] = useState(null);
  const [isLocalPlaying, setIsLocalPlaying] = useState(false);
  useEffect(() => {
    const music = new Howl({
      src: [src],
      autoplay: false,
      loop: false,
      onend: function () {
        setIsPlaying(false);
        setIsLocalPlaying(false);
      },
    });

    setSong(music);
    if (index === 0 || currentSong === null) {
      setCurrentSong(music);
    }
  }, []);

  const handleToggle = () => {
    alert(src);
  };

  const handlePause = () => {
    song.pause();
    setIsLocalPlaying(false);
  };

  const handlePlay = () => {
    if (song.playing()) {
      handlePause();
    }
    currentSong.playing() && currentSong.pause();
    setCurrentSong(song);
    song.play();
    setIsLocalPlaying(true);

    setIsPlaying(true);
  };
  return (
    <Button
      variant="light"
      onClick={() => {
        if (song != null && currentSong != null) {
          currentSong.playing() && song.playing()
            ? handlePause()
            : handlePlay();
        }
      }}
    >
      {currentSong != null &&
      song != null &&
      currentSong.playing() &&
      song.playing() ? (
        <TbPlayerPause />
      ) : (
        <TbPlayerPlay />
      )}
    </Button>
  );
};

export default Track;
