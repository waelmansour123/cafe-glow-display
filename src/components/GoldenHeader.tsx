import heroLogo from "@/assets/golden-logo.png";
import { useState, useEffect } from "react";

const GoldenHeader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    // Preload the hero image
    const heroImg = new Image();
    heroImg.onload = () => setImageLoaded(true);
    heroImg.src = '/golden-resto-hero.jpg';
  }, []);

  return (
    <header className="relative overflow-hidden">
      {/* Background with loading state */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
        style={{
          backgroundImage: imageLoaded 
            ? "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/golden-resto-hero.jpg')"
            : "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.05)",
        }}
      />
      
      {/* Fallback background while loading */}
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-b from-amber-900 to-amber-700"
          aria-hidden="true"
        />
      )}

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center animate-enter">
          <img
            src={heroLogo}
            width={96}
            height={96}
            alt="Golden Coffee Resto logo"
            className={`mx-auto mb-6 rounded-full shadow-elegant transition-opacity duration-300 ${
              logoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="eager"
            onLoad={() => setLogoLoaded(true)}
            fetchPriority="high"
          />
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-primary drop-shadow-sm">
            Golden Coffee Resto Menu
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground !text-white">
            Elegant classics, golden moments. Fresh coffee, artisan bites, sweet delights.
          </p>
        </div>
      </div>
    </header>
  );
};

export default GoldenHeader;
