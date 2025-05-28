'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const MissionSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover min-h-screen flex items-center justify-center px-6 py-20"
      style={{
        backgroundImage: "url('/begena5.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <Image
            src="/begena.jpg"
            alt="Begena instrument"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center text-brown-900"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Abel Begena is dedicated to teaching the art of traditional Ethiopian instruments,
            connecting students with the spiritual and cultural legacy of the <strong>begena</strong> and <strong>kirar</strong>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
