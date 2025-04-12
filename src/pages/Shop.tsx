
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

// Dados de exemplo para produtos
const sampleProducts = [
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
    id: 2,
    title: "Fones de Ouvido Bluetooth Noise Cancel Pro",
    price: 399.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1606748862176-dc22b4abc260?q=80&w=1200&auto=format&fit=crop",
    category: "Eletrônicos"
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
    id: 4,
    title: "Câmera DSLR Profissional",
    price: 1899.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505739998589-00fc191ce01d?q=80&w=1200&auto=format&fit=crop",
    category: "Eletrônicos"
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
    id: 6,
    title: "Tênis Esportivo Ultra Confort",
    price: 249.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    category: "Esportes"
  },
  {
    id: 7,
    title: "Mochila Viagem Impermeável",
    price: 189.99,
    discount: 5,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1200&auto=format&fit=crop",
    category: "Acessórios"
  },
  {
    id: 8,
    title: "Cafeteira Elétrica Programável",
    price: 159.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1570942872213-1242607a35eb?q=80&w=1200&auto=format&fit=crop",
    category: "Casa"
  }
];

const Shop = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const categories = ["Eletrônicos", "Roupas", "Casa", "Esportes", "Acessórios"];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Loja</h1>
            <p className="text-muted-foreground">Encontre os melhores produtos para você</p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filtros - Desktop */}
            <div className="hidden lg:block w-64 space-y-8">
              <div>
                <h3 className="font-medium text-lg mb-4">Categorias</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div key={cat} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`cat-${cat}`} 
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                      />
                      <label htmlFor={`cat-${cat}`} className="text-sm">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Preço</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input 
                      type="number" 
                      placeholder="Min" 
                      className="w-full rounded bg-card border-border px-3 py-2 text-sm"
                    />
                    <input 
                      type="number" 
                      placeholder="Max" 
                      className="w-full rounded bg-card border-border px-3 py-2 text-sm"
                    />
                  </div>
                  <button className="w-full btn-outline py-2">Aplicar</button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Avaliação</h3>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`rating-${rating}`} 
                        className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                      />
                      <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                        {Array(rating).fill(0).map((_, i) => (
                          <Star key={i} size={14} className="text-store-warning fill-store-warning" />
                        ))}
                        {Array(5 - rating).fill(0).map((_, i) => (
                          <Star key={i} size={14} className="text-muted-foreground" />
                        ))}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-4">Ofertas</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="discount" 
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                    />
                    <label htmlFor="discount" className="text-sm">Em promoção</label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="new" 
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                    />
                    <label htmlFor="new" className="text-sm">Novidades</label>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Conteúdo principal */}
            <div className="flex-1">
              {/* Barra de pesquisa e filtros */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div className="w-full md:w-auto relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  <input 
                    type="text" 
                    placeholder="Pesquisar produtos..." 
                    className="w-full rounded-lg bg-card border-border pl-10 pr-4 py-2"
                  />
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <button 
                    className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border"
                    onClick={() => setFilterOpen(!filterOpen)}
                  >
                    <Filter size={18} />
                    <span>Filtros</span>
                    <ChevronDown size={16} className={`transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                    <SlidersHorizontal size={18} />
                    <select className="bg-transparent border-none focus:outline-none">
                      <option value="relevance">Relevância</option>
                      <option value="price-asc">Menor preço</option>
                      <option value="price-desc">Maior preço</option>
                      <option value="rating">Mais avaliados</option>
                      <option value="newest">Mais recentes</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Filtros móveis */}
              {filterOpen && (
                <div className="lg:hidden bg-card rounded-lg p-4 mb-6 divide-y divide-border">
                  <div className="py-4">
                    <h3 className="font-medium text-lg mb-4">Categorias</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((cat) => (
                        <div key={cat} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={`mob-cat-${cat}`} 
                            className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                          />
                          <label htmlFor={`mob-cat-${cat}`} className="text-sm">{cat}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="py-4">
                    <h3 className="font-medium text-lg mb-4">Preço</h3>
                    <div className="flex gap-4">
                      <input 
                        type="number" 
                        placeholder="Min" 
                        className="w-full rounded bg-background border-border px-3 py-2 text-sm"
                      />
                      <input 
                        type="number" 
                        placeholder="Max" 
                        className="w-full rounded bg-background border-border px-3 py-2 text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="py-4">
                    <h3 className="font-medium text-lg mb-4">Mais Filtros</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="mob-discount" 
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                        />
                        <label htmlFor="mob-discount" className="text-sm">Em promoção</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="mob-new" 
                          className="mr-2 h-4 w-4 rounded border-gray-300 text-store-primary focus:ring-store-primary"
                        />
                        <label htmlFor="mob-new" className="text-sm">Novidades</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <button className="px-4 py-2 text-sm text-muted-foreground">Limpar filtros</button>
                    <button className="btn-store py-2 px-4">Aplicar</button>
                  </div>
                </div>
              )}
              
              {/* Lista de produtos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              {/* Paginação */}
              <div className="mt-10 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                    &lt;
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-store-primary text-white flex items-center justify-center">
                    1
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                    2
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                    10
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center">
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
