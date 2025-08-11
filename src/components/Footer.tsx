const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-primary">Golden Cafe</h3>
          <p className="mt-2 text-sm text-muted-foreground" onClick={() => window.open("https://www.google.com/maps/place/Golden+café+resto/@36.7163975,10.3695246,19.45z/data=!4m6!3m5!1s0x12fd4edf9c1ab75b:0x89d1b7488be0ab64!8m2!3d36.716405!4d10.3696376!16s%2Fg%2F12ml2n6m4?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D", "_blank")}>
            rue 1 October, N22, Hammam-Lif 1164
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
            <a href="#" aria-label="Instagram" className="hover:underline story-link" onClick={() => window.open("https://www.instagram.com/golden_coffee_lounge/profilecard/?igsh=MXZzZTE2aTZ0b3Bxbw==", "_blank")}>Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:underline story-link" onClick={() => window.open("https://www.facebook.com/share/1CpvyZqVGw/", "_blank")}>Facebook</a>
            <a href="#" aria-label="TikTok" className="hover:underline story-link" onClick={() => window.open("https://www.tiktok.com/@goldencoffe.hamemchatt?_t=ZM-8ymkTj1ZUTY&_r=1", "_blank")}>TikTok</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
