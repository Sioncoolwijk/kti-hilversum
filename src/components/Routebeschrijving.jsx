import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { vervoer } from "../constants";
import Map from "./Map";
import { bord, route } from "../assets";

const Routebeschrijving = () => {
  return (
    <>
      
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bord}
            alt="Bord van KTI aan de rand van de straat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Darker overlay */}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white mb-4"
          >
            Routebeschrijving
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-xl max-w-2xl px-4"
          >
            Plan uw reis naar KTI Hilversum
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Transport Options Grid */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {vervoer.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
              >
                <h2 className="text-xl font-semibold text-red-600 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {item.verder && (
                  <div className="mt-4 text-red-600 font-medium">
                    Zie verder vervolg *
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Instructions */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-xl font-semibold text-red-600 mb-4">
              Vervolg * voor alle richtingen
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bij aansluiting Hilversum (afslag 33) verlaat A27, verder op N201 (richting Hilversum). 
              Op N201 na 1330 meter links afslaan naar Diependaalselaan (richting Arena Park-Zuid-Loosdrecht-'s Graveland). 
              Op Diependaalselaan na 830 meter rotonde oprijden. Neem 3e afslag op rotonde richting Maartensdijk. 
              Na ongeveer 200 meter links zit de Kliniek.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium shadow-sm hover:bg-red-700 transition-colors duration-200"
              href={route}
              download="routebeschrijving-kti.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Routebeschrijving
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 border-2 border-red-600 px-8 py-3 rounded-lg font-medium shadow-sm hover:bg-red-50 transition-colors duration-200"
              href="https://www.google.nl/maps/dir//KTI-Hilversum+B.V.,+Utrechtseweg+79,+1213+TM+Hilversum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan Route via Google Maps
            </motion.a>
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Map />
        </motion.div>
      </div>

      
    </>
  );
};

export default Routebeschrijving;
