import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../store/cartStore';
import { ShoppingCart } from 'lucide-react';

type ProductCategory = 'all' | 'traditional' | 'modern' | 'landscape' | 'potrait';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const { addToCart } = useCart();

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeCategory);

  return (
    <div className="pt-24 md:pt-32">
      <div className="container">
        <h1 className="page-title">Shop Artworks</h1>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <CategoryButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All Products
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'traditional'} 
            onClick={() => setActiveCategory('traditional')}
          >
            Traditional
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'modern'} 
            onClick={() => setActiveCategory('modern')}
          >
            Modern
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'landscape'} 
            onClick={() => setActiveCategory('landscape')}
          >
            Landscape
          </CategoryButton>
          <CategoryButton 
            active={activeCategory === 'potrait'} 
            onClick={() => setActiveCategory('potrait')}
          >
            Potrait
          </CategoryButton>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Link to={`/shop/${product.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {product.availability === 'limited' && (
                      <span className="absolute top-4 right-4 bg-accent-600 text-white text-xs px-2 py-1 rounded">
                        Limited Edition
                      </span>
                    )}
                    {product.availability === 'sold_out' && (
                      <span className="absolute top-4 right-4 bg-neutral-800 text-white text-xs px-2 py-1 rounded">
                        Sold Out
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-4">
                  <Link to={`/shop/${product.id}`}>
                    <h3 className="text-lg font-display text-primary-900 mb-1 hover:text-accent-700 transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-neutral-500 text-sm mb-4">
                    {product.shortDescription}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-primary-900">
                      ${product.price.toFixed(2)}
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      disabled={product.availability === 'sold_out'}
                      className={`rounded-full p-2 transition-colors ${
                        product.availability === 'sold_out'
                          ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                          : 'bg-accent-600 text-white hover:bg-accent-700'
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface CategoryButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const CategoryButton = ({ active, onClick, children }: CategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full transition-colors ${
        active 
          ? 'bg-accent-600 text-white' 
          : 'bg-primary-200 text-primary-800 hover:bg-primary-300'
      }`}
    >
      {children}
    </button>
  );
};

export default Shop;