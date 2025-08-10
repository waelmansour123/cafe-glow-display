// Import the cafe logo image
import heroLogo from "@/assets/golden-logo.png";

/**
 * GoldenHeader Component
 * 
 * The main header/hero section of the website
 * Features:
 * - Background hero image with overlay
 * - Cafe logo with elegant styling
 * - Main title and subtitle
 * - Responsive design for mobile and desktop
 */
const GoldenHeader = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background hero image with overlay effect */}
      <div
        className="absolute inset-0 opacity-70"
        aria-hidden="true" // Hidden from screen readers as it's decorative
        style={{
          backgroundImage: "url('/og-hero.jpg')", // Hero background image
          backgroundSize: "cover",                // Cover entire area
          backgroundPosition: "center",           // Center the image
          filter: "saturate(1.1)",               // Slightly increase saturation
        }}
      />
      
      {/* Main header content */}
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center animate-enter">
          {/* Cafe logo */}
          <img
            src={heroLogo}
            width={96}
            height={96}
            alt="Golden Cafe logo – elegant golden coffee cup"
            className="mx-auto mb-6 rounded-full shadow-elegant"
            loading="lazy" // Lazy load for performance
          />
          
          {/* Main heading */}
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-primary drop-shadow-sm">
            Golden Cafe Menu
          </h1>
          
          {/* Subtitle/description */}
          <p className="mt-3 text-lg md:text-xl text-muted-foreground">
            Elegant classics, golden moments. Fresh coffee, artisan bites, sweet delights.
          </p>
        </div>
      </div>
    </header>
  );
};

export default GoldenHeader;
