import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 md:pt-32">
      <div className="container">
        <h1 className="page-title">About the Artist</h1>
        
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="src/assests/images/RH_Image.jpg" 
                alt="Rafat Hussain - Calligraphy Artist" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display mb-6">Rafat Hussain</h2>
              <p className="text-neutral-700 mb-4">
                Rafat Hussain began his educational journey with matriculation from Government High School Safdarabad, District Sheikhupura in 2003. In 2023, he completed a diploma in Modern Calligraphy at Khana-e-Farhang Iran, Lahore. Over the years, he has studied under several distinguished masters of calligraphy, including Ustad Mohammad Akram, Ustad Mohammad Abubakar Zahid, Ustad Muhammad Ali Zahid, Ustad Abdul Majid (grandson of Ustad Allah Bakhsh), and Ustad A.F. Hussain.
              </p>
              <p className="text-neutral-700 mb-4">
                His artistic career includes two solo exhibitions: NOOR, held at Khana-e-Farhang, Consulate General of the Islamic Republic of Iran in Lahore on 14th November 2023, and Kashf-e-Rehmat, showcased at Oyster Art Gallery, Gulberg III, Lahore on 30th October 2024. He has also participated in several group exhibitions, including the International Islamic Art Festival at Alhamra Hall (2022), a modern calligraphy group show at GCU Faisalabad (2022), Kun Faya Koon at Ejaz Art Gallery, Gulberg (2023), and a calligraphy exhibition and competition at Punjab University, Lahore.
              </p>
              <p className="text-neutral-700 mb-4">
                His achievements include 1st Prize in Modern Calligraphy at Alhamra Art Council (2023), a Gold Medal at the Khatati Exhibition at Alhamra (2022), the Sareer-e-Khama International Award at Punjab University (2022), the Mojza-e-Fun International Award (2019), and the prestigious Presidential Award "Abdul Majeed Parveen Raqam" in Khat-e-Nastaleeq (2018) at Serena Hotel, Islamabad. He also secured 1st Prize in a Khat-e-Nastaleeq competition broadcasted live on PTV in 2015.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display mb-8 text-center">My Artistic Journey</h2>
          
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-display mb-4">Education & Training</h3>
              <p className="text-neutral-700 mb-4">
                Rafat Hussain began his educational journey with matriculation from Government High School Safdarabad, District Sheikhupura in 2003. In 2023, he completed a diploma in Modern Calligraphy at Khana-e-Farhang Iran, Lahore. Over the years, he has studied under several distinguished masters of calligraphy, including Ustad Mohammad Akram, Ustad Mohammad Abubakar Zahid, Ustad Muhammad Ali Zahid, Ustad Abdul Majid (grandson of Ustad Allah Bakhsh), and Ustad A.F. Hussain.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-display mb-4">Artistic Career</h3>
              <p className="text-neutral-700 mb-4">
                His artistic career includes two solo exhibitions: NOOR, held at Khana-e-Farhang, Consulate General of the Islamic Republic of Iran in Lahore on 14th November 2023, and Kashf-e-Rehmat, showcased at Oyster Art Gallery, Gulberg III, Lahore on 30th October 2024. He has also participated in several group exhibitions, including the International Islamic Art Festival at Alhamra Hall (2022), a modern calligraphy group show at GCU Faisalabad (2022), Kun Faya Koon at Ejaz Art Gallery, Gulberg (2023), and a calligraphy exhibition and competition at Punjab University, Lahore.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-display mb-4">Achievements</h3>
              <p className="text-neutral-700 mb-4">
                His achievements include 1st Prize in Modern Calligraphy at Alhamra Art Council (2023), a Gold Medal at the Khatati Exhibition at Alhamra (2022), the Sareer-e-Khama International Award at Punjab University (2022), the Mojza-e-Fun International Award (2019), and the prestigious Presidential Award "Abdul Majeed Parveen Raqam" in Khat-e-Nastaleeq (2018) at Serena Hotel, Islamabad. He also secured 1st Prize in a Khat-e-Nastaleeq competition broadcasted live on PTV in 2015.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display mb-8 text-center">Exhibitions & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-display mb-2">Solo Exhibitions</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>"NOOR" - Khana-e-Farhang, Consulate General of the Islamic Republic of Iran, Lahore (14th November 2023)</li>
                <li>"Kashf-e-Rehmat" - Oyster Art Gallery, Gulberg III, Lahore (30th October 2024)</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-display mb-2">Group Exhibitions</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>International Islamic Art Festival - Alhamra Hall (2022)</li>
                <li>Modern Calligraphy Group Show - GCU Faisalabad (2022)</li>
                <li>"Kun Faya Koon" - Ejaz Art Gallery, Gulberg (2023)</li>
                <li>Calligraphy Exhibition and Competition - Punjab University, Lahore</li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-display mb-2">Awards & Recognition</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>1st Prize in Modern Calligraphy - Alhamra Art Council (2023)</li>
                <li>Gold Medal - Khatati Exhibition, Alhamra (2022)</li>
                <li>Sareer-e-Khama International Award - Punjab University (2022)</li>
                <li>Mojza-e-Fun International Award (2019)</li>
                <li>Presidential Award "Abdul Majeed Parveen Raqam" in Khat-e-Nastaleeq - Serena Hotel, Islamabad (2018)</li>
                <li>1st Prize in Khat-e-Nastaleeq Competition - PTV (2015)</li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-display mb-6">Commissions & Collaborations</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
            I welcome commissions for personal pieces, corporate installations, and special events. 
            Each commission begins with a consultation to understand your vision and needs.
          </p>
          <a href="/contact" className="btn btn-primary">Request a Commission</a>
        </div>
      </div>
    </div>
  );
};

export default About;