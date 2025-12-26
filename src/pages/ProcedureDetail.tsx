import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle } from 'lucide-react';

export default function ProcedureDetail() {
  const { id } = useParams();
  const procedures: { [key: string]: any } = {
    '1': { title: 'Uterine Fibroid Embolization', icon: '🏥', description: 'Non-surgical treatment for symptomatic fibroids.', benefits: ['No surgical incision', 'Preserves uterus', 'Quick recovery'], process: ['Catheter inserted', 'Guided to arteries', 'Particles injected', '45-90 minutes'], recovery: 'Return to activities within 7-10 days.' },
    '2': { title: 'Varicose Vein Treatment', icon: '💉', description: 'Minimally invasive endovenous procedures.', benefits: ['No stripping', 'Local anesthesia', 'Walk immediately'], process: ['Ultrasound mapping', 'Catheter inserted', 'Energy applied', '30-60 minutes'], recovery: 'Resume activities immediately.' },
    '3': { title: 'Prostate Artery Embolization', icon: '🩺', description: 'Treatment for enlarged prostate.', benefits: ['Preserves function', 'No general anesthesia', 'Short recovery'], process: ['Catheter via wrist/groin', 'Guided to arteries', 'Particles injected', '1-2 hours'], recovery: 'Same day discharge.' },
    '4': { title: 'Vertebroplasty', icon: '🦴', description: 'Spinal fracture stabilization.', benefits: ['Rapid pain relief', 'Stabilizes spine', 'Minimal recovery'], process: ['Conscious sedation', 'Needle inserted', 'Cement injected', '30-60 minutes'], recovery: 'Pain relief within 24-48 hours.' },
    '5': { title: 'Tumor Ablation', icon: '🎯', description: 'Image-guided cancer treatment.', benefits: ['Minimally invasive', 'Precise targeting', 'Preserves tissue'], process: ['CT/ultrasound guided', 'Probe inserted', 'Energy delivered', 'Varies by size'], recovery: 'Same/next day discharge.' },
    '6': { title: 'Dialysis Access Management', icon: '🔬', description: 'Vascular access for dialysis.', benefits: ['Minimally invasive', 'Quick maturation', 'Extended longevity'], process: ['Vascular assessment', 'Fistula/graft creation', 'Maintenance care', 'Image-guided'], recovery: '6-12 weeks maturation.' },
  };

  const procedure = procedures[id || '1'];
  if (!procedure) return <div className="min-h-screen pt-32">Procedure not found</div>;

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/procedures" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-semibold">
          <ChevronLeft className="w-5 h-5 mr-1" />Back to Procedures
        </Link>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-6xl mb-6">{procedure.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">{procedure.title}</h1>
          <p className="text-xl text-gray-700 mb-12">{procedure.description}</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/5 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Benefits</h2>
              <ul className="space-y-3">
                {procedure.benefits.map((b: string, i: number) => (
                  <li key={i} className="flex items-start"><CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" /><span className="text-gray-700">{b}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/5 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Process</h2>
              <ol className="space-y-3">
                {procedure.process.map((s: string, i: number) => (
                  <li key={i} className="flex items-start"><span className="flex items-center justify-center w-6 h-6 bg-secondary text-white rounded-full mr-3 flex-shrink-0 text-sm font-bold">{i + 1}</span><span className="text-gray-700">{s}</span></li>
                ))}
              </ol>
            </div>
          </div>
          <div className="bg-accent/5 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Recovery</h2>
            <p className="text-gray-700">{procedure.recovery}</p>
          </div>
          <div className="text-center">
            <Link to="/book-appointment" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">Schedule a Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
