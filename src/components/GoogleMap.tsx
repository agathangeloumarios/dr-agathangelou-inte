import { MapPin } from '@phosphor-icons/react';
import { Card } from '@/components/ui/card';

interface GoogleMapProps {
  address?: string;
  className?: string;
}

export default function GoogleMap({ 
  address = "Achaion 22, Nicosia, Cyprus",
  className = ""
}: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  return (
    <Card className={`overflow-hidden border-2 border-border ${className}`}>
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 border-b-2 border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <MapPin size={24} weight="duotone" className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Our Location</h3>
            <p className="text-muted-foreground text-sm">{address}</p>
          </div>
        </div>
      </div>
      
      <div className="relative w-full h-[400px] bg-muted">
        <iframe
          src={googleMapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location Map"
          className="w-full h-full"
        />
      </div>
      
      <div className="p-6 bg-gradient-to-br from-muted/30 to-background">
        <a
          href={googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
        >
          <MapPin size={20} weight="bold" className="mr-2" />
          Get Directions
        </a>
      </div>
    </Card>
  );
}
