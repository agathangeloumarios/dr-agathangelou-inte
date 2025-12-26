import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UterusIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12C18.5 12 17.5 12.5 17 13.5C16.5 14 16 15 16 16.5V18.5" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 12C21.5 12 22.5 12.5 23 13.5C23.5 14 24 15 24 16.5V18.5" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M16 18.5C15 19 13.5 19.5 12 21C10.5 22.5 10 24 10 25.5C10 27 10.5 28 11.5 28.5C12.5 29 13.5 28.5 14 28C14.5 27.5 15 26.5 15 25V21C15 19.5 15.5 19 16 18.5Z" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 18.5C25 19 26.5 19.5 28 21C29.5 22.5 30 24 30 25.5C30 27 29.5 28 28.5 28.5C27.5 29 26.5 28.5 26 28C25.5 27.5 25 26.5 25 25V21C25 19.5 24.5 19 24 18.5Z" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18.5C16 20 16.5 21.5 17.5 22.5C18.5 23.5 19.5 24 20 24C20.5 24 21.5 23.5 22.5 22.5C23.5 21.5 24 20 24 18.5" 
          fill="currentColor" fillOpacity="0.15"/>
    <path d="M16 18.5C16 20 16.5 21.5 17.5 22.5C18.5 23.5 19.5 24 20 24C20.5 24 21.5 23.5 22.5 22.5C23.5 21.5 24 20 24 18.5M20 24V32" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="12" cy="24.5" rx="1.2" ry="1.5" fill="currentColor" opacity="0.35"/>
    <ellipse cx="28" cy="24.5" rx="1.2" ry="1.5" fill="currentColor" opacity="0.35"/>
    <path d="M17.5 20C17.5 20 18.5 21 19.5 21C20.5 21 21.5 20 21.5 20" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <circle cx="20" cy="10" r="1.5" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
  </svg>
);

const VeinsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 8C17 9 16.5 10.5 16.5 12.5V15C16.5 15 16 15.5 15.5 16C15 16.5 14 17.5 13.5 18.5C13 19.5 12.5 20.5 12.5 21.5C12.5 22.5 13 23.5 13.5 24.5C14 25.5 15 26.5 15.5 27C16 27.5 16.5 28 16.5 28V30.5C16.5 32 17 33 18 34" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 8C23 9 23.5 10.5 23.5 12.5V15C23.5 15 24 15.5 24.5 16C25 16.5 26 17.5 26.5 18.5C27 19.5 27.5 20.5 27.5 21.5C27.5 22.5 27 23.5 26.5 24.5C26 25.5 25 26.5 24.5 27C24 27.5 23.5 28 23.5 28V30.5C23.5 32 23 33 22 34" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 8C18.5 7.5 19 7 20 7C21 7 21.5 7.5 22 8M18 34C18.5 34.5 19 35 20 35C21 35 21.5 34.5 22 34" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16.5 12.5C16.5 13.5 17 14.5 18 15C19 15.5 21 15.5 22 15C23 14.5 23.5 13.5 23.5 12.5M16.5 30.5C16.5 29.5 17 28.5 18 28C19 27.5 21 27.5 22 28C23 28.5 23.5 29.5 23.5 30.5" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M13 19C13.5 18.5 14.5 18 15.5 18C16.5 18 17 18.5 17 19C17 19.5 16.5 20 15.5 20C14.5 20 13.5 19.5 13 19Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M27 19C26.5 18.5 25.5 18 24.5 18C23.5 18 23 18.5 23 19C23 19.5 23.5 20 24.5 20C25.5 20 26.5 19.5 27 19Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M13 24C13.5 23.5 14.5 23 15.5 23C16.5 23 17 23.5 17 24C17 24.5 16.5 25 15.5 25C14.5 25 13.5 24.5 13 24Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.1"/>
    <path d="M27 24C26.5 23.5 25.5 23 24.5 23C23.5 23 23 23.5 23 24C23 24.5 23.5 25 24.5 25C25.5 25 26.5 24.5 27 24Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.1"/>
    <circle cx="20" cy="21" r="1.2" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ProstateIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10C18 10 17 10.5 16.5 11C16 11.5 16 12 16 12.5V15" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 10C22 10 23 10.5 23.5 11C24 11.5 24 12 24 12.5V15" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M16 15C14.5 15.5 13 16.5 12 18C11 19.5 10.5 21 10.5 22.5C10.5 24 11 25.5 12 26.5C13 27.5 14.5 28.5 16 29C17 29.5 18.5 30 20 30C21.5 30 23 29.5 24 29C25.5 28.5 27 27.5 28 26.5C29 25.5 29.5 24 29.5 22.5C29.5 21 29 19.5 28 18C27 16.5 25.5 15.5 24 15" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="20" cy="22" rx="5.5" ry="5" fill="currentColor" fillOpacity="0.08"/>
    <path d="M20 30V34" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <ellipse cx="20" cy="32" rx="1.5" ry="2" stroke="currentColor" strokeWidth="1.1" opacity="0.3"/>
    <path d="M15.5 20C15.5 20 16.5 19 18 19C19.5 19 20 20 20 20M20 20C20 20 20.5 19 22 19C23.5 19 24.5 20 24.5 20" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
    <circle cx="17" cy="23" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="23" cy="23" r="1" fill="currentColor" opacity="0.3"/>
    <path d="M18 25.5C18 25.5 19 26.5 20 26.5C21 26.5 22 25.5 22 25.5" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
  </svg>
);

const SpineIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L20 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="20" cy="9" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M16 9L12 10M24 9L28 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="14.5" rx="4.5" ry="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M15.5 14.5L11 16M24.5 14.5L29 16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="20.5" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M15 20.5L10 22M25 20.5L30 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="26.5" rx="4.5" ry="3" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M15.5 26.5L11 28M24.5 26.5L29 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="31.5" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M16 31.5L12 33M24 31.5L28 33" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <circle cx="20" cy="20.5" r="1.5" fill="currentColor" opacity="0.35"/>
    <path d="M18.5 17.5C18.5 17.5 19 17 20 17C21 17 21.5 17.5 21.5 17.5M18.5 23.5C18.5 23.5 19 23 20 23C21 23 21.5 23.5 21.5 23.5" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const LungsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="20" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.2" opacity="0.3"/>
    <path d="M20 14C18 14 16.5 14.5 15.5 15.5C14.5 16.5 13.5 18 13 20C12.5 22 12 24 12 25.5C12 27 12 28 12.5 28.5C13 29.5 14 30 14.5 29.5C15 29 15.5 28 15.5 27V20.5C15.5 18.5 16.5 17 17.5 16C18.5 15.5 19 15 20 15" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 14C22 14 23.5 14.5 24.5 15.5C25.5 16.5 26.5 18 27 20C27.5 22 28 24 28 25.5C28 27 28 28 27.5 28.5C27 29.5 26 30 25.5 29.5C25 29 24.5 28 24.5 27V20.5C24.5 18.5 23.5 17 22.5 16C21.5 15.5 21 15 20 15" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.5 19C13 20 12.5 21.5 12.5 23.5M13.5 25C13 26 12.5 27 12.5 28" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
    <path d="M26.5 19C27 20 27.5 21.5 27.5 23.5M26.5 25C27 26 27.5 27 27.5 28" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
    <path d="M15 18C15 18 15.5 17.5 16.5 17C17.5 16.5 18.5 16.5 19.5 17M25 18C25 18 24.5 17.5 23.5 17C22.5 16.5 21.5 16.5 20.5 17" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
    <ellipse cx="14.5" cy="22" rx="1.2" ry="2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="25.5" cy="22" rx="1.2" ry="2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="14" cy="26.5" rx="1" ry="1.5" fill="currentColor" opacity="0.25"/>
    <ellipse cx="26" cy="26.5" rx="1" ry="1.5" fill="currentColor" opacity="0.25"/>
  </svg>
);

const KidneysIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C10.5 15 9.5 15.5 9 16.5C8.5 17.5 8 18.5 8 20V24C8 25.5 8.5 26.5 9 27.5C9.5 28.5 10.5 29 12 29C13 29 13.5 28.5 14 27.5C14.5 26.5 14.5 25.5 14.5 24V20C14.5 18.5 14.5 17.5 14 16.5C13.5 15.5 13 15 12 15Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M28 15C29.5 15 30.5 15.5 31 16.5C31.5 17.5 32 18.5 32 20V24C32 25.5 31.5 26.5 31 27.5C30.5 28.5 29.5 29 28 29C27 29 26.5 28.5 26 27.5C25.5 26.5 25.5 25.5 25.5 24V20C25.5 18.5 25.5 17.5 26 16.5C26.5 15.5 27 15 28 15Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M11 17.5C10.5 17.5 10 18 10 18.5C10 19 10.5 19.5 11 19.5C11.5 19.5 12 19 12 18.5C12 18 11.5 17.5 11 17.5Z" 
          fill="currentColor" opacity="0.35"/>
    <path d="M29 17.5C28.5 17.5 28 18 28 18.5C28 19 28.5 19.5 29 19.5C29.5 19.5 30 19 30 18.5C30 18 29.5 17.5 29 17.5Z" 
          fill="currentColor" opacity="0.35"/>
    <path d="M11 21C10.5 21 10 21.5 10 22C10 22.5 10.5 23 11 23C11.5 23 12 22.5 12 22C12 21.5 11.5 21 11 21Z" 
          fill="currentColor" opacity="0.35"/>
    <path d="M29 21C28.5 21 28 21.5 28 22C28 22.5 28.5 23 29 23C29.5 23 30 22.5 30 22C30 21.5 29.5 21 29 21Z" 
          fill="currentColor" opacity="0.35"/>
    <path d="M11 24.5C10.5 24.5 10 25 10 25.5C10 26 10.5 26.5 11 26.5C11.5 26.5 12 26 12 25.5C12 25 11.5 24.5 11 24.5Z" 
          fill="currentColor" opacity="0.35"/>
    <path d="M29 24.5C28.5 24.5 28 25 28 25.5C28 26 28.5 26.5 29 26.5C29.5 26.5 30 26 30 25.5C30 25 29.5 24.5 29 24.5Z" 
          fill="currentColor" opacity="0.35"/>
    <path d="M14.5 20C15.5 20 17 20.5 18.5 21C19.5 21.5 20.5 21.5 21.5 21C23 20.5 24.5 20 25.5 20M14.5 23C15.5 23 17 23.5 18.5 24C19.5 24.5 20.5 24.5 21.5 24C23 23.5 24.5 23 25.5 23" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    <path d="M20 10V13M20 29V32" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.25"/>
  </svg>
);

const LiverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 19C10 17 10.5 15.5 11.5 14.5C12.5 13.5 14 13 16 13H20.5C22.5 13 24 13.5 25 13C26 12.5 27.5 11.5 29 10.5C29.5 10 30 10 30.5 10.5C31 11 31 11.5 31 12.5V23.5C31 25.5 30.5 26.5 29.5 27.5C28.5 28.5 27 29 25 29H15C13 29 11.5 28.5 10.5 27.5C9.5 26.5 9.5 25 10 23V19Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M15.5 16.5V18.5M19 15.5V19.5M22.5 16V20M26 15V18.5" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <path d="M12 21C12 21 13 21.5 14.5 22C16 22.5 18 22.5 19.5 22C20.5 21.5 21 21 21 21M21 21C21 21 22 21.5 23.5 22C25 22.5 27 22.5 28.5 22C29 21.5 29.5 21 29.5 21" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="14.5" cy="23.5" rx="1.2" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="19" cy="24.5" rx="1.2" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="24" cy="24" rx="1.2" ry="1" fill="currentColor" opacity="0.3"/>
    <path d="M27.5 10.5C28 10 29 9.5 29.5 9.5C30 9.5 30.5 10 30.5 10.5" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <circle cx="28.5" cy="10" r="1" fill="currentColor" opacity="0.25"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 13C18.5 11 16.5 10 14.5 10C11.5 10 9.5 12 9.5 15C9.5 16.5 10 18 11 19.5C12 21 13.5 22.5 15 24C16.5 25.5 18 27 19 28.5C19.5 29 20 30 20 30.5C20 30 20.5 29 21 28.5C22 27 23.5 25.5 25 24C26.5 22.5 28 21 29 19.5C30 18 30.5 16.5 30.5 15C30.5 12 28.5 10 25.5 10C23.5 10 21.5 11 20 13Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M14.5 17.5C14.5 17.5 15.5 18.5 17 19C18.5 19.5 19.5 19 19.5 19M20.5 19C20.5 19 21.5 19.5 23 19C24.5 18.5 25.5 17.5 25.5 17.5" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    <path d="M20 18V21M20 21H22.5M20 21H17.5" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M16.5 14.5C16.5 14.5 17 13.5 18 13C18.5 12.5 19.5 12.5 20 13M24 14.5C24 14.5 23.5 13.5 22.5 13C22 12.5 21 12.5 20.5 13" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3"/>
    <ellipse cx="15.5" cy="15.5" rx="1" ry="1.5" fill="currentColor" opacity="0.3"/>
    <ellipse cx="24.5" cy="15.5" rx="1" ry="1.5" fill="currentColor" opacity="0.3"/>
    <path d="M17 23.5C17 23.5 18 24.5 19 25C19.5 25.5 20.5 25.5 21 25C22 24.5 23 23.5 23 23.5" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const ArteriesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="20" cy="20" r="2.5" fill="currentColor" opacity="0.25"/>
    <path d="M20 10V15M20 25V30" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 20H15M25 20H30" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M14 14L16.5 16.5M23.5 23.5L26 26" 
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6"/>
    <path d="M26 14L23.5 16.5M16.5 23.5L14 26" 
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.6"/>
    <circle cx="20" cy="10" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="20" cy="30" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="10" cy="20" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="30" cy="20" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="14" cy="14" r="1.2" fill="currentColor" opacity="0.3"/>
    <circle cx="26" cy="14" r="1.2" fill="currentColor" opacity="0.3"/>
    <circle cx="14" cy="26" r="1.2" fill="currentColor" opacity="0.3"/>
    <circle cx="26" cy="26" r="1.2" fill="currentColor" opacity="0.3"/>
    <path d="M18.5 18.5C18.5 18.5 19 18 20 18C21 18 21.5 18.5 21.5 18.5M18.5 21.5C18.5 21.5 19 22 20 22C21 22 21.5 21.5 21.5 21.5" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

