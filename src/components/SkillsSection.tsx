
import { useState } from 'react';
import { Code, Layers, Cpu, Joystick, Monitor, BrainCircuit } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: 'engine' | 'language' | 'tool' | 'art' | 'design' | 'soft';
};

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories: Category[] = [
    { id: 'all', name: 'Todas', icon: <Layers className="w-5 h-5" /> },
    { id: 'engine', name: 'Engines', icon: <Joystick className="w-5 h-5" /> },
    { id: 'language', name: 'Linguagens', icon: <Code className="w-5 h-5" /> },
    { id: 'tool', name: 'Ferramentas', icon: <Cpu className="w-5 h-5" /> },
    { id: 'design', name: 'Game Design', icon: <Monitor className="w-5 h-5" /> },
    { id: 'soft', name: 'Soft Skills', icon: <BrainCircuit className="w-5 h-5" /> },
  ];
  
  const skills: Skill[] = [
    { name: 'Unity', level: 95, category: 'engine' },
    { name: 'Unreal Engine', level: 85, category: 'engine' },
    { name: 'Godot', level: 75, category: 'engine' },
    { name: 'C#', level: 90, category: 'language' },
    { name: 'C++', level: 80, category: 'language' },
    { name: 'JavaScript', level: 85, category: 'language' },
    { name: 'Python', level: 70, category: 'language' },
    { name: 'Blender', level: 65, category: 'tool' },
    { name: 'Adobe Photoshop', level: 60, category: 'tool' },
    { name: 'GitHub', level: 85, category: 'tool' },
    { name: 'Level Design', level: 80, category: 'design' },
    { name: 'Balanceamento', level: 75, category: 'design' },
    { name: 'Narrativa', level: 70, category: 'design' },
    { name: 'Trabalho em Equipe', level: 90, category: 'soft' },
    { name: 'Resolução de Problemas', level: 85, category: 'soft' },
    { name: 'Comunicação', level: 80, category: 'soft' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gamer-dark relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gamer-dark"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gamer-purple via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold text-white mb-4">
            <span className="text-gamer-orange">&lt;</span> Habilidades <span className="text-gamer-orange">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gamer-orange mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-gaming transition-all ${
                activeCategory === category.id
                  ? 'bg-gamer-purple text-white'
                  : 'bg-gamer-darker text-white/70 hover:bg-gamer-gray'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="gamer-card p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-gaming text-white">{skill.name}</h3>
                <span className="text-sm font-gaming text-gamer-purple">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gamer-darker rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-gamer-blue to-gamer-purple animate-pulse-glow"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
