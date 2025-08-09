import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useRef, useState } from "react";
import type { MenuCategory } from "@/data/menu";
import { useIsMobile } from "@/hooks/use-mobile";

interface CategoryModalProps {
  category: MenuCategory | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc?: string;
}

const CategoryModal = ({ category, open, onOpenChange, imageSrc }: CategoryModalProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  // Drag-to-close state (mobile)
  const dragStartYRef = useRef<number | null>(null);
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollY(scrollRef.current.scrollTop);
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
      setDragOffsetY(0);
      setIsDragging(false);
      dragStartYRef.current = null;
    }
  }, [open]);

  // Mobile collapsing header / image transform
  const baseHeight = 240; // px
  const minHeight = 120; // px
  const collapseRange = Math.max(baseHeight - minHeight, 1);
  const progress = Math.min(Math.max(scrollY / collapseRange, 0), 1);
  const currentHeight = isMobile ? baseHeight - (baseHeight - minHeight) * progress : undefined;

  const translateImage = -(isMobile ? scrollY * 0.6 : scrollY * 0.5);
  const minScale = isMobile ? 0.85 : 0.95;
  const scale = 1 - (1 - minScale) * progress;

  // Drag-to-close handlers (mobile only)
  useEffect(() => {
    if (!isMobile) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (dragStartYRef.current == null) return;
      const dy = e.clientY - dragStartYRef.current;
      // Only drag downwards and only if scroll is at the very top
      if ((scrollRef.current?.scrollTop ?? 0) <= 2 && dy > 0) {
        setIsDragging(true);
        setDragOffsetY(dy);
      }
    };

    const handlePointerUp = () => {
      if (!isDragging) {
        dragStartYRef.current = null;
        return;
      }
      const threshold = 100; // px to close
      if (dragOffsetY > threshold) {
        onOpenChange(false);
      } else {
        // Reset
        setDragOffsetY(0);
        setIsDragging(false);
      }
      dragStartYRef.current = null;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('pointercancel', handlePointerUp, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove as any);
      window.removeEventListener('pointerup', handlePointerUp as any);
      window.removeEventListener('pointercancel', handlePointerUp as any);
    };
  }, [isMobile, isDragging, dragOffsetY, onOpenChange]);

  const onPointerDownHandle = (e) => {
    if (!isMobile) return;
    // Only start drag if content is scrolled to top
    if ((scrollRef.current?.scrollTop ?? 0) <= 2) {
      dragStartYRef.current = e.clientY as number;
      setIsDragging(false);
      setDragOffsetY(0);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg md:max-w-2xl h-[85vh] bg-card/90 backdrop-blur-md border shadow-elegant flex flex-col p-0 overflow-hidden">
        {/* Translate whole content slightly on drag for visual feedback */}
        <div ref={contentRef} className="flex h-full min-h-0 flex-col" style={{ transform: isMobile && dragOffsetY > 0 ? `translateY(${dragOffsetY}px)` : undefined, transition: isDragging ? 'none' : 'transform 150ms ease-out' }}>
          {/* Drag handle (mobile only) */}
          <div className="md:hidden flex items-center justify-center py-2">
            <div
              className="h-1.5 w-10 rounded-full bg-muted-foreground/40"
              onPointerDown={onPointerDownHandle}
              aria-hidden="true"
            />
          </div>

          {/* Image with parallax + scale on scroll (mobile collapses height) */}
          <div className="relative flex-shrink-0 overflow-hidden">
            {imageSrc && (
              <div
                className={`${isMobile ? '' : 'aspect-[16/9]'} w-full overflow-hidden rounded-t-md`}
                style={isMobile ? { height: currentHeight } : undefined}
              >
                <img
                  src={imageSrc}
                  alt={`${category?.title} image`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-150 ease-out"
                  style={{ transform: `translateY(${translateImage}px) scale(${scale})`, transformOrigin: 'top center' }}
                />
              </div>
            )}

            {/* Header overlay - remains visible (sticky-like) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <DialogHeader className="p-6 pb-4">
                <DialogTitle className="font-display text-xl md:text-2xl text-white drop-shadow-lg">
                  {category?.title}
                </DialogTitle>
              </DialogHeader>
            </div>
          </div>

          {/* Scrollable menu items */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto min-h-0 bg-card/95 backdrop-blur-sm"
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;
