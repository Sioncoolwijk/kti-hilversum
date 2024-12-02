import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { mogelijkheden } from "../constants"; // Ensure your array contains the details for each modal
import Heading from "./Heading";

const Mogelijkheden = () => {
  const [isOpen, setIsOpen] = useState(false); // Initially, modal is closed
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
    <section className="container mx-auto py-16 px-4 lg:px-8">
      <Heading
        className="text-center text-4xl font-bold mb-12"
        title="Mogelijkheden"
      />

      <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-3">
        {mogelijkheden.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex flex-col items-start bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              onClick={() => openModal(item)}
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
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-40"
          onClose={closeModal}
        >
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center">
            <DialogPanel className="w-full max-w-xl rounded-xl bg-white p-12 shadow-xl">
              <DialogTitle as="h3" className="text-4xl text-red font-bold">
                {selectedItem.title}
              </DialogTitle>

              {/* Dynamic Content */}
              <p className="mt-4 text-md">{selectedItem.description}</p>

              {/* Links based on item */}
              <ul className="list-disc p-4">
                {selectedItem.links.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a
                      href={link.href}
                      className="text-red underline"
                      target={link.target || "_self"}
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-light transition-colors duration-200 hover:bg-opacity-50"
                onClick={closeModal}
              >
                Terug
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default Mogelijkheden;
