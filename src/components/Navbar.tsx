import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const { cart } = useShop();

  const categories = [
    'Perfumes', 'Jewelries', 'Gym wears', 'Vintage wears',
    'Sport wear', 'Pyjamas', 'Slippers'
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">ㄱ</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/men" className="text-gray-700 hover:text-gray-900">Men</Link>
            <Link to="/women" className="text-gray-700 hover:text-gray-900">Women</Link>
            <Link to="/kids" className="text-gray-700 hover:text-gray-900">Kids</Link>
            <Link to="/accessories" className="text-gray-700 hover:text-gray-900">Accessories</Link>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <div className="absolute z-50 hidden group-hover:block mt-2 w-48 bg-white rounded-md shadow-lg">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Search, Language, and Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-64 bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button className="flex items-center text-gray-700">
              <Globe className="h-5 w-5" />
              <span className="ml-1">EN</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#8B5CF6] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {['Home', 'Men', 'Women', 'Kids', 'Accessories', ...categories].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;