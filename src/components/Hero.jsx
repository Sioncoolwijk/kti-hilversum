// Hero.jsx
import { stockequipment } from "../assets";
import { hero_text } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {hero_text.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {hero_text.description}
            </p>
            <div className="pt-4">
              <a
                href="#mogelijkheden"
                className="inline-flex items-center text-red hover:text-red/80 font-medium transition-colors duration-200"
              >
                Ontdek onze mogelijkheden
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-red/10 rounded-xl transform rotate-3"></div>
              <img
                src={stockequipment}
                alt="Tandartspraktijk"
                className="relative rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
