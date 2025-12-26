import { Check } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { title: 'Minimally Invasive', description: 'Small incisions mean less trauma, reduced scarring, and faster healing times.', icon: '🎯' },
    { title: 'Shorter Recovery', description: 'Most procedures are outpatient with same-day discharge.', icon: '⚡' },
    { title: 'Less Pain', description: 'Reduced post-procedure discomfort and lower need for pain medication.', icon: '💚' },
    { title: 'Lower Risk', description: 'Decreased risk of complications and infections.', icon: '🛡️' },
    { title: 'Precision Technology', description: 'Advanced imaging guidance ensures accurate treatment delivery.', icon: '🔬' },
    { title: 'Cost Effective', description: 'Shorter recovery times often result in lower overall healthcare costs.', icon: '💰' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Benefits of Interventional Radiology</h1>
        <p className="text-center text-gray-600 mb-16 text-lg max-w-3xl mx-auto">Discover why minimally invasive procedures are revolutionizing modern medicine</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h2>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
