// Import UI components and utilities
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

// TypeScript interface defining the props for CategoryCard
interface CategoryCardProps {
  title: string;           // Category name to display
  active?: boolean;        // Whether this card is currently selected
  onClick?: () => void;    // Function to call when card is clicked
  Icon: LucideIcon;       // Lucide icon component to display
  imageSrc?: string;      // Optional image URL for the category
}

/**
 * CategoryCard Component
 * 
 * Displays a clickable card for each menu category
 * Features:
 * - Shows category image or fallback icon
 * - Responsive hover and active states
 * - Accessibility support with proper ARIA attributes
 * - Elegant shadow and scaling animations
 */
const CategoryCard = ({ title, active, onClick, Icon, imageSrc }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg",
        "hover-scale" // Custom utility class for hover scaling animation
      )}
      aria-pressed={active} // Accessibility: indicates if this card is selected
    >
      <Card
        className={cn(
          "p-4 md:p-5 rounded-lg border bg-card/80 backdrop-blur-sm",
          "transition-shadow", // Smooth shadow transitions
          // Conditional styling based on active state
          active ? "shadow-glow" : "shadow-elegant hover:shadow-glow"
        )}
      >
        <div className="flex items-center gap-4">
          {/* Category icon/image container */}
          <div
            className={cn(
              "relative flex size-14 shrink-0 items-center justify-center rounded-md overflow-hidden",
              "bg-[hsl(var(--secondary))] text-primary shadow-inner"
            )}
          >
            {/* Show image if available, otherwise show icon */}
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={`${title} image`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy" // Optimize image loading
              />
            ) : (
              <Icon className="size-7" aria-hidden="true" />
            )}
          </div>
          
          {/* Category information */}
          <div>
            <div className="font-medium text-base md:text-lg text-foreground">{title}</div>
            <div className="text-sm text-muted-foreground">Tap to view items</div>
          </div>
        </div>
      </Card>
    </button>
  );
};

export default CategoryCard;
