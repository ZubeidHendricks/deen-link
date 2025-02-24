import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-neutral-light shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-primary font-bold text-xl">Deen Link</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/teachers" className="hover:text-primary transition-colors">Find Teachers</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link href="/login" className="btn-outline hidden md:block">Login</Link>
          <Link href="/register" className="btn-primary">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}
