const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-primary">Golden Cafe</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            123 Golden Avenue, Downtown • Open daily 8:00 – 23:00
          </p>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Phone: +216 12 345 678</li>
            <li>Email: hello@goldencafe.tn</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Follow us</h4>
          <nav className="mt-2 flex gap-4 text-sm">
            <a href="#" aria-label="Instagram" className="hover:underline story-link">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:underline story-link">Facebook</a>
            <a href="#" aria-label="TikTok" className="hover:underline story-link">TikTok</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
