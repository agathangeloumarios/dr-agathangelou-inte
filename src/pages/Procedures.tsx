import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UterusIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8C17 8 15 10 15 13V18C13 18 11 19 11 22C11 25 13 26 15 26V30C15 33 17 35 20 35C23 35 25 33 25 30V26C27 26 29 25 29 22C29 19 27 18 25 18V13C25 10 23 8 20 8Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M20 8C17 8 15 10 15 13V18M20 8C23 8 25 10 25 13V18M20 8V5M15 18C13 18 11 19 11 22C11 25 13 26 15 26M15 18C17 18 18 19 18 20M25 18C27 18 29 19 29 22C29 25 27 26 25 26M25 18C23 18 22 19 22 20M15 26V30C15 33 17 35 20 35M15 26V24M25 26V30C25 33 23 35 20 35M25 26V24M20 35V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VeinsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6C12 6 10 8 10 12V28C10 32 12 34 12 34M28 6C28 6 30 8 30 12V28C30 32 28 34 28 34M16 12C16 12 18 10 20 10C22 10 24 12 24 12M16 28C16 28 18 30 20 30C22 30 24 28 24 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M10 20H30M14 15H26M14 25H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const ProstateIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="22" r="8" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="20" cy="22" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 14V10M16 18L13 15M24 18L27 15M20 30V34M16 26L13 29M24 26L27 29" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SpineIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <ellipse cx="20" cy="9" rx="4" ry="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="15" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="21" rx="5" ry="3.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="27" rx="4.5" ry="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <ellipse cx="20" cy="33" rx="4" ry="2.5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const LungsIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 8V16M20 16C18 16 16 17 14 19C12 21 10 24 10 28C10 31 12 33 14 33C16 33 17 31 17 29V22C17 20 18 18 20 18M20 16C22 16 24 17 26 19C28 21 30 24 30 28C30 31 28 33 26 33C24 33 23 31 23 29V22C23 20 22 18 20 18M20 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 23C13 24 12 25.5 12 27.5M26 23C27 24 28 25.5 28 27.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const KidneysIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 14C10 14 8 16 8 19V25C8 28 10 30 12 30C14 30 15 29 15 27V17C15 15 14 14 12 14Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M28 14C30 14 32 16 32 19V25C32 28 30 30 28 30C26 30 25 29 25 27V17C25 15 26 14 28 14Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="12" cy="20" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="28" cy="20" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="12" cy="24" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="28" cy="24" r="1.5" fill="currentColor" opacity="0.5"/>
  </svg>
);

const LiverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 18C8 15 10 13 13 13H20C23 13 25 14 27 13C29 12 31 10 32 10V24C32 27 30 29 27 29H13C10 29 8 27 8 24V18Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 13V17M25 16V20M15 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 32C20 32 8 24 8 15C8 11 11 8 14 8C16 8 18 9 20 11C22 9 24 8 26 8C29 8 32 11 32 15C32 24 20 32 20 32Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M20 16V20M20 20H24M20 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
  </svg>
);

const ArteriesIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="5" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 8V15M20 25V32M8 20H15M25 20H32M12 12L17 17M23 23L28 28M12 28L17 23M23 17L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
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
