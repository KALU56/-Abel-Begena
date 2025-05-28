import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-100 to-yellow-50 py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Background Sun / Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 to-amber-100/30" />

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-serif text-brown-800 leading-tight">
          Awaken the Soul<br /> through the Ancient Strings<br /> of the Begena
        </h1>
        <p className="mt-4 text-lg text-brown-700">
          Experience the celestial sounds of a tradition that echoes through time.
        </p>
        <button className="mt-6 px-6 py-3 bg-brown-800 text-white rounded-lg hover:bg-brown-700 transition">
          Discover the Begena
        </button>
      </div>

      {/* Begena Image */}
      <div className="relative z-10 mt-10 md:mt-0 md:ml-12">
        <Image
          src="/images/begena.png" // Replace with your actual image path
          alt="Begena"
          width={400}
          height={600}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
