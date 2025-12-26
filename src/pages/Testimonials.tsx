import { Link } from 'react-router-dom';
import { Star, Quotes, ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Testimonials() {
  const testimonials = [
    { 
      name: 'Maria K.', 
      procedure: 'Uterine Fibroid Embolization', 
      text: 'Dr. Agathangelou provided exceptional care throughout my entire treatment journey. The procedure was quick, surprisingly painless, and my recovery was remarkably smooth. I was back to my normal routine within a week. I highly recommend his expertise to anyone considering this treatment!', 
      rating: 5, 
      date: 'December 2024',
      location: 'Nicosia'
    },
    { 
      name: 'John P.', 
      procedure: 'Prostate Artery Embolization', 
      text: 'Professional, caring, and highly skilled. Dr. Marios took the time to thoroughly explain every step of the procedure and answered all my questions with patience. The results have been life-changing, and I couldn\'t be more satisfied with the care I received.', 
      rating: 5, 
      date: 'November 2024',
      location: 'Limassol'
    },
    { 
      name: 'Elena S.', 
      procedure: 'Varicose Vein Treatment', 
      text: 'Life-changing treatment with minimal downtime! I was amazed at how quick and easy the procedure was. The results exceeded my expectations, and I love how my legs look now. Thank you Dr. Agathangelou for giving me my confidence back!', 
      rating: 5, 
      date: 'October 2024',
      location: 'Nicosia'
    },
    { 
      name: 'Andreas M.', 
      procedure: 'Vertebroplasty', 
      text: 'After years of debilitating back pain, I finally found relief through Dr. Marios\' expertise. The procedure was quick, and I felt improvement almost immediately. Excellent care from start to finish. I wish I had done this sooner!', 
      rating: 5, 
      date: 'September 2024',
      location: 'Larnaca'
    },
    { 
      name: 'Christina L.', 
      procedure: 'Tumor Ablation', 
      text: 'Dr. Marios and his team were incredible throughout my treatment. Their professionalism, compassion, and expertise gave me confidence during a difficult time. The minimally invasive approach made such a difference in my recovery. Forever grateful!', 
      rating: 5, 
      date: 'August 2024',
      location: 'Paphos'
    },
    { 
      name: 'Dimitris N.', 
      procedure: 'Dialysis Access Management', 
      text: 'Outstanding service and exceptional results. The entire process was explained clearly, and the procedure went smoothly. Dr. Agathangelou\'s skill and attention to detail made all the difference. My access is working perfectly!', 
      rating: 5, 
      date: 'July 2024',
      location: 'Nicosia'
    },
    { 
      name: 'Sofia A.', 
      procedure: 'Port-a-Cath Placement', 
      text: 'Dr. Marios made what could have been a stressful procedure completely manageable. He was gentle, efficient, and extremely professional. The port works perfectly and has made my chemotherapy treatments much easier. Thank you!', 
      rating: 5, 
      date: 'June 2024',
      location: 'Limassol'
    },
    { 
      name: 'George T.', 
      procedure: 'Liver Biopsy', 
      text: 'I was nervous about the biopsy, but Dr. Agathangelou\'s calm demeanor and clear explanations put me at ease. The procedure was quick and virtually painless. Results were accurate and helped guide my treatment perfectly.', 
      rating: 5, 
      date: 'May 2024',
      location: 'Nicosia'
    },
    { 
      name: 'Anna P.', 
      procedure: 'Embolization Procedure', 
      text: 'Exceptional medical care from an exceptional doctor. Dr. Marios\' expertise and modern approach to treatment made all the difference. I experienced minimal discomfort and recovered quickly. Highly recommended!', 
      rating: 5, 
      date: 'April 2024',
      location: 'Larnaca'
    },
  ];

  const stats = [
    { value: '100%', label: 'Patient Satisfaction' },
    { value: '17+', label: 'Five-Star Reviews' },
    { value: '1000+', label: 'Procedures Performed' },
    { value: '15+', label: 'Years Experience' },
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
            Patient Experiences
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Patient Testimonials
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Real experiences from real patients who have benefited from our minimally invasive treatments
          </p>
          
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Card className="p-12 mb-16 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border-2 border-primary/20 shadow-xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={40} weight="fill" className="text-accent" />
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                100% Recommended
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Based on verified patient reviews
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quotes size={64} weight="fill" className="text-primary" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} weight="fill" className="text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4 space-y-2">
                    <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                    <Badge className="text-xs font-semibold bg-primary/10 text-primary border-primary/20">
                      {testimonial.procedure}
                    </Badge>
                    <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                      <span>{testimonial.location}</span>
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Join Our Satisfied Patients
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same exceptional care and outstanding results that our patients rave about
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-appointment">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Book Your Consultation
                <ArrowRight size={20} className="ml-2" weight="bold" />
              </Button>
            </Link>
            <Link to="/procedures">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-6">
                Explore Procedures
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
