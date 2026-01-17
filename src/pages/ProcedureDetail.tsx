import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Calendar, Info, Pulse, Heart, Shield, TrendUp, Sparkle } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import performingProcedure from '@/assets/images/Performing_procedures_1.jpg';

export default function ProcedureDetail() {
  const { id } = useParams();
  
  const procedures: { [key: string]: any } = {
    '1': { 
      title: 'Uterine Fibroid Embolization',
      icon: <Pulse size={64} weight="duotone" className="text-primary" />,
      category: 'Women\'s Health',
      description: 'Uterine Fibroid Embolization (UFE) is a minimally invasive treatment that blocks the blood supply to uterine fibroids, causing them to shrink. This procedure offers an alternative to hysterectomy while preserving the uterus.',
      duration: '45-60 mins',
      recovery: '1 week–10 days',
      setting: 'Overnight Stay',
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
      title: 'Angioplasty and Stenting',
      icon: <Shield size={64} weight="duotone" className="text-primary" />,
      category: 'Vascular',
      description: 'Angioplasty and stenting is a minimally invasive procedure to open blocked arteries and restore blood flow using balloon dilation and metallic stent placement.',
      duration: '1-2 hours',
      recovery: '1-2 days',
      benefits: [
        'No open surgery required',
        'Immediate blood flow improvement',
        'Quick recovery time',
        'Local anesthesia only',
        'Same-day or next-day discharge'
      ],
      process: [
        'Catheter inserted via wrist or groin',
        'Guided to blocked artery using imaging',
        'Balloon inflated to open blockage',
        'Stent placed to keep artery open',
        'Blood flow immediately restored'
      ],
      whatToExpect: 'Most patients resume normal activities within a few days. Blood thinning medications prescribed to prevent clotting.',
      idealCandidates: 'Patients with arterial blockages causing poor circulation, leg pain, or risk of stroke.'
    },
    '3': { 
      title: 'Interventional Oncology',
      icon: <Sparkle size={64} weight="duotone" className="text-primary" />,
      category: 'Oncology',
      description: 'Interventional oncology encompasses image-guided minimally invasive cancer treatments including tumor ablation, embolization, and targeted drug delivery.',
      duration: '45-60 mins',
      recovery: '3-7 Days',
      setting: 'Outpatient',
      benefits: [
        'Minimally invasive cancer treatment',
        'Precise targeting of tumors',
        'Preserves healthy tissue',
        'Can be repeated if needed',
        'Alternative when surgery not possible'
      ],
      process: [
        'CT or ultrasound guidance for precise targeting',
        'Thin probe or catheter inserted',
        'Treatment delivered directly to tumor',
        'Real-time imaging monitors procedure',
        'Duration varies by tumor type and size'
      ],
      whatToExpect: 'Same-day or next-day discharge typical. Mild discomfort at site resolves quickly. Follow-up imaging monitors treatment response.',
      idealCandidates: 'Patients with tumors in liver, kidney, lung, or bone who need alternatives to traditional surgery.'
    },
    '4': { 
      title: 'Minimally Invasive Pain Treatment',
      icon: <Heart size={64} weight="duotone" className="text-primary" />,
      category: 'Pain Management',
      description: 'Advanced image-guided pain management procedures including nerve blocks, epidural injections, and targeted ablations for chronic pain relief.',
      duration: '30-60 minutes',
      recovery: '1-3 days',
      benefits: [
        'Targeted pain relief',
        'Minimal recovery time',
        'Outpatient procedure',
        'Reduced medication dependence',
        'High success rate'
      ],
      process: [
        'Precise imaging guides needle placement',
        'Local anesthetic applied',
        'Treatment delivered to pain source',
        'Immediate or gradual pain relief',
        'Can be repeated as needed'
      ],
      whatToExpect: 'Most patients experience pain relief within days. Some procedures provide immediate relief while others take 1-2 weeks.',
      idealCandidates: 'Patients with chronic back pain, joint pain, or nerve-related pain not responding to conservative treatment.'
    },
    '5': { 
      title: 'Varicose Veins Treatment',
      icon: <TrendUp size={64} weight="duotone" className="text-primary" />,
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
    '6': { 
      title: 'Ablation of Thyroid Nodules',
      icon: <Pulse size={64} weight="duotone" className="text-primary" />,
      category: 'Endocrine',
      description: 'Radiofrequency or microwave ablation of thyroid nodules offers a non-surgical alternative for treating benign and selected malignant thyroid nodules.',
      duration: '30-60 minutes',
      recovery: '1-2 days',
      benefits: [
        'No surgical scar',
        'Preserves thyroid function',
        'Local anesthesia only',
        'Quick recovery',
        'Outpatient procedure'
      ],
      process: [
        'Ultrasound guidance for precise targeting',
        'Local anesthesia applied to neck',
        'Thin electrode inserted into nodule',
        'Heat energy destroys nodule tissue',
        'Nodule shrinks over following months'
      ],
      whatToExpect: 'Mild neck discomfort for 1-2 days. Normal activities resume next day. Nodule volume reduction visible over 3-6 months.',
      idealCandidates: 'Patients with benign thyroid nodules causing symptoms or cosmetic concerns who wish to avoid surgery.'
    },
    '7': { 
      title: 'Varicocele Embolization',
      icon: <CheckCircle size={64} weight="duotone" className="text-primary" />,
      category: 'Men\'s Health',
      description: 'Varicocele embolization is a minimally invasive catheter-based procedure that blocks abnormal veins in the scrotum to improve fertility and relieve discomfort.',
      duration: '1 hour',
      recovery: '1-2 days',
      benefits: [
        'No surgical incision',
        'Faster recovery than surgery',
        'Improves sperm quality',
        'Relieves testicular pain',
        'Same-day procedure'
      ],
      process: [
        'Catheter inserted via neck or groin vein',
        'Guided to testicular veins using X-ray',
        'Coils or agents block abnormal veins',
        'Normal venous drainage restored',
        'Procedure takes about 60 minutes'
      ],
      whatToExpect: 'Resume normal activities within 1-2 days. Sperm quality improvement typically seen within 3-6 months.',
      idealCandidates: 'Men with varicoceles causing infertility, testicular pain, or testicular atrophy.'
    },
    '8': { 
      title: 'Breast Cryotherapy',
      icon: <Heart size={64} weight="duotone" className="text-primary" />,
      category: 'Women\'s Health',
      description: 'Breast cryotherapy uses extreme cold to freeze and destroy abnormal breast tissue, offering a minimally invasive treatment for selected breast lesions.',
      duration: '1-2 hours',
      recovery: '1-2 weeks',
      benefits: [
        'Minimal scarring',
        'Preserves breast appearance',
        'Quick procedure',
        'Local anesthesia only',
        'Outpatient treatment'
      ],
      process: [
        'Ultrasound or MRI guidance for targeting',
        'Small probe inserted through skin',
        'Extreme cold freezes lesion',
        'Ice ball monitored in real-time',
        'Frozen tissue naturally absorbed'
      ],
      whatToExpect: 'Mild bruising and swelling for 1-2 weeks. Normal activities resume within days. Treated tissue absorbed over several months.',
      idealCandidates: 'Patients with small benign breast lesions or selected early-stage cancers who prefer minimally invasive treatment.'
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
              <p className="text-2xl font-bold text-primary">{procedure.setting || 'Outpatient'}</p>
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

      <Footer />
    </div>
  );
}
