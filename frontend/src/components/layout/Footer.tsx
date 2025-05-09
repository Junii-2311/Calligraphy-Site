import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-primary-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="text-xl font-display mb-4">Rafat Hussain</h3>
            <p className="mb-4 text-sm leading-relaxed">
              Creating meaningful calligraphy art that captures moments, emotions, and stories through the timeless beauty of handcrafted lettering.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-accent-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-accent-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-accent-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-accent-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-primary-200 hover:text-accent-400 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-accent-400 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-200 hover:text-accent-400 transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-accent-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display mb-4">Contact</h3>
            <address className="not-italic text-sm">
              <p className="mb-2">Lahore, Pakistan</p>
              <p className="mb-2">Email: rafat@example.com</p>
              <p className="mb-2">Phone: (+92) 456-7890</p>
            </address>
            <div className="mt-4">
              <Link to="/contact" className="btn btn-outline border-primary-400 text-primary-200 hover:bg-primary-800">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-300">
              &copy; {currentYear} Rafat Hussain Calligraphy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-primary-300">
              <a href="#" className="hover:text-accent-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;