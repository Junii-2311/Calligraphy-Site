import { create } from 'zustand';
import { Product } from '../types/product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  
  addToCart: (product) => {
    set((state) => {
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );
      
      let newItems;
      
      if (existingIndex >= 0) {
        // Product exists in cart, update quantity
        newItems = [...state.items];
        newItems[existingIndex].quantity += 1;
      } else {
        // Product not in cart, add new item
        newItems = [...state.items, { product, quantity: 1 }];
      }
      
      const totalItems = calculateTotalItems(newItems);
      const totalPrice = calculateTotalPrice(newItems);
      
      return { items: newItems, totalItems, totalPrice };
    });
  },
  
  removeFromCart: (index) => {
    set((state) => {
      const newItems = state.items.filter((_, i) => i !== index);
      const totalItems = calculateTotalItems(newItems);
      const totalPrice = calculateTotalPrice(newItems);
      
      return { items: newItems, totalItems, totalPrice };
    });
  },
  
  updateQuantity: (index, quantity) => {
    set((state) => {
      if (quantity < 1) return state;
      
      const newItems = [...state.items];
      newItems[index].quantity = quantity;
      
      const totalItems = calculateTotalItems(newItems);
      const totalPrice = calculateTotalPrice(newItems);
      
      return { items: newItems, totalItems, totalPrice };
    });
  },
  
  clearCart: () => {
    set({ items: [], totalItems: 0, totalPrice: 0 });
  },
}));

// Helper functions
const calculateTotalItems = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
};