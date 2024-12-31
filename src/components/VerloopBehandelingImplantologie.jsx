import { motion } from "framer-motion";

const TreatmentCard = ({ title, description, icon: Icon, index }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-8 overflow-hidden group"
  >
    {/* Decorative number */}
    <span className="absolute -right-4 -top-4 text-[120px] font-bold text-red-50 group-hover:text-red-100 transition-colors duration-300">
      {index + 1}
    </span>
    <div className="relative flex items-start gap-4">
      <div className="p-3 bg-red-50 rounded-lg">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

const VerloopBehandelingImplantologie = () => {
  const treatmentSteps = [
    {
      title: "Bevestiging en recept",
      description: "Een week voordat de behandeling plaatsvindt krijgt u van ons een brief met recepten voor uw apotheek. Let op met bloedverdunners.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      )
    },
    {
      title: "Eerste behandelfase",
      description: "Plaatsing van de implantaten onder plaatselijke verdoving. Er worden 2 of 4 implantaten geplaatst met speciale dopjes.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    },
    {
      title: "Controle en nazorg",
      description: "De dag na de ingreep controleren we de wond en maken een foto. Na 10 dagen worden de hechtingen verwijderd.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>
      )
    },
    {
      title: "Vastgroeifase",
      description: "Een rustperiode van 8 weken waarin het bot aan de implantaten vastgroeit. Vermijd belasting in deze periode.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Tweede behandelfase",
      description: "Na de vastgroeiperiode worden de implantaten opgezocht en voorbereid voor de definitieve prothese.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
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
                Implantologie stap voor stap
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Een implantaatbehandeling bestaat uit verschillende fasen. Wij begeleiden u 
              door het hele proces en zorgen voor een comfortabele ervaring.
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
                  <p className="text-gray-600">De behandeling duurt ongeveer 8-12 weken in totaal</p>
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
                  <p className="text-gray-600">U kunt tijdens de behandeling gewoon uw prothese blijven dragen</p>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentSteps.map((step, index) => (
            <TreatmentCard
              key={step.title}
              title={step.title}
              description={step.description}
              icon={step.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Wij wensen u veel plezier en gemak van uw implantaten. Indien u nog vragen heeft kunt u te allen tijde contact met ons opnemen.
          </p>
          <p className="font-semibold text-gray-900 mb-8">
            H. van der Burg
            <br />
            Tandarts-Implantoloog
          </p>
          <a
            className="inline-block bg-red-600 text-white text-sm rounded-md p-3 px-8 uppercase font-medium transition-all duration-200 hover:bg-red-700 hover:shadow-lg"
            href="/afspraak-maken"
          >
            Afspraak maken
          </a>
        </motion.div>
      </main>
    </div>
  );
};

export default VerloopBehandelingImplantologie;
