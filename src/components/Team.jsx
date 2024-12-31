import { teamMembers } from "../constants";
import Header from "./Header";
import Footer from "./Footer";
import { stockwoman } from "../assets";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={stockwoman}
              alt="Team KTI"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-full max-w-6xl mx-auto px-6 flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Team KTI
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              KTI Hilversum is een succesvolle tandartsenpraktijk in Hilversum. 
              Wij werken volgens de nieuwste inzichten en combineren dat met een grote gastvrijheid, 
              het team heet u van harte welkom.
            </p>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Maak kennis met ons team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Ontdek wie wij zijn en hoe we elke dag werken aan de gezondheid en
                het welzijn van onze patiënten.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

const TeamMember = ({ member, index }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group"
  >
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="aspect-square bg-gray-100 relative">
        {/* Placeholder for when there's no image */}
        <div className="absolute inset-0 flex items-center justify-center bg-red-50 text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 opacity-50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-200">
          {member.name}
        </h3>
        <p className="text-gray-600 mt-1">
          {member.role}
        </p>
      </div>
    </div>
  </motion.div>
);

export default Team;
