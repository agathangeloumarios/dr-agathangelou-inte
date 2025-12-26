import { Link } from 'react-router-dom';
import { Star, Phone, EnvelopeSimple, MapPin, Clock, ArrowRight, CheckCircle, Pulse, Heart, Shield, Clock as ClockIcon, Sparkle } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PhotoGallery from '@/components/PhotoGallery';
import drPhoto from '@/assets/images/dr_agathangelou_2.jpeg';
import operatingTheater1 from '@/assets/images/modern_operation_theater_1.jpg';
import operatingTheater2 from '@/assets/images/modern_operation_theater_2.jpg';
import operatingTheater3 from '@/assets/images/modern_operation_theater_3.jpeg';
import performingProcedure1 from '@/assets/images/Performing_procedures_1.jpg';
import performingProcedure2 from '@/assets/images/Performing_procedures_2.jpg';
import medicalImaging1 from '@/assets/images/Pelvis-Iliac11_3_fps.jpg';

export default function Home() {

  const benefits = [
    { 
      title: 'Minimally Invasive', 
      description: 'Small incisions mean less trauma to your body',
      icon: <Pulse size={28} weight="duotone" className="text-primary" />
    },
    { 
      title: 'Faster Recovery', 
      description: 'Return to normal activities sooner than traditional surgery',
      icon: <ClockIcon size={28} weight="duotone" className="text-primary" />
    },
    { 
      title: 'Less Pain & Scarring', 
      description: 'Reduced discomfort and minimal visible scarring',
      icon: <Heart size={28} weight="duotone" className="text-primary" />
    },
    { 
      title: 'Outpatient Treatment', 
      description: 'Most procedures don\'t require overnight hospital stays',
      icon: <CheckCircle size={28} weight="duotone" className="text-primary" />
    },
    { 
      title: 'Precision Technology', 
      description: 'Advanced imaging for accurate, targeted treatment',
      icon: <Sparkle size={28} weight="duotone" className="text-primary" />
    },
    { 
      title: 'Lower Risk', 
      description: 'Reduced complications compared to traditional surgery',
      icon: <Shield size={28} weight="duotone" className="text-primary" />
    },
  ];

  const testimonials = [
    { 
      name: 'Maria K.', 
      text: 'Dr. Agathangelou provided exceptional care throughout my treatment. The procedure was quick, painless, and my recovery was remarkably smooth. I highly recommend his expertise!', 
      rating: 5,
      procedure: 'Fibroid Treatment'
    },
    { 
      name: 'John P.', 
      text: 'Professional, caring, and highly skilled. Dr. Marios took the time to explain everything clearly and made me feel comfortable. The results exceeded my expectations.', 
      rating: 5,
      procedure: 'Vascular Treatment'
    },
    { 
      name: 'Elena S.', 
      text: 'Life-changing treatment with minimal downtime. I was back to my normal routine within days. Thank you Dr. Agathangelou for your incredible work!', 
      rating: 5,
      procedure: 'Pain Management'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-background via-white to-primary/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <Badge className="mb-6 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
            Precision Medical Care • Advanced Technology
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight leading-tight">
            Interventional Radiology
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <p className="text-2xl md:text-3xl text-primary font-bold tracking-wider">
              PRECISION. INNOVATION
            </p>
            <div className="h-1 w-12 bg-primary rounded-full" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Doctor Agathangelou Marios MD MSc
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Specialized in new Minimally invasive Techniques
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} weight="fill" className="text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold text-lg">
              100% προτείνουν
            </span>
            <Badge variant="secondary" className="font-semibold">
              17 κριτικές
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#what-is">
              <Button size="lg" className="bg-primary hover:bg-[#a855f7] text-primary-foreground hover:text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Learn More
                <ArrowRight size={20} className="ml-2" weight="bold" />
              </Button>
            </a>
            <Link to="/book-appointment">
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="what-is" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What is Interventional Radiology?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Interventional Radiology</span> is a medical specialty that uses minimally invasive, image-guided procedures to diagnose and treat diseases throughout the body.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Using advanced imaging techniques such as <span className="font-semibold text-foreground">X-rays, CT scans, ultrasound, and MRI</span>, interventional radiologists can perform precise treatments through small incisions, typically no larger than a pencil tip.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                These procedures result in <span className="font-semibold text-foreground">less pain, shorter recovery times</span>, and reduced risk of complications compared to traditional surgery.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Procedures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            
            <Card className="relative overflow-hidden border-2 border-primary/10 shadow-xl">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={drPhoto} 
                  alt="Dr. Agathangelou Marios - Interventional Radiologist" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <Pulse size={40} weight="duotone" className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Image-Guided Precision Care
                  </h3>
                  <p className="text-white/90">
                    Advanced technology meets medical expertise for optimal patient outcomes
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Benefits of Interventional Radiology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience modern medical care with minimally invasive techniques
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-white"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Testimonials from Satisfied Patients
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real patients
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-xl transition-all duration-300 border-2 border-border">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} weight="fill" className="text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.procedure}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/testimonials">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
                View All Testimonials
                <ArrowRight size={20} className="ml-2" weight="bold" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Facilities & Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art equipment and modern facilities for precision medical care
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <PhotoGallery 
            photos={[
              { src: operatingTheater1, alt: 'Modern operation theater', title: 'Advanced Operating Theater' },
              { src: operatingTheater2, alt: 'Medical equipment', title: 'State-of-the-Art Equipment' },
              { src: operatingTheater3, alt: 'Interventional suite', title: 'Interventional Radiology Suite' },
              { src: performingProcedure1, alt: 'Performing procedure', title: 'Image-Guided Procedures' },
              { src: performingProcedure2, alt: 'Medical procedure', title: 'Precision Treatment' },
              { src: medicalImaging1, alt: 'Vascular imaging', title: 'Diagnostic Imaging' }
            ]}
            columns={3}
            aspectRatio="landscape"
          />
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact</h2>
            <p className="text-xl text-muted-foreground">Get in touch with our team</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Achaion 22<br />
                Nicosia 1101<br />
                Cyprus
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone size={32} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">Phone</h3>
              <a 
                href="tel:96973434" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                96 973434
              </a>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock size={32} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">Hours</h3>
              <p className="text-muted-foreground">
                Open 24 hours
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <EnvelopeSimple size={32} weight="duotone" className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">Email</h3>
              <a 
                href="mailto:agathangeloumarios@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors break-all text-sm"
              >
                agathangeloumarios@gmail.com
              </a>
            </Card>
          </div>
        </div>
      </section>

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
    </div>
  );
}
