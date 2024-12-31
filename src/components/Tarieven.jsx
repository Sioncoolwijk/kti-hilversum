import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { 
  BanknotesIcon,
  PhoneIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-red-50 rounded-xl">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Tarieven = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Side-by-side Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Tarieven
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-2 bg-red-600 mt-2"
                />
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                De tandartsrekening is opgebouwd uit de verschillende prestaties die tijdens een behandeling hebben plaatsgevonden. Op de rekening staat elke prestatie omschreven met een code.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 grid gap-4"
            >
              <FeatureCard
                icon={BanknotesIcon}
                title="Transparante Kosten"
                description="Elke behandeling heeft een duidelijke code met bijbehorend tarief"
              />
              <FeatureCard
                icon={ClockIcon}
                title="Actuele Tarieven"
                description="Onze tarieven worden jaarlijks bijgewerkt volgens de richtlijnen"
              />
            </motion.div>
          </div>

          {/* Contact Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl shadow-lg p-8 text-white"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Vragen over tarieven?</h2>
                  <p className="text-white/90">
                    Neem contact met ons op voor meer informatie
                  </p>
                </div>
              </div>
              <a
                href="/telefoon"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-200 font-medium"
              >
                <span>Contact opnemen</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </main>
      </div>
      
    </>
  );
};

export default Tarieven;
