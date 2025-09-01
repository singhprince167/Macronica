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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            MACRONICA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm lg:text-base font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? "text-primary" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button
            asChild
            className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-300"
          >
            <Link to="/wholesale">Become a Partner</Link>
          </Button>
          <Button
            asChild
            className="bg-semolina text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-200"
          >
            <Link to="/contact">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t z-50 relative">
          <div className="px-4 pt-3 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? "text-primary" : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)} // ✅ closes menu on click
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <Button asChild variant="outline" className="w-full">
                <Link to="/wholesale" onClick={() => setIsOpen(false)}>
                  Become a Partner
                </Link>
              </Button>
              <Button
                asChild
                className="w-full bg-semolina text-black hover:bg-yellow-200"
              >
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
