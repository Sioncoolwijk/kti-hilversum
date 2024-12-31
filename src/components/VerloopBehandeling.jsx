import { motion } from "framer-motion";

const TreatmentStep = ({ title, description, index }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 overflow-hidden group"
  >
    <span className="absolute -right-4 -top-4 text-[120px] font-bold text-red-50 group-hover:text-red-100 transition-colors duration-300">
      {index + 1}
    </span>
    <div className="relative">
      <h3 className="text-xl font-semibold text-red-600 mb-4">{title}</h3>
      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
        {description}
      </div>
    </div>
  </motion.div>
);

const VerloopBehandeling = () => {
  const treatmentSteps = [
    {
      title: "Bevestiging en recept",
      description: `Een week voordat de behandeling plaatsvindt, krijgt u van ons een brief waarin de afspraak wordt bevestigd. Hierin zitten ook een tweetal recepten met gebruiksaanwijzing die u bij uw apotheek kunt ophalen.\n\nLet op: als u twee bloedverdunners gebruikt moet in overleg met uw arts 5 dagen van tevoren stoppen.`
    },
    {
      title: "Eerste behandelfase implanteren",
      description: `Het plaatsen van de implantaten gebeurt onder plaatselijke verdoving. Er wordt een klein sneetje in het tandvlees gemaakt. Er kan dan goed bekeken worden of er voldoende bot aanwezig is.\n\nEr zijn twee mogelijkheden:\n• Het implantaat wordt volledig onder het tandvlees geplaatst.\n• Er komt een hoger dopje op waardoor het implantaat al door het tandvlees heen steekt.`
    },
    {
      title: "De dag erna",
      description: "De dag na de ingreep willen wij u graag terug zien. De wond wordt bekeken en eventueel een controle foto gemaakt."
    },
    {
      title: "Hechtingen verwijderen",
      description: "Na ongeveer 10 dagen worden de hechtingen verwijderd. Het is verstandig wanneer de hechtingen er nog in zitten deze plek zoveel mogelijk te ontzien met het eten."
    },
    {
      title: "Vastgroeien",
      description: "Nu komt er een rustperiode van ongeveer 8 weken. Het bot kan dan aan de implantaten vastgroeien. Het is in deze periode belangrijk om het implantaat niet te belasten."
    },
    {
      title: "Tweede behandelfase",
      description: "Na de vastgroeiperiode wordt het implantaat opgezocht. Als het implantaat onder het tandvlees is geplaatst wordt de kaak verdoofd en wordt er een klein sneetje boven het implantaat gemaakt."
    },
    {
      title: "Kroon of Brug",
      description: `Als de kroon of brug gemaakt wordt door uw eigen tandarts is het handig dat u hiervoor zelf een afspraak maakt.\n\nAls de kroon of brug gemaakt wordt in onze Kliniek krijgt u nog 2 extra afspraken. En gaat u met uw nieuwe tand of brug weer terug naar uw eigen tandarts.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Verloop Behandeling
              <span className="block text-red-600 text-2xl md:text-3xl mt-2">
                Stap voor stap naar uw nieuwe glimlach
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Wij begeleiden u door het hele proces van uw implantaatbehandeling. 
              Hieronder vindt u een overzicht van alle stappen die we samen doorlopen.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl transform -rotate-6"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-red-200 to-red-300 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Belangrijke informatie</h2>
              <ul className="space-y-4">
                <motion.li 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600">De totale behandeling duurt ongeveer 3 maanden</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <svg className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-600">We zorgen voor uitgebreide nazorg en begeleiding</p>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentSteps.map((step, index) => (
            <TreatmentStep
              key={step.title}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">
            Wij wensen u veel plezier en gemak van uw implantaat. Indien u nog vragen heeft kunt u altijd contact met ons opnemen.
          </p>
          <p className="font-semibold text-gray-900 mb-8">
            H. van der Burg
            <br />
            Tandarts-Implantoloog
          </p>
          <a
            className="inline-block bg-red-600 text-white text-sm rounded-md p-3 px-8 uppercase font-medium transition-colors duration-200 hover:bg-red-700"
            href="/afspraak-maken"
          >
            Afspraak maken
          </a>
        </motion.div>
      </main>
    </div>
  );
};

export default VerloopBehandeling;
