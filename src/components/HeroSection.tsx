
import { useEffect, useState } from 'react';
import { Gamepad2, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Desenvolvedor de Games';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-16">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gamer-darker opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gamer-purple/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gamer-darker to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-gamer-purple animate-float" />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-gaming font-bold text-white mb-4">
          <span className="animate-text-flicker">Dev Game Studio</span>
        </h1>
        
        <div className="relative h-10 mb-8">
          <h2 className="text-xl md:text-2xl font-gaming text-gamer-orange inline-block">
            {text}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h2>
        </div>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Transformando ideias em experiências interativas. Especializado em desenvolvimento de jogos inovadores e imersivos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-gamer">
            Ver Projetos
          </a>
          <a href="#contact" className="btn-gamer bg-gamer-dark border border-gamer-purple">
            Entre em Contato
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#projects" className="text-white/60 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
