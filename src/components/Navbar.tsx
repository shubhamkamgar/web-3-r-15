
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Results', path: '/testimonials' },
    { name: 'Featured Success Stories', path: '/featured-success-stories' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg sm:text-xl md:text-2xl">
                <span className="text-primary">AI</span>
                <span className="text-accent">AdMaxify</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors touch-manipulation ${
                  isActive(item.path)
                    ? 'text-accent bg-accent-light'
                    : 'text-gray-700 hover:text-accent hover:bg-accent-light'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/strategy-call-calendly">
              <Button className="agency-btn btn-touch">Book Strategy Call</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-accent touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white border-t shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors touch-manipulation min-h-[44px] flex items-center ${
                    isActive(item.path)
                      ? 'text-accent bg-accent-light'
                      : 'text-gray-700 hover:text-accent hover:bg-accent-light'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2">
                <Link to="/strategy-call-calendly" onClick={() => setIsOpen(false)}>
                  <Button className="agency-btn w-full btn-touch text-base py-3">Book Strategy Call</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
