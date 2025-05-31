'use client';
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
      className="bg-white text-gray-800 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video
            src="/abel_begena1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800">About Abel Begena</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong>Abel Begena</strong> is a cultural platform devoted to preserving and teaching the sacred sounds of Ethiopia's traditional instruments, especially the <span className="font-semibold text-amber-700">Begena</span> and <span className="font-semibold text-amber-700">Kirar</span>.
          </p>
          <p className="text-md text-gray-600 mb-4">
            We combine storytelling, spiritual heritage, and hands-on learning to pass down timeless musical traditions to a new generation.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={toggleAudio}
              className="bg-amber-700 text-white px-5 py-2 rounded hover:bg-amber-800 transition"
            >
              {isPlaying ? 'Pause Preview' : 'Play Begena Sound'}
            </button>
            <Link
              href="/about"
              className="text-amber-800 font-semibold underline hover:text-amber-900"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Hidden audio element */}
          <audio ref={audioRef} src="/audio/begena-sample.mp3" preload="auto" />
        </div>
      </div>
    </motion.section>
  );
}
