import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const EmergencyCard = ({ title, description, phone, link }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border-l-4 border-red-600"
  >
    <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      {phone && (
        <a
          href={`tel:${phone.replace(/-/g, '')}`}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          {phone}
        </a>
      )}
      {link && (
        <a
          href={link}
          className="inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Bekijk openingstijden
        </a>
      )}
    </div>
  </motion.div>
);

const Spoed = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-red-300 to-red-600 text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold">Spoedhulp</h1>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/90"
          >
            Heeft u dringend tandheelkundige hulp nodig? Wij staan voor u klaar.
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <EmergencyCard
            title="Tijdens praktijkuren"
            description="Tijdens onze reguliere openingstijden kunt u direct contact met ons opnemen voor spoedeisende hulp."
            phone="035-6261202"
          />
          
          <EmergencyCard
            title="Buiten praktijkuren"
            description="Voor spoedeisende hulp buiten onze praktijkuren kunt u terecht bij de Mondzorgpoli."
            phone="088-2632700"
            link="/openingstijden"
          />
        </div>
      </main>
      
    </div>
      <Footer />
    </>
  );
};

export default Spoed;