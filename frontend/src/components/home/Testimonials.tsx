import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  return (
    <section className="section bg-primary-100">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-3">Client Testimonials</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-12">
          What collectors and clients say about their experiences with my calligraphy artwork and custom commissions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent-500">★</span>
                ))}
              </div>
              <p className="text-neutral-700 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-primary-900">{testimonial.name}</h4>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;