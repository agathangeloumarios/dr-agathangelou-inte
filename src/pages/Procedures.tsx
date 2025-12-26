import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UterusIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10C19 10 18 10.5 17.5 11.5C17 12 16.5 13 16.5 14.5V17C16.5 17 16 17 15.5 17.5C14.5 18 13 18.5 11.5 19.5C10.5 20.5 10 21.5 10 23C10 24.5 10.5 25.5 11.5 26.5C13 27.5 14.5 28 15.5 28.5C16 29 16.5 29 16.5 29V31.5C16.5 33 17 34 17.5 34.5C18 35.5 19 36 20 36C21 36 22 35.5 22.5 34.5C23 34 23.5 33 23.5 31.5V29C23.5 29 24 29 24.5 28.5C25.5 28 27 27.5 28.5 26.5C29.5 25.5 30 24.5 30 23C30 21.5 29.5 20.5 28.5 19.5C27 18.5 25.5 18 24.5 17.5C24 17 23.5 17 23.5 17V14.5C23.5 13 23 12 22.5 11.5C22 10.5 21 10 20 10Z" 
          fill="currentColor" fillOpacity="0.15"/>
    <path d="M20 36C19 36 18 35.5 17.5 34.5C17 34 16.5 33 16.5 31.5V29M20 36C21 36 22 35.5 22.5 34.5C23 34 23.5 33 23.5 31.5V29M20 36V38" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 29C16.5 29 16 29 15.5 28.5C14.5 28 13 27.5 11.5 26.5C10.5 25.5 10 24.5 10 23C10 21.5 10.5 20.5 11.5 19.5C13 18.5 14.5 18 15.5 17.5C16 17 16.5 17 16.5 17M23.5 29C23.5 29 24 29 24.5 28.5C25.5 28 27 27.5 28.5 26.5C29.5 25.5 30 24.5 30 23C30 21.5 29.5 20.5 28.5 19.5C27 18.5 25.5 18 24.5 17.5C24 17 23.5 17 23.5 17" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.5 17V14.5C16.5 13 17 12 17.5 11.5C18 10.5 19 10 20 10C21 10 22 10.5 22.5 11.5C23 12 23.5 13 23.5 14.5V17M20 10V6" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="11.5" cy="23" r="1" fill="currentColor" opacity="0.4"/>
    <circle cx="28.5" cy="23" r="1" fill="currentColor" opacity="0.4"/>
    <path d="M18 19C18 19 18.5 20 19 20.5C19.5 21 20.5 21 21 20.5C21.5 20 22 19 22 19" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const VeinsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6C17.5 6 16 7 15 8.5C14.5 9.5 14 11 14 13V27C14 29 14.5 30.5 15 31.5C16 33 17.5 34 20 34C22.5 34 24 33 25 31.5C25.5 30.5 26 29 26 27V13C26 11 25.5 9.5 25 8.5C24 7 22.5 6 20 6Z" 
          fill="currentColor" fillOpacity="0.12"/>
    <path d="M20 6C17.5 6 16 7 15 8.5C14.5 9.5 14 11 14 13V27C14 29 14.5 30.5 15 31.5C16 33 17.5 34 20 34C22.5 34 24 33 25 31.5C25.5 30.5 26 29 26 27V13C26 11 25.5 9.5 25 8.5C24 7 22.5 6 20 6Z" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 12C11 12 12 13 13 13.5C13.5 14 14 14 14 14M11 20C11 20 12 21 13 21.5C13.5 22 14 22 14 22M11 28C11 28 12 29 13 29.5C13.5 30 14 30 14 30" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    <path d="M29 12C29 12 28 13 27 13.5C26.5 14 26 14 26 14M29 20C29 20 28 21 27 21.5C26.5 22 26 22 26 22M29 28C29 28 28 29 27 29.5C26.5 30 26 30 26 30" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
    <ellipse cx="20" cy="13" rx="2.5" ry="1.5" fill="currentColor" opacity="0.25"/>
    <ellipse cx="20" cy="20" rx="3" ry="1.8" fill="currentColor" opacity="0.25"/>
    <ellipse cx="20" cy="27" rx="2.5" ry="1.5" fill="currentColor" opacity="0.25"/>
    <path d="M17.5 16C17.5 16 18.5 17 19 17.5C19.5 18 20.5 18 21 17.5C21.5 17 22.5 16 22.5 16M17.5 24C17.5 24 18.5 25 19 25.5C19.5 26 20.5 26 21 25.5C21.5 25 22.5 24 22.5 24" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const ProstateIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 28C24.5 28 28 24.5 28 20C28 15.5 24.5 12 20 12C15.5 12 12 15.5 12 20C12 24.5 15.5 28 20 28Z" 
          fill="currentColor" fillOpacity="0.15"/>
    <path d="M20 28C24.5 28 28 24.5 28 20C28 15.5 24.5 12 20 12C15.5 12 12 15.5 12 20C12 24.5 15.5 28 20 28Z" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8V12M20 28V32" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <ellipse cx="20" cy="10" rx="1.5" ry="2.5" fill="currentColor" opacity="0.2"/>
    <ellipse cx="20" cy="30" rx="1.5" ry="2.5" fill="currentColor" opacity="0.2"/>
    <circle cx="20" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
    <path d="M16.5 16.5C16.5 16.5 17.5 15.5 18.5 15C19.5 14.5 20.5 14.5 21.5 15C22.5 15.5 23.5 16.5 23.5 16.5M16.5 23.5C16.5 23.5 17.5 24.5 18.5 25C19.5 25.5 20.5 25.5 21.5 25C22.5 24.5 23.5 23.5 23.5 23.5" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
    <path d="M14 17L16 18.5M26 17L24 18.5M14 23L16 21.5M26 23L24 21.5" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const SpineIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L20 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <ellipse cx="20" cy="8.5" rx="3.5" ry="2.5" fill="currentColor" fillOpacity="0.18"/>
    <ellipse cx="20" cy="8.5" rx="3.5" ry="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M16.5 8.5L13 9M23.5 8.5L27 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="14" rx="4.5" ry="3" fill="currentColor" fillOpacity="0.18"/>
    <ellipse cx="20" cy="14" rx="4.5" ry="3" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M15.5 14L12 15M24.5 14L28 15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="20" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.18"/>
    <ellipse cx="20" cy="20" rx="5" ry="3.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M15 20L11 21M25 20L29 21" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="26" rx="4.5" ry="3" fill="currentColor" fillOpacity="0.18"/>
    <ellipse cx="20" cy="26" rx="4.5" ry="3" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M15.5 26L12 27M24.5 26L28 27" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
    <ellipse cx="20" cy="31.5" rx="3.5" ry="2.5" fill="currentColor" fillOpacity="0.18"/>
    <ellipse cx="20" cy="31.5" rx="3.5" ry="2.5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M16.5 31.5L13 32M23.5 31.5L27 32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const LungsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8V15.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 15.5C18.5 15.5 17 16.5 15.5 18C14 19.5 12.5 21.5 11.5 24C10.5 26.5 10 29 10 30.5C10 32 10.5 33 11.5 33.5C12.5 34 13.5 33.5 14 33C14.5 32.5 15 31.5 15 30V22.5C15 20.5 16 18.5 17.5 17.5C18.5 17 19.5 16.5 20 16.5" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 15.5C21.5 15.5 23 16.5 24.5 18C26 19.5 27.5 21.5 28.5 24C29.5 26.5 30 29 30 30.5C30 32 29.5 33 28.5 33.5C27.5 34 26.5 33.5 26 33C25.5 32.5 25 31.5 25 30V22.5C25 20.5 24 18.5 22.5 17.5C21.5 17 20.5 16.5 20 16.5" 
          fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 21C12.5 22 11.5 24 11.5 26.5M13 26.5C12.5 27.5 12 28.5 12 29.5" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <path d="M27 21C27.5 22 28.5 24 28.5 26.5M27 26.5C27.5 27.5 28 28.5 28 29.5" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="15" cy="24" rx="1.5" ry="2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="25" cy="24" rx="1.5" ry="2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="14" cy="28.5" rx="1.2" ry="1.5" fill="currentColor" opacity="0.25"/>
    <ellipse cx="26" cy="28.5" rx="1.2" ry="1.5" fill="currentColor" opacity="0.25"/>
  </svg>
);

const KidneysIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 14C10 14 8.5 15 8 16.5C7.5 17.5 7.5 18.5 7.5 20V24C7.5 25.5 7.5 26.5 8 27.5C8.5 29 10 30 11.5 30C13 30 13.5 29.5 14 28.5C14.5 27.5 14.5 26.5 14.5 25V19C14.5 17.5 14.5 16.5 14 15.5C13.5 14.5 13 14 11.5 14Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M28.5 14C30 14 31.5 15 32 16.5C32.5 17.5 32.5 18.5 32.5 20V24C32.5 25.5 32.5 26.5 32 27.5C31.5 29 30 30 28.5 30C27 30 26.5 29.5 26 28.5C25.5 27.5 25.5 26.5 25.5 25V19C25.5 17.5 25.5 16.5 26 15.5C26.5 14.5 27 14 28.5 14Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <ellipse cx="11" cy="18.5" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="29" cy="18.5" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="11" cy="22" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="29" cy="22" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="11" cy="25.5" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="29" cy="25.5" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <path d="M14.5 20C15 20 16 20.5 17 21C18 21.5 19 22 20 22C21 22 22 21.5 23 21C24 20.5 25 20 25.5 20" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <path d="M17 22C17.5 22.5 18.5 23 19 23.5C19.5 24 20.5 24 21 23.5C21.5 23 22.5 22.5 23 22" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const LiverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18.5C9 16.5 9.5 15 11 14C12 13.5 13.5 13 15.5 13H21C23 13 24.5 13.5 25.5 13C26.5 12.5 28 11.5 29.5 10.5C30.5 10 31 10 31.5 10.5C32 11 32 11.5 32 12.5V24.5C32 26.5 31.5 27.5 30 28.5C29 29 27.5 29.5 25.5 29.5H14.5C12.5 29.5 11 29 10 28C9 27 8.5 25.5 9 23.5V18.5Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M15.5 16.5V19.5M19.5 15V20M23.5 16V20.5M27 14.5V18.5" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
    <path d="M11 21C11 21 12 22 13.5 22.5C15 23 17 23 18.5 22.5C20 22 21 21 21 21M21 21C21 21 22 22 23.5 22.5C25 23 27 23 28.5 22.5C29.5 22 30 21.5 30 21" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="14" cy="24" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="19" cy="25" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <ellipse cx="24" cy="24.5" rx="1.5" ry="1" fill="currentColor" opacity="0.3"/>
    <path d="M28 10.5C28.5 10 29.5 9.5 30 9.5C30.5 9.5 31 10 31 10.5" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12C18.5 10 16.5 9 14.5 9C11.5 9 9 11.5 9 14.5C9 16 9.5 17.5 10.5 19C11.5 20.5 13 22 14.5 23.5C16 25 17.5 26.5 18.5 28C19 28.5 19.5 29.5 20 30.5C20.5 29.5 21 28.5 21.5 28C22.5 26.5 24 25 25.5 23.5C27 22 28.5 20.5 29.5 19C30.5 17.5 31 16 31 14.5C31 11.5 28.5 9 25.5 9C23.5 9 21.5 10 20 12Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M14 18C14 18 15 19 16.5 19.5C18 20 19 19.5 19.5 19M21 19C21.5 19.5 22.5 20 24 19.5C25.5 19 26.5 18 26.5 18" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.35"/>
    <path d="M20 18V22M20 22H23M20 22H17" 
          stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
    <path d="M16 14C16 14 16.5 13 17.5 12.5C18 12 19 12 19.5 12.5M24 14C24 14 23.5 13 22.5 12.5C22 12 21 12 20.5 12.5" 
          stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.3"/>
    <ellipse cx="15" cy="15" rx="1" ry="1.5" fill="currentColor" opacity="0.25"/>
    <ellipse cx="25" cy="15" rx="1" ry="1.5" fill="currentColor" opacity="0.25"/>
  </svg>
);

const ArteriesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="4.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.25"/>
    <path d="M20 9V15.5M20 24.5V31" 
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M9 20H15.5M24.5 20H31" 
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M13.5 13.5L17 17M23 23L26.5 26.5" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M26.5 13.5L23 17M17 23L13.5 26.5" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <circle cx="20" cy="9" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="20" cy="31" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="9" cy="20" r="1.5" fill="currentColor" opacity="0.3"/>
    <circle cx="31" cy="20" r="1.5" fill="currentColor" opacity="0.3"/>
    <ellipse cx="13.5" cy="13.5" rx="1.2" ry="1.2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="26.5" cy="13.5" rx="1.2" ry="1.2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="13.5" cy="26.5" rx="1.2" ry="1.2" fill="currentColor" opacity="0.25"/>
    <ellipse cx="26.5" cy="26.5" rx="1.2" ry="1.2" fill="currentColor" opacity="0.25"/>
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
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {procedure.icon}
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
