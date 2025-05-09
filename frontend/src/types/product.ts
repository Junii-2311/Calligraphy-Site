export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Traditional' | 'Modern' | 'Landscape' | 'Potrait';
  availability: 'in_stock' | 'limited' | 'sold_out';
  dimensions: string;
  materials: string;
  year: string;
  edition?: string;
}