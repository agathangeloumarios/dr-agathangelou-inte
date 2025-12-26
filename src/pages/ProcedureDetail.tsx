import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Calendar, Info, Pulse, Heart, Shield, TrendUp, Sparkle } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import performingProcedure from '@/assets/images/Performing_procedures_1.jpg';

export default function ProcedureDetail() {
  const { id } = useParams();
  
  const procedures: { [key: string]: any } = {
    '1': { 
      title: 'Uterine Fibroid Embolization',
      icon: <Pulse size={64} weight="duotone" className="text-primary" />,
      category: 'Women\'s Health',
      description: 'Uterine Fibroid Embolization (UFE) is a minimally invasive treatment that blocks the blood supply to uterine fibroids, causing them to shrink. This procedure offers an alternative to hysterectomy while preserving the uterus.',
      duration: '1-2 hours',
      recovery: '1-2 weeks',
      benefits: [
        'No surgical incision required',
        'Preserves the uterus',
        'Quick recovery time',
        'Treats multiple fibroids simultaneously',
        'Over 90% success rate'
      ],
      process: [
        'Small catheter inserted through wrist or groin',
        'Guided to uterine arteries using X-ray imaging',
        'Tiny particles injected to block blood flow',
        'Fibroids shrink over following months',
        'Procedure takes 45-90 minutes'
      ],
      whatToExpect: 'Most patients return to normal activities within 7-10 days. Mild cramping and discomfort are common initially but resolve quickly.',
      idealCandidates: 'Women with symptomatic fibroids who wish to avoid surgery or preserve fertility options.'
    },
    '2': { 
      title: 'Varicose Vein Treatment',
      icon: <Heart size={64} weight="duotone" className="text-primary" />,
      category: 'Vascular',
      description: 'Modern varicose vein treatment uses endovenous laser or radiofrequency ablation to close diseased veins from inside, eliminating the need for vein stripping surgery.',
      duration: '30-60 minutes',
      recovery: '1-3 days',
      benefits: [
        'No surgical stripping required',
        'Local anesthesia only',
        'Walk immediately after procedure',
        'Minimal to no scarring',
        'Same-day procedure'
      ],
      process: [
        'Ultrasound mapping of affected veins',
        'Thin catheter inserted into vein',
        'Laser or radiofrequency energy applied',
        'Vein closes and is absorbed by body',
        'Compression stockings worn post-procedure'
      ],
      whatToExpect: 'Resume normal activities immediately. Some bruising and mild discomfort may occur but typically resolves within a week.',
      idealCandidates: 'Patients with symptomatic varicose veins, leg pain, swelling, or cosmetic concerns.'
    },
    '3': { 
      title: 'Prostate Artery Embolization',
      icon: <Shield size={64} weight="duotone" className="text-primary" />,
      category: 'Men\'s Health',
      description: 'Prostate Artery Embolization (PAE) treats enlarged prostate by blocking blood flow to prostate tissue, causing it to shrink and relieving urinary symptoms.',
      duration: '2-3 hours',
      recovery: '1-2 weeks',
      benefits: [
        'Preserves sexual function',
        'No general anesthesia needed',
        'Short recovery period',
        'Effective symptom relief',
        'Lower complication rate than surgery'
      ],
      process: [
        'Catheter inserted via wrist or groin',
        'Guided to prostate arteries',
        'Tiny particles injected to reduce blood flow',
        'Prostate shrinks over several weeks',
        'Same-day or overnight stay'
      ],
      whatToExpect: 'Urinary symptoms improve gradually over 4-12 weeks. Most patients discharged same day and return to activities within a week.',
      idealCandidates: 'Men with BPH symptoms who want to avoid surgery or have contraindications to traditional treatments.'
    },
    '4': { 
      title: 'Vertebroplasty & Kyphoplasty',
      icon: <TrendUp size={64} weight="duotone" className="text-primary" />,
      category: 'Spine',
      description: 'These procedures stabilize spinal compression fractures by injecting bone cement into damaged vertebrae, providing immediate pain relief and preventing further collapse.',
      duration: '1 hour',
      recovery: '1-3 days',
      benefits: [
        'Rapid pain relief within hours',
        'Stabilizes fractured vertebrae',
        'Minimal recovery time',
        'Outpatient procedure',
        'Improved mobility'
      ],
      process: [
        'Conscious sedation or local anesthesia',
        'Hollow needle inserted into vertebra',
        'Medical-grade bone cement injected',
        'Cement hardens in minutes',
        'Usually done in under an hour'
      ],
      whatToExpect: 'Most patients experience significant pain relief within 24-48 hours. Light activity can resume within days.',
      idealCandidates: 'Patients with painful compression fractures due to osteoporosis, trauma, or cancer.'
    },
    '5': { 
      title: 'Tumor Ablation',
      icon: <Sparkle size={64} weight="duotone" className="text-primary" />,
      category: 'Oncology',
      description: 'Image-guided tumor ablation destroys cancer cells using extreme heat (radiofrequency/microwave) or cold (cryoablation) delivered through a small probe.',
      duration: '1-3 hours',
      recovery: '1-2 weeks',
      benefits: [
        'Minimally invasive cancer treatment',
        'Precise targeting of tumors',
        'Preserves healthy tissue',
        'Can be repeated if needed',
        'Alternative when surgery not possible'
      ],
      process: [
        'CT or ultrasound guidance for probe placement',
        'Thin probe inserted through skin',
        'Energy delivered to destroy tumor',
        'Real-time imaging monitors treatment',
        'Duration varies by tumor size'
      ],
      whatToExpect: 'Same-day or next-day discharge typical. Mild discomfort at site resolves quickly. Follow-up imaging monitors treatment response.',
      idealCandidates: 'Patients with small to medium tumors in liver, kidney, lung, or bone who are not surgical candidates.'
    },
    '6': { 
      title: 'Dialysis Access Management',
      icon: <Pulse size={64} weight="duotone" className="text-primary" />,
      category: 'Vascular',
      description: 'Creation and maintenance of arteriovenous fistulas and grafts for hemodialysis, ensuring reliable vascular access for kidney disease patients.',
      duration: '1-2 hours',
      recovery: '2-4 weeks',
      benefits: [
        'Minimally invasive approach',
        'Quick fistula maturation',
        'Extended access longevity',
        'Fewer complications',
        'Outpatient procedure'
      ],
      process: [
        'Comprehensive vascular assessment',
        'Fistula or graft creation',
        'Image-guided technique',
        'Regular maintenance and monitoring',
        'Prompt treatment of complications'
      ],
      whatToExpect: 'Fistula typically ready for use in 6-12 weeks after maturation. Regular monitoring ensures long-term function.',
      idealCandidates: 'Patients with kidney failure requiring hemodialysis or those with failing dialysis access.'
    },
    '7': { 
      title: 'Liver & Kidney Biopsies',
      icon: <CheckCircle size={64} weight="duotone" className="text-primary" />,
      category: 'Diagnostic',
      description: 'Image-guided tissue sampling using ultrasound or CT guidance provides accurate diagnosis of liver and kidney diseases with minimal risk.',
      duration: '30 minutes',
      recovery: '24 hours',
      benefits: [
        'Accurate tissue diagnosis',
        'Real-time imaging guidance',
        'Minimal discomfort',
        'Quick procedure',
        'Low complication rate'
      ],
      process: [
        'Ultrasound or CT identifies target',
        'Local anesthesia applied',
        'Thin needle inserted to collect tissue',
        'Sample sent for analysis',
        'Observation period post-procedure'
      ],
      whatToExpect: 'Brief observation period after biopsy. Resume normal activities the next day. Results typically available within a week.',
      idealCandidates: 'Patients requiring tissue diagnosis for liver or kidney disease evaluation.'
    },
    '8': { 
      title: 'Port-a-Cath Placement',
      icon: <Heart size={64} weight="duotone" className="text-primary" />,
      category: 'Access',
      description: 'Implantable port placement provides long-term central venous access for chemotherapy, antibiotics, or parenteral nutrition delivery.',
      duration: '30-60 minutes',
      recovery: '1-2 days',
      benefits: [
        'Long-term reliable access',
        'Reduced needle sticks',
        'Can shower/swim normally',
        'Minimal visible profile',
        'Outpatient procedure'
      ],
      process: [
        'Ultrasound-guided vein access',
        'Port implanted beneath skin',
        'Catheter threaded to large vein',
        'Fluoroscopy confirms position',
        'Ready for use immediately'
      ],
      whatToExpect: 'Mild soreness at implant site for a few days. Port can be used immediately for medication delivery.',
      idealCandidates: 'Cancer patients requiring chemotherapy or others needing long-term IV access.'
    },
    '9': { 
      title: 'Embolization Procedures',
      icon: <Shield size={64} weight="duotone" className="text-primary" />,
      category: 'Vascular',
      description: 'Catheter-based treatment to block blood vessels, used for controlling bleeding, treating tumors, aneurysms, and vascular malformations.',
      duration: '1-3 hours',
      recovery: '1-2 weeks',
      benefits: [
        'Stops bleeding without surgery',
        'Treats various conditions',
        'Preserves organ function',
        'Minimally invasive',
        'Effective pain relief'
      ],
      process: [
        'Catheter inserted through artery',
        'Guided to target blood vessel',
        'Embolic agents delivered',
        'Blood flow blocked or reduced',
        'Imaging confirms treatment'
      ],
      whatToExpect: 'Recovery varies by condition treated. Many patients discharged same or next day. Symptoms improve gradually over weeks.',
      idealCandidates: 'Patients with bleeding, tumors, aneurysms, or vascular malformations requiring blood flow reduction.'
    },
  };

  const procedure = procedures[id || '1'];
  
  if (!procedure) {
    return (
      <div className="min-h-screen pt-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold mb-4">Procedure not found</h1>
          <Link to="/procedures">
            <Button>Back to Procedures</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-background via-white to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <Link to="/procedures">
            <Button variant="ghost" className="mb-8 text-primary hover:text-primary hover:bg-primary/10">
              <ArrowLeft size={20} className="mr-2" weight="bold" />
              Back to Procedures
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              {procedure.icon}
            </div>
            
            <div className="flex-1">
              <Badge className="mb-4 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
                {procedure.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                {procedure.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {procedure.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <Card className="overflow-hidden border-2 border-primary/10 shadow-xl mb-12">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={performingProcedure} 
                alt="Advanced interventional procedure" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Image-Guided Precision
                </h3>
                <p className="text-white/90 text-lg">
                  State-of-the-art equipment for minimally invasive procedures
                </p>
              </div>
            </div>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 border-2 border-border">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={24} weight="duotone" className="text-primary" />
                <h3 className="font-bold text-foreground">Duration</h3>
              </div>
              <p className="text-2xl font-bold text-primary">{procedure.duration}</p>
            </Card>
            
            <Card className="p-6 border-2 border-border">
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={24} weight="duotone" className="text-primary" />
                <h3 className="font-bold text-foreground">Recovery</h3>
              </div>
              <p className="text-2xl font-bold text-primary">{procedure.recovery}</p>
            </Card>
            
            <Card className="p-6 border-2 border-border">
              <div className="flex items-center gap-3 mb-2">
                <Info size={24} weight="duotone" className="text-primary" />
                <h3 className="font-bold text-foreground">Setting</h3>
              </div>
              <p className="text-2xl font-bold text-primary">Outpatient</p>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <CheckCircle size={28} weight="duotone" className="text-primary" />
                Key Benefits
              </h2>
              <ul className="space-y-4">
                {procedure.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={24} weight="fill" className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/20">
              <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
                <Pulse size={28} weight="duotone" className="text-accent" />
                The Process
              </h2>
              <ol className="space-y-4">
                {procedure.process.map((step: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-foreground font-medium pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
          
          <Card className="p-8 mb-8 bg-gradient-to-br from-purple/5 to-purple/10 border-2 border-purple/20">
            <h2 className="text-2xl font-bold mb-4 text-foreground">What to Expect</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {procedure.whatToExpect}
            </p>
            
            <Separator className="my-6" />
            
            <h3 className="text-xl font-bold mb-3 text-foreground">Ideal Candidates</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {procedure.idealCandidates}
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-background to-muted/30 border-2 border-border text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Take the Next Step?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Agathangelou Marios to discuss if this procedure is right for you
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-appointment">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8">
                  Meet Dr. Marios
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
