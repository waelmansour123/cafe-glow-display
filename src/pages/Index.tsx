import GoldenHeader from "@/components/GoldenHeader";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import CategoryModal from "@/components/CategoryModal";
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
import { useEffect, useMemo, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

// Category icons fallback map
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

// Images for some popular categories
import imgPizza from "@/assets/categories/pizza.jpg";
import imgBurger from "@/assets/categories/burger.jpg";
import imgCoffee from "@/assets/categories/coffee.jpg";
import imgJuice from "@/assets/categories/juice.jpg";
import imgDesserts from "@/assets/categories/desserts.jpg";
import imgSalads from "@/assets/categories/salads.jpg";
import imgPasta from "@/assets/categories/pasta.jpg";
import imgCrepes from "@/assets/categories/crepes.jpg";
import imgPancakes from "@/assets/categories/pancakes.jpg";
import imgWaffles from "@/assets/categories/waffles.jpg";
import imgSmoothies from "@/assets/categories/smoothies.jpg";
import imgMilkshake from "@/assets/categories/milkshake.jpg";
import imgSoda from "@/assets/categories/soda.jpg";
import imgMojito from "@/assets/categories/mojito.jpg";
import imgIcecream from "@/assets/categories/icecream.jpg";
import imgHotchocolate from "@/assets/categories/hotchocolate.jpg";
import imgTea from "@/assets/categories/tea.jpg";
import imgBreakfast from "@/assets/categories/breakfast.jpg";
import imgFries from "@/assets/categories/fries.jpg";

const Index = () => {
  const categories = useMemo(() => menuData, []);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const imageMap = useMemo(() => ({
    pizza: imgPizza,
    burger: imgBurger,
    cafes: imgCoffee,
    "fantasia-coffee": imgCoffee,
    nespresso: imgCoffee,
    "chocolat-chaud": imgHotchocolate,
    desserts: imgDesserts,
    salades: imgSalads,
    pates: imgPasta,
    "crepes-sucrees": imgCrepes,
    "crepes-salees": imgCrepes,
    pancakes: imgPancakes,
    gaufres: imgWaffles,
    smoothies: imgSmoothies,
    milkshakes: imgMilkshake,
    "soft-drink": imgSoda,
    mojitos: imgMojito,
    glaces: imgIcecream,
    "jus-frais": imgJuice,
    "the-infusion": imgTea,
    menus: imgBreakfast,
    supplement: imgFries,
  }), []);

  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId) || null,
    [categories, selectedCategoryId]
  );

  // Scroll the selected category into view in the mobile list
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  useEffect(() => {
    if (selectedCategoryId) {
      const el = itemRefs.current[selectedCategoryId];
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [selectedCategoryId]);

  return (
    <main>
      <GoldenHeader />

      <section className="container mx-auto px-4 mt-4 md:mt-8" aria-label="Categories">
        <div className="mb-4 md:mb-6">
          <h2 className="font-display text-2xl md:text-3xl text-primary">Browse by Category</h2>
          <p className="text-muted-foreground mt-1">Tap a category to view items and prices</p>
        </div>
        {/* Mobile layout: 2-column grid for better screen utilization */}
        <div className="md:hidden grid grid-cols-2 gap-3 px-2">
          {categories.map((cat) => {
            const Icon = iconMap[cat.id] || Coffee;
            const imageSrc = imageMap[cat.id as keyof typeof imageMap];
            return (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                Icon={Icon}
                active={selectedCategoryId === cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                imageSrc={imageSrc}
                compact={true} // New prop for mobile layout
              />
            );
          })}
        </div>

        {/* Desktop layout: responsive grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.id] || Coffee;
            const imageSrc = imageMap[cat.id as keyof typeof imageMap];
            return (
              <CategoryCard
                key={cat.id}
                title={cat.title}
                Icon={Icon}
                active={selectedCategoryId === cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                imageSrc={imageSrc}
              />
            );
          })}
        </div>
      </section>

      <CategoryModal
        category={selectedCategory}
        open={!!selectedCategory}
        onOpenChange={(o) => !o && setSelectedCategoryId(null)}
        imageSrc={selectedCategory ? imageMap[selectedCategory.id as keyof typeof imageMap] : undefined}
      />

      <Footer />
    </main>
  );
};

export default Index;
