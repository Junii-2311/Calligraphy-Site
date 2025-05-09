import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../store/cartStore';
import NotFound from './NotFound';

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return <NotFound />;
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="pt-24 md:pt-32">
      <div className="container">
        <div className="mb-6">
          <Link to="/shop" className="inline-flex items-center text-accent-700 hover:text-accent-800 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-display mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <span className="text-2xl font-medium text-primary-900">
                ${product.price.toFixed(2)}
              </span>
              {product.availability === 'limited' && (
                <span className="ml-4 bg-accent-100 text-accent-800 text-sm px-3 py-1 rounded-full">
                  Limited Edition
                </span>
              )}
              {product.availability === 'sold_out' && (
                <span className="ml-4 bg-neutral-200 text-neutral-700 text-sm px-3 py-1 rounded-full">
                  Sold Out
                </span>
              )}
            </div>
            
            <p className="text-neutral-700 mb-8">
              {product.description}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Product Details</h3>
              <ul className="text-neutral-700 space-y-2">
                <li><span className="font-medium">Dimensions:</span> {product.dimensions}</li>
                <li><span className="font-medium">Materials:</span> {product.materials}</li>
                <li><span className="font-medium">Created:</span> {product.year}</li>
                {product.edition && (
                  <li><span className="font-medium">Edition:</span> {product.edition}</li>
                )}
              </ul>
            </div>
            
            {product.availability !== 'sold_out' && (
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <label htmlFor="quantity" className="mr-4 font-medium">
                    Quantity:
                  </label>
                  <div className="flex border border-primary-300 rounded">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-1 text-primary-800 hover:bg-primary-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-12 text-center border-x border-primary-300"
                    />
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-1 text-primary-800 hover:bg-primary-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="w-full btn btn-primary mb-3"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            )}
            
            <div className="bg-primary-50 p-4 rounded-lg">
              <div className="flex items-start">
                <Info size={20} className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-primary-900 mb-1">Shipping Information</h4>
                  <p className="text-sm text-primary-700">
                    All artworks are carefully packaged and shipped within 3-5 business days. 
                    Original pieces include a certificate of authenticity.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Related products */}
        <div className="mb-16">
          <h2 className="text-2xl font-display mb-8">You May Also Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <Link to={`/shop/${relatedProduct.id}`}>
                    <img 
                      src={relatedProduct.imageUrl} 
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  
                  <div className="p-4">
                    <Link to={`/shop/${relatedProduct.id}`}>
                      <h3 className="text-md font-medium text-primary-900 mb-1 hover:text-accent-700 transition-colors">
                        {relatedProduct.name}
                      </h3>
                    </Link>
                    <p className="text-primary-900 font-medium">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;