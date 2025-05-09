export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  year: string;
  category: 'traditional' | 'modern' | 'abstract' | 'commissioned';
}