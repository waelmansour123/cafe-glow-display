# Golden Cafe Menu - Code Documentation

This document explains the structure and functionality of the Golden Cafe menu application.

## 📁 Project Structure

```
cafe-glow-display/
├── public/                     # Static assets served directly
│   ├── favicon.ico            # Website favicon
│   ├── og-hero.jpg           # Hero image for social media sharing
│   ├── placeholder.svg       # Placeholder image
│   └── robots.txt           # SEO robots file
├── src/                      # Main source code
│   ├── assets/              # Images and media files
│   │   ├── golden-logo.png  # Cafe logo
│   │   └── categories/      # Category images (pizza.jpg, coffee.jpg, etc.)
│   ├── components/          # Reusable React components
│   │   ├── ui/             # Base UI components (buttons, cards, etc.)
│   │   ├── CategoryCard.tsx # Individual category display card
│   │   ├── CategoryModal.tsx# Modal for showing category details
│   │   ├── Footer.tsx      # Website footer
│   │   ├── GoldenHeader.tsx# Main header/hero section
│   │   └── MenuDisplay.tsx # (unused in current version)
│   ├── data/               # Application data
│   │   └── menu.ts         # Complete menu data structure
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx  # Mobile device detection
│   │   └── use-toast.ts    # Toast notification hook
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Common utility functions
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main homepage
│   │   └── NotFound.tsx    # 404 error page
│   ├── App.tsx             # Root application component
│   ├── index.css           # Global styles and design system
│   ├── main.tsx            # Application entry point
│   └── vite-env.d.ts       # TypeScript environment definitions
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── vite.config.ts          # Vite build tool configuration
└── tsconfig.json          # TypeScript configuration
```

## 🏗️ Architecture Overview

### **Frontend Framework: React 18 + TypeScript**
- **React 18**: Latest React version with concurrent features
- **TypeScript**: Type safety and better developer experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### **Key Technologies:**
- **React Router**: Client-side navigation
- **React Query**: State management and caching
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Tailwind CSS**: Styling framework

## 📋 File Explanations

### **Core Application Files**

#### `src/main.tsx` - Application Entry Point
- Renders the root React application
- Uses React 18's createRoot API
- Imports global CSS styles

#### `src/App.tsx` - Root Component
- Sets up global providers (React Query, Tooltips, Toast)
- Configures React Router with routes
- Provides application-wide context

#### `src/pages/Index.tsx` - Main Homepage
- Displays the complete menu interface
- Maps menu categories to visual cards
- Handles category selection and modal display
- Responsive design for mobile and desktop

### **Component Files**

#### `src/components/GoldenHeader.tsx` - Hero Section
- Displays cafe logo and branding
- Hero background image with overlay
- Responsive typography and spacing

#### `src/components/CategoryCard.tsx` - Menu Category Cards
- Interactive cards for each menu category
- Shows category image or fallback icon
- Hover effects and active states
- Accessibility features (ARIA labels)

#### `src/components/CategoryModal.tsx` - Category Detail Modal
- Full-screen modal showing menu items
- Parallax scrolling effect on header image
- Scrollable list of items with prices
- Elegant animations and transitions

#### `src/components/Footer.tsx` - Website Footer
- Contact information and hours
- Social media links
- Responsive grid layout

### **Data and Configuration**

#### `src/data/menu.ts` - Menu Data Structure
- TypeScript interfaces for type safety
- Complete menu with 25+ categories
- Items include name, price, and descriptions
- Organized by category (food, drinks, desserts)

#### `src/index.css` - Design System
- CSS custom properties for theming
- Light and dark theme variants
- Custom animations and effects
- Tailwind CSS integration

#### `tailwind.config.ts` - Styling Configuration
- Custom color palette (gold theme)
- Typography settings (Playfair Display + Inter)
- Responsive breakpoints
- Component-specific utilities

## 🎨 Design System

### **Color Palette**
- **Primary**: Gold (#B8860B) - Brand color
- **Background**: Cream (#FFFEF7) - Page background
- **Text**: Dark gray (#1A1A1A) - Main text
- **Muted**: Light gray (#6B7280) - Secondary text

### **Typography**
- **Display Font**: Playfair Display (elegant serif for headings)
- **Body Font**: Inter (clean sans-serif for content)

### **Layout**
- **Mobile-first**: Horizontal scrolling categories
- **Desktop**: Responsive grid layout
- **Container**: Centered with max-width constraints

## 🛠️ Key Features

### **1. Responsive Design**
- Mobile: Horizontal scrolling category cards
- Desktop: Grid layout with hover effects
- Smooth transitions between breakpoints

### **2. Interactive Elements**
- Category card hover effects with scaling
- Modal dialogs with parallax scrolling
- Animated underlines on links
- Toast notifications for feedback

### **3. Performance Optimizations**
- Lazy loading for images
- Memoized components and calculations
- Efficient re-rendering with React hooks
- Optimized build with Vite

### **4. Accessibility**
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast colors
- Semantic HTML structure

### **5. Menu Categories**
The application includes 25 comprehensive categories:

**Food Categories:**
- Pizza, Burgers, Salads, Pasta
- Tunisian specialties (Makloub, Brik, Panuzzo)
- Main dishes, Omelettes, Crepes, Pancakes

**Beverage Categories:**
- Coffee varieties (Regular, Nespresso, Specialty)
- Fresh juices, Smoothies, Milkshakes
- Hot chocolate, Tea, Detox drinks
- Cocktails, Mojitos, Soft drinks

**Desserts & Extras:**
- Ice cream, Desserts, Waffles
- Supplements, Special menus

## 🚀 Development Workflow

### **Starting the Application**
```bash
npm install    # Install dependencies
npm run dev    # Start development server (localhost:8080)
```

### **Building for Production**
```bash
npm run build  # Create production build
npm run preview # Preview production build
```

### **Code Quality**
```bash
npm run lint   # Check code quality with ESLint
```

## 📱 User Experience Flow

1. **Landing**: User sees hero section with cafe branding
2. **Browse**: User scrolls through category cards
3. **Select**: User clicks on a category of interest
4. **View Details**: Modal opens showing all items in category
5. **Navigate**: User can close modal and select other categories

## 🔧 Customization Points

### **Adding New Menu Items**
- Edit `src/data/menu.ts`
- Add items to existing categories or create new ones
- Include name, price, and optional description

### **Styling Changes**
- Modify CSS variables in `src/index.css`
- Update Tailwind config in `tailwind.config.ts`
- Add custom animations and effects

### **Adding New Features**
- Create new components in `src/components/`
- Add new pages in `src/pages/`
- Update routing in `src/App.tsx`

This documentation provides a comprehensive understanding of the Golden Cafe menu application structure and functionality.
