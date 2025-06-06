// 'use client';

// import { useState } from 'react';
// import InstrumentCard from '@/components/InstrumentCard';

// export default function InstrumentsPage() {
//   const [filter, setFilter] = useState('All');

//   const instruments = [
//     {
//       name: 'Begena Classic',
//       category: 'Begena',
//       images: ['/beg.jpeg', '/beg1.jpg', '/beg3.jpg'],
//       price: '$300',
//       description: 'A large traditional Ethiopian string instrument used for meditative music.',
//     },
//     {
//       name: 'Begena Premium',
//       category: 'Begena',
//       images: ['/beg5.jpg', '/beg6.jpg', '/begena3.jpg'],
//       price: '$450',
//       description: 'A premium handcrafted Begena with rich sound quality.',
//     },
//     {
//       name: 'Kirar Small',
//       category: 'Kirar',
//       images: ['/kirak1.jpg', '/kirak2.jpg'],
//       price: '$150',
//       description: 'A compact lyre-like instrument used in traditional Ethiopian folk music.',
//     },
//     {
//       name: 'Kirar Deluxe',
//       category: 'Kirar',
//       images: ['/kirak3.jpg', '/kirak5.jpg'],
//       price: '$200',
//       description: 'A deluxe version of the Kirar with enhanced resonance.',
//     },
//   ];

//   const filteredInstruments =
//     filter === 'All'
//       ? instruments
//       : instruments.filter((instrument) => instrument.category === filter);

//   return (
//     <div className="max-w-6xl mx-auto py-10 px-4">
//       <div className="flex justify-center gap-4 mb-6">
//         {['All', 'Begena', 'Kirar'].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setFilter(cat)}
//             className={`px-4 py-2 rounded-full ${
//               filter === cat
//                 ? 'bg-indigo-600 text-white'
//                 : 'bg-gray-200 text-gray-700'
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {filteredInstruments.map((instrument, index) => (
//           <InstrumentCard key={index} {...instrument} />
//         ))}
//       </div>
//     </div>
//   );
// }
