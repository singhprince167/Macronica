import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/wholesale", label: "Wholesale" },
    // { href: "/recipes", label: "Recipes" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-semolina bg-clip-text text-transparent">
            MACRONICA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Button asChild className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-sm">
  <Link to="/wholesale">
    Become a Partner
  </Link>
</Button>

<Button asChild className="group relative inline-block bg-semolina text-black font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-yellow-200">
  <Link to="/contact">
    Order Now
  </Link>
</Button>

        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/wholesale" onClick={() => setIsOpen(false)}>
                  Become a Partner
                </Link>
              </Button>
              <Button className="w-full bg-gradient-hero hover:opacity-90" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Order Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;