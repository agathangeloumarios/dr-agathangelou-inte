import { Link } from 'react-router-dom';
import { Star, Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';

export default function Home() {
  const procedures = [
    { title: 'Uterine Fibroid Embolization', description: 'Non-surgical treatment for uterine fibroids', icon: '🏥' },
    { title: 'Varicose Vein Treatment', description: 'Minimally invasive vein procedures', icon: '💉' },
    { title: 'Prostate Artery Embolization', description: 'Treatment for enlarged prostate', icon: '🩺' },
    { title: 'Vertebroplasty', description: 'Spinal fracture stabilization', icon: '🦴' },
    { title: 'Tumor Ablation', description: 'Image-guided cancer treatment', icon: '🎯' },
    { title: 'Dialysis Access Management', description: 'Vascular access maintenance', icon: '🔬' },
  ];

  const benefits = ['Minimally Invasive Procedures', 'Shorter Recovery Times', 'Less Pain & Scarring', 'Outpatient Treatment', 'Precision-Guided Technology', 'Lower Risk of Complications'];

  const testimonials = [
    { name: 'Maria K.', text: 'Dr. Agathangelou provided exceptional care. The procedure was quick and recovery was smooth.', rating: 5 },
    { name: 'John P.', text: 'Professional, caring, and highly skilled. I highly recommend Dr. Marios for interventional procedures.', rating: 5 },
    { name: 'Elena S.', text: 'Life-changing treatment with minimal downtime. Thank you Dr. Agathangelou!', rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white to-[#fafafa]">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Interventional Radiology</h1>
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-6 tracking-wide">PRECISION. INNOVATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Doctor Agathangelou Marios MD MSc</h2>
          <p className="text-xl text-gray-600 mb-6">Specialized in new Minimally invasive Techniques</p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}</div>
            <span className="text-gray-700 font-medium">100% προτείνουν (17 κριτικές)</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#what-is" className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">Learn More</a>
            <Link to="/book-appointment" className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-colors">Book an Appointment</Link>
          </div>
        </div>
      </section>

      <section id="what-is" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What is Interventional Radiology?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Interventional Radiology is a medical specialty that uses minimally invasive, image-guided procedures to diagnose and treat diseases throughout the body.</p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Using advanced imaging techniques such as X-rays, CT scans, ultrasound, and MRI, interventional radiologists can perform precise treatments through small incisions.</p>
              <p className="text-lg text-gray-700 leading-relaxed">These procedures typically result in less pain, shorter recovery times, and reduced risk of complications.</p>
            </div>
            <div className="bg-primary/10 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center"><div className="text-6xl mb-4">🏥</div><p className="text-xl font-semibold text-primary">Image-Guided Precision Care</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Benefits of Interventional Radiology</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Why choose minimally invasive procedures?</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"><ChevronRight className="w-6 h-6 text-primary" /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit}</h3>
                <p className="text-gray-600">Experience modern medical care with advanced techniques</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services | Specialized Treatments</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive interventional radiology procedures</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <div key={index} className="bg-[#fafafa] p-8 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                <div className="text-5xl mb-4">{procedure.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{procedure.title}</h3>
                <p className="text-gray-600 mb-6">{procedure.description}</p>
                <Link to={`/procedure/${index + 1}`} className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">Learn More<ChevronRight className="w-5 h-5 ml-1" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Testimonials from Satisfied Patients</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Hear from our patients about their experiences</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex mb-4">{[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}</div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors text-lg">View All Testimonials<ChevronRight className="w-5 h-5 ml-1" /></Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Contact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin className="w-8 h-8 text-primary" /></div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">Achaion 22<br />Nicosia 1101<br />Cyprus</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Phone className="w-8 h-8 text-primary" /></div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href="tel:96973434" className="text-gray-600 hover:text-primary transition-colors">96 973434</a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Clock className="w-8 h-8 text-primary" /></div>
              <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
              <p className="text-gray-600">Open 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Mail className="w-8 h-8 text-primary" /></div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a href="mailto:agathangeloumarios@gmail.com" className="text-gray-600 hover:text-primary transition-colors break-all">agathangeloumarios@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 mb-4">© 2025 Dr. Agathangelou Marios. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Interventional Radiology | Minimally Invasive Procedures</p>
        </div>
      </footer>
    </div>
  );
}
