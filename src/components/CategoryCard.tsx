import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
  Icon: LucideIcon;
  imageSrc?: string;
}

const CategoryCard = ({ title, active, onClick, Icon, imageSrc }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg w-full",
        "hover-scale"
      )}
      aria-pressed={active}
    >
      <Card
        className={cn(
          // Responsive padding and sizing for mobile grid
          "p-3 md:p-5 rounded-lg border bg-card/80 backdrop-blur-sm w-full",
          "transition-shadow",
          active ? "shadow-glow" : "shadow-elegant hover:shadow-glow"
        )}
      >
        <div className="flex items-center gap-2 md:gap-4">
          <div
            className={cn(
              // Responsive icon/image sizing
              "relative flex size-12 md:size-14 shrink-0 items-center justify-center rounded-md overflow-hidden",
              "bg-[hsl(var(--secondary))] text-primary shadow-inner"
            )}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${title} image`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <Icon className="size-6 md:size-7" aria-hidden="true" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-medium text-sm md:text-lg text-foreground truncate">{title}</div>
          </div>
        </div>
      </Card>
    </button>
  );
};

export default CategoryCard;
