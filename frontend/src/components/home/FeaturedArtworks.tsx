import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import { featuredArtworks } from '../../data/artworks';
import { ArrowRight } from 'lucide-react';

const FeaturedArtworks = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-3">Featured Artworks</h2>
            <p className="text-neutral-600 max-w-xl">
              A selection of my most celebrated calligraphy pieces, each telling a unique story through the art of handcrafted lettering.
            </p>
          </div>
          <Link
            to="/gallery"
            className="group flex items-center text-accent-700 font-medium mt-4 md:mt-0"
          >
            View All Works
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>

        <div className="artwork-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="artwork-card group"
              onClick={() => handleOpenLightbox(index)}
            >
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-80 object-cover group-hover:scale-105"
                loading="lazy"
              />
              <div className="artwork-overlay group-hover:opacity-100">
                <h3 className="text-white font-display text-xl">{artwork.title}</h3>
                <p className="text-primary-100 text-sm">{artwork.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={featuredArtworks.map(artwork => ({
          src: artwork.imageUrl,
          alt: artwork.title,
          title: artwork.title,
          description: artwork.description
        }))}
      />
    </section>
  );
};

export default FeaturedArtworks;