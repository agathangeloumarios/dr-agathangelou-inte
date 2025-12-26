import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, UploadSimple, Image as ImageIcon, Folder, Info } from '@phosphor-icons/react';

export default function PhotoUploadHelper() {
  const photoLocations = [
    {
      priority: 'MUST HAVE',
      color: 'bg-destructive',
      photos: [
        {
          name: 'doctor-portrait.jpg',
          size: '1200x1200px (square)',
          location: 'Team Page - Main Profile',
          description: 'Professional headshot of Dr. Agathangelou Marios',
          current: 'Emoji placeholder 👨‍⚕️',
        },
        {
          name: 'medical-equipment-1.jpg',
          size: '1200x900px (4:3)',
          location: 'Home Page - What is IR Section',
          description: 'Interventional radiology equipment or imaging technology',
          current: 'Icon graphic',
        },
        {
          name: 'clinic-exterior.jpg',
          size: '1920x1080px (landscape)',
          location: 'Home Page - Facility Gallery',
          description: 'Exterior view of the medical clinic building',
          current: 'Missing',
        },
      ],
    },
    {
      priority: 'HIGHLY RECOMMENDED',
      color: 'bg-accent',
      photos: [
        {
          name: 'clinic-interior.jpg',
          size: '1920x1080px',
          location: 'Home Page - Facility Gallery',
          description: 'Modern interior space of the clinic',
          current: 'Missing',
        },
        {
          name: 'consultation-room.jpg',
          size: '1920x1080px',
          location: 'Home Page - Facility Gallery',
          description: 'Private consultation area',
          current: 'Missing',
        },
        {
          name: 'reception-area.jpg',
          size: '1920x1080px',
          location: 'Home Page - Facility Gallery',
          description: 'Welcoming entrance and reception desk',
          current: 'Missing',
        },
        {
          name: 'procedure-room.jpg',
          size: '1920x1080px',
          location: 'Team Page - Facility Gallery',
          description: 'Professional procedure space',
          current: 'Missing',
        },
      ],
    },
    {
      priority: 'NICE TO HAVE',
      color: 'bg-primary',
      photos: [
        {
          name: 'waiting-room.jpg',
          size: '1920x1080px',
          location: 'Team Page - Facility Gallery',
          description: 'Comfortable waiting area for patients',
          current: 'Missing',
        },
        {
          name: 'medical-technology.jpg',
          size: '1920x1080px',
          location: 'Procedures Page - Header',
          description: 'Advanced medical equipment showcase',
          current: 'Missing',
        },
        {
          name: 'clinic-hallway.jpg',
          size: '1920x1080px',
          location: 'Team Page - Facility Gallery',
          description: 'Clean, modern hallway',
          current: 'Missing',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-primary/20">
            Photo Upload Assistant
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            📸 Upload Your Photos Here
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow this guide to add professional photos to your website
          </p>
        </div>

        <Card className="p-8 mb-8 border-2 border-primary/20 bg-primary/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Info size={24} weight="duotone" className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">Quick Upload Instructions</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Look in your file explorer sidebar for <strong>src → assets → images</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span><strong>On Mac:</strong> Control+click (right-click) the <code className="bg-muted px-2 py-1 rounded">images</code> folder</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Select <strong>"Upload Files..."</strong> from the menu</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Choose your photos (you can select multiple at once)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <span>After uploading, just type <strong>"photos ready"</strong> and I'll integrate them!</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Folder size={20} weight="duotone" className="text-accent" />
                  <span className="font-bold text-foreground">Upload Path:</span>
                </div>
                <code className="text-sm bg-background px-3 py-2 rounded block">
                  /workspaces/spark-template/src/assets/images/
                </code>
              </div>
            </div>
          </div>
        </Card>

        {photoLocations.map((section, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Badge className={`${section.color} text-white px-4 py-2 text-sm font-bold`}>
                {section.priority}
              </Badge>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {section.photos.map((photo, photoIdx) => (
                <Card
                  key={photoIdx}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/30"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0">
                      <ImageIcon size={24} weight="duotone" className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-1">{photo.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {photo.size}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Location:</span>
                      <p className="text-muted-foreground">{photo.location}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Description:</span>
                      <p className="text-muted-foreground">{photo.description}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Currently:</span>
                      <p className="text-muted-foreground italic">{photo.current}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle size={24} weight="duotone" className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">After Uploading Photos</h3>
              <p className="text-muted-foreground mb-4">
                Once you've uploaded your photos, simply send me a message:
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-foreground font-semibold">"Photos uploaded"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-foreground font-semibold">"Images ready"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-foreground font-semibold">"I uploaded X photos"</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                I'll automatically integrate them into your website at all the optimal locations!
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
            <UploadSimple size={20} weight="duotone" className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Supported formats: <strong className="text-foreground">JPG, JPEG, PNG, WebP</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
