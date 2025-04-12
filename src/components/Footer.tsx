
import { ArrowUp, Shield, Map, Lock } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-r6-darker py-12 border-t border-r6-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-r6-blue mr-2" />
            <span className="font-tactical font-bold text-xl text-white">MARCO<span className="text-r6-orange">DEV</span></span>
          </div>
          
          <div className="flex items-center">
            <p className="text-white/70 text-sm">
              &copy; {new Date().getFullYear()} Marco Dev. Todos os direitos reservados.
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 rounded-full bg-r6-blue flex items-center justify-center hover:bg-r6-blue/80 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-r6-blue/20 text-center flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="flex items-center text-white/50 text-xs">
            <Lock className="w-4 h-4 mr-1" />
            <p>Conexão segura</p>
          </div>
          <p className="text-xs text-white/50">
            Este site é um projeto de portfólio e não tem afiliação oficial com Tom Clancy's Rainbow Six Siege ou Ubisoft.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
