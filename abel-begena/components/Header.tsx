import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Training', href: '/training' },
  { name: 'Instruments', href: '/instruments' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  return (
 <header className="sticky top-0 z-50 text-white shadow">
  {/* Background Image Layer */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "url('/habesha-border1.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  ></div>

  {/* Dark Overlay for readability */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

  {/* Header Content */}
  <div className="relative z-10 flex items-center justify-between px-4 py-3">
    <div className="flex items-center gap-2">
      <Image src="/Logo.png" alt="Logo" width={40} height={40} />
      <span className="font-bold text-xl">Abel Begena</span>
    </div>
    <nav className="space-x-4 font-medium text-sm">
      {navLinks.map(link => (
        <Link key={link.name} href={link.href} className="hover:text-yellow-300">
          {link.name}
        </Link>
      ))}
    </nav>
  </div>
</header>

  );
}
