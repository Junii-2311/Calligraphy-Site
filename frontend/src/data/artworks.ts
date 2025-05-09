import { Artwork } from '../types/artwork';

export const allArtworks: Artwork[] = Array.from({ length: 27 }, (_, index) => {
  const id = `art-${index + 1}`;
  const categories = ['traditional', 'modern', 'landscape', 'potrait']; // Updated categories
  return {
    id,
    title: `Artwork ${index + 1}`,
    description: `Description for artwork ${index + 1}`,
    imageUrl: `/src/assests/images/image-${index + 1}.jpg`,
    year: `${2020 + (index % 5)}`, // Example years cycling from 2020 to 2024
    category: categories[index % categories.length] // Assign categories cyclically
  };
});

export const featuredArtworks: Artwork[] = allArtworks.slice(0, 6);