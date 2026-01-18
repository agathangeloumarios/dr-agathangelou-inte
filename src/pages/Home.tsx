import { Link } from 'react-router-dom';
import { Star, Phone, EnvelopeSimple, MapPin, Clock, ArrowRight, CheckCircle, Pulse, Heart, Shield, Clock as ClockIcon, Sparkle, FacebookLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PhotoGallery from '@/components/PhotoGallery';
import GoogleMap from '@/components/GoogleMap';
import Footer from '@/components/Footer';
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
      text: 'Dr Agathangelou provided exceptional care throughout my treatment. The procedure was quick, painless, and my recovery was remarkably smooth. I highly recommend his expertise!', 
      rating: 5,
      procedure: 'Fibroid Treatment'
    },
    { 
      name: 'John P.', 
      text: 'Professional, caring, and highly skilled. Dr Agathangelou took the time to explain everything clearly and made me feel comfortable. The results exceeded my expectations.', 
      rating: 5,
      procedure: 'Vascular Treatment'
    },
    { 
      name: 'Elena S.', 
      text: 'Life-changing treatment with minimal downtime. I was back to my normal routine within days. Thank you Dr Agathangelou for your incredible work!', 
      rating: 5,
      procedure: 'Pain Management'
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white">
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight leading-tight">
            Interventional Radiology
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Dr Agathangelou Marios MD MSc
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
              100% recommended
            </span>
            <Badge variant="secondary" className="font-semibold">
              17 reviews
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#what-is">
              <Button size="lg" className="bg-primary hover:bg-[#B69270] text-primary-foreground hover:text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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

      <section id="what-is" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What is Interventional Radiology?
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-base text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Interventional Radiology</span> is a medical specialty that uses minimally invasive, image-guided procedures to diagnose and treat diseases throughout the body.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Using advanced imaging techniques such as <span className="font-semibold text-foreground">X-rays, CT scans, ultrasound, and MRI</span>, interventional radiologists can perform precise treatments through small incisions, typically no larger than a pencil tip.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                These procedures result in <span className="font-semibold text-foreground">less pain, shorter recovery times</span>, and reduced risk of complications compared to traditional surgery.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4500+</div>
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
                  alt="Dr Agathangelou Marios - Interventional Radiologist" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3">
                    <Pulse size={32} weight="duotone" className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Image-Guided Precision Care
                  </h3>
                  <p className="text-sm text-white/90">
                    Advanced technology meets medical expertise for optimal patient outcomes
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Benefits of Interventional Radiology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience modern medical care with minimally invasive techniques
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/20 bg-white"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Testimonials from Satisfied Patients
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real patients
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-5 bg-white hover:shadow-xl transition-all duration-300 border-2 border-border">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} weight="fill" className="text-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.procedure}</p>
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

      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
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

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact</h2>
            <p className="text-xl text-muted-foreground">Get in touch with our team</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Nicosia Location</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Achaion 22<br />
                  Nicosia 1101<br />
                  Cyprus
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Phone size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Phone</h3>
                <a 
                  href="tel:96973434" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  96 973434
                </a>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Open 24 hours
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <EnvelopeSimple size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Email</h3>
                <a 
                  href="mailto:agathangeloumarios@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors break-all text-xs"
                >
                  agathangeloumarios@gmail.com
                </a>
              </Card>
            </div>

            <div className="mb-12">
              <GoogleMap address="Achaion 22, Nicosia 1101, Cyprus" className="max-w-4xl mx-auto" />
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">YGIA POLYCLINIC - Limassol Location</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Address</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  21 Nafpliou Street<br />
                  3025 Limassol<br />
                  Cyprus
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Phone size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Phone</h3>
                <a 
                  href="tel:+35725884608" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  +357 25884608
                </a>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Open 24 hours
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-border hover:border-primary/30">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <EnvelopeSimple size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">Email</h3>
                <a 
                  href="mailto:agathangeloumarios@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors break-all text-xs"
                >
                  agathangeloumarios@gmail.com
                </a>
              </Card>
            </div>

            <div className="mb-12">
              <GoogleMap address="21 Nafpliou Street, 3025 Limassol, Cyprus" className="max-w-4xl mx-auto" />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Connect With Us</h3>
            <p className="text-sm text-muted-foreground mb-5">Follow us on social media for updates and health tips</p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/dragathangelou" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-[#1877F2] rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Follow us on Facebook"
              >
                <FacebookLogo size={24} weight="fill" className="text-primary group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/dr_agathangelou/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#FD1D1D] rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Follow us on Instagram"
              >
                <InstagramLogo size={24} weight="fill" className="text-primary group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/marios-agathangelou/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary/10 hover:bg-[#0A66C2] rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                aria-label="Follow us on LinkedIn"
              >
                <LinkedinLogo size={24} weight="fill" className="text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <a 
        href="https://wa.me/35796973434"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[#25D366]/50 group"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsappLogo size={32} weight="fill" className="text-white group-hover:scale-110 transition-transform" />
      </a>

      <Footer />
    </div>
  );
}
