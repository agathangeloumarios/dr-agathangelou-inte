import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CaretLeft, CaretRight, ArrowsLeftRight } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  description: string;
  category: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

export default function BeforeAfterGallery({ images }: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const currentImage = images[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSliderPosition(50);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="w-full">
      <Card className="overflow-hidden border-2 border-border shadow-2xl">
        <div 
          className="relative h-[500px] md:h-[600px] overflow-hidden select-none cursor-ew-resize"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <div className="absolute inset-0">
            <img 
              src={currentImage.after} 
              alt={`After - ${currentImage.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6">
              <Badge className="bg-primary text-primary-foreground font-semibold px-4 py-2 text-sm shadow-lg">
                After
              </Badge>
            </div>
          </div>

          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={currentImage.before} 
              alt={`Before - ${currentImage.title}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6">
              <Badge className="bg-muted text-muted-foreground font-semibold px-4 py-2 text-sm shadow-lg">
                Before
              </Badge>
            </div>
          </div>

          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize z-20"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <ArrowsLeftRight size={24} weight="bold" className="text-primary" />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white pointer-events-none">
            <Badge className="mb-3 bg-white/20 backdrop-blur-sm text-white border-white/30 font-semibold">
              {currentImage.category}
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {currentImage.title}
            </h3>
            <p className="text-white/90 text-base md:text-lg max-w-2xl">
              {currentImage.description}
            </p>
          </div>
        </div>

        {images.length > 1 && (
          <div className="p-6 bg-muted/30 flex items-center justify-between gap-4">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="lg"
              className="border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <CaretLeft size={20} weight="bold" className="mr-2" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-primary/50"
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="lg"
              className="border-2 border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Next
              <CaretRight size={20} weight="bold" className="ml-2" />
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          <ArrowsLeftRight size={16} weight="bold" className="inline mr-1" />
          Drag the slider or use arrow buttons to compare before and after results
        </p>
      </div>
    </div>
  );
}
