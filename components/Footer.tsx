import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral-light dark:bg-neutral-800 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Deen Link</h3>
            <p className="text-sm mb-4">Connecting qualified Mualimas with parents seeking Islamic education for their children.</p>
          </div>
          
          <div>
            <h4 className="text-md font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/teachers" className="text-sm hover:text-primary transition-colors">Find Teachers</Link></li>
              <li><Link href="/become-teacher" className="text-sm hover:text-primary transition-colors">Become a Teacher</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-bold mb-4">Connect With Us</h4>
            <p className="text-sm mb-2">Email: info@deenlink.com</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-primary hover:text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Deen Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
