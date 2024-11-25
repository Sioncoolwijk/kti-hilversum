import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { vervoer } from "../constants";
import Map from "./Map";
import { bord } from "../assets";
import { route } from "../assets";

const Routebeschrijving = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-light bg-opacity-10">
        <div className="relative">
          <img
            src={bord}
            alt="Bord van KTI aan de rand van de straat"
            className="max-w-full h-auto shadow-md bg-cover bg-center"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-opacity-50 p-4 rounded-lg">
            <h1 className="text-5xl font-bold">Routebeschrijving</h1>
          </div>
        </div>
        {/* Content Section */}
        <div className="flex-grow p-6 sm:p-1 m-[3rem]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {vervoer.map((item) => (
              <div
                key={item.key}
                className="rounded-lg shadow-md p-6 transform hover:shadow-lg bg-white flex flex-col font-serif"
              >
                <h2 className="text-lg font-semibold text-red">{item.title}</h2>
                <p className="text-gray-dark whitespace-pre-line mb-4">
                  {item.description}
                </p>

                <div className="mt-auto">
                  {item.verder && (
                    <div className="text-red font-serif">
                      Zie verder vervolg *
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Vervolg Section */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="rounded-lg shadow-md p-6 transform hover:shadow-lg bg-white font-serif">
              <h1 className="text-red text-lg font-semibold">
                Vervolg * voor alle richtingen
              </h1>
              <p>
                Bij aansluiting Hilversum (afslag 33) verlaat A27, verder op
                N201 (richting Hilversum). Op N201 na 1330 meter links afslaan
                naar Diependaalselaan (richting Arena
                Park-Zuid-Loosdrecht-&apos;s Graveland). Op Diependaalselaan na
                830 meter rotonde oprijden. Neem 3e afslag op rotonde richting
                Maartensdijk. Na ongeveer 200 meter links zit de Kliniek.
              </p>
            </div>
          </div>

          {/* Download and Plan Route Buttons */}
          <div className="mt-12 flex justify-center">
            <a
              className="bg-red text-white text-sm rounded-md p-2 uppercase transition-colors duration-500 hover:bg-opacity-50"
              href={route}
              download="routebeschrijving-kti.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              download routebeschrijving
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              className="bg-red text-white text-sm rounded-md p-2 uppercase transition-colors duration-500 hover:bg-opacity-50"
              href="https://www.google.nl/maps/dir//KTI-Hilversum+B.V.,+Utrechtseweg+79,+1213+TM+Hilversum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan route met Google Maps
            </a>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Map />
        </motion.div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Routebeschrijving;
