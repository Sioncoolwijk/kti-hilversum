import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const QualityCard = ({ title, items }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-6">{title}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 group"
        >
          <div className="p-1 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-gray-600">{item}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Kwaliteit = () => {
  const qualityData = {
    professional: [
      "Lidmaatschap wetenschappelijke vereniging",
      "Lezen vakliteratuur",
      "Volgen van bij- en nascholing",
      "Bijwonen intercollegiaal overleg",
    ],
    development: [
      "Bijwonen Studiegroepen",
      "Implementeren van nieuwe richtlijnen, veldnormen, gedragsregels en praktijkwijzers",
      "Bijwonen Themaprojecten",
      "Bezoeken klinische avonden",
    ]
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kwaliteit
                <span className="block text-red-600 text-2xl md:text-3xl mt-2">
                  Uw gezondheid, onze prioriteit
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Bij goede zorg en aandacht voor uw gebit staat kwaliteit voorop. Daarom besteden wij veel aandacht aan zorgvuldige informatie en goede service aan u.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              {/* Quality Stats */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-200 to-red-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Onze Kwaliteitsgarantie</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Gecertificeerde Professionals</h3>
                      <p className="text-sm text-gray-600">Continue bijscholing en ontwikkeling</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-50 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Moderne Technieken</h3>
                      <p className="text-sm text-gray-600">Up-to-date met de laatste ontwikkelingen</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quality Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <QualityCard
              title="Professionele Ontwikkeling"
              items={qualityData.professional}
            />
            <QualityCard
              title="Voortdurende Verbetering"
              items={qualityData.development}
            />
          </div>

          {/* Feedback Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-xl shadow-sm p-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Uw Mening Telt</h3>
                <p className="text-gray-600 leading-relaxed">
                  Uw mening stellen wij buitengewoon op prijs. Heeft u suggesties hoe wij u beter van dienst kunnen zijn? 
                  Neem dan contact met ons op. Ook kunt u het patiënttevredenheidsonderzoek invullen bij ons op de praktijk. 
                  Zo kunnen wij ervoor zorgen dat wij goede kwaliteit blijven leveren.
                </p>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Kwaliteit;
