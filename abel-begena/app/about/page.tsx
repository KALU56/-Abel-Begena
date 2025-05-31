"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white text-brown-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* 📸 Image instead of video */}
        <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-800">
          <img
            src="/abel begena.jpeg" // Change this path to your desired image
            alt="Begena Instrument"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* 📄 Text + Audio Controls */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif mb-4 text-yellow-900">
            About Abel Begena
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            <strong className="text-yellow-800">Abel Begena</strong> is a cultural platform devoted to preserving and teaching the sacred sounds of Ethiopia's traditional instruments, especially the <span className="font-semibold text-yellow-700">Begena</span> and <span className="font-semibold text-yellow-700">Kirar</span>.
          </p>
          <p className="text-md text-brown-700 mb-6">
            We combine storytelling, spiritual heritage, and hands-on learning to pass down timeless musical traditions to a new generation.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={toggleAudio}
              className="px-5 py-2 rounded-lg text-white border-2 border-yellow-800 transition-colors"
              style={{ backgroundColor: '#4B2E05' }} // Dark brown consistent with HeroSection
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6A3E0A')} // lighter brown hover
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#4B2E05')}
            >
              {isPlaying ? 'Pause Preview' : 'Play Begena Sound'}
            </button>
            <Link
              href="/about"
              className="text-yellow-900 font-semibold underline hover:text-yellow-950"
            >
              Learn More About Us
            </Link>
          </div>

          {/* 🎵 Updated audio element */}
          <audio ref={audioRef} src="/abel.mp3" preload="auto" />
        </div>
      </div>
    </motion.section>
  );
}
