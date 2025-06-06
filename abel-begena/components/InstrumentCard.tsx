// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// interface InstrumentCardProps {
//   name: string;
//   images: string[];
//   description: string;
//   price: string;
// }

// export default function InstrumentCard({ name, images, description, price }: InstrumentCardProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = images.length;

//   const goNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % total); // circular forward
//   };

//   const goPrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + total) % total); // circular backward
//   };

//   return (
//     <div className="bg-white rounded-xl shadow p-4 text-center space-y-4">
//       <div className="relative w-full h-[200px]">
//         <Image
//           src={images[currentIndex]}
//           alt={`${name} image ${currentIndex + 1}`}
//           fill
//           className="rounded-md object-cover"
//         />
//         <button
//           onClick={goPrev}
//           className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
//         >
//           ◀
//         </button>
//         <button
//           onClick={goNext}
//           className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow"
//         >
//           ▶
//         </button>
//       </div>
//       <h3 className="text-xl font-semibold">{name}</h3>
//       <p className="text-gray-600">{description}</p>
//       <p className="text-indigo-600 font-bold">{price}</p>
//     </div>
//   );
// }
