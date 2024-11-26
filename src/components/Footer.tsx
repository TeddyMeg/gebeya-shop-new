import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#8B5CF6] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link to="/" className="text-3xl font-bold">TT</Link>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">News & Blog</Link></li>
              <li><Link to="/location">Location</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/store">Store</Link></li>
              <li><Link to="/features">Features</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <ul className="space-y-2">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/customers">Customers</Link></li>
              <li><Link to="/affiliates">Affiliates</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="hover:text-gray-200">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="hover:text-gray-200">
            <Facebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;