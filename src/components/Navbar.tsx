
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Gamepad } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      isScrolled ? "bg-gamer-darker/90 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Gamepad className="h-8 w-8 text-gamer-purple" />
          <span className="font-gaming font-bold text-xl text-white">Dev<span className="text-gamer-purple">Games</span></span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-gaming text-white/80 hover:text-gamer-purple transition-colors pixelated-border"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gamer-purple" />
          ) : (
            <Menu className="h-6 w-6 text-gamer-purple" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gamer-dark/95 backdrop-blur-lg border-t border-gamer-purple/20 absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-gaming text-white/80 hover:text-gamer-purple py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
