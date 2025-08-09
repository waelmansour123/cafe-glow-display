import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MenuCategory } from "@/data/menu";

interface MenuDisplayProps {
  categories: MenuCategory[];
  openValues: string[];
  onOpenChange: (values: string[]) => void;
}

const MenuDisplay = ({ categories, openValues, onOpenChange }: MenuDisplayProps) => {
  return (
    <section aria-label="Menu" className="container mx-auto px-4">
      <Accordion
        type="multiple"
        value={openValues}
        onValueChange={onOpenChange}
        className="w-full rounded-lg border bg-card/70 backdrop-blur-sm shadow-elegant"
      >
        {categories.map((cat) => (
          <AccordionItem key={cat.id} value={cat.id} className="px-4 md:px-6">
            <AccordionTrigger className="text-left text-lg md:text-xl font-semibold text-primary">
              {cat.title}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="divide-y">
                {cat.items.map((it, idx) => (
                  <li key={idx} className="py-3 md:py-4">
                    <div className="flex items-baseline gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-base md:text-lg text-foreground font-medium">
                          {it.name}
                        </p>
                        {it.description && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            {it.description}
                          </p>
                        )}
                      </div>
                      <div className="text-base md:text-lg font-semibold text-primary">
                        {it.price}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default MenuDisplay;
