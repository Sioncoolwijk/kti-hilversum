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
      <div className="flex-grow mx-auto p-6 max-w-[90vh] m-40">
        <h1 className="text-red text-6xl font-bold my-6">Openingstijden</h1>
        <p className="my-6">
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
              transition: { staggerChildren: 0.2 }, // Adds staggered delay between items
            },
          }}
        >
          {hours.map((hour, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                },
              }}
              className="my-2"
            >
              <strong>{hour.day}:</strong> {hour.time}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Footer />
    </div>
  );
};

export default Openingstijden;
