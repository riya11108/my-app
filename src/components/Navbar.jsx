import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, Heart } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Listings', path: '/listings' },
    { name: 'Blog', path: '/blog' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">SmartLease</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & Bookmarks */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/listings"
              className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Heart className="h-5 w-5" />
              <span className="text-sm">Saved</span>
            </Link>
            <button className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">
            <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
            </button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t pt-3 mt-3 space-y-2">
                <Link
                  to="/listings"
                  className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-red-600"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="h-5 w-5" />
                  <span>Saved Properties</span>
                </Link>
                <button className="w-full text-left px-3 py-2 text-gray-700 hover:text-green-600">
                  Sign In
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-medium">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;