
import { Code, Gamepad, Monitor, Trophy, Sparkles, Rocket } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      year: "2023 - Atual",
      position: "Lead Game Developer",
      company: "Indie Game Studio",
      description: "Liderando equipe no desenvolvimento de jogos multiplataforma usando Unity e Unreal Engine."
    },
    {
      year: "2020 - 2023",
      position: "Game Developer",
      company: "Tech Games Inc.",
      description: "Desenvolvi jogos mobile com foco em mecânicas inovadoras e otimização de performance."
    },
    {
      year: "2018 - 2020",
      position: "Programador de Jogos Jr.",
      company: "Virtual Adventures",
      description: "Trabalhei em equipe no desenvolvimento de jogos educacionais e simuladores."
    }
  ];

  const services = [
    {
      icon: <Gamepad className="w-8 h-8 text-gamer-purple" />,
      title: "Desenvolvimento de Jogos",
      description: "Criação de jogos completos com foco em jogabilidade inovadora e experiências únicas."
    },
    {
      icon: <Code className="w-8 h-8 text-gamer-purple" />,
      title: "Programação de Sistemas",
      description: "Implementação de sistemas complexos como físicas, IA, combate e economia em jogos."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gamer-purple" />,
      title: "Consultoria",
      description: "Análise e otimização de projetos de jogos existentes com foco em performance e experiência."
    },
    {
      icon: <Monitor className="w-8 h-8 text-gamer-purple" />,
      title: "Prototipagem",
      description: "Desenvolvimento rápido de protótipos jogáveis para validação de conceitos e mecânicas."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gamer-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold text-white mb-4">
            <span className="text-gamer-blue">_</span> Sobre Mim <span className="text-gamer-blue">_</span>
          </h2>
          <div className="w-24 h-1 bg-gamer-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-gaming text-white mb-6 flex items-center">
              <Trophy className="mr-2 text-gamer-orange" /> Minha História
            </h3>
            <div className="space-y-4 text-white/80">
              <p>Olá! Sou um desenvolvedor de jogos apaixonado com mais de 5 anos de experiência na indústria. Minha jornada começou com pequenos jogos indie e cresceu para projetos mais ambiciosos em estúdios estabelecidos.</p>
              <p>Especializado em Unity e Unreal Engine, tenho ampla experiência em C#, C++ e arquitetura de jogos. Meu foco é criar experiências interativas que combinam mecânicas inovadoras com narrativas envolventes.</p>
              <p>Acredito que os melhores jogos nascem da colaboração entre tecnologia e criatividade. Por isso, trabalho de perto com artistas, designers e escritores para transformar conceitos em jogos memoráveis.</p>
              <div className="pt-4">
                <a href="#contact" className="btn-gamer inline-flex items-center">
                  <Rocket className="mr-2 w-5 h-5" /> Trabalhe Comigo
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-gaming text-white mb-6">Experiência Profissional</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="gamer-card p-6 relative">
                  <span className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-gamer-blue flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <h4 className="font-gaming text-gamer-blue mb-1">{exp.year}</h4>
                  <h5 className="text-lg font-gaming text-white mb-1">{exp.position}</h5>
                  <p className="text-white/60 text-sm mb-2">{exp.company}</p>
                  <p className="text-white/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-gaming text-white mb-10 text-center">O Que Eu Faço</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="gamer-card p-6 flex flex-col items-center text-center group hover:border-gamer-purple transition-colors duration-300">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-gaming text-white mb-2">{service.title}</h4>
                <p className="text-white/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
