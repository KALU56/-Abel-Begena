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
    <header
      className="flex items-center justify-between p-4 shadow"
      style={{
        backgroundImage: "url('/habesha-border.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center gap-2">
        <Image src="/Logo.png" alt="Abel Begena Logo" width={40} height={40} />
        <span className="font-bold text-xl tracking-wide text-white">Abel Begena</span>
      </div>
      <nav className="space-x-4 text-sm font-medium">
        {navLinks.map(link => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:underline text-white hover:text-yellow-300"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}
