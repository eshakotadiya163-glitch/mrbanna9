import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/eye-logo.jpg";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Social", href: "/#social" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="MrBaNNa" className="h-9 w-9 rounded-full" width={36} height={36} />
          <span className="font-display font-bold text-lg text-gradient-gold">MrBaNNa</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 card-glass rounded-full px-2 py-1">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://t.me/OfficialMrBaNNa" target="_blank" rel="noreferrer">
            <Button variant="gold">Join Telegram</Button>
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden card-glass mx-4 rounded-2xl p-4 flex flex-col gap-2">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-accent/10">
              {n.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-border">
            <a href="https://t.me/OfficialMrBaNNa" target="_blank" rel="noreferrer" className="flex-1 w-full">
              <Button variant="gold" className="w-full">Join Telegram</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
