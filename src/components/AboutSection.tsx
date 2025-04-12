import { Code, Shield, Monitor, Trophy, Target, Crosshair } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      year: "2023 - Atual",
      position: "Líder de Desenvolvimento",
      company: "Secure Solutions Inc.",
      description: "Liderando equipe no desenvolvimento de sistemas seguros e aplicações de alta performance."
    },
    {
      year: "2020 - 2023",
      position: "Desenvolvedor Full Stack",
      company: "Tactical Tech",
      description: "Desenvolvimento de sistemas web com foco em segurança e proteção de dados sensíveis."
    },
    {
      year: "2018 - 2020",
      position: "Analista de Segurança",
      company: "DefenseCode",
      description: "Implementação de protocolos de segurança e auditoria de código em aplicações críticas."
    }
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8 text-r6-blue" />,
      title: "Desenvolvimento Seguro",
      description: "Criação de aplicações com protocolos avançados de segurança para proteção contra vulnerabilidades."
    },
    {
      icon: <Code className="w-8 h-8 text-r6-blue" />,
      title: "Arquitetura de Software",
      description: "Design e implementação de arquiteturas robustas e escaláveis para aplicações críticas."
    },
    {
      icon: <Crosshair className="w-8 h-8 text-r6-blue" />,
      title: "Consultoria",
      description: "Análise e otimização de sistemas existentes com foco em segurança e performance."
    },
    {
      icon: <Monitor className="w-8 h-8 text-r6-blue" />,
      title: "Desenvolvimento Full Stack",
      description: "Implementação completa de soluções web e mobile com tecnologias modernas."
    },
  ];

  return (
    <section id="about" className="py-20 bg-r6-darker relative">
      <div className="absolute inset-0 hex-grid opacity-5"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-px w-8 bg-r6-red"></div>
            <h2 className="text-3xl md:text-4xl font-tactical font-bold text-white mx-4">
              INTEL DO OPERADOR
            </h2>
            <div className="h-px w-8 bg-r6-red"></div>
          </div>
          <div className="tactical-line w-24 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-tactical text-white mb-6 flex items-center">
              <Target className="mr-2 text-r6-orange" /> Meu Histórico
            </h3>
            <div className="space-y-4 text-white/80">
              <p>Olá! Sou Marco, um desenvolvedor de software especializado em soluções seguras e de alta performance. Minha jornada começou no desenvolvimento web e evoluiu para especialização em sistemas de segurança e aplicações críticas.</p>
              <p>Com mais de 5 anos de experiência em desenvolvimento full stack, tenho focado em criar sistemas robustos que resistem a ameaças modernas e ataques cibernéticos, sempre priorizando a proteção dos dados.</p>
              <p>Acredito que o melhor software combina segurança, usabilidade e performance. Por isso, trabalho de perto com especialistas em UX e segurança para entregar soluções completas e confiáveis.</p>
              <div className="pt-4">
                <a href="#contact" className="btn-r6 inline-flex items-center">
                  <Crosshair className="mr-2 w-5 h-5" /> Entre em Contato
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-tactical text-white mb-6">Operações Anteriores</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="r6-card p-6 relative">
                  <span className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-r6-blue flex items-center justify-center">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <h4 className="font-tactical text-r6-blue mb-1">{exp.year}</h4>
                  <h5 className="text-lg font-tactical text-white mb-1">{exp.position}</h5>
                  <p className="text-white/60 text-sm mb-2">{exp.company}</p>
                  <p className="text-white/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-tactical text-white mb-10 text-center">Especialidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="r6-card p-6 flex flex-col items-center text-center group hover:border-r6-blue transition-colors duration-300">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-tactical text-white mb-2">{service.title}</h4>
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
