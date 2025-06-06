// components/TrainingSection.tsx
import Link from 'next/link';

const TrainingSection = () => {
  return (
    <section className="bg-amber-800 text-white text-center py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Begin Your Journey?
      </h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Preserving Ethiopia’s musical heritage through the sacred begena and vibrant kirar.
      </p>
      <Link
        href="/training"
        className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-all duration-300"
      >
        Explore Our Courses
      </Link>
    </section>
  );
};

export default TrainingSection;
