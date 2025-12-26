import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Procedures() {
  const procedures = [
    { id: 1, title: 'Uterine Fibroid Embolization', description: 'Non-surgical treatment for uterine fibroids', icon: '🏥', category: 'Gynecological' },
    { id: 2, title: 'Varicose Vein Treatment', description: 'Minimally invasive endovenous procedures', icon: '💉', category: 'Vascular' },
    { id: 3, title: 'Prostate Artery Embolization', description: 'Advanced treatment for enlarged prostate', icon: '🩺', category: 'Urological' },
    { id: 4, title: 'Vertebroplasty', description: 'Spinal fracture stabilization', icon: '🦴', category: 'Orthopedic' },
    { id: 5, title: 'Tumor Ablation', description: 'Image-guided cancer treatment', icon: '🎯', category: 'Oncological' },
    { id: 6, title: 'Dialysis Access Management', description: 'Vascular access maintenance', icon: '🔬', category: 'Vascular' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Procedures</h1>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">Comprehensive interventional radiology procedures using the latest minimally invasive techniques</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure) => (
            <div key={procedure.id} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="text-5xl mb-4">{procedure.icon}</div>
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">{procedure.category}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{procedure.title}</h2>
              <p className="text-gray-600 mb-6">{procedure.description}</p>
              <Link to={`/procedure/${procedure.id}`} className="inline-flex items-center text-primary font-semibold hover:text-primary/80">
                Learn More<ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
