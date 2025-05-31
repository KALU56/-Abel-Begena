'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  {
    title: 'Train Children and Adults',
    text: 'Our mission is to train both children and adults in the art of the begena and kirar, helping them create spiritual songs that glorify God.',
    delay: 0.2,
  },
  {
    title: 'Spread Across Ethiopia and Africa',
    text: 'We aim to preserve and spread traditional Ethiopian music culture across Ethiopia and Africa through hands-on learning and mentorship.',
    delay: 0.4,
  },
  {
    title: 'Thank God Through Music',
    text: 'We give thanks to God through the ancient sounds of begena, offering a spiritual connection and reflection through every note.',
    delay: 0.6,
  },
];

const MissionSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/abel_begena1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔲 Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ✨ Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-20 max-w-7xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">Our Mission</h2>
          <p className="text-lg text-brown-800 max-w-2xl mx-auto">
            Abel Begena is committed to preserving Ethiopia’s spiritual sound through traditional instruments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: card.delay }}
              viewport={{ once: true }}
              className="p-6 rounded-xl shadow-lg border border-yellow-200 hover:scale-105 transition-transform"
              style={{
                background: 'radial-gradient(circle at center, rgb(50, 47, 37) 40%, rgb(118, 56, 10) 100%)',
              }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white/90 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
