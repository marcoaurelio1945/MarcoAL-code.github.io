
import { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Globe } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send the form data to a server
    console.log('Form submitted:', formData);
    toast.success('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-gamer-dark relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gamer-purple/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-gaming font-bold text-white mb-4">
            <span className="text-gamer-purple">//</span> Contato <span className="text-gamer-purple">//</span>
          </h2>
          <div className="w-24 h-1 bg-gamer-purple mx-auto"></div>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            Gostou do meu trabalho? Entre em contato para discutirmos seu projeto ou oportunidades de colaboração.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="gamer-card p-6">
              <h3 className="text-xl font-gaming text-white mb-6 flex items-center">
                <MessageSquare className="mr-2 text-gamer-orange" /> Vamos Conversar
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gamer-purple mr-3" />
                  <div>
                    <h4 className="font-gaming text-white text-sm">Email</h4>
                    <p className="text-white/70">contato@devgames.com.br</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-gamer-purple mr-3" />
                  <div>
                    <h4 className="font-gaming text-white text-sm">Website</h4>
                    <p className="text-white/70">www.devgames.com.br</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-gaming text-white mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gamer-darker flex items-center justify-center hover:bg-gamer-purple transition-colors duration-300">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gamer-darker flex items-center justify-center hover:bg-gamer-purple transition-colors duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="gamer-card p-6">
              <h3 className="text-xl font-gaming text-white mb-6">Envie uma Mensagem</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-gaming text-white/80 text-sm mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gamer-darker border border-gamer-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gamer-purple transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-gaming text-white/80 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gamer-darker border border-gamer-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gamer-purple transition-colors"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block font-gaming text-white/80 text-sm mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gamer-darker border border-gamer-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gamer-purple transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block font-gaming text-white/80 text-sm mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-gamer-darker border border-gamer-purple/30 rounded-md p-3 text-white focus:outline-none focus:border-gamer-purple transition-colors"
                />
              </div>
              
              <button type="submit" className="btn-gamer flex items-center justify-center w-full">
                <Send className="mr-2 w-5 h-5" /> Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
