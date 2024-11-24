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
      <div>
        <div className="relative">
          <img
            src={bord}
            alt="Route Sign"
            className="max-w-full h-auto rounded-lg shadow-md grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-50 p-4 rounded-lg">
            <h1 className="text-5xl font-bold">Routebeschrijving</h1>
          </div>
        </div>

        {/* Content Section */}
        <main className="flex-grow p-10 m-[3rem]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

          <div>
            <div className="flex-grow mx-auto rounded-lg shadow-md p-6 mt-2 transform hover:shadow-lg ">
              <h1 className="text-red text-lg font-bold">
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
          <div className="mt-12">
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
          <div className="mt-8">
            <a
              className="bg-red text-white text-sm rounded-md p-2 uppercase transition-colors duration-500 hover:bg-opacity-50"
              href="https://www.google.nl/maps/dir//KTI-Hilversum+B.V.,+Utrechtseweg+79,+1213+TM+Hilversum/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan een route
            </a>
          </div>
        </main>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <Map />
        </motion.div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Routebeschrijving;
