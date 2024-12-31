import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const PreventionCard = ({ title, description, icon: Icon, index }) => (
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

const Preventie = () => {
  const preventionSteps = [
    {
      title: "Dagelijkse Mondverzorging",
      description: "Op de juiste manier poetsen, flossen, stokeren en ragen zijn essentieel voor een gezonde mond.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Regelmatige Controle",
      description: "Periodieke controles door onze tandarts en het team helpen problemen vroeg op te sporen.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Herinneringsservice",
      description: "Wij sturen u automatisch een bericht als het tijd is voor uw periodieke mondonderzoek.",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
      )
    }
  ];

  return (
    <>
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
                Preventie
                <span className="block text-red-600 text-2xl md:text-3xl mt-2">
                  Voorkomen is beter dan genezen
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Een gezonde mond en een mooi gebit beginnen bij preventie. Door goede preventieve zorg 
                kunt u veel tandheelkundige problemen voorkomen.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              {/* Abstract decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-200 to-red-300 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Wist u dat?</h2>
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
                    <p className="text-gray-600">Regelmatige controles kunnen tot 90% van de tandproblemen voorkomen</p>
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
                    <p className="text-gray-600">Goede mondverzorging draagt bij aan uw algehele gezondheid</p>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {preventionSteps.map((step, index) => (
              <PreventionCard
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
                index={index}
              />
            ))}
          </div>
        </main>
      </div>
      
    </>
  );
};

export default Preventie;
