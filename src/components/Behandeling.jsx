import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { 
  ClipboardDocumentCheckIcon,
  ClockIcon,
  DocumentTextIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

const ProcessStep = ({ number, title, description }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: number * 0.1 }}
    className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
  >
    <div className="absolute -left-4 -top-4 w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold">
      {number}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const InfoCard = ({ icon: Icon, title, children }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="flex items-start gap-4 bg-red-50/50 rounded-xl p-6"
  >
    <div className="p-3 bg-white rounded-xl shadow-sm">
      <Icon className="w-6 h-6 text-red-600" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-gray-600 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  </motion.div>
);

const Behandeling = () => {
  const steps = [
    {
      title: "Eerste Controle",
      description: "Tijdens dit bezoek nemen we de dagelijkse mondverzorging met u door en controleren we uw gebit."
    },
    {
      title: "Behandelplan",
      description: "Bij problemen bespreekt de tandarts met u de te verwachten resultaten, risico's, aantal en duur van de behandelingen."
    },
    {
      title: "Uitvoering",
      description: "Na uw instemming voeren we de afgesproken behandeling uit binnen 30 werkdagen."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Behandeling
              </h1>
              <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">
                Van eerste controle tot behandeling, wij zorgen voor uw gebit
              </p>
            </motion.div>
          </div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-red-100"></div>
            
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>

          {/* Info Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            <InfoCard icon={ClipboardDocumentCheckIcon} title="Kleine Ingrepen">
              <p>
                Kleine ingrepen bespreken we direct met u en de behandeling volgt op korte termijn. 
                Denk hierbij aan een eenvoudige gebitsreiniging of het plaatsen van een vulling.
              </p>
            </InfoCard>

            <InfoCard icon={DocumentTextIcon} title="Uitgebreide Behandelingen">
              <p>
                Bij uitgebreide behandelingen informeren wij u over de kosten. Het behandelplan met 
                bijbehorende kosten wordt schriftelijk vastgelegd voor behandelingen vanaf € 250,-.
              </p>
            </InfoCard>

            <InfoCard icon={ClockIcon} title="Behandeltijd">
              <p>
                Na uw instemming voeren we de afgesproken behandeling uit. Dat kan over het algemeen 
                binnen 30 werkdagen.
              </p>
            </InfoCard>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600 to-red-700 rounded-xl p-6 text-white flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">Meer informatie nodig?</h3>
                <p className="text-white/90">Bekijk onze tarieven en vergoedingen</p>
              </div>
              <a
                href="/tarieven"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                <span>Tarieven</span>
                <ChevronRightIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </main>
      </div>
      
    </>
  );
};

export default Behandeling;
