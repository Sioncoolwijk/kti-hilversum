// Hero.jsx
import { stockequipment } from "../assets";
import { hero_text } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around p-6 md:p-14 space-y-8 md:space-y-0 md:space-x-10 bg-gray bg-opacity-10">
        <div className="md:w-1/3 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{hero_text.title}</h2>
          <p className="leading-relaxed">{hero_text.description}</p>
        </div>
        <div className="md:w-1/2 justify-center">
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 30 }}
          >
            <img
              src={stockequipment}
              alt="Tandartspraktijk"
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
