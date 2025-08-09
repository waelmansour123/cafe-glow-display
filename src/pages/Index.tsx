import GoldenHeader from "@/components/GoldenHeader";
import CategoryCard from "@/components/CategoryCard";
import MenuDisplay from "@/components/MenuDisplay";
import Footer from "@/components/Footer";
import menuData from "@/data/menu";
import {
  Coffee,
  Pizza,
  UtensilsCrossed,
  ChefHat,
  Leaf,
  Egg,
  Cookie,
  CakeSlice,
  IceCream,
  CupSoda,
  Wine,
  Sprout,
  Apple,
  Ghost,
  ListChecks,
  Flame,
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  supplement: UtensilsCrossed,
  chicha: Flame,
  pizza: Pizza,
  makloub: ChefHat,
  "baguette-farcie": ChefHat,
  plats: UtensilsCrossed,
  burger: UtensilsCrossed,
  panuzzo: ChefHat,
  salades: Leaf,
  omelettes: Egg,
  brik: Cookie,
  pates: UtensilsCrossed,
  pancakes: CakeSlice,
  gaufres: Cookie,
  "bubbles-waffles": Cookie,
  "crepes-sucrees": Cookie,
  "crepes-salees": Cookie,
  "chocolat-chaud": Coffee,
  desserts: CakeSlice,
  cafes: Coffee,
  "the-infusion": Sprout,
  "fantasia-coffee": Coffee,
  nespresso: Coffee,
  detox: Sprout,
  glaces: IceCream,
  "soft-drink": CupSoda,
  mojitos: Wine,
  frappuccinos: Coffee,
  smoothies: CupSoda,
  milkshakes: CupSoda,
  "jus-frais": Apple,
  cocktails: Wine,
  "spooky-shake": Ghost,
  menus: ListChecks,
};

const Index = () => {
  const [openValues, setOpenValues] = useState<string[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => menuData, []);

  const toggleCategory = (id: string) => {
    setOpenValues((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
    // Scroll the menu section into view for quick access
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <main>
      <GoldenHeader />

      <section className="container mx-auto px-4 mt-4 md:mt-8" aria-label="Categories">
        <div className="mb-4 md:mb-6">
          <h2 className="font-display text-2xl md:text-3xl text-primary">Browse by Category</h2>
          <p className="text-muted-foreground mt-1">Tap a category to view items and prices</p>
        </div>
        {/* Mobile: horizontal scroll. Desktop: responsive grid */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex gap-4 w-max pr-4">
            {categories.map((cat) => {
              const Icon = iconMap[cat.id] || Coffee;
              return (
                <CategoryCard
                  key={cat.id}
                  title={cat.title}
                  Icon={Icon}
                  active={openValues.includes(cat.id)}
                  onClick={() => toggleCategory(cat.id)}
                />
              );
            })}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.id] || Coffee;
            return (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                Icon={Icon}
                active={openValues.includes(cat.id)}
                onClick={() => toggleCategory(cat.id)}
              />
            );
          })}
        </div>
      </section>

      <div ref={menuRef} className="mt-8 md:mt-12" />

      <MenuDisplay
        categories={categories}
        openValues={openValues}
        onOpenChange={setOpenValues}
      />

      <Footer />
    </main>
  );
};

export default Index;
