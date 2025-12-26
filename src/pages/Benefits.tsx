import { Link } from 'react-router-dom';
import { Pulse, Clock, Heart, Shield, Sparkle, TrendUp, CheckCircle, ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Benefits() {
  const benefits = [
    { 
      title: 'Minimally Invasive', 
      description: 'Procedures performed through tiny incisions, typically no larger than a grain of rice, resulting in minimal trauma to surrounding tissues and significantly reduced scarring.',
      icon: <Pulse size={48} weight="duotone" className="text-primary" />,
      details: ['Tiny incisions', 'Less tissue trauma', 'Minimal scarring', 'Faster healing']
    },
    { 
      title: 'Faster Recovery', 
      description: 'Most procedures are outpatient with same-day discharge, allowing patients to return home quickly and resume normal activities within days rather than weeks.',
      icon: <Clock size={48} weight="duotone" className="text-primary" />,
      details: ['Same-day discharge', 'Quick return to activities', 'Shorter hospital stays', 'Less time off work']
    },
    { 
      title: 'Reduced Pain', 
      description: 'Minimally invasive techniques result in significantly less post-procedure discomfort, requiring lower doses of pain medication and enhancing overall recovery experience.',
      icon: <Heart size={48} weight="duotone" className="text-primary" />,
      details: ['Less post-op pain', 'Reduced medication need', 'Better comfort', 'Improved quality of life']
    },
    { 
      title: 'Lower Risk', 
      description: 'Smaller incisions and advanced imaging guidance dramatically decrease the risk of complications, infections, and adverse events compared to traditional open surgery.',
      icon: <Shield size={48} weight="duotone" className="text-primary" />,
      details: ['Fewer complications', 'Lower infection risk', 'Safer procedures', 'Better outcomes']
    },
    { 
      title: 'Precision Technology', 
      description: 'Real-time imaging guidance using X-ray, ultrasound, CT, or MRI ensures accurate treatment delivery, targeting affected areas while preserving healthy tissue.',
      icon: <Sparkle size={48} weight="duotone" className="text-primary" />,
      details: ['Real-time guidance', 'Accurate targeting', 'Preserves healthy tissue', 'Advanced imaging']
    },
    { 
      title: 'Cost Effective', 
      description: 'Shorter recovery times, reduced hospital stays, and fewer complications translate to lower overall healthcare costs for patients and insurance providers.',
      icon: <TrendUp size={48} weight="duotone" className="text-primary" />,
      details: ['Lower total costs', 'Fewer hospital days', 'Reduced complications', 'Better value']
    },
  ];

  const comparisons = [
    { traditional: 'Large surgical incisions', interventional: 'Tiny needle punctures' },
    { traditional: '3-7 day hospital stay', interventional: 'Same-day discharge' },
    { traditional: '4-6 weeks recovery', interventional: '1-2 weeks recovery' },
    { traditional: 'General anesthesia', interventional: 'Local/conscious sedation' },
    { traditional: 'Significant scarring', interventional: 'Minimal to no scarring' },
    { traditional: 'High complication risk', interventional: 'Lower risk profile' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-background via-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
            Modern Medical Excellence
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Benefits of Interventional Radiology
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover why minimally invasive procedures are revolutionizing modern medicine and transforming patient care
          </p>
          
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  
                  <div className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={18} weight="fill" className="text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Traditional Surgery vs. Interventional Radiology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how minimally invasive techniques compare to conventional surgical approaches
            </p>
          </div>
          
          <Card className="overflow-hidden border-2 border-border shadow-xl bg-white">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-8 bg-muted/20">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Traditional Surgery</h3>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-border">
                      <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground">{item.traditional}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Interventional Radiology</h3>
                <div className="space-y-4">
                  {comparisons.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white border-2 border-primary/20">
                      <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0" />
                      <p className="text-foreground font-medium">{item.interventional}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Experience the Benefits Firsthand
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to learn how minimally invasive procedures can benefit your specific condition
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book an Appointment
                <ArrowRight size={20} className="ml-2" weight="bold" />
              </Button>
            </Link>
            <Link to="/procedures">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6">
                View Procedures
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
