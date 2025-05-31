"use client";
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Autoplay audio on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        setIsPlaying(false); // Autoplay blocked or failed
      });
    }
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      className="relative min-h-screen py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between border-decor"
      style={{
        background:
          'radial-gradient(circle at center, rgb(254, 252, 244) 40%, rgb(167, 77, 8) 100%)',
      }}
    >
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 to-amber-100/30 z-0" />

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif text-brown-800 leading-tight">
          Awaken the Soul
          <br /> through the Ancient Strings
          <br /> of the Begena
        </h1>
        <p className="mt-4 text-lg text-brown-700">
          Experience the celestial sounds of a tradition that echoes through time.
        </p>

        {/* Play/Pause Button */}
        <button
          className="mt-6 px-6 py-3 text-white rounded-lg transition border-2 border-red-500"
          style={{ backgroundColor: '#4B2E05' }} // Dark brown
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6A3E0A')} // lighter brown on hover
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4B2E05')}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        {/* Hidden audio element */}
        <audio ref={audioRef} src="/abel.mp3" preload="auto" loop />
      </div>

      {/* Circular Begena Image */}
      <div className="relative z-10 mt-10 md:mt-0 md:ml-12">
        <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-yellow-800 shadow-lg">
          <Image
            src="/begena1.jpeg"
            alt="Begena"
            width={400}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
