import { motion } from 'framer-motion';

const ArtistStatement = () => {
  return (
    <section className="section bg-primary-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6">The Art of Calligraphy</h2>
            <p className="text-neutral-700 mb-4">
              As a calligrapher, I believe in the power of handwritten words to convey emotions, preserve traditions, and create timeless art that speaks to the soul.
            </p>
            <p className="text-neutral-700 mb-4">
              My journey began over 15 years ago when I discovered the meditative quality of calligraphy. Since then, I've dedicated myself to mastering various scripts and styles, from classical to contemporary.
            </p>
            <p className="text-neutral-700 mb-6">
              Every piece I create is a harmony of tradition, innovation, and personal expression—a celebration of the written word's enduring beauty and significance.
            </p>
            <a href="/about" className="btn btn-primary">About Rafat</a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src="/src/assests/images/image-5.jpg" 
              alt="Rafat Hussain creating calligraphy"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistStatement;