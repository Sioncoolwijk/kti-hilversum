import { stockteam } from "../assets";
import { motion } from "framer-motion";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

const ContactInfo = ({ icon: Icon, title, content, link, className = "" }) => (
  <motion.div 
    className={`flex items-start space-x-4 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="bg-red/10 p-3 rounded-full">
      <Icon className="w-6 h-6 text-red" />
    </div>
    <div>
      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      {link ? (
        <a href={link} className="text-gray-600 hover:text-red transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Section */}
          <motion.div 
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Contact
              </h2>
              <p className="text-xl text-gray-600">
                KTI Hilversum is een goed bereikbare praktijk in de bosrijke
                omgeving van Hilversum.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              In onze kliniek wordt iedere patient door zijn/haar vaste tandarts
              geholpen. Verder zijn wij een verwijspraktijk voor implantologie.
            </p>

            <div className="space-y-6">
              <ContactInfo
                icon={IoLocationOutline}
                title="Adres"
                content="Koninginneweg 56, 1211 AT Hilversum"
                link="https://maps.google.com/?q=Koninginneweg+56,+1211+AT+Hilversum"
              />
              <ContactInfo
                icon={IoCallOutline}
                title="Telefoon"
                content="035 - 624 38 06"
                link="tel:0356243806"
              />
              <ContactInfo
                icon={IoMailOutline}
                title="Email"
                content="info@ktihilversum.nl"
                link="mailto:info@ktihilversum.nl"
              />
            </div>

            <div className="pt-6">
              <a
                className="inline-flex items-center bg-red hover:bg-red/90 text-white rounded-full py-3 px-8 transition-all duration-300 transform hover:scale-105"
                href="/telefoon"
              >
                Contact opnemen
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-red/5 rounded-xl transform -rotate-3"></div>
              <div className="absolute -inset-4 bg-gray-100 rounded-xl transform rotate-3 -z-10"></div>
              
              <img
                src={stockteam}
                alt="Foto van het gehele team van Kliniek voor Tandheelkunde en Implantologie"
                loading="lazy"
                className="relative rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
