import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Maria K.', procedure: 'Uterine Fibroid Embolization', text: 'Dr. Agathangelou provided exceptional care. The procedure was quick and recovery was smooth.', rating: 5, date: 'December 2024' },
    { name: 'John P.', procedure: 'Prostate Artery Embolization', text: 'Professional, caring, and highly skilled. I highly recommend Dr. Marios.', rating: 5, date: 'November 2024' },
    { name: 'Elena S.', procedure: 'Varicose Vein Treatment', text: 'Life-changing treatment with minimal downtime. Thank you Dr. Agathangelou!', rating: 5, date: 'October 2024' },
    { name: 'Andreas M.', procedure: 'Vertebroplasty', text: 'After years of back pain, I finally found relief. Excellent care from start to finish.', rating: 5, date: 'September 2024' },
    { name: 'Christina L.', procedure: 'Tumor Ablation', text: 'Dr. Marios and his team were incredible. Forever grateful.', rating: 5, date: 'August 2024' },
    { name: 'Dimitris N.', procedure: 'Dialysis Access', text: 'Outstanding service and results. The procedure went smoothly.', rating: 5, date: 'July 2024' },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Patient Testimonials</h1>
        <p className="text-center text-gray-600 mb-4 text-lg">Hear from our satisfied patients</p>
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16 max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />)}
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">100% Recommended</p>
          <p className="text-gray-600">Based on 17 patient reviews</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.procedure}</p>
                <p className="text-sm text-gray-500 mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
