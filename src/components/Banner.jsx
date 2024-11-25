import { stockwoman } from "../assets";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, type: "spring", stiffness: 30 }}
      viewport={{ once: true }}
    >
      <div
        className="flex h-screen items-center max-h-[40rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${stockwoman})` }}
      >
        <div className="p-12">
          <h1 className="text-3xl font-semibold text-white">
            Welkom bij KTI Hilversum
          </h1>
          <p className="text-xl font-serif text-white">
            Kliniek voor Tandheelkunde en Implantologie
          </p>
          <div className="mt-[2rem]">
            <a
              className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-lighttransition-colors duration-200 hover:bg-opacity-50"
              href="/afspraak-maken"
            >
              afspraak maken
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Banner;
