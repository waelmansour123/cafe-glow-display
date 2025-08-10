// Import custom components for the menu display
import GoldenHeader from "@/components/GoldenHeader";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import CategoryModal from "@/components/CategoryModal";
// Import menu data containing all categories and items
import menuData from "@/data/menu";
// Import Lucide React icons for category representation
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
// React hooks for state management and performance optimization
import { useEffect, useMemo, useRef, useState } from "react";
// TypeScript type for icon components
import type { LucideIcon } from "lucide-react";

/**
 * Icon mapping for menu categories
 * Maps category IDs to their corresponding Lucide icons
 * This provides fallback icons when category images aren't available
 */
const iconMap: Record<string, LucideIcon> = {
  supplement: UtensilsCrossed,    // Additional items like fries
  chicha: Flame,                  // Hookah/Shisha
  pizza: Pizza,                   // Pizza items
  makloub: ChefHat,              // Tunisian sandwich
  "baguette-farcie": ChefHat,    // Stuffed baguette
  plats: UtensilsCrossed,        // Main dishes
  burger: UtensilsCrossed,       // Burgers
  panuzzo: ChefHat,              // Italian-style sandwich
  salades: Leaf,                 // Salads
  omelettes: Egg,                // Egg dishes
  brik: Cookie,                  // Tunisian pastry
  pates: UtensilsCrossed,        // Pasta dishes
  pancakes: CakeSlice,           // Pancakes
  gaufres: Cookie,               // Waffles
  "bubbles-waffles": Cookie,     // Bubble waffles
  "crepes-sucrees": Cookie,      // Sweet crepes
  "crepes-salees": Cookie,       // Savory crepes
  "chocolat-chaud": Coffee,      // Hot chocolate
  desserts: CakeSlice,           // Desserts
  cafes: Coffee,                 // Coffee drinks
  "the-infusion": Sprout,        // Tea and herbal drinks
  "fantasia-coffee": Coffee,     // Specialty coffee drinks
  nespresso: Coffee,             // Nespresso coffee
  detox: Sprout,                 // Detox drinks
  glaces: IceCream,              // Ice cream
  "soft-drink": CupSoda,         // Soft drinks
  mojitos: Wine,                 // Mojito cocktails
  frappuccinos: Coffee,          // Frappuccino drinks
  smoothies: CupSoda,            // Smoothies
  milkshakes: CupSoda,           // Milkshakes
  "jus-frais": Apple,            // Fresh juices
  cocktails: Wine,               // Cocktails
  "spooky-shake": Ghost,         // Special themed shakes
  menus: ListChecks,             // Complete menu packages
};

// Import category images for visual appeal
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

/**
 * Index Component - Main homepage displaying the cafe menu
 * This is the primary page that shows all menu categories
 */
const Index = () => {
  // Get menu categories from data file (memoized for performance)
  const categories = useMemo(() => menuData, []);
  
  // State to track which category modal is currently open
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  /**
   * Image mapping for categories
   * Maps category IDs to their corresponding images
   * Used for visual enhancement of category cards
   */
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

  // Find the currently selected category for the modal
  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId) || null,
    [categories, selectedCategoryId]
  );

  return (
    <main>
      {/* Header section with logo and hero image */}
      <GoldenHeader />

      {/* Main categories section */}
      <section className="container mx-auto px-4 mt-4 md:mt-8" aria-label="Categories">
        <div className="mb-4 md:mb-6">
          <h2 className="font-display text-2xl md:text-3xl text-primary">Browse by Category</h2>
          <p className="text-muted-foreground mt-1">Tap a category to view items and prices</p>
        </div>

        {/* Mobile layout: horizontal scrolling cards */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]">
          <div className="flex gap-4 w-max pr-4">
            {categories.map((cat) => {
              // Get icon and image for this category
              const Icon = iconMap[cat.id] || Coffee; // Default to Coffee icon
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
        </div>

        {/* Desktop layout: responsive grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((cat) => {
            // Get icon and image for this category
            const Icon = iconMap[cat.id] || Coffee; // Default to Coffee icon
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

      {/* Modal dialog for displaying category details */}
      <CategoryModal
        category={selectedCategory}
        open={!!selectedCategory} // Convert to boolean
        onOpenChange={(o) => !o && setSelectedCategoryId(null)} // Close modal
        imageSrc={selectedCategory ? imageMap[selectedCategory.id as keyof typeof imageMap] : undefined}
      />

      {/* Footer with contact info and social links */}
      <Footer />
    </main>
  );
};

export default Index;
