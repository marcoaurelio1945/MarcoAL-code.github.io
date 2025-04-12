
import { useEffect, useState } from 'react';
import { Gamepad2, ChevronDown, Sword, Trophy, Map } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Battle Royale Developer';
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
        <div className="absolute top-0 left-0 w-full h-full bg-fortnite-darker opacity-70"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-fortnite-blue/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-fortnite-darker to-transparent"></div>
      </div>
      
      {/* Battle Bus Animation */}
      <div className="absolute top-20 left-0 w-full overflow-hidden">
        <div className="w-20 h-20 bg-fortnite-blue rounded-lg p-1 animate-battle-bus">
          <div className="w-full h-full bg-fortnite-yellow rounded-lg flex items-center justify-center">
            <span className="text-xs font-pixel text-fortnite-dark">Battle Bus</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="flex items-center justify-center mb-6 gap-4">
          <Trophy className="w-10 h-10 text-fortnite-yellow" />
          <Gamepad2 className="w-16 h-16 text-fortnite-blue animate-float" />
          <Sword className="w-10 h-10 text-fortnite-turquoise" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-gaming font-bold text-white mb-4">
          <span className="animate-text-flicker">Fortnite</span> <span className="text-fortnite-yellow">Dev</span>
        </h1>
        
        <div className="relative h-10 mb-8">
          <h2 className="text-xl md:text-2xl font-gaming text-fortnite-turquoise inline-block">
            {text}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h2>
        </div>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Construindo <span className="text-fortnite-yellow">batalhas épicas</span> e experiências interativas. Especializado em desenvolvimento de jogos inovadores com a sensação de <span className="text-fortnite-blue">Victory Royale</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-fortnite">
            Ver Projetos
          </a>
          <a href="#contact" className="btn-fortnite-secondary">
            Entre em Contato
          </a>
        </div>
        
        <div className="mt-16 animate-llama-bounce">
          <Map className="w-16 h-16 mx-auto text-fortnite-purple" />
          <p className="text-fortnite-purple font-gaming text-sm mt-2">Drop Zone: Portfolio</p>
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
