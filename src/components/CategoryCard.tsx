import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
  Icon: LucideIcon;
}

const CategoryCard = ({ title, active, onClick, Icon }: CategoryCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg",
        "hover-scale"
      )}
      aria-pressed={active}
    >
      <Card
        className={cn(
          "p-4 md:p-5 rounded-lg border bg-card/80 backdrop-blur-sm",
          "transition-shadow",
          active ? "shadow-glow" : "shadow-elegant hover:shadow-glow"
        )}
      >
        <div className="flex items-center gap-4">
          <div className={cn(
            "flex size-14 shrink-0 items-center justify-center rounded-md",
            "bg-[hsl(var(--secondary))] text-primary shadow-inner"
          )}>
            <Icon className="size-7" aria-hidden="true" />
          </div>
          <div>
            <div className="font-medium text-base md:text-lg text-foreground">
              {title}
            </div>
            <div className="text-sm text-muted-foreground">Tap to view items</div>
          </div>
        </div>
      </Card>
    </button>
  );
};

export default CategoryCard;
