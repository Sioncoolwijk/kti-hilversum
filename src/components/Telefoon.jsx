import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Telefoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-16">
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-red mb-8"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Telefoon
              </motion.h1>
              
              <motion.div
                className="space-y-6 font-serif"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p>
                    Maandag t/m vrijdag tot 12:30 bereikbaar op{" "}
                    <a href="tel:0356261200" className="text-red hover:text-red-700 underline font-medium">
                      035-6261200
                    </a>
                  </p>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <p>
                    12:30 - 17:00 voor pijnklachten bereikbaar op{" "}
                    <a href="tel:0356261202" className="text-red hover:text-red-700 underline font-medium">
                      035-6261202
                    </a>
                  </p>
                </div>

                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <p>
                    Buiten deze tijden kunt u contact opnemen met de{" "}
                    <a href="/spoed" className="text-red hover:text-red-700 underline font-medium">
                      doktersdienst
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <img
                src="/logo.svg"
                alt="Het logo van de Kliniek voor Tandheelkunde en Implantologie"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
      
    </div>
  );
};

export default Telefoon;
