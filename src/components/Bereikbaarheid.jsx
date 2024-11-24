import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { logo } from "../assets";
import { vervoer } from "../constants";
import Map from "./Map";

import { bord } from "../assets";

const Bereikbaarheid = () => {
  return (
    <>
      <Header />
      <div>
        <section
          className="relative flex items-center justify-center h-[30vh] grayscale-0 hover:grayscale transition duration-300"
          style={{
            backgroundImage: `url(${bord})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl font-semibold text-white">
              Bereikbaarheid
            </h1>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 80 }}
            className="absolute bottom-12 right-16"
          >
            <img
              src={logo}
              alt="Moving element"
              className="w-24 h-24 shadow-2xl"
            />
          </motion.div>
        </section>

        {/* Content Section */}
        <main className="flex-grow p-10 m-[3rem]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {vervoer.map((item) => (
              <div
                key={item.key}
                className="rounded-lg shadow-md p-6 transform hover:shadow-lg"
              >
                <h2 className="text-lg font-semibold text-red">{item.title}</h2>
                <p className="text-gray-dark whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex-grow mx-auto rounded-lg shadow-md p-6 mt-2 transform hover:shadow-lg max-w-[85vh]">
            <h1 className="text-red text-lg font-bold">
              Vervolg * voor alle richtingen
            </h1>
            <p>
              Bij aansluiting Hilversum (afslag 33) verlaat A27, verder op N201
              (richting Hilversum). Op N201 na 1330 meter links afslaan naar
              Diependaalselaan (richting Arena Park-Zuid-Loosdrecht-&apos;s
              Graveland). Op Diependaalselaan na 830 meter rotonde oprijden.
              Neem 3e afslag op rotonde richting Maartensdijk. Na ongeveer 200
              meter links zit de Kliniek.
            </p>
          </div>
        </main>

        <Map />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Bereikbaarheid;
