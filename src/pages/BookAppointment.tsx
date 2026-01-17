import { useState } from 'react';
import { Calendar, Clock, User as UserIcon, Phone, EnvelopeSimple, ChatCircle, CheckCircle, MapPin } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';

export default function BookAppointment() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    date: '', 
    time: '', 
    procedure: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const procedures = [
    'Uterine Fibroid Embolization',
    'Varicose Vein Treatment',
    'Prostate Artery Embolization',
    'Vertebroplasty & Kyphoplasty',
    'Tumor Ablation',
    'Dialysis Access Management',
    'Liver & Kidney Biopsies',
    'Port-a-Cath Placement',
    'Embolization Procedures',
    'General Consultation'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Appointment Request Received!', {
      description: 'We will contact you shortly to confirm your appointment.',
      duration: 5000,
    });
    
    setFormData({ name: '', email: '', phone: '', date: '', time: '', procedure: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { 
      icon: <Phone size={32} weight="duotone" className="text-primary" />, 
      title: 'Call Us', 
      value: '96 973434 (Nicosia) | +357 25884608 (Limassol)',
      link: null
    },
    { 
      icon: <EnvelopeSimple size={32} weight="duotone" className="text-primary" />, 
      title: 'Email Us', 
      value: 'agathangeloumarios@gmail.com',
      link: 'mailto:agathangeloumarios@gmail.com'
    },
    { 
      icon: <Clock size={32} weight="duotone" className="text-primary" />, 
      title: 'Availability', 
      value: 'Open 24 hours',
      link: null
    },
    { 
      icon: <MapPin size={32} weight="duotone" className="text-primary" />, 
      title: 'Locations', 
      value: 'Nicosia: Achaion 22, 1101 | Limassol: 21 Nafpliou St, 3025',
      link: null
    },
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
            Schedule Your Visit
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Book an Appointment
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Schedule your consultation with Dr Agathangelou Marios to discuss your treatment options
          </p>
          
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 text-center border-2 border-border hover:border-primary/30 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{item.value}</p>
                )}
              </Card>
            ))}
          </div>
          
          <div className="mb-16 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Nicosia Location</h3>
              <GoogleMap address="Achaion 22, Nicosia 1101, Cyprus" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">YGIA POLYCLINIC - Limassol Location</h3>
              <GoogleMap address="21 Nafpliou Street, 3025 Limassol, Cyprus" />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-border shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 border-b-2 border-border">
                <h2 className="text-3xl font-bold text-foreground mb-2">Request an Appointment</h2>
                <p className="text-muted-foreground">Fill out the form below and we'll contact you to confirm</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-foreground font-semibold">
                      <UserIcon size={18} weight="duotone" className="text-primary" />
                      Full Name *
                    </Label>
                    <Input 
                      id="name"
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-foreground font-semibold">
                      <Phone size={18} weight="duotone" className="text-primary" />
                      Phone Number *
                    </Label>
                    <Input 
                      id="phone"
                      name="phone" 
                      type="tel"
                      value={formData.phone} 
                      onChange={handleChange} 
                      required 
                      placeholder="Your phone number"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2 text-foreground font-semibold">
                    <EnvelopeSimple size={18} weight="duotone" className="text-primary" />
                    Email Address *
                  </Label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="your.email@example.com"
                    className="h-12"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-foreground font-semibold">
                      <Calendar size={18} weight="duotone" className="text-primary" />
                      Preferred Date *
                    </Label>
                    <Input 
                      id="date"
                      name="date" 
                      type="date"
                      value={formData.date} 
                      onChange={handleChange} 
                      required 
                      className="h-12"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-foreground font-semibold">
                      <Clock size={18} weight="duotone" className="text-primary" />
                      Preferred Time *
                    </Label>
                    <Input 
                      id="time"
                      name="time" 
                      type="time"
                      value={formData.time} 
                      onChange={handleChange} 
                      required 
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="procedure" className="flex items-center gap-2 text-foreground font-semibold">
                    <CheckCircle size={18} weight="duotone" className="text-primary" />
                    Procedure of Interest *
                  </Label>
                  <Select 
                    value={formData.procedure} 
                    onValueChange={(value) => setFormData({ ...formData, procedure: value })}
                    required
                  >
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a procedure" />
                    </SelectTrigger>
                    <SelectContent>
                      {procedures.map((procedure) => (
                        <SelectItem key={procedure} value={procedure}>
                          {procedure}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground font-semibold">
                    <ChatCircle size={18} weight="duotone" className="text-primary" />
                    Additional Information
                  </Label>
                  <Textarea 
                    id="message"
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={4} 
                    placeholder="Tell us about your condition or any questions you have..."
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg h-14 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Appointment Request
                      <CheckCircle size={20} className="ml-2" weight="bold" />
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by our team to confirm your appointment.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle size={40} weight="duotone" className="text-primary-foreground" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">What Happens Next?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  After submitting your request, our team will contact you within 24 hours to confirm your appointment and answer any questions you may have.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
