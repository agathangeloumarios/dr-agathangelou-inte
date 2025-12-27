import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L12 22M2 12L22 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="12" cy="12" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-bold text-lg">Dr. Marios</span>
              <span className="text-xs text-gray-400">Interventional Radiology</span>
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
          </div>
          
          <div className="pt-8 border-t border-gray-700 w-full">
            <p className="text-gray-400 text-sm">
              © 2025 Dr. Agathangelou Marios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
