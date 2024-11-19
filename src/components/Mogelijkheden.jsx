import { mogelijkheden } from "../constants";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const Mogelijkheden = () => {
  return (
    <section className="container mx-auto py-16 px-4 lg:px-8">
      <Heading
        className="text-center text-4xl font-bold mb-12"
        title="Mogelijkheden"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mogelijkheden.map((item) => (
          <a key={item.title} href={item.link}>
            <motion.div
              className="flex flex-col items-start bg-white shadow-lg rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex justify-between items-center w-full">
                <h5 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h5>
                <IoIosArrowDown size={24} />
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Mogelijkheden;
