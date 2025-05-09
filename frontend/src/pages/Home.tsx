import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import FeaturedArtworks from '../components/home/FeaturedArtworks';
import Testimonials from '../components/home/Testimonials';
import ArtistStatement from '../components/home/ArtistStatement';

const Home = () => {
  const images = [
    '/src/assests/images/image-19.jpg',
    '/src/assests/images/image-25.jpg',
    '/src/assests/images/image-27.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen-90">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/70 to-primary-950/40"></div>
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-white font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Artistry in Every Stroke
            </h1>
            <p className="text-primary-100 text-lg md:text-xl mb-8 max-w-lg">
              Explore the elegant world of calligraphy through the artistic vision of Rafat Hussain, 
              where tradition meets contemporary expression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery" className="btn btn-primary">
                Explore Gallery
              </Link>
              <Link to="/shop" className="btn btn-outline border-white text-white hover:bg-white/10">
                Shop Artworks
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Artworks */}
      <FeaturedArtworks />

      {/* Artist Statement */}
      <ArtistStatement />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="bg-primary-900 text-white">
        <div className="container py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-6">Ready to Own a Piece of Art?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Browse our collection of original calligraphy pieces or commission a custom artwork that tells your unique story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop" className="btn btn-primary">
              Shop Collection
            </Link>
            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white/10">
              Request Commission
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;