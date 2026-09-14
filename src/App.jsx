import react,{ useEffect, useMemo, useState,useRef } from 'react';
import weddingMusic from './assets/shaadi.mp3'
import {MainScreen} from "./MainScreen.jsx"
import OpeningScreen from "./OpeningScreen.jsx";
import './style.css'


function App() {
  const audioRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [playing, setPlaying] = useState(false)

  const handleOpenInvitation = async () => {
    // Start music from the user's button click
    try {
      if (audioRef.current) {
        await audioRef.current.play()
        setPlaying(true)
      }
    } catch (error) {
      console.error('Unable to start wedding music:', error)
      setPlaying(false)
    }

    // Show the main website
    setIsOpen(true)
  }

  return (
    <>
      {/* Shared audio element */}
      <audio
        ref={audioRef}
        src={weddingMusic}
        loop
        preload="auto"
      />

      {!isOpen ? (
        <OpeningScreen
          onOpen={handleOpenInvitation}
        />
      ) : (
        <MainScreen
          audioRef={audioRef}
          playing={playing}
          setPlaying={setPlaying}
        />
      )}
    </>
  )
}

export default App

