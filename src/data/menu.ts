/**
 * Menu Data Types and Structure
 * 
 * This file contains the complete menu data for Golden Cafe
 * including all categories, items, prices, and descriptions
 */

// TypeScript interface for individual menu items
export type MenuItem = {
  name: string;        // Item name (e.g., "Marguerita Pizza")
  price: string;       // Price in local currency (appears to be Tunisian Dinars)
  description?: string; // Optional description of ingredients/preparation
};

// TypeScript interface for menu categories
export type MenuCategory = {
  id: string;          // Unique identifier for the category (used for routing/images)
  title: string;       // Display name of the category
  items: MenuItem[];   // Array of menu items in this category
};

/**
 * Complete menu data for Golden Cafe
 * 
 * Organized by categories ranging from traditional Tunisian dishes
 * to international items like pizza, burgers, and specialty drinks
 * 
 * Categories include:
 * - Food: Pizza, Burgers, Salads, Pasta, Tunisian specialties
 * - Drinks: Coffee varieties, Fresh juices, Smoothies, Cocktails
 * - Desserts: Pancakes, Waffles, Crepes, Ice cream
 * - Special Menus: Breakfast combinations and family packages
 */
export const menuData: MenuCategory[] = [
  {
    id: "supplement",
    title: "SUPPLEMENT",
    items: [
      { name: "Assiette de frites", price: "4.000" },
      { name: "Thon", price: "3.000" },
      { name: "Jambon", price: "2.500" },
      { name: "Poulet", price: "5.000" },
      { name: "Oeuf", price: "1.000" },
      { name: "Fromages", price: "2.500" },
    ],
  },
  {
    id: "chicha",
    title: "CHICHA",
    items: [
      { name: "Fakher au choix", price: "9.000" },
      { name: "Chicha Adalia au choix", price: "11.000" },
      { name: "Chicha fumo avec glaçon", price: "15.000" },
      { name: "Chicha Golden Quasar avec assiette de Fruits", price: "20.000" },
    ],
  },
  {
    id: "pizza",
    title: "PIZZA",
    items: [
      { name: "Marguerita", description: "sauce tomate, fromage, olives", price: "12.000" },
      { name: "Neptune", description: "sauce tomate, fromage, thon, olives", price: "18.000" },
      { name: "Reine", description: "jambon, champignons", price: "15.000" },
      { name: "Pepperoni", description: "sauce tomate, fromage, pepperoni, olives", price: "15.000" },
      { name: "Poulet", description: "sauce blanche, pesto", price: "20.000" },
      { name: "4 Fromages", price: "22.000" },
      { name: "Mexicaine", description: "Viande Hachée", price: "22.000" },
      { name: "Végétarienne", description: "sauce tomate, légumes, olives", price: "15.000" },
      { name: "4 Viandes", description: "Chawarma, Poulet, pepperoni, viande hachée", price: "25.000" },
      { name: "Fruits de mer", price: "28.000" },
      { name: "Golden", description: "spécial", price: "30.000" },
    ],
  },
  {
    id: "makloub",
    title: "MAKLOUB",
    items: [
      { name: "Thon fromage", price: "9.500" },
      { name: "Jambon fromage", price: "9.000" },
      { name: "Poulet fromage", price: "10.500" },
      { name: "Poulet panée fromage", price: "11.500" },
      { name: "Viande hachée", price: "12.500" },
      { name: "Chawarma", price: "10.500" },
    ],
  },
  {
    id: "baguette-farcie",
    title: "BAGUETTE FARCIE",
    items: [
      { name: "Poulet, Jambon, Fromage", price: "15.000" },
      { name: "Viande hachée, Fromage", price: "17.000" },
    ],
  },
  {
    id: "plats",
    title: "PLATS",
    items: [
      { name: "Escalope Grillé", price: "15.000" },
      { name: "Escalope Panée", price: "16.000" },
      { name: "Escalope à la crème", price: "17.000" },
      { name: "Chawarma", price: "18.000" },
      { name: "Cordon Bleu", price: "15.000" },
      { name: "Grillades Mixte", price: "25.000" },
    ],
  },
  {
    id: "burger",
    title: "BURGER",
    items: [
      { name: "Chicken Burger", price: "9.000" },
      { name: "Chicken crispy Burger", price: "11.000" },
      { name: "Cheese Burger", price: "10.000" },
      { name: "Golden Burger", price: "15.000" },
    ],
  },
  {
    id: "panuzzo",
    title: "PANUZZO",
    items: [
      { name: "Thon fromage", price: "10.000" },
      { name: "Jambon", price: "9.000" },
      { name: "Poulet", price: "11.500" },
      { name: "Poulet panée", price: "12.500" },
      { name: "Viande hachée", price: "13.500" },
    ],
  },
  {
    id: "salades",
    title: "SALADES",
    items: [
      { name: "Salade Cesar", description: "Tomate, Laitue, Escalope grillé, sauce cesar, crocon", price: "10.000" },
      { name: "Salade nigoise", description: "Oeuf, Thon, Pomme de terre, Oignon", price: "11.000" },
      { name: "Salade Trio", description: "Mechouia, Tunisienne, Salade verte", price: "11.000" },
      { name: "Salade Italienne", description: "Mozzarella, Tomate, Huile d’olive", price: "10.000" },
      { name: "Salade Fruits de Mer", price: "19.000" },
    ],
  },
  {
    id: "omelettes",
    title: "OMELETTES",
    items: [
      { name: "Nature", price: "6.000" },
      { name: "Fromage", price: "8.000" },
      { name: "Thon Fromage", price: "10.000" },
      { name: "Jambon Fromage", price: "9.000" },
      { name: "Poulet Fromage", price: "13.000" },
    ],
  },
  {
    id: "brik",
    title: "BRIK",
    items: [
      { name: "Thon Chevrettes", price: "5.000" },
      { name: "(Standard)", price: "6.000" },
    ],
  },
  {
    id: "pates",
    title: "PÂTES",
    items: [
      { name: "Alfredo", description: "sauce blanche, Poulet, Champignons", price: "17.000" },
      { name: "Putanesca", description: "Thon, tomate, capres, olives, piment de cayenne", price: "15.000" },
      { name: "Bolognaise", description: "Viande hachée", price: "17.000" },
      { name: "4 Fromages", price: "20.000" },
      { name: "Poulet Pesto, Pignons", price: "20.000" },
      { name: "Fruits de mer", price: "25.000" },
    ],
  },
  {
    id: "pancakes",
    title: "PANCAKES",
    items: [
      { name: "Nutella", price: "9.000" },
      { name: "Nutella Banane", price: "11.000" },
      { name: "Banane Fruits secs", price: "15.000" },
      { name: "Golden", description: "Nutella Banane Fruits secs Boule de Glace Chantilly", price: "17.000" },
    ],
  },
  {
    id: "gaufres",
    title: "GAUFRES",
    items: [
      { name: "Nutella", price: "9.000" },
      { name: "Nutella Banane", price: "11.000" },
      { name: "Banane Fruits secs", price: "12.000" },
      { name: "Golden", description: "Nutella Banane Fruits secs Boule de Glace Chantilly", price: "15.000" },
    ],
  },
  {
    id: "bubbles-waffles",
    title: "BUBBLES WAFFLES",
    items: [
      { name: "Nutella", price: "11.000" },
      { name: "Nutella Banane", price: "13.000" },
      { name: "Banane Fruits secs", price: "14.000" },
      { name: "Golden", description: "Nutella Banane Fruits secs Boule de Glace Chantilly", price: "16.000" },
    ],
  },
  {
    id: "crepes-sucrees",
    title: "CRÊPES SUCRÉES",
    items: [
      { name: "Chocolat", price: "6.000" },
      { name: "Chocolat Amande", price: "8.000" },
      { name: "Chocolat Banane", price: "8.000" },
      { name: "Chocolat Banane Amande", price: "9.500" },
      { name: "Nutella", price: "8.000" },
      { name: "Nutella Banane", price: "10.000" },
      { name: "Nutella Fruits secs", price: "11.000" },
      { name: "Nutella Golden", description: "Banane+Fruits secs+Chantilly+Boule de glace", price: "15.000" },
    ],
  },
  {
    id: "crepes-salees",
    title: "CRÊPES SALÉES",
    items: [
      { name: "Fromage", price: "6.000" },
      { name: "Thon Fromage", price: "8.000" },
      { name: "Jambon Fromage", price: "8.000" },
      { name: "Poulet champignons", price: "14.000" },
      { name: "Tunisienne", description: "Oeuf Thon Fromage", price: "10.000" },
    ],
  },
  {
    id: "chocolat-chaud",
    title: "CHOCOLAT CHAUD",
    items: [
      { name: "Classic", price: "7.000" },
      { name: "à la Chantilly", price: "8.500" },
      { name: "à la Banane", price: "8.500" },
      { name: "aux fruits secs", price: "9.000" },
      { name: "Golden", description: "Banane+Fruits secs+Chantilly", price: "12.000" },
    ],
  },
  {
    id: "desserts",
    title: "DESSERTS",
    items: [
      { name: "Fondant au chocolat", price: "8.000" },
      { name: "Tiramisu", price: "8.000" },
      { name: "Gâteaux", price: "8.000" },
      { name: "Cheesecake", price: "9.000" },
      { name: "Assiette de fruits (1 Pers)", price: "15.000" },
      { name: "Assiette de fruits (2 Pers)", price: "22.000" },
      { name: "Crème chantilly", price: "2.500" },
      { name: "Fruits secs", price: "4.000" },
      { name: "Jwejem Classic", price: "9.000" },
      { name: "Jwejem Golden", price: "18.000" },
    ],
  },
  {
    id: "cafes",
    title: "CAFÉS",
    items: [
      { name: "Express", price: "3.000" },
      { name: "Capucin", price: "3.500" },
      { name: "Café crème", price: "4.000" },
      { name: "Américain", price: "3.300" },
      { name: "Spécial", price: "5.000" },
      { name: "Aromatisée", price: "4.500" },
      { name: "Café Turc", price: "5.000" },
      { name: "Chocolat au lait", price: "3.500" },
    ],
  },
  {
    id: "the-infusion",
    title: "THÉ INFUSION",
    items: [
      { name: "Thé à la menthe", price: "4.000" },
      { name: "Thé aux amandes", price: "3.000" },
      { name: "Thé aux pignons", price: "8.000" },
      { name: "Thé golden", price: "9.000" },
    ],
  },
  {
    id: "fantasia-coffee",
    title: "FANTASIA COFFEE",
    items: [
      { name: "White Moka", description: "Chocolat Blanc+Vanille+Café", price: "15.000" },
      { name: "Nutella Coffee", description: "Nutella+Café", price: "8.000" },
      { name: "Speculos Coffee", description: "Vanille+Speculos+Café", price: "9.500" },
      { name: "Café Liégeois", price: "9.000" },
      { name: "Chocolat Liégeois", price: "8.000" },
      { name: "Chocolat Glacé", price: "10.000" },
    ],
  },
  {
    id: "nespresso",
    title: "NESPRESSO",
    items: [
      { name: "Express", price: "5.000" },
      { name: "Capucin", price: "5.500" },
      { name: "Café crème", price: "6.000" },
    ],
  },
  {
    id: "detox",
    title: "DETOX",
    items: [
      { name: "Lemon menthe", description: "citron+menthe fraiche poivrée", price: "9.000" },
      { name: "Lemon power", description: "citromade+Gingembre", price: "9.000" },
      { name: "Green", description: "concombre+basilic+citromade", price: "9.000" },
      { name: "Lemon fraîche", description: "citromade+amandes+menthe glaciale", price: "12.000" },
    ],
  },
  {
    id: "glaces",
    title: "GLACES",
    items: [
      { name: "1 Boule", price: "5.000" },
      { name: "2 Boules", price: "8.500" },
      { name: "3 Boules", price: "10.000" },
      { name: "Golden", description: "3 Boules + Fruits + Fruits Secs + Chantilly", price: "13.000" },
      { name: "Banana Split", description: "3 Boules + Chantilly", price: "13.000" },
    ],
  },
  {
    id: "soft-drink",
    title: "SOFT DRINK",
    items: [
      { name: "Eau 1/2 L", price: "1.500" },
      { name: "Eau 1L", price: "3.000" },
      { name: "Garci", price: "3.000" },
      { name: "Soda au choix", price: "4.000" },
      { name: "Boisson énergétique", price: "10.000" },
    ],
  },
  {
    id: "mojitos",
    title: "MOJITOS",
    items: [
      { name: "Vergin", price: "8.000" },
      { name: "Fruits rouge", description: "Fraise+Framboise+Cerise", price: "9.000" },
      { name: "Bleu", price: "9.000" },
      { name: "Bubble Gum", description: "chwingum", price: "10.000" },
      { name: "Fruit de la passion", price: "10.000" },
      { name: "Energétique", price: "14.000" },
    ],
  },
  {
    id: "frappuccinos",
    title: "FRAPPUCCINOS",
    items: [
      { name: "Iced Caramel", price: "9.000" },
      { name: "Iced Moka", price: "9.000" },
      { name: "Oreo", price: "10.000" },
      { name: "Spéculos", price: "10.000" },
      { name: "Nutella", price: "10.000" },
    ],
  },
  {
    id: "smoothies",
    title: "SMOOTHIES",
    items: [
      { name: "Green", description: "citron+Lime+Menthe fraîche", price: "11.000" },
      { name: "Tropical", description: "Banane+Mangue+Ananas", price: "12.000" },
      { name: "Fruits rouge Myrtille", price: "13.000" },
      { name: "Fruits de la passion", price: "12.000" },
      { name: "Pinnacolada Double", description: "Ananas+Noix de coco", price: "12.000" },
    ],
  },
  {
    id: "milkshakes",
    title: "MILKSHAKES",
    items: [
      { name: "Classic", description: "Fraise, Vanille, Chocolat, Pistache, Caramel, Banane, Noisette, Moka", price: "9.000" },
      { name: "Nutella Banane", price: "14.000" },
      { name: "Oreo Nutella", price: "14.000" },
      { name: "Golden", description: "Astuce de Chef", price: "17.000" },
    ],
  },
  {
    id: "jus-frais",
    title: "JUS FRAIS",
    items: [
      { name: "Orange", price: "6.000" },
      { name: "Citronnade", price: "7.000" },
      { name: "Citronnade aux amandes", price: "9.000" },
      { name: "Fraise", price: "8.000" },
      { name: "Banane", price: "9.000" },
      { name: "Pêche", price: "8.000" },
      { name: "Pomme", price: "8.000" },
      { name: "Kiwi", price: "9.000" },
      { name: "Ananas", price: "10.000" },
    ],
  },
  {
    id: "cocktails",
    title: "COCKTAILS",
    items: [
      { name: "Fruits de saison", price: "12.000" },
      { name: "Best classic", description: "Banane+date+fruits secs+miel", price: "14.000" },
      { name: "Vip Golden", description: "Astuce de Chef", price: "18.000" },
    ],
  },
  {
    id: "spooky-shake",
    title: "SPOOKY SHAKE",
    items: [
      { name: "Double Caramel", description: "caramel+caramel beurre salé", price: "15.000" },
      { name: "Double chocolat", description: "blanc+noir", price: "15.000" },
      { name: "Fruit rouges café", description: "milkshake+popcorn", price: "15.000" },
    ],
  },
  {
    id: "menus",
    title: "MENUS",
    items: [
      { name: "Bonjour", description: "Café au choix, Jus, Viennoiserie ou Cake, Eau 1/2L", price: "8.000" },
      { name: "Frensh", description: "Café au choix, Jus, Viennoiserie ou Cake, petit pain, Eau 1/2L, Beurre, Confiture, Omelette, Charcuterie", price: "14.000" },
      { name: "Healthy", description: "Café au choix, Jus Détox, Yaourt nature avec Granola et fruits, Assiette de crudités, oeuf, Fromage Sicilien", price: "16.000" },
      { name: "Duo", description: "2 Cafés, 2 Jus, 2 viennoiseries/cakes, eau 1L, 2 Yaourts, Mlawi, Beurre, confiture, Fromages, Chocolat, Harissa, Charcuterie, 2 Omelettes, pancake chocolat", price: "26.000" },
      { name: "Tunisien", description: "Café au choix, Jus, Bssissa, Chamia, gouta, Beurre, Confiture, Miel, Mokil/Olja, Mlawi, Merguez, Fromages, Eau 1L, Harissa, Huile d’olive, Thon, petit pain", price: "27.000" },
      { name: "Golden Family", description: "2 Cafés, 2 Jus, Eau 1L, 2 Yaourts, 2 Salades de fruits, Mini crêpes, viennoiseries, Cakes, Mlawi, Petit pain, Charcuterie, Beurre, Confiture, Chocolat, Miel, Bssissa, Harissa, Huile d’olive, Fromages, 2 Mini sandivichs poulet, Brochette Poulet, Potatoes, Gauffre", price: "44.000" },
    ],
  },
];

export default menuData;
