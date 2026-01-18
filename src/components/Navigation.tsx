import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List, X, Pulse } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/images/logo.png';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
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
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 shadow-lg" style={{ backgroundColor: '#0D2845' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3 group">
              {!logoError && logo ? (
                <img 
                  src={logo} 
                  alt="Dr Agathangelou Marios Logo" 
                  className="h-20 w-auto" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="h-20 w-20 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Pulse className="text-primary" size={44} weight="bold" />
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight group-hover:text-primary transition-colors">
                  Dr Agathangelou Marios
                </span>
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
                      : 'text-white/80 hover:text-primary hover:bg-white/5'
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
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
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
          <div className="absolute top-20 left-0 right-0 shadow-2xl animate-fade-in-up" style={{ backgroundColor: '#0D2845' }}>
            <div className="container mx-auto px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                    location.pathname === item.path 
                      ? 'text-primary bg-primary/10' 
                      : 'text-white/80 hover:text-primary hover:bg-white/5'
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
