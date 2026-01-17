import { useState, useEffect } from 'react';
import { X, Cookie } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <Card className="max-w-4xl mx-auto p-6 shadow-2xl border-2 border-primary/20 bg-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Cookie size={24} weight="duotone" className="text-primary" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-2">
              We Value Your Privacy
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience, analyze site traffic, and improve our services. 
              By clicking "Accept", you consent to our use of cookies. Read our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              {' '}to learn more.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Button 
                onClick={handleAccept}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Accept All Cookies
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                className="border-2 border-border"
              >
                Decline
              </Button>
            </div>
          </div>
          
          <button
            onClick={handleDecline}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Close cookie consent"
          >
            <X size={20} />
          </button>
        </div>
      </Card>
    </div>
  );
}
