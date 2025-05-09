import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { allArtworks } from '../data/artworks';

type Category = 'all' | 'traditional' | 'modern' | 'landscape' | 'Potrait';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const filteredArtworks = activeCategory === 'all' 
    ? allArtworks 
    : allArtworks.filter(artwork => artwork.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index); // Set the index of the clicked image
    setIsOpen(true); // Open the lightbox
  };

  return (
    <>
      <div className="pt-24 md:pt-32">
        <div className="container">
          <h1 className="page-title">Art Gallery</h1>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <CategoryButton 
              active={activeCategory === 'all'} 
              onClick={() => setActiveCategory('all')}
            >
              All Works
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
              active={activeCategory === 'Potrait'} 
              onClick={() => setActiveCategory('Potrait')}
            >
              Potrait
            </CategoryButton>
          </div>
          
          {/* Gallery grid */}
          <div className="artwork-grid mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredArtworks.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="artwork-card"
                  onClick={() => handleOpenLightbox(index)}
                >
                  <img 
                    src={artwork.imageUrl} 
                    alt={artwork.title}
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="artwork-overlay">
                    <h3 className="text-white font-display text-xl">{artwork.title}</h3>
                    <p className="text-primary-100 text-sm">{artwork.description}</p>
                    <p className="text-accent-300 text-xs mt-2">{artwork.year}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {filteredArtworks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">No artworks found in this category.</p>
            </div>
          )}
        </div>
      </div>
      
      {isOpen && (
        <Lightbox
          slides={filteredArtworks.map((artwork, index) => ({
            src: artwork.imageUrl,
            title: `${artwork.title} - ${artwork.description} (${artwork.year})`,
            index: index // Ensure index alignment
          }))}
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex} // Updated to use the correct prop for initial slide
          onIndexChange={setPhotoIndex}
        />
      )}
    </>
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

export default Gallery;