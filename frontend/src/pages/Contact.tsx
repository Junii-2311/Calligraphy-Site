import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: 'general' | 'commission' | 'purchase' | 'collaboration';
};

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      console.log('Message sent successfully:', await response.json());
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="pt-24 md:pt-32">
      <div className="container">
        <h1 className="page-title">Contact Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-display mb-6">Get in Touch</h2>
            <p className="text-neutral-700 mb-8">
              Whether you're interested in purchasing an existing piece, commissioning custom artwork, 
              or have questions about my process, I'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="text-accent-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Studio Location</h3>
                  <address className="not-italic text-neutral-600">
                    123 Artist Way<br />
                    Lahore, Pakistan
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-accent-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:rafat@example.com" className="text-accent-700 hover:underline">
                    rafat@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-accent-600 mt-1 mr-4" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a href="tel:+11234567890" className="text-accent-700 hover:underline">
                    (+92) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-whatsapp text-accent-600 mt-1 mr-4" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                <div>
                  <h3 className="font-medium mb-1">WhatsApp</h3>
                  <a href="https://wa.me/923104278513" target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:underline">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="font-medium mb-4">Studio Hours</h3>
            <table className="w-full text-neutral-700">
              <tbody>
                <tr>
                  <td className="py-1 pr-4">Monday - Friday</td>
                  <td>10:00 AM - 6:00 PM</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4">Saturday</td>
                  <td>By appointment only</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4">Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-display mb-6">Send a Message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-800 p-4 rounded-md flex items-center mb-6"
                >
                  <Check className="mr-2" />
                  <span>Thank you for your message! I'll respond as soon as possible.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="username@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      className="input"
                      {...register('type', { required: true })}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="commission">Commission Request</option>
                      <option value="purchase">Purchase Question</option>
                      <option value="collaboration">Collaboration Opportunity</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className={`input ${errors.subject ? 'border-red-500' : ''}`}
                      placeholder="What's this about?"
                      {...register('subject', { required: 'Subject is required' })}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`input resize-none ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell me about your project or question..."
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;