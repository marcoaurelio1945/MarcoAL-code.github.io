
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, TrendingUp, Award, Truck, CreditCard, Headphones } from 'lucide-react';

// Dados de exemplo para produtos em destaque
const featuredProducts = [
  {
    id: 1,
    title: "Smartphone Premium XZ10",
    price: 1499.99,
    discount: 10,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200&auto=format&fit=crop",
    category: "Eletrônicos",
    isNew: true
  },
  {
    id: 3,
    title: "Notebook Ultrafino 15\" 16GB RAM",
    price: 2999.99,
    discount: 15,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop",
    category: "Eletrônicos",
    isNew: true
  },
  {
    id: 5,
    title: "Relógio Inteligente FitX",
    price: 599.99,
    discount: 20,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1604077107716-852e63a4c6fa?q=80&w=1200&auto=format&fit=crop",
    category: "Eletrônicos"
  },
  {
    id: 7,
    title: "Mochila Viagem Impermeável",
    price: 189.99,
    discount: 5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1200&auto=format&fit=crop",
    category: "Acessórios"
  }
];

const categories = [
  { name: "Eletrônicos", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=600&auto=format&fit=crop" },
  { name: "Roupas", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=600&auto=format&fit=crop" },
  { name: "Casa", image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop" },
  { name: "Esportes", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-0 md:h-[600px] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1920&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-32 relative z-10 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block bg-store-primary/20 text-store-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              Novas ofertas todos os dias
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Descubra produtos incríveis para o seu dia a dia
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Todos os produtos que você precisa com os melhores preços e qualidade garantida. Compre agora e receba em casa!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop" className="btn-store px-8 py-3">
                Comprar Agora
              </Link>
              <Link to="/categories" className="btn-outline px-8 py-3">
                Ver Categorias
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categorias */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Navegue por Categorias</h2>
            <Link to="/categories" className="text-store-primary hover:underline flex items-center gap-1">
              Ver todas
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={`/categories/${category.name.toLowerCase()}`} className="group">
                <div className="rounded-lg overflow-hidden relative h-64">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transform transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Explorar categoria</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Produtos em destaque */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Produtos em Destaque</h2>
            <Link to="/shop" className="text-store-primary hover:underline flex items-center gap-1">
              Ver todos os produtos
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Banner de promoção */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-store-primary to-store-accent rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-6">
                  Oferta por tempo limitado
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Até 50% de desconto nos produtos eletrônicos
                </h2>
                <p className="text-white/80 mb-8">
                  Aproveite os descontos especiais nos melhores produtos de tecnologia. Promoção válida enquanto durarem os estoques.
                </p>
                <Link to="/offers" className="bg-white text-store-primary hover:bg-white/90 transition-colors font-medium px-6 py-3 rounded-md inline-block self-start">
                  Ver Ofertas
                </Link>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1000&auto=format&fit=crop" 
                  alt="Promo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefícios */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Por que escolher a Marco Store?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-store-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-store-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Entrega Rápida</h3>
              <p className="text-muted-foreground">Entregamos em todo o Brasil em até 3 dias úteis para principais capitais.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-store-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-store-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Qualidade Garantida</h3>
              <p className="text-muted-foreground">Todos os produtos passam por rigorosos testes de qualidade antes do envio.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-store-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-store-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Pagamento Seguro</h3>
              <p className="text-muted-foreground">Diversas opções de pagamento com máxima segurança para suas compras.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-store-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="text-store-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Suporte 24/7</h3>
              <p className="text-muted-foreground">Nossa equipe está disponível todos os dias para atender suas dúvidas.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Receba nossas ofertas em primeira mão
              </h2>
              <p className="text-muted-foreground mb-8">
                Cadastre-se em nossa newsletter e fique por dentro das melhores promoções e novidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-1 max-w-md rounded-lg bg-background border-border px-4 py-3"
                />
                <button className="btn-store whitespace-nowrap px-6 py-3">
                  Cadastrar
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Ao se cadastrar, você concorda com nossa política de privacidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
