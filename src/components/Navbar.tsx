import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import categoryWomen from "@/assets/category-women.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryKids from "@/assets/category-kids.jpg";
import categorySale from "@/assets/category-sale.jpg";

const categories = [
  {
    name: "MUJER",
    image: categoryWomen,
    alt: "Colección mujer",
    links: [
      { label: "Nueva Colección", href: "#" },
      { label: "Vestidos", href: "#" },
      { label: "Pantalones", href: "#" },
      { label: "Accesorios", href: "#" },
    ],
  },
  {
    name: "HOMBRE",
    image: categoryMen,
    alt: "Colección hombre",
    links: [
      { label: "Nueva Colección", href: "#" },
      { label: "Camisas", href: "#" },
      { label: "Pantalones", href: "#" },
      { label: "Accesorios", href: "#" },
    ],
  },
  {
    name: "NIÑOS",
    image: categoryKids,
    alt: "Colección niños",
    links: [
      { label: "Nueva Colección", href: "#" },
      { label: "Niñas", href: "#" },
      { label: "Niños", href: "#" },
      { label: "Bebés", href: "#" },
    ],
  },
  {
    name: "SALE",
    image: categorySale,
    alt: "Ofertas y descuentos",
    links: [
      { label: "Mujer Rebajas", href: "#" },
      { label: "Hombre Rebajas", href: "#" },
      { label: "Niños Rebajas", href: "#" },
      { label: "Últimas Unidades", href: "#" },
    ],
  },
];

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
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {categories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger className="text-sm tracking-wide bg-transparent hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    {category.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] grid-cols-[1fr_250px]">
                      <div className="grid gap-2">
                        <h4 className="text-lg font-medium mb-2">{category.name}</h4>
                        <div className="grid gap-1">
                          {category.links.map((link) => (
                            <NavigationMenuLink
                              key={link.label}
                              href={link.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">
                                {link.label}
                              </div>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      <div className="relative h-full overflow-hidden rounded-md">
                        <img
                          src={category.image}
                          alt={category.alt}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

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
