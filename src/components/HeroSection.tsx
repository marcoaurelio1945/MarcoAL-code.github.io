import { useEffect, useState } from 'react';
import { ChevronDown, Shield, Target, Eye, Lock } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Developer | Security Expert';
  const [cursorVisible, setCursorVisible] = useState(true);
  const [scanLine, setScanLine] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev < 100 ? prev + 1 : 0));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-r6-darker opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-r6-blue/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-r6-darker to-transparent"></div>
        
        {/* Tactical scan line effect */}
        <div 
          className="absolute top-0 left-0 w-full h-2 bg-r6-blue/30"
          style={{ transform: `translateY(${scanLine}vh)` }}
        ></div>
        
        {/* Grid overlay */}
        <div className="absolute top-0 left-0 w-full h-full hex-grid opacity-10"></div>
      </div>
      
      {/* Drone Animation */}
      <div className="absolute top-1/4 right-10 opacity-30 pointer-events-none">
        <div className="w-16 h-16 bg-r6-blue rounded-full flex items-center justify-center animate-drone-float">
          <Eye className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="flex items-center justify-center mb-6 gap-4">
          <Shield className="w-10 h-10 text-r6-blue" />
          <Target className="w-14 h-14 text-r6-red animate-pulse-glow" />
          <Lock className="w-10 h-10 text-r6-orange" />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-tactical font-bold text-white mb-4">
          <span className="animate-breach-flash">MARCO</span> <span className="text-r6-orange">SIX</span> <span className="text-r6-blue">DEV</span>
        </h1>
        
        <div className="relative h-10 mb-8">
          <h2 className="text-xl md:text-2xl font-tactical text-r6-light inline-block">
            {text}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h2>
        </div>
        
        <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
          Desenvolvendo <span className="text-r6-orange">soluções táticas</span> e código de alta segurança. Especializado em criação de software com a precisão de um <span className="text-r6-blue">operador de elite</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn-r6">
            Ver Projetos
          </a>
          <a href="#contact" className="btn-r6-secondary">
            Entre em Contato
          </a>
        </div>
        
        <div className="mt-16">
          <div className="w-16 h-16 mx-auto border-2 border-r6-blue rounded-md relative">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Target className="w-10 h-10 text-r6-blue" />
            </div>
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-r6-blue"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-r6-blue"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-r6-blue"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-r6-blue"></div>
          </div>
          <p className="text-r6-blue font-tactical text-sm mt-2">OBJECTIVE: PORTFOLIO</p>
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
