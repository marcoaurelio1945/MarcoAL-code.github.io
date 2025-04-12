
import { ArrowUp, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-card py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="font-bold text-xl text-white">Marco<span className="text-store-primary">Store</span></span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Oferecemos os melhores produtos para você. Qualidade garantida e preços competitivos para satisfazer suas necessidades.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-store-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-store-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-store-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-store-primary transition-colors">Home</Link></li>
              <li><Link to="/shop" className="text-muted-foreground hover:text-store-primary transition-colors">Produtos</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-store-primary transition-colors">Categorias</Link></li>
              <li><Link to="/offers" className="text-muted-foreground hover:text-store-primary transition-colors">Ofertas</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-store-primary transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li><Link to="/categories/electronics" className="text-muted-foreground hover:text-store-primary transition-colors">Eletrônicos</Link></li>
              <li><Link to="/categories/clothing" className="text-muted-foreground hover:text-store-primary transition-colors">Roupas</Link></li>
              <li><Link to="/categories/home" className="text-muted-foreground hover:text-store-primary transition-colors">Casa e Decoração</Link></li>
              <li><Link to="/categories/sports" className="text-muted-foreground hover:text-store-primary transition-colors">Esportes</Link></li>
              <li><Link to="/categories/books" className="text-muted-foreground hover:text-store-primary transition-colors">Livros</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-store-primary" />
                <span className="text-muted-foreground">Rua Exemplo, 123, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-store-primary" />
                <a href="mailto:contato@marcostore.com" className="text-muted-foreground hover:text-store-primary transition-colors">contato@marcostore.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-store-primary" />
                <a href="tel:+551198765432" className="text-muted-foreground hover:text-store-primary transition-colors">(11) 98765-4321</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Marco Store. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-4">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-store-primary transition-colors">Termos de Uso</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-store-primary transition-colors">Privacidade</Link>
            <Link to="/shipping" className="text-sm text-muted-foreground hover:text-store-primary transition-colors">Envio</Link>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-store-primary flex items-center justify-center hover:bg-store-primary/80 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
