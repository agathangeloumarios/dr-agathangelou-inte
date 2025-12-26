import { Link } from 'react-router-dom';
import { ArrowRight, Pulse, Heart, Shield, TrendUp, Sparkle, CheckCircle } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Procedures() {
  const procedures = [
    { 
      id: 1,
      title: 'Uterine Fibroid Embolization', 
      description: 'Non-surgical treatment for uterine fibroids using advanced catheter-based techniques to block blood flow to fibroids',
      category: 'Women\'s Health',
      icon: <Pulse size={40} weight="duotone" />,
      duration: '1-2 hours',
      recovery: '1-2 weeks'
    },
    { 
      id: 2,
      title: 'Varicose Vein Treatment', 
      description: 'Minimally invasive endovenous procedures including laser ablation and sclerotherapy for varicose veins',
      category: 'Vascular',
      icon: <Heart size={40} weight="duotone" />,
      duration: '30-60 minutes',
      recovery: '1-3 days'
    },
    { 
      id: 3,
      title: 'Prostate Artery Embolization', 
      description: 'Advanced treatment for benign prostatic hyperplasia (BPH) offering relief from urinary symptoms',
      category: 'Men\'s Health',
      icon: <Shield size={40} weight="duotone" />,
      duration: '2-3 hours',
      recovery: '1-2 weeks'
    },
    { 
      id: 4,
      title: 'Vertebroplasty & Kyphoplasty', 
      description: 'Spinal fracture stabilization procedures using bone cement to relieve pain and restore vertebral height',
      category: 'Spine',
      icon: <TrendUp size={40} weight="duotone" />,
      duration: '1 hour',
      recovery: '1-3 days'
    },
    { 
      id: 5,
      title: 'Tumor Ablation', 
      description: 'Image-guided minimally invasive cancer treatment using radiofrequency, microwave, or cryoablation',
      category: 'Oncology',
      icon: <Sparkle size={40} weight="duotone" />,
      duration: '1-3 hours',
      recovery: '1-2 weeks'
    },
    { 
      id: 6,
      title: 'Dialysis Access Management', 
      description: 'Creation and maintenance of arteriovenous fistulas and grafts for hemodialysis patients',
      category: 'Vascular',
      icon: <Pulse size={40} weight="duotone" />,
      duration: '1-2 hours',
      recovery: '2-4 weeks'
    },
    { 
      id: 7,
      title: 'Liver & Kidney Biopsies', 
      description: 'Image-guided tissue sampling using ultrasound or CT guidance for accurate diagnosis of liver and kidney conditions',
      category: 'Diagnostic',
      icon: <CheckCircle size={40} weight="duotone" />,
      duration: '30 minutes',
      recovery: '24 hours'
    },
    { 
      id: 8,
      title: 'Port-a-Cath Placement', 
      description: 'Central venous access device insertion for long-term chemotherapy, antibiotics, or nutrition delivery',
      category: 'Access',
      icon: <Heart size={40} weight="duotone" />,
      duration: '30-60 minutes',
      recovery: '1-2 days'
    },
    { 
      id: 9,
      title: 'Embolization Procedures', 
      description: 'Treatment for bleeding, tumors, aneurysms, and vascular malformations using catheter-based techniques',
      category: 'Vascular',
      icon: <Shield size={40} weight="duotone" />,
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
