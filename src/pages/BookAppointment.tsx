import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', time: '', procedure: '', message: '' });

  const procedures = ['Uterine Fibroid Embolization', 'Varicose Vein Treatment', 'Prostate Artery Embolization', 'Vertebroplasty', 'Tumor Ablation', 'Dialysis Access Management', 'General Consultation'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been received. We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Book an Appointment</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Schedule your consultation with Dr. Agathangelou Marios</p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-gray-900">Call Us</h3>
            <p className="text-gray-600">96 973434</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-gray-900">Email Us</h3>
            <p className="text-gray-600 text-sm">agathangeloumarios@gmail.com</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2 text-gray-900">Availability</h3>
            <p className="text-gray-600">Open 24 hours</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2"><User className="w-5 h-5 inline mr-2" />Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2"><Phone className="w-5 h-5 inline mr-2" />Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Your phone" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2"><Mail className="w-5 h-5 inline mr-2" />Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="your.email@example.com" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2"><Calendar className="w-5 h-5 inline mr-2" />Date *</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2"><Clock className="w-5 h-5 inline mr-2" />Time *</label>
                <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Procedure *</label>
              <select name="procedure" value={formData.procedure} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none">
                <option value="">Select a procedure</option>
                {procedures.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2"><MessageSquare className="w-5 h-5 inline mr-2" />Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Additional information..." />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-lg">Submit Appointment Request</button>
          </form>
        </div>
      </div>
    </div>
  );
}
