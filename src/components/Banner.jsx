import { stockwoman } from "../assets";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="relative flex h-screen items-center max-h-[85vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${stockwoman})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welkom bij KTI Hilversum
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light">
            Kliniek voor Tandheelkunde en Implantologie
          </p>
          <div className="flex gap-4">
            <a
              className="bg-red hover:bg-red/90 text-white text-sm rounded-full py-3 px-8 uppercase font-medium transition-all duration-300 transform hover:scale-105"
              href="/afspraak-maken"
            >
              Afspraak maken
            </a>
            <a
              className="bg-transparent border-2 border-white text-white text-sm rounded-full py-3 px-8 uppercase font-medium transition-all duration-300 hover:bg-white hover:text-black"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
