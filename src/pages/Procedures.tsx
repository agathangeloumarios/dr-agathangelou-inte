import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';

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

const NerveIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="20" cy="8" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M20 12C18 13 16 14.5 14.5 16C13 17.5 12 19 12 20" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 12C22 13 24 14.5 25.5 16C27 17.5 28 19 28 20" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M20 18C17.5 19.5 15 21 13 23" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
    <path d="M20 18C22.5 19.5 25 21 27 23" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
    <path d="M20 24C18 25.5 16 27 14.5 29" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
    <path d="M20 24C22 25.5 24 27 25.5 29" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6"/>
    <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="28" cy="20" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="13" cy="23" r="1.2" fill="currentColor" opacity="0.3"/>
    <circle cx="27" cy="23" r="1.2" fill="currentColor" opacity="0.3"/>
    <circle cx="14.5" cy="29" r="1.5" fill="currentColor" opacity="0.35"/>
    <circle cx="25.5" cy="29" r="1.5" fill="currentColor" opacity="0.35"/>
    <path d="M18 15C18 15 19 14.5 20 14.5C21 14.5 22 15 22 15" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const ThyroidIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="20" cy="10" r="2" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M14 18C12.5 18 11.5 18.5 11 19.5C10.5 20.5 10 21.5 10 23C10 24.5 10.5 25.5 11 26.5C11.5 27.5 12.5 28 14 28C15 28 15.5 27.5 16 27C16.5 26.5 17 25.5 17 24V22C17 20.5 16.5 19.5 16 19C15.5 18.5 15 18 14 18Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M26 18C27.5 18 28.5 18.5 29 19.5C29.5 20.5 30 21.5 30 23C30 24.5 29.5 25.5 29 26.5C28.5 27.5 27.5 28 26 28C25 28 24.5 27.5 24 27C23.5 26.5 23 25.5 23 24V22C23 20.5 23.5 19.5 24 19C24.5 18.5 25 18 26 18Z" 
          fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M17 18C17.5 18 18.5 18 19 18C19.5 18 20.5 18 21 18C21.5 18 22.5 18 23 18" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <ellipse cx="14" cy="22.5" rx="1.5" ry="2" fill="currentColor" opacity="0.3"/>
    <ellipse cx="26" cy="22.5" rx="1.5" ry="2" fill="currentColor" opacity="0.3"/>
    <path d="M12 21C12 21 12.5 20.5 13.5 20.5C14 20.5 14.5 20.5 15 21M28 21C28 21 27.5 20.5 26.5 20.5C26 20.5 25.5 20.5 25 21" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
    <path d="M12 25C12 25 12.5 25.5 13.5 25.5C14 25.5 14.5 25.5 15 25M28 25C28 25 27.5 25.5 26.5 25.5C26 25.5 25.5 25.5 25 25" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
  </svg>
);

const TesticleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10C17.5 10 17 10.5 16.5 11C16 11.5 16 12 16 12.5V15" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <path d="M22 10C22.5 10 23 10.5 23.5 11C24 11.5 24 12 24 12.5V15" 
          stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    <ellipse cx="16" cy="23" rx="3.5" ry="5.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4"/>
    <ellipse cx="24" cy="24" rx="3.5" ry="5.5" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.4"/>
    <path d="M16 15C15 15.5 14 16.5 13.5 18C13 19 12.5 20.5 12.5 22C12.5 23.5 13 25 13.5 26C14 27 15 28 16 28.5" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M24 15C25 15.5 26 16.5 26.5 18C27 19 27.5 20.5 27.5 22.5C27.5 24 27 25.5 26.5 26.5C26 28 25 29 24 29.5" 
          stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M18 10C18.5 9.5 19 9 20 9C21 9 21.5 9.5 22 10" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="16" cy="22" r="1.2" fill="currentColor" opacity="0.35"/>
    <circle cx="24" cy="23" r="1.2" fill="currentColor" opacity="0.35"/>
    <ellipse cx="16" cy="25" rx="1" ry="1.5" fill="currentColor" opacity="0.25"/>
    <ellipse cx="24" cy="26" rx="1" ry="1.5" fill="currentColor" opacity="0.25"/>
    <path d="M14.5 20C14.5 20 15 19.5 16 19.5C17 19.5 17.5 20 17.5 20M22.5 21C22.5 21 23 20.5 24 20.5C25 20.5 25.5 21 25.5 21" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const BreastIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="9" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="20" cy="20" r="5.5" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="20" cy="20" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M20 11V13M20 27V29" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M11 20H13M27 20H29" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
    <path d="M14.5 14.5L16 16M24 24L25.5 25.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    <path d="M25.5 14.5L24 16M16 24L14.5 25.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.35"/>
    <circle cx="20" cy="14" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="20" cy="26" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="14" cy="20" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="26" cy="20" r="1" fill="currentColor" opacity="0.3"/>
    <circle cx="16.5" cy="16.5" r="0.8" fill="currentColor" opacity="0.25"/>
    <circle cx="23.5" cy="16.5" r="0.8" fill="currentColor" opacity="0.25"/>
    <circle cx="16.5" cy="23.5" r="0.8" fill="currentColor" opacity="0.25"/>
    <circle cx="23.5" cy="23.5" r="0.8" fill="currentColor" opacity="0.25"/>
    <path d="M17 18C17 18 18 17.5 19 17.5C19.5 17.5 20.5 17.5 21 17.5C22 17.5 23 18 23 18M17 22C17 22 18 22.5 19 22.5C19.5 22.5 20.5 22.5 21 22.5C22 22.5 23 22 23 22" 
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
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
      duration: '45-60 mins',
      recovery: '1 week–10 days'
    },
    { 
      id: 2,
      title: 'Angioplasty and Stenting', 
      description: 'Minimally invasive procedure to open blocked arteries and restore blood flow using balloon angioplasty and stent placement',
      category: 'Vascular',
      icon: <ArteriesIcon />,
      duration: '1-2 hours',
      recovery: '1-2 days'
    },
    { 
      id: 3,
      title: 'Interventional Oncology', 
      description: 'Image-guided minimally invasive cancer treatments including tumor ablation and embolization procedures',
      category: 'Oncology',
      icon: <HeartIcon />,
      duration: '45-60 mins',
      recovery: '3-7 Days'
    },
    { 
      id: 4,
      title: 'Minimally Invasive Pain Treatment', 
      description: 'Advanced pain management procedures including nerve blocks and targeted injections for chronic pain relief',
      category: 'Pain Management',
      icon: <NerveIcon />,
      duration: '30-60 minutes',
      recovery: '1-3 days'
    },
    { 
      id: 5,
      title: 'Varicose Veins Treatment', 
      description: 'Minimally invasive endovenous procedures including laser ablation and sclerotherapy for varicose veins',
      category: 'Vascular',
      icon: <VeinsIcon />,
      duration: '30-60 minutes',
      recovery: '1-3 days'
    },
    { 
      id: 6,
      title: 'Ablation of Thyroid Nodules', 
      description: 'Non-surgical treatment of thyroid nodules using radiofrequency or microwave ablation techniques',
      category: 'Endocrine',
      icon: <ThyroidIcon />,
      duration: '30-60 minutes',
      recovery: '1-2 days'
    },
    { 
      id: 7,
      title: 'Varicocele Embolization', 
      description: 'Minimally invasive treatment for varicoceles using catheter-based embolization to improve fertility',
      category: 'Men\'s Health',
      icon: <TesticleIcon />,
      duration: '1 hour',
      recovery: '1-2 days'
    },
    { 
      id: 8,
      title: 'Breast Cryotherapy', 
      description: 'Minimally invasive freezing treatment for benign and malignant breast lesions',
      category: 'Women\'s Health',
      icon: <BreastIcon />,
      duration: '1-2 hours',
      recovery: '1-2 weeks'
    },
  ];

  const categories = ['All', 'Vascular', 'Women\'s Health', 'Men\'s Health', 'Oncology', 'Pain Management', 'Endocrine'];

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
                      className="w-full group/btn text-primary hover:text-white hover:bg-[#a855f7] font-semibold transition-colors duration-300"
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
                Meet Dr. Agathangelou
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
