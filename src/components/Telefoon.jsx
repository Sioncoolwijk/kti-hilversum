import { motion } from "framer-motion"; // Import motion from framer-motion
import Header from "./Header";
import Footer from "./Footer";

const Telefoon = () => {
  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen">
        <motion.div
          className="flex-grow mx-auto max-w-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          <div className="w-full md:w-1/2 pr-6 mb-6 md:mb-0">
            <motion.h1
              className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6"
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Telefoon
            </motion.h1>
            <motion.p
              initial={{ x: 1200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="text-base md:text-lg font-serif"
            >
              <p className="my-4">
                Wij zijn maandag t/m vrijdag telefonisch bereikbaar tot 12:30 op{" "}
                <a href="tel:0356261202" className="text-red underline">
                  035-6261200
                </a>
              </p>

              <p className="my-4">
                Vanaf 12:30 tot 17:00 zijn wij voor pijnklachten bereikbaar op{" "}
                <a href="tel:0356261202" className="text-red underline">
                  035-6261202
                </a>
              </p>

              <p className="my-4">
                Buiten deze tijden kunt u contact opnemen met de{" "}
                <a href="/spoed" className="text-red underline">
                  doktersdienst
                </a>
                .
              </p>
            </motion.p>
          </div>

          <motion.div
            className="w-full md:w-[30vh] m-6 hidden lg:block md:block"
            initial={{ y: 300 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/logo.svg"
              alt="Het logo van de Kliniek voor Tandheelkunde en Implantologie"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Telefoon;
