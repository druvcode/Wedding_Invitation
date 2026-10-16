
import { useRef, useState } from "react";
import weddingMusic from "./assets/shaadi.mp3";
import { MainScreen } from "./MainScreen.jsx";
import OpeningScreen from "./OpeningScreen.jsx";
import "./style.css";

function App() {
  const audioRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleOpenInvitation = async () => {
    // Attempt to start music before showing the main website.
    try {
      if (audioRef.current) {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Unable to start wedding music:", error);
      setPlaying(false);
    }

    // Open the main website whether or not music starts.
    setIsOpen(true);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        preload="auto"
      />

      {!isOpen ? (
        <OpeningScreen onOpen={handleOpenInvitation} />
      ) : (
        <MainScreen
          audioRef={audioRef}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
    </>
  );
}

export default App;
