import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <a href="/" className="text-2xl font-light tracking-widest">
            FASHION
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              MUJER
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              HOMBRE
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              NIÑOS
            </a>
            <a href="#" className="text-sm tracking-wide hover:text-accent transition-colors">
              SALE
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-accent relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
