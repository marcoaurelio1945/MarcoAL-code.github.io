
import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link: string;
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Cosmic Defenders",
      description: "Um jogo de aventura espacial com mecânicas de combate inovadoras e sistema de progressão de personagens.",
      imageSrc: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop",
      tags: ["Unity", "C#", "3D", "Multiplayer"],
      link: "#",
    },
    {
      id: 2,
      title: "Kingdom Realms",
      description: "RPG de mundo aberto com sistema de construção de bases e gerenciamento de recursos em um mundo medieval fantástico.",
      imageSrc: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1470&auto=format&fit=crop",
      tags: ["Unreal Engine", "C++", "Open World", "RPG"],
      link: "#",
    },
    {
      id: 3,
      title: "Neon Racers",
      description: "Jogo de corrida futurista com veículos personalizáveis e pistas dinâmicas que mudam a cada corrida.",
      imageSrc: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1471&auto=format&fit=crop",
      tags: ["Unity", "C#", "Racing", "Procedural"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gamer-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold text-white mb-4">
            <span className="text-gamer-purple">[</span> Meus Projetos <span className="text-gamer-purple">]</span>
          </h2>
          <div className="w-24 h-1 bg-gamer-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="gamer-card group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gamer-darker via-transparent to-transparent"></div>
                {activeProject === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gamer-purple/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.link} 
                      className="bg-gamer-purple hover:bg-gamer-purple/80 text-white p-3 rounded-full"
                      aria-label="Jogar"
                    >
                      <Play className="w-8 h-8" />
                    </a>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-gaming font-bold text-white mb-2 group-hover:text-gamer-purple transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="skill-badge"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center font-gaming text-gamer-purple hover:text-gamer-orange transition-colors"
                >
                  Ver Projeto <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
