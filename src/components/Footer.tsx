
import { ArrowUp, Shield, Map } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-fortnite-darker py-12 border-t border-fortnite-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-fortnite-blue mr-2" />
            <span className="font-gaming font-bold text-xl text-white">Fort<span className="text-fortnite-yellow">Dev</span></span>
          </div>
          
          <div className="flex items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} FortDev. Todos os direitos reservados.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-fortnite-blue flex items-center justify-center hover:bg-fortnite-blue/80 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-fortnite-blue/20 text-center">
          <p className="text-xs text-white/50">
            Este site é um projeto de portfólio e não tem afiliação oficial com Epic Games ou Fortnite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
