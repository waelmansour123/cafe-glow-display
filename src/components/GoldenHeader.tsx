import heroLogo from "@/assets/golden-logo.png";

const GoldenHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/golden-resto-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(1.05)",
        }}
      />
      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center animate-enter">
          <img
            src={heroLogo}
            width={96}
            height={96}
            alt="Golden Coffee Resto logo"
            className="mx-auto mb-6 rounded-full shadow-elegant"
            loading="lazy"
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
