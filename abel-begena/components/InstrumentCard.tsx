import Image from 'next/image';

interface InstrumentCardProps {
  name: string;
  image: string;
  description: string;
}

export default function InstrumentCard({ name, image, description }: InstrumentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 text-center">
      <Image src={image} alt={name} width={400} height={250} className="rounded-md mx-auto" />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}