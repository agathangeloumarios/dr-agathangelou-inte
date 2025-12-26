import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'TEAM', path: '/team' },
    { name: 'PROCEDURES', path: '/procedures' },
    { name: 'BENEFITS', path: '/benefits' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
    { name: 'BOOK AN APPOINTMENT', path: '/book-appointment' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">Dr. Marios</span>
              <span className="text-xs text-muted">Interventional Radiology</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-gray-700'}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-gray-700'}`} onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
