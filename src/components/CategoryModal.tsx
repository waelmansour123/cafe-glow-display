import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menu";

interface CategoryModalProps {
  category: MenuCategory | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc?: string;
}

const CategoryModal = ({ category, open, onOpenChange, imageSrc }: CategoryModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        setScrollY(scrollTop);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, [open]);

  // Reset scroll position when modal opens
  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setScrollY(0);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg md:max-w-2xl h-[85vh] bg-card/90 backdrop-blur-md border shadow-elegant flex flex-col p-0 overflow-hidden">
        {/* Fixed header section with parallax image */}
        <div className="relative flex-shrink-0 overflow-hidden">
          {imageSrc ? (
            <div className="aspect-[16/9] w-full overflow-hidden rounded-t-md">
              <img 
                src={imageSrc} 
                alt={`${category?.title} image`} 
                loading="lazy" 
                className="w-full h-full object-cover transition-transform duration-75 ease-out"
                style={{
                  transform: `translateY(${-scrollY * 0.5}px)`,
                }}
              />
            </div>
          ) : null}
          
          {/* Header with gradient overlay for better text readability */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="font-display text-xl md:text-2xl text-white drop-shadow-lg">
                {category?.title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>
        
        {/* Scrollable content section */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto bg-card/95 backdrop-blur-sm"
        >
          <div className="px-6 py-4">
            <ul className="divide-y divide-border/50">
              {category?.items.map((it, idx) => (
                <li key={idx} className="py-4 md:py-5">
                  <div className="flex items-baseline gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg text-foreground font-medium leading-tight">
                        {it.name}
                      </p>
                      {it.description && (
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {it.description}
                        </p>
                      )}
                    </div>
                    <div className="text-base md:text-lg font-semibold text-primary flex-shrink-0">
                      {it.price}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;