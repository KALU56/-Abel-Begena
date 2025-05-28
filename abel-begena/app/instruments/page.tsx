import InstrumentCard from '@/components/InstrumentCard';

export default function InstrumentsPage() {
  const instruments = [
    { name: 'Begena', image: '/begena.jpg', description: 'A traditional large Ethiopian string instrument.' },
    { name: 'Kirar', image: '/kirar.jpg', description: 'A small, lyre-like instrument commonly used in Ethiopian music.' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {instruments.map((instrument, index) => (
        <InstrumentCard key={index} {...instrument} />
      ))}
    </div>
  );
}
