import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'TEAM', path: '/team' },
    { name: 'PROCEDURES', path: '/procedures' },
    { name: 'BENEFITS', path: '/benefits' },
    { name: 'TESTIMONIALS', path: '/testimonials' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-11 h-11">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-foreground">Dr. Marios</span>
                <span className="text-xs text-muted-foreground font-medium">Interventional Radiology</span>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                    location.pathname === item.path 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/book-appointment">
                <Button className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </div>
            
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-2xl animate-fade-in-up">
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                    location.pathname === item.path 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
