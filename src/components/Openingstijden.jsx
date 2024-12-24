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
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen font-serif">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Openingstijden
        </h1>
        <p className="text-lg mb-8">
          Door de weeks zijn wij elke dag geopend, op donderdag kunt u ook in de
          avond bij ons terecht.
        </p>

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }, // Stagger effect for list items
            },
          }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {hours.map((hour, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 70, damping: 20 },
                },
              }}
              className="text-lg"
            >
              <strong>{hour.day}:</strong> {hour.time}
            </motion.li>
          ))}
        </motion.ul>
      </main>
      <Footer />
    </div>
  );
};

export default Openingstijden;
