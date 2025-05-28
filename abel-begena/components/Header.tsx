import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-amber-800 text-white p-4 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Abel Begena</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/training" className="hover:underline">Training</Link>
          <Link href="/instruments" className="hover:underline">Instruments</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
}