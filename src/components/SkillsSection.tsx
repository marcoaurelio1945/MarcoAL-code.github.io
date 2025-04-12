
import { useState } from 'react';
import { Code, Database, Shield, Cpu, Terminal, BrainCircuit } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'security' | 'devops' | 'database' | 'soft';
};

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories: Category[] = [
    { id: 'all', name: 'Todas', icon: <Terminal className="w-5 h-5" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code className="w-5 h-5" /> },
    { id: 'backend', name: 'Backend', icon: <Cpu className="w-5 h-5" /> },
    { id: 'security', name: 'Segurança', icon: <Shield className="w-5 h-5" /> },
    { id: 'database', name: 'Banco de Dados', icon: <Database className="w-5 h-5" /> },
    { id: 'soft', name: 'Soft Skills', icon: <BrainCircuit className="w-5 h-5" /> },
  ];
  
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'C#', level: 70, category: 'backend' },
    { name: 'Java', level: 65, category: 'backend' },
    { name: 'Cybersecurity', level: 80, category: 'security' },
    { name: 'Pen Testing', level: 75, category: 'security' },
    { name: 'Encryption', level: 85, category: 'security' },
    { name: 'Secure Coding', level: 90, category: 'security' },
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'PostgreSQL', level: 75, category: 'database' },
    { name: 'MySQL', level: 85, category: 'database' },
    { name: 'Redis', level: 70, category: 'database' },
    { name: 'Trabalho em Equipe', level: 90, category: 'soft' },
    { name: 'Comunicação', level: 85, category: 'soft' },
    { name: 'Resolução de Problemas', level: 95, category: 'soft' },
    { name: 'Gestão de Crise', level: 80, category: 'soft' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-r6-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-r6-dark"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-r6-blue via-transparent to-transparent"></div>
      </div>
      
      {/* Tactical grid lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="h-full w-px bg-r6-blue/5 absolute left-1/4"></div>
        <div className="h-full w-px bg-r6-blue/5 absolute left-1/2"></div>
        <div className="h-full w-px bg-r6-blue/5 absolute left-3/4"></div>
        <div className="h-px w-full bg-r6-blue/5 absolute top-1/4"></div>
        <div className="h-px w-full bg-r6-blue/5 absolute top-1/2"></div>
        <div className="h-px w-full bg-r6-blue/5 absolute top-3/4"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-r6-orange"></div>
            <h2 className="text-3xl md:text-4xl font-tactical font-bold text-white mx-4">
              ARSENAL DE HABILIDADES
            </h2>
            <div className="h-px w-8 bg-r6-orange"></div>
          </div>
          <div className="tactical-line w-24 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-tactical transition-all ${
                activeCategory === category.id
                  ? 'bg-r6-blue text-white'
                  : 'bg-r6-darker text-white/70 hover:bg-r6-gray'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="r6-card p-4 relative">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-tactical text-white">{skill.name}</h3>
                <span className="text-sm font-tactical text-r6-blue">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-r6-darker rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-r6-blue to-r6-orange animate-pulse-glow"
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
