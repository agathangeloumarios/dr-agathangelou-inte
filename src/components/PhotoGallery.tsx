import { useState } from 'react';
import { X, ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Photo {
  src: string;
  alt: string;
  title?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
  aspectRatio?: 'square' | 'landscape' | 'portrait';
}

function PhotoGallery({ photos, columns = 3, aspectRatio = 'landscape' }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const aspectClasses = {
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
    portrait: 'aspect-[3/4]'
  };

  const gridClasses = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  const handlePrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <>
      <div className={`grid ${gridClasses[columns]} gap-4`}>
        {photos.map((photo, index) => (
          <Card
            key={index}
            className="overflow-hidden cursor-pointer group border-2 border-border hover:border-primary/30 transition-all hover:shadow-xl"
            onClick={() => setSelectedIndex(index)}
          >
            <div className={`relative ${aspectClasses[aspectRatio]} bg-muted overflow-hidden`}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.title && (
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{photo.title}</p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent 
          className="max-w-6xl w-full p-0 bg-black/95 border-none"
          onKeyDown={handleKeyDown}
        >
          {selectedIndex !== null && (
            <div className="relative">
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X size={24} weight="bold" />
              </button>

              <div className="relative flex items-center justify-center min-h-[60vh] max-h-[85vh] p-4">
                <img
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </div>

              {photos[selectedIndex].title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-semibold text-center">
                    {photos[selectedIndex].title}
                  </p>
                </div>
              )}

              {photos.length > 1 && (
                <>
                  <Button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full p-0 border-none"
                    variant="outline"
                  >
                    <ArrowLeft size={24} weight="bold" className="text-white" />
                  </Button>
                  <Button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full p-0 border-none"
                    variant="outline"
                  >
                    <ArrowRight size={24} weight="bold" className="text-white" />
                  </Button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
                    <p className="text-white text-sm font-medium">
                      {selectedIndex + 1} / {photos.length}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PhotoGallery;
