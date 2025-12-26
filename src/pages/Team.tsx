export default function Team() {
  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900">Our Team</h1>
        <p className="text-center text-gray-600 mb-16 text-lg">Meet the experts dedicated to your care</p>
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-48 h-48 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl">👨‍⚕️</span>
            </div>
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Dr. Agathangelou Marios</h2>
            <p className="text-center text-primary font-semibold mb-4">MD MSc | Interventional Radiologist</p>
            <div className="space-y-4 text-gray-700">
              <p>Dr. Marios Agathangelou is a highly skilled interventional radiologist specializing in minimally invasive procedures.</p>
              <p>With extensive training and experience in image-guided treatments, Dr. Agathangelou provides cutting-edge medical care with precision and compassion.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Education</h3>
              <p className="text-gray-700">Medical Doctor (MD) with Master of Science (MSc) in Interventional Radiology</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Experience</h3>
              <p className="text-gray-700">Years of experience performing complex interventional procedures with exceptional patient outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
