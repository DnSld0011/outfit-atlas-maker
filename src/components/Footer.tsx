import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-light text-lg mb-4 tracking-wide">FASHION</h3>
            <p className="text-sm text-muted-foreground">
              Tu destino para la moda contemporánea y tendencias actuales.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-light text-sm mb-4 tracking-wide">COMPRAR</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Mujer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Hombre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Niños
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-light text-sm mb-4 tracking-wide">AYUDA</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Servicio al cliente
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Mi cuenta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Encuentra una tienda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Guía de tallas
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-light text-sm mb-4 tracking-wide">NEWSLETTER</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Suscríbete para recibir ofertas exclusivas
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 text-sm border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 FASHION. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
