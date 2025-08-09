import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { MenuCategory } from "@/data/menu";

interface CategoryModalProps {
  category: MenuCategory | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  imageSrc?: string;
}

const CategoryModal = ({ category, open, onOpenChange, imageSrc }: CategoryModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg md:max-w-2xl h-[85vh] bg-card/90 backdrop-blur-md border shadow-elegant flex flex-col p-0">
        {/* Fixed header section */}
        <div className="flex-shrink-0">
          {imageSrc ? (
            <div className="aspect-[16/9] w-full overflow-hidden rounded-t-md">
              <img 
                src={imageSrc} 
                alt={`${category?.title} image`} 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
            </div>
          ) : null}
          <DialogHeader className="p-6 pb-2 bg-card/90 backdrop-blur-md">
            <DialogTitle className="font-display text-xl md:text-2xl text-primary">
              {category?.title}
            </DialogTitle>
          </DialogHeader>
        </div>
        
        {/* Scrollable content section */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <ul className="divide-y">
            {category?.items.map((it, idx) => (
              <li key={idx} className="py-3 md:py-4">
                <div className="flex items-baseline gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg text-foreground font-medium">{it.name}</p>
                    {it.description && (
                      <p className="mt-1 text-sm text-muted-foreground">{it.description}</p>
                    )}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-primary">{it.price}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryModal;