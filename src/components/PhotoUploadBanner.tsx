import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, UploadSimple } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function PhotoUploadBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-fade-in-up">
      <Card className="p-6 shadow-2xl border-2 border-primary/30 bg-white">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <UploadSimple size={24} weight="duotone" className="text-primary" />
          </div>
          <div className="flex-1 pr-4">
            <h3 className="font-bold text-foreground mb-2">Ready to Add Your Photos?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Upload professional photos of your clinic, equipment, and team to complete your website.
            </p>
            <Link to="/photo-upload-helper">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                See Upload Guide
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
