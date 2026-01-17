import { Shield, Lock, Eye, FileText, Clock, Globe } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye size={24} weight="duotone" />,
      title: 'Information We Collect',
      content: [
        'When you book an appointment or contact us, we collect personal information including your name, email address, phone number, and medical inquiries.',
        'We collect this information to provide medical services, respond to inquiries, and improve our website experience.',
        'We may also collect technical information such as IP address, browser type, and device information through cookies and analytics tools.'
      ]
    },
    {
      icon: <Lock size={24} weight="duotone" />,
      title: 'How We Use Your Information',
      content: [
        'To schedule and confirm appointments',
        'To communicate about your medical care and treatment options',
        'To send appointment reminders and follow-up information',
        'To improve our website and services',
        'To comply with legal and regulatory requirements'
      ]
    },
    {
      icon: <Shield size={24} weight="duotone" />,
      title: 'Data Protection & Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
        'Your medical information is treated with the highest level of confidentiality in accordance with medical privacy regulations.',
        'We do not sell, trade, or rent your personal information to third parties.',
        'Access to personal information is restricted to authorized personnel only.'
      ]
    },
    {
      icon: <FileText size={24} weight="duotone" />,
      title: 'Your Rights (GDPR)',
      content: [
        'Right to access: You can request a copy of your personal data',
        'Right to rectification: You can request correction of inaccurate data',
        'Right to erasure: You can request deletion of your personal data',
        'Right to restriction: You can request limitation of processing',
        'Right to data portability: You can request transfer of your data',
        'Right to object: You can object to processing of your personal data',
        'Right to withdraw consent: You can withdraw consent at any time'
      ]
    },
    {
      icon: <Globe size={24} weight="duotone" />,
      title: 'Cookies & Tracking',
      content: [
        'We use cookies to enhance your browsing experience and analyze website traffic.',
        'Essential cookies: Required for website functionality',
        'Analytics cookies: Help us understand how visitors interact with our website',
        'You can control cookie preferences through your browser settings or our cookie consent banner.'
      ]
    },
    {
      icon: <Clock size={24} weight="duotone" />,
      title: 'Data Retention',
      content: [
        'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy.',
        'Medical records are retained in accordance with Cyprus medical record retention laws.',
        'You may request deletion of your data subject to legal and regulatory requirements.'
      ]
    }
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
            Legal Information
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Privacy Policy
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
          
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-8" />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 mb-12">
            <p className="text-lg text-foreground leading-relaxed">
              <span className="font-bold">Effective Date:</span> January 1, 2025
              <br />
              <span className="font-bold">Last Updated:</span> January 1, 2025
            </p>
            <Separator className="my-6" />
            <p className="text-muted-foreground leading-relaxed">
              Dr. Agathangelou Marios ("we", "our", or "us") is committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services, in compliance with the General Data Protection 
              Regulation (GDPR) and Cyprus data protection laws.
            </p>
          </Card>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 border-2 border-border hover:border-primary/20 transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mt-1">{section.title}</h2>
                </div>
                
                <div className="space-y-3 ml-16">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-12 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us About Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, wish to exercise your rights, or have concerns about 
              how your data is handled, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Email:</span> agathangeloumarios@gmail.com</p>
              <p><span className="font-semibold text-foreground">Phone:</span> 96 973434</p>
              <p><span className="font-semibold text-foreground">Address:</span> Achaion 22, Nicosia 1101, Cyprus</p>
            </div>
          </Card>

          <div className="mt-12 p-6 bg-muted/30 rounded-xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Medical Disclaimer:</span> This website provides general 
              information about interventional radiology procedures and is not intended to provide medical advice. 
              Always consult with a qualified healthcare provider for diagnosis and treatment recommendations specific 
              to your condition. The information on this website does not constitute a doctor-patient relationship.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
