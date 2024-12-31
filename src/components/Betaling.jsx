import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { 
  DocumentTextIcon, 
  CreditCardIcon,
  QuestionMarkCircleIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const InfoBlock = ({ title, children, icon: Icon }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="p-6 flex items-start gap-4">
      <div className="p-3 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

const Betaling = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Top Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Betaling
              </h1>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Transparante facturatie en gemakkelijke betalingsafhandeling via Infomedics
              </p>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <InfoBlock 
              title="Opbouw Tandartsrekening"
              icon={DocumentTextIcon}
            >
              <p>
                De tandartsrekening is opgebouwd uit de verschillende prestaties die tijdens een behandeling hebben plaatsgevonden. Op de rekening staat elke prestatie omschreven met een code. Aan elke code is een{" "}
                <a href="/tarieven" className="text-red-600 hover:text-red-700 underline font-medium">
                  tarief
                </a>{" "}
                gekoppeld.
              </p>
            </InfoBlock>

            <InfoBlock 
              title="Betaling via Infomedics"
              icon={CreditCardIcon}
            >
              <p>
                De betaling verloopt via Infomedics. U kunt bij Infomedics alle informatie opvragen.
              </p>
            </InfoBlock>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50 to-red-100 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <QuestionMarkCircleIcon className="w-6 h-6 text-red-600" />
                <h2 className="text-xl font-semibold text-gray-900">Veelgestelde Vragen</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Heeft u vragen over uw factuur of de betalingsafhandeling?
              </p>
              <a
                href="https://www.infomedics.nl/vraag-en-antwoord"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <span>Bekijk de FAQ van Infomedics</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Betaling;
