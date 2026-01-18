import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, LinkedinLogo, Pulse } from '@phosphor-icons/react';
import { useState } from 'react';
import logo from '@/assets/images/logo.png';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  
  return (
    <footer className="text-white py-16 px-4" style={{ backgroundColor: '#0D2845' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-3">
            {!logoError && logo ? (
              <img 
                src={logo} 
                alt="Dr Agathangelou Marios Logo" 
                className="h-16 w-auto" 
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Pulse className="text-white" size={28} weight="bold" />
              </div>
            )}
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg">Dr Agathangelou Marios</span>
              <span className="text-xs text-gray-400">Interventional Radiologist</span>
            </div>
          </div>
          
          <p className="text-gray-300 max-w-md">
            Providing precision medical care through minimally invasive techniques and advanced technology
          </p>

          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/dragathangelou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 hover:bg-[#1877F2] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <FacebookLogo size={24} weight="fill" className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.instagram.com/dr_agathangelou/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <InstagramLogo size={24} weight="fill" className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/marios-agathangelou/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-11 h-11 bg-white/10 hover:bg-[#0A66C2] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={24} weight="fill" className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">•</span>
            <Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link>
            <span className="text-gray-600">•</span>
            <Link to="/procedures" className="text-gray-400 hover:text-white transition-colors">Procedures</Link>
            <span className="text-gray-600">•</span>
            <Link to="/book-appointment" className="text-gray-400 hover:text-white transition-colors">Book</Link>
            <span className="text-gray-600">•</span>
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
          </div>
          
          <div className="pt-8 border-t border-gray-700 w-full">
            <p className="text-gray-400 text-sm">
              © 2025 Dr Agathangelou Marios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
