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
import imgPanuzzo from "@/assets/categories/panuzzo.jpg";
// New category images
import imgChicha from "@/assets/categories/chicha.jpg";
import imgMakloub from "@/assets/categories/makloub.jpg";
import imgBaguetteFarcie from "@/assets/categories/baguetteFarcie.jpg";
import imgPlats from "@/assets/categories/plats.jpg";
import imgOmelettes from "@/assets/categories/omelettes.jpg";
import imgBrik from "@/assets/categories/brik.jpg";
import imgBubblesWaffles from "@/assets/categories/bubbleswaffles.jpg";
import imgDetox from "@/assets/categories/detox.jpg";
import imgFrappuccinos from "@/assets/categories/frappuccinos.jpg";
import imgCocktails from "@/assets/categories/cocktails.jpg";

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
    panuzzo: imgPanuzzo,
    // New category images
    chicha: imgChicha,
    makloub: imgMakloub,
    "baguette-farcie": imgBaguetteFarcie,
    plats: imgPlats,
    omelettes: imgOmelettes,
    brik: imgBrik,
    "bubbles-waffles": imgBubblesWaffles,
    detox: imgDetox,
    frappuccinos: imgFrappuccinos,
    cocktails: imgCocktails,
  }), []);

  const selectedCategory = useMemo(
    () => categories.find((c) => c.id === selectedCategoryId) || null,
    [categories, selectedCategoryId]
  );

  /*
   * Browser History Management for Modal Back Button Support
   * 
   * This solution prevents users from accidentally leaving the website when they press
   * the back button on their phone while a category modal is open.
   * 
   * How it works:
   * 1. When a modal opens, we push a new history entry with modalOpen: true
   * 2. When the user presses back, we intercept the popstate event
   * 3. Instead of leaving the site, we close the modal and push a new state
   * 4. This keeps the user on the same page while providing expected back button behavior
   * 
   * Additional features:
   * - Escape key support for closing modals
   * - Proper cleanup on component unmount
   * - Handles browser refresh scenarios
   * - Maintains proper history state
   */
  // Browser history management for modal back button support
  useEffect(() => {
    // Set initial history state
    if (!window.history.state) {
      window.history.replaceState({ modalOpen: false }, '', window.location.pathname);
    }

    const handlePopState = (event: PopStateEvent) => {
      // If we have a selected category and the user pressed back, close the modal
      if (selectedCategoryId) {
        setSelectedCategoryId(null);
        // Push a new state to prevent the back button from leaving the site
        window.history.pushState({ modalOpen: false }, '', window.location.pathname);
      }
    };

    // Listen for browser back button events
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [selectedCategoryId]);

  // Cleanup effect to handle component unmount
  useEffect(() => {
    return () => {
      // If component unmounts with modal open, clean up history
      if (selectedCategoryId && window.history.state?.modalOpen) {
        window.history.back();
      }
    };
  }, [selectedCategoryId]);

  // Handle modal open/close with history management
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    // Push a new history entry when modal opens
    window.history.pushState({ modalOpen: true, categoryId }, '', window.location.pathname);
  };

  const handleModalClose = () => {
    setSelectedCategoryId(null);
    // Go back in history when modal closes
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  };

  // Handle direct navigation to page with modal open (e.g., browser refresh)
  useEffect(() => {
    if (window.history.state?.modalOpen && window.history.state?.categoryId) {
      setSelectedCategoryId(window.history.state.categoryId);
    }
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCategoryId) {
        handleModalClose();
      }
    };

    if (selectedCategoryId) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedCategoryId]);

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
        {/* Mobile: 2 columns grid. Desktop: responsive grid */}
        <div className="md:hidden grid grid-cols-2 gap-3 px-2">
          {categories.map((cat) => {
            const Icon = iconMap[cat.id] || Coffee;
            const imageSrc = imageMap[cat.id as keyof typeof imageMap];
            return (
              <div key={cat.id} ref={(el) => { itemRefs.current[cat.id] = el; }} className="w-full">
                <CategoryCard
                  title={cat.title}
                  Icon={Icon}
                  active={selectedCategoryId === cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  imageSrc={imageSrc}
                />
              </div>
            );
          })}
        </div>
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
                onClick={() => handleCategorySelect(cat.id)}
                imageSrc={imageSrc}
              />
            );
          })}
        </div>
      </section>

      <CategoryModal
        category={selectedCategory}
        open={!!selectedCategory}
        onOpenChange={(o) => !o && handleModalClose()}
        imageSrc={selectedCategory ? imageMap[selectedCategory.id as keyof typeof imageMap] : undefined}
      />

      <Footer />
    </main>
  );
};

export default Index;
