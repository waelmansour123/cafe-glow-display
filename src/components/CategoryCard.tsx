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
  compact?: boolean;      // Optional compact mode for mobile
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
const CategoryCard = ({ title, active, onClick, Icon, imageSrc, compact = false }: CategoryCardProps) => {
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
          // Base styles
          "rounded-lg border bg-card/80 backdrop-blur-sm transition-shadow",
          // Responsive padding - smaller on mobile when compact
          compact ? "p-3" : "p-4 md:p-5",
          // Conditional styling based on active state
          active ? "shadow-glow" : "shadow-elegant hover:shadow-glow"
        )}
      >
        <div className={cn(
          "flex items-center gap-3",
          // In compact mode, use smaller gap and potentially stack vertically on very small screens
          compact && "gap-2"
        )}>
          {/* Category icon/image container */}
          <div
            className={cn(
              "relative flex shrink-0 items-center justify-center rounded-md overflow-hidden",
              "bg-[hsl(var(--secondary))] text-primary shadow-inner",
              // Responsive icon size - smaller in compact mode
              compact ? "size-10" : "size-14"
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
              <Icon className={cn("text-primary", compact ? "size-5" : "size-7")} aria-hidden="true" />
            )}
          </div>
          
          {/* Category information */}
          <div className="flex-1 min-w-0">
            <div className={cn(
              "font-medium text-foreground truncate",
              // Responsive text size
              compact ? "text-sm" : "text-base md:text-lg"
            )}>
              {title}
            </div>
            {!compact && (
              <div className="text-sm text-muted-foreground">Tap to view items</div>
            )}
          </div>
        </div>
      </Card>
    </button>
  );
};

export default CategoryCard;
