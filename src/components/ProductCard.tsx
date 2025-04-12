
import { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  discount?: number;
  rating: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard = ({ id, title, price, discount, rating, image, category, isNew }: ProductProps) => {
  const [isWishlist, setIsWishlist] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlist(!isWishlist);
  };

  const discountedPrice = discount ? price - (price * discount / 100) : price;
  
  return (
    <div className="store-card group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={title} 
            className="w-full h-60 object-cover transform transition-transform group-hover:scale-105"
          />
        </Link>
        
        <button 
          onClick={toggleWishlist}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white/60"
        >
          <Heart 
            size={18} 
            className={`${isWishlist ? 'fill-store-error text-store-error' : 'text-white'}`} 
          />
        </button>
        
        {isNew && (
          <span className="absolute top-3 left-3 py-1 px-2 bg-store-accent text-white text-xs font-medium rounded">
            Novo
          </span>
        )}
        
        {discount && (
          <span className="absolute bottom-3 left-3 py-1 px-2 bg-store-error text-white text-xs font-medium rounded">
            -{discount}%
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-card/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform">
          <button className="btn-store w-full flex items-center justify-center gap-2 py-2">
            <ShoppingCart size={16} />
            <span>Adicionar ao Carrinho</span>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <Link to={`/category/${category}`}>
          <span className="text-xs text-store-accent hover:underline">{category}</span>
        </Link>
        
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg mt-1 mb-2 hover:text-store-primary transition-colors line-clamp-1">{title}</h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {Array(5).fill(0).map((_, index) => (
              <Star 
                key={index} 
                size={14} 
                className={`${index < Math.floor(rating) ? 'text-store-warning fill-store-warning' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({rating.toFixed(1)})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-store-primary">R$ {discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">R$ {price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-store-primary">R$ {price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
