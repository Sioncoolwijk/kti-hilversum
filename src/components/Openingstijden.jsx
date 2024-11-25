import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Openingstijden = () => {
  const hours = [
    { day: "Maandag", time: "8:30 - 17:00" },
    { day: "Dinsdag", time: "8:30 - 17:00" },
    { day: "Woensdag", time: "8:30 - 17:00" },
    { day: "Donderdag", time: "8:30 - 20:30" },
    { day: "Vrijdag", time: "8:30 - 14:00" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6">
        <div>
          <h1 className="text-red text-6xl font-bold py-4">Openingstijden</h1>
          <p className="py-6 font-serif text-lg">
            Door de weeks zijn wij elke dag geopend, op donderdag kunt u ook in
            de avond bij ons terecht.
          </p>
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }, // Adds staggered delay between items
              },
            }}
            viewport={{ once: true }}
            className="font-serif text-lg"
          >
            {hours.map((hour, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 70, damping: 10 },
                  },
                }}
                className="my-2"
              >
                <strong>{hour.day}:</strong> {hour.time}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Openingstijden;
