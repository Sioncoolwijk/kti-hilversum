import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const AppointmentCard = ({ title, content, phone }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
      {title === "Standaard" ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      )}
      {title}
    </h3>
    <div className="space-y-4 text-gray-600">
      {content.map((text, index) => (
        <p key={index} className="leading-relaxed">
          {text}
        </p>
      ))}
      {phone && (
        <a
          href={`tel:${phone.replace(/-/g, '')}`}
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 mt-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          {phone}
        </a>
      )}
    </div>
  </motion.div>
);

const Afspraak = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-red-300 to-red-600 py-16"
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Afspraak Maken
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Plan uw afspraak bij KTI Hilversum. Wij staan voor u klaar.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-6">
            <AppointmentCard
              title="Standaard"
              content={[
                "Bij ons kunt u terecht op afspraak. Onze patiënten kunnen binnen 20 werkdagen terecht voor een controle. Bellen voor een afspraak kan tussen 9:00 en 12:30.",
                "In overleg met u zorgen we ervoor dat de verschillende behandelingen zo veel mogelijk op elkaar aansluiten."
              ]}
              phone="035-6261200"
            />
            
            <AppointmentCard
              title="Spoed"
              content={[
                "Spoedbehandelingen voeren we zo veel mogelijk op dezelfde dag uit. Of we nemen noodmaatregelen zodat u pijnvrij bent tot de daadwerkelijke behandeling plaatsvindt. In geval van pijnklachten zijn wij tussen 12:30 en 17:00 te bereiken.",
                "Voor eventuele spoedeisende hulp buiten praktijkuren kunt u bellen met de Mondzorgpoli."
              ]}
              phone="035-6261202"
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Afspraak;
