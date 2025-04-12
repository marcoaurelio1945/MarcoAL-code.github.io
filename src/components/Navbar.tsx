
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ShoppingCart, Search, User, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/shop" },
    { name: "Categorias", href: "/categories" },
    { name: "Ofertas", href: "/offers" },
    { name: "Contato", href: "/contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-white">Marco<span className="text-store-primary">Store</span></span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href}
              className="text-white/80 hover:text-store-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-store-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Search and Cart (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-white/80 hover:text-store-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/account" className="text-white/80 hover:text-store-primary transition-colors">
            <User className="w-5 h-5" />
          </Link>
          <Link to="/cart" className="text-white/80 hover:text-store-primary transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-store-primary text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/cart" className="text-white/80 relative mr-2">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-store-primary text-white text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button 
            className="text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-store-primary" />
            ) : (
              <Menu className="h-6 w-6 text-store-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/20 absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white/80 hover:text-store-primary py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex items-center gap-4">
              <button className="text-white/80 hover:text-store-primary transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                <span>Buscar</span>
              </button>
              <Link to="/account" className="text-white/80 hover:text-store-primary transition-colors flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Conta</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
