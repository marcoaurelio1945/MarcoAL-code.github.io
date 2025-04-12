
import { useState } from 'react';
import { ExternalLink, Crosshair, Shield, Lock } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link: string;
  icon: React.ReactNode;
};

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Secure Auth System",
      description: "Sistema de autenticação multifator com biometria e proteção contra ataques de força bruta.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop",
      tags: ["Node.js", "MongoDB", "JWT", "Biometria"],
      link: "#",
      icon: <Lock className="w-10 h-10 text-r6-blue" />,
    },
    {
      id: 2,
      title: "Tactical Dashboard",
      description: "Interface de monitoramento em tempo real para visualização de dados críticos e alertas de segurança.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      tags: ["React", "TypeScript", "WebSockets", "D3.js"],
      link: "#",
      icon: <Crosshair className="w-10 h-10 text-r6-red" />,
    },
    {
      id: 3,
      title: "Network Defense",
      description: "Framework para detecção e resposta a intrusões em redes corporativas com alertas em tempo real.",
      imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1434&auto=format&fit=crop",
      tags: ["Python", "Machine Learning", "Cybersecurity", "API"],
      link: "#",
      icon: <Shield className="w-10 h-10 text-r6-orange" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-r6-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-r6-blue"></div>
            <h2 className="text-3xl md:text-4xl font-tactical font-bold text-white mx-4">
              OPERAÇÕES CONCLUÍDAS
            </h2>
            <div className="h-px w-8 bg-r6-blue"></div>
          </div>
          <div className="tactical-line w-24 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="r6-card group"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-r6-darker via-transparent to-transparent"></div>
                {activeProject === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-r6-blue/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.link} 
                      className="bg-r6-blue hover:bg-r6-blue/80 text-white p-3 rounded-full"
                      aria-label="Ver projeto"
                    >
                      <Crosshair className="w-8 h-8" />
                    </a>
                  </div>
                )}

                {/* Tactical corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-r6-blue"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-r6-blue"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-r6-blue"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-r6-blue"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-tactical font-bold text-white mb-2 group-hover:text-r6-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 min-h-[80px]">
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
                  className="inline-flex items-center font-tactical text-r6-blue hover:text-r6-orange transition-colors"
                >
                  Ver Operação <ExternalLink className="ml-1 w-4 h-4" />
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
