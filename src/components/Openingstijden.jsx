import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Openingstijden = () => {
  const hours = [
    { day: "Maandag", time: "8:30 - 17:00" },
    { day: "Dinsdag", time: "8:30 - 17:00" },
    { day: "Woensdag", time: "8:30 - 17:00" },
    { day: "Donderdag", time: "8:30 - 17:00" },
    { day: "Vrijdag", time: "8:30 - 14:00" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red mb-6">
              Openingstijden
            </h1>
            <p className="text-lg text-gray-700 font-serif">
              Wij zijn doordeweeks elke dag geopend. Op vrijdag sluit de praktijk
              iets eerder.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="space-y-3"
            >
              {hours.map((hour, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                    },
                  }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 rounded-full bg-red"></div>
                      <span className="text-lg font-medium text-gray-800">{hour.day}</span>
                    </div>
                    <span className="text-lg font-serif text-gray-600">{hour.time}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Extra informatie</h2>
                <div className="space-y-4 font-serif">
                  <p className="text-gray-600">
                    Voor spoedgevallen buiten openingstijden kunt u contact opnemen met de{" "}
                    <a href="/spoed" className="text-red hover:text-red-700 underline">
                      doktersdienst
                    </a>
                    .
                  </p>
                  <p className="text-gray-600">
                    Voor het maken van een afspraak kunt u ons bereiken op{" "}
                    <a href="tel:0356261200" className="text-red hover:text-red-700">
                      035-6261200
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
    </div>
  );
};

export default Openingstijden;