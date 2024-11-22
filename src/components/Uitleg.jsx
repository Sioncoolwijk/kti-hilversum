import { stockteam } from "../assets";
import { motion } from "framer-motion";

const Uitleg = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-gray bg-opacity-10 py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
            {/* Left Section */}
            <div className="flex-1 p-6">
              <h2 className="text-4xl font-extrabold text-red mt-4 mb-6">
                Contact
              </h2>
              <p className="text-lg text-gray-dark mb-6">
                <b>
                  KTI Hilversum is een goed bereikbare praktijk in de bosrijke
                  omgeving van Hilversum.
                </b>
              </p>
              <p className="text-lg text-gray-dark mb-6">
                In onze kliniek wordt iedere patient door zijn/haar vaste
                tandarts geholpen. Verder zijn wij een verwijspraktijk voor
                implantologie.
              </p>
              <a
                className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-lighttransition-colors duration-500 hover:bg-opacity-50"
                href="/contact"
              >
                neem contact op
              </a>
            </div>
            {/* Right Section (optional image or additional content) */}
            <div className="flex-1 hidden lg:block md:block">
              <img
                src={stockteam}
                alt="Dental practice"
                className="w-full h-auto rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Uitleg;
