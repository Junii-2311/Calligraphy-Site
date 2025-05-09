import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../store/cartStore';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Here we would typically redirect to a checkout page or process
    setTimeout(() => {
      clearCart();
      alert('Thank you for your order! This is a demo checkout.');
      setIsCheckingOut(false);
    }, 2000);
  };

  if (totalItems === 0) {
    return (
      <div className="pt-24 md:pt-32">
        <div className="container">
          <h1 className="page-title">Your Cart</h1>
          
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-primary-300" />
            </div>
            <h2 className="text-2xl font-display mb-4">Your cart is empty</h2>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop" className="btn btn-primary">
              Browse Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 md:pt-32">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>
        
        <div className="mb-6">
          <Link to="/shop" className="inline-flex items-center text-accent-700 hover:text-accent-800 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-100">
                    <th className="py-4 px-6 text-left">Product</th>
                    <th className="py-4 px-6 text-center">Quantity</th>
                    <th className="py-4 px-6 text-right">Price</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <motion.tr 
                      key={`${item.product.id}-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-primary-100"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded overflow-hidden mr-4">
                            <img 
                              src={item.product.imageUrl} 
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-primary-900">{item.product.name}</h3>
                            <p className="text-sm text-neutral-500">{item.product.shortDescription}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex justify-center">
                          <div className="flex border border-primary-300 rounded">
                            <button 
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="px-2 py-1 text-primary-800 hover:bg-primary-100 transition-colors disabled:opacity-50"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 1)}
                              className="w-10 text-center border-x border-primary-300"
                            />
                            <button 
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="px-2 py-1 text-primary-800 hover:bg-primary-100 transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-neutral-500 hover:text-accent-700 transition-colors"
                          aria-label={`Remove ${item.product.name} from cart`}
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-display mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-primary-200 pt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className={`w-full btn btn-primary ${isCheckingOut ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
              
              <div className="mt-6 text-sm text-neutral-500">
                <p>
                  Note: This is a demo site, no real transactions will be processed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;