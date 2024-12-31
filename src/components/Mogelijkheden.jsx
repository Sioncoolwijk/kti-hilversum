import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { mogelijkheden } from "../constants";
import Heading from "./Heading";

const Mogelijkheden = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <section className="py-24 bg-gray-50" id="mogelijkheden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Heading
            className="text-4xl md:text-5xl font-bold mb-6"
            title="Mogelijkheden"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ontdek onze uitgebreide tandheelkundige diensten voor optimale mondzorg
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {mogelijkheden.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {item.description.substring(0, 100)}...
                  </p>
                  <button
                    onClick={() => openModal(item)}
                    className="flex items-center text-red hover:text-red/80 transition-colors duration-200"
                  >
                    Lees meer
                    <IoIosArrowDown className="ml-2 transform transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <Dialog
            open={isOpen}
            onClose={closeModal}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel className="w-full max-w-2xl rounded-2xl bg-white p-8 md:p-12 shadow-2xl">
                <DialogTitle as="h3" className="text-3xl font-bold text-red mb-6">
                  {selectedItem.title}
                </DialogTitle>
                <div className="prose prose-lg">
                  <p className="text-gray-600">{selectedItem.description}</p>
                  <ul className="space-y-3 mt-6">
                    {selectedItem.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-red hover:text-red/80 underline-offset-4 hover:underline"
                          target={link.target || "_self"}
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <button
                    className="bg-red hover:bg-red/90 text-white rounded-full py-2 px-6 transition-colors duration-200"
                    onClick={closeModal}
                  >
                    Sluiten
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Mogelijkheden;
