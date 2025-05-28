export default function Footer() {
  return (
    <footer className="bg-amber-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Abel Begena. All rights reserved.</p>
      <p>Email: info@abelbegena.com | Phone: +251-123-456-789</p>
    </footer>
  );
}