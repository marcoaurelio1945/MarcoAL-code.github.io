
import { ArrowUp, Gamepad } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gamer-darker py-12 border-t border-gamer-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Gamepad className="h-8 w-8 text-gamer-purple mr-2" />
            <span className="font-gaming font-bold text-xl text-white">Dev<span className="text-gamer-purple">Games</span></span>
          </div>
          
          <div className="flex items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} DevGames. Todos os direitos reservados.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-gamer-purple flex items-center justify-center hover:bg-gamer-purple/80 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