export default function Procedures() {
  const procedures = [
    { 
      id: 1,
      title: 'Uterine Fibroid Embolization', 
      description: 'Non-surgical treatment for uterine fibroids using advanced catheter-based techniques to block blood flow to fibroids',
      category: 'Women\'s Health',
      icon: <UterusIcon />,
      duration: '1-2 hours',
      recovery: '1-2 weeks'
    },
    { 
      id: 2,
      title: 'Varicose Vein Treatment', 
      description: 'Minimally invasive endovenous procedures including laser ablation and sclerotherapy for varicose veins',
      category: 'Vascular',
      icon: <VeinsIcon />,
      duration: '30-60 minutes',
      recovery: '1-3 days'
    },
    { 
      id: 3,
      title: 'Prostate Artery Embolization', 
      description: 'Advanced treatment for benign prostatic hyperplasia (BPH) offering relief from urinary symptoms',
      category: 'Men\'s Health',
      icon: <ProstateIcon />,
      duration: '2-3 hours',
      recovery: '1-2 weeks'
    },
    { 
      id: 4,
      title: 'Vertebroplasty & Kyphoplasty', 
      description: 'Spinal fracture stabilization procedures using bone cement to relieve pain and restore vertebral height',
      category: 'Spine',
      icon: <SpineIcon />,
      duration: '1 hour',
      recovery: '1-3 days'
    },
    { 
      id: 5,
      title: 'Tumor Ablation', 
      description: 'Image-guided minimally invasive cancer treatment using radiofrequency, microwave, or cryoablation',
      category: 'Oncology',
      icon: <LungsIcon />,
      duration: '1-3 hours',
      recovery: '1-2 weeks'
    },
    { 
      id: 6,
      title: 'Dialysis Access Management', 
      description: 'Creation and maintenance of arteriovenous fistulas and grafts for hemodialysis patients',
      category: 'Vascular',
      icon: <KidneysIcon />,
      duration: '1-2 hours',
      recovery: '2-4 weeks'
    },
    { 
      id: 7,
      title: 'Liver & Kidney Biopsies', 
      description: 'Image-guided tissue sampling using ultrasound or CT guidance for accurate diagnosis of liver and kidney conditions',
      category: 'Diagnostic',
      icon: <LiverIcon />,
      duration: '30 minutes',
      recovery: '24 hours'
    },
    { 
      id: 8,
      title: 'Port-a-Cath Placement', 
      description: 'Central venous access device insertion for long-term chemotherapy, antibiotics, or nutrition delivery',
      category: 'Access',
      icon: <HeartIcon />,
      duration: '30-60 minutes',
      recovery: '1-2 days'
    },
    { 
      id: 9,
      title: 'Embolization Procedures', 
      description: 'Treatment for bleeding, tumors, aneurysms, and vascular malformations using catheter-based techniques',
      category: 'Vascular',
      icon: <ArteriesIcon />,
      duration: '1-3 hours',
      recovery: '1-2 weeks'
    },
  ];

  const categories = ['All', 'Vascular', 'Women\'s Health', 'Men\'s Health', 'Spine', 'Oncology', 'Diagnostic', 'Access'];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-background via-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
            Specialized Treatments
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Our Procedures
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive interventional radiology procedures using the latest minimally invasive techniques for optimal patient outcomes
          </p>
          
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure) => (
              <Card 
                key={procedure.id} 
                className="group relative overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative p-8">
                  <Badge className="mb-4 text-xs font-semibold bg-primary/10 text-primary border-primary/20">
                    {procedure.category}
                  </Badge>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-[#f59e0c]/30 transition-all duration-500 ease-out group-hover:from-[#f59e0c]/30 group-hover:to-[#f59e0c]/20 group-hover:text-[#f59e0c]">
                    <div className="group-hover:animate-pulse">
                      {procedure.icon}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {procedure.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {procedure.description}
                  </p>
                  
                  <div className="flex gap-4 mb-6 text-sm">
                    <div className="flex-1">
                      <div className="text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-foreground">{procedure.duration}</div>
                    </div>
                    <div className="flex-1">
                      <div className="text-muted-foreground mb-1">Recovery</div>
                      <div className="font-semibold text-foreground">{procedure.recovery}</div>
                    </div>
                  </div>
                  
                  <Link to={`/procedure/${procedure.id}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full group/btn text-primary hover:text-primary hover:bg-primary/10 font-semibold"
                    >
                      Learn More
                      <ArrowRight 
                        size={18} 
                        className="ml-2 group-hover/btn:translate-x-1 transition-transform" 
                        weight="bold" 
                      />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss which procedure is right for you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book an Appointment
                <ArrowRight size={20} className="ml-2" weight="bold" />
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6">
                Meet Dr. Marios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
