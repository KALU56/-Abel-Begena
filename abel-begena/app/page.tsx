import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/HeroSection'; // Import your HeroSection component

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Additional Sections */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/begena.jpg"
              alt="Begena instrument"
              width={500}
              height={300}
              className="rounded"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              Abel Begena is dedicated to teaching the art of traditional Ethiopian instruments,
              connecting students with the spiritual and cultural legacy of the begena and kirar.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-amber-800 text-white text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Preserving Ethiopia’s musical heritage through the sacred begena and vibrant kirar.
        </p>
        <Link
          href="/training"
          className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700"
        >
          Explore Our Courses
        </Link>
      </section>
    </div>
  );
}
