import { Link } from 'react-router-dom';
import { GraduationCap, Certificate, Briefcase, Medal, MapPin, EnvelopeSimple, Phone, ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';
import drPhoto1 from '@/assets/images/dr_Agathangelou.jpg';
import drPhoto2 from '@/assets/images/dr_agathangelou_1.png';
import drPhoto3 from '@/assets/images/dr_agathangelou_2.jpeg';
import drPhotoClarivein from '@/assets/images/dr_agathangelou_clarivein.jpg';
import performingProcedure1 from '@/assets/images/Performing_procedures_1.jpg';
import performingProcedure3 from '@/assets/images/Performing_procedures_3.jpg';

export default function Team() {
  const credentials = [
    { icon: <GraduationCap size={24} weight="duotone" />, title: 'MD - Doctor of Medicine', description: 'Medical University' },
    { icon: <Certificate size={24} weight="duotone" />, title: 'MSc - Master of Science', description: 'Interventional Radiology' },
    { icon: <Medal size={24} weight="duotone" />, title: 'Board Certified', description: 'Interventional Radiology' },
    { icon: <Briefcase size={24} weight="duotone" />, title: '12+ Years Experience', description: 'Clinical Practice' },
  ];

  const expertise = [
    'Uterine Fibroid Embolization',
    'Angioplasty and Stenting',
    'Interventional Oncology',
    'Minimally Invasive Pain Treatment',
    'Varicose Veins Treatment',
    'Ablation of Thyroid Nodules',
    'Varicocele Embolization',
    'Breast Cryotherapy',
  ];

  const philosophy = [
    { title: 'Patient-Centered Care', description: 'Every treatment plan is personalized to meet individual patient needs and goals' },
    { title: 'Evidence-Based Medicine', description: 'Utilizing the latest research and proven techniques for optimal outcomes' },
    { title: 'Minimally Invasive Approach', description: 'Prioritizing procedures that minimize trauma and maximize recovery' },
    { title: 'Comprehensive Communication', description: 'Ensuring patients understand their condition and treatment options' },
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
            Expert Medical Professional
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Meet Dr Agathangelou Marios
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated to providing exceptional interventional radiology care with precision, expertise, and compassion
          </p>
          
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-8" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 overflow-hidden relative">
                  <img 
                    src={drPhoto2} 
                    alt="Dr Agathangelou Marios" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                
                <div className="p-8 bg-gradient-to-br from-white to-muted/20">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Dr Agathangelou Marios
                  </h2>
                  <p className="text-primary font-semibold text-lg mb-6">
                    MD MSc | Interventional Radiologist
                  </p>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin size={20} weight="duotone" className="text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-2">
                        <div>
                          <p className="font-semibold text-foreground">Nicosia Location</p>
                          <p className="text-sm">Achaion 22, Nicosia 1101, Cyprus</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">YGIA POLYCLINIC - Limassol</p>
                          <p className="text-sm">21 Nafpliou Street, 3025 Limassol, Cyprus</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Phone size={20} weight="duotone" className="text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <a href="tel:96973434" className="hover:text-primary transition-colors block">96 973434 (Nicosia)</a>
                        <a href="tel:+35725884608" className="hover:text-primary transition-colors block">+357 25884608 (Limassol)</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <EnvelopeSimple size={20} weight="duotone" className="text-primary" />
                      <a href="mailto:agathangeloumarios@gmail.com" className="hover:text-primary transition-colors text-sm">
                        agathangeloumarios@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="lg:col-span-3 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-6">About Dr Agathangelou Marios</h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Dr Agathangelou Marios is a highly skilled <span className="font-semibold text-foreground">interventional radiologist</span> with extensive experience in minimally invasive procedures. His expertise spans a wide range of image-guided treatments, from vascular interventions to complex tumor ablations.
                  </p>
                  <p>
                    With a commitment to <span className="font-semibold text-foreground">patient-centered care</span>, Dr. Agathangelou combines cutting-edge technology with compassionate treatment, ensuring each patient receives personalized attention and optimal outcomes.
                  </p>
                  <p>
                    Dr. Agathangelou stays at the forefront of interventional radiology through continuous education and adoption of the latest <span className="font-semibold text-foreground">minimally invasive techniques</span>, providing patients with advanced treatment options that minimize recovery time and maximize results.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Credentials & Education</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {credentials.map((item, index) => (
                    <Card key={index} className="p-6 border-2 border-border hover:border-primary/30 transition-all hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Areas of Expertise</h3>
            <p className="text-lg text-muted-foreground">Specialized procedures and treatments</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <Card key={index} className="p-4 text-center border-2 border-border hover:border-primary/30 transition-all hover:shadow-lg bg-white">
                <p className="font-semibold text-foreground">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Professional Gallery</h3>
            <p className="text-lg text-muted-foreground">
              Dr Agathangelou in practice, performing advanced interventional procedures
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>
          
          <PhotoGallery 
            photos={[
              { src: drPhoto1, alt: 'Dr Agathangelou performing procedure', title: 'Advanced Interventional Procedure' },
              { src: performingProcedure3, alt: 'Dr Agathangelou performing procedures', title: 'Precision Medical Care' },
              { src: drPhotoClarivein, alt: 'Clarivein procedure', title: 'Clarivein Vein Treatment' }
            ]}
            columns={3}
            aspectRatio="landscape"
          />
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Medical Philosophy</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that shape every patient interaction and treatment decision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <Card key={index} className="p-8 border-2 border-border hover:border-primary/20 transition-all hover:shadow-xl bg-gradient-to-br from-white to-muted/20">
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Begin Your Treatment Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your condition and explore treatment options
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

      <Footer />
    </div>
  );
}
