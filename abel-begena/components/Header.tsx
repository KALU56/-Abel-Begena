import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Training', href: '/training' },
  { name: 'Instruments', href: '/instruments' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between p-4 text-white shadow">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/habesha-border1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px) brightness(1.0)',
        }}
      ></div>

      {/* Overlay to darken and isolate content */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Header Content */}
      <div className="relative z-10 flex items-center gap-2">
        <Image src="/Logo.png" alt="Abel Begena Logo" width={40} height={40} />
        <span className="font-bold text-xl tracking-wide">Abel Begena</span>
      </div>

      <nav className="relative z-10 space-x-4 text-sm font-medium">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:underline hover:text-yellow-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
