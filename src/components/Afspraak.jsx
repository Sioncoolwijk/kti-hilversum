import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { 
  CalendarDaysIcon,
  ClockIcon,
  PhoneIcon,
  BellAlertIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AppointmentType = ({ icon: Icon, title, time, phone, description, isUrgent }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className={`relative overflow-hidden rounded-2xl ${
      isUrgent ? 'bg-gradient-to-br from-red-600 to-red-700 text-white' : 'bg-white'
    }`}
  >
    {/* Decorative pattern */}
    <div className={`absolute inset-0 opacity-5 ${isUrgent ? 'text-black' : 'text-red-600'}`}>
      {[...Array(6)].map((_, i) => (
        <Icon key={i} className="w-12 h-12 absolute" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`
        }} />
      ))}
    </div>

    <div className="relative p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${
          isUrgent ? 'bg-white/10' : 'bg-red-50'
        }`}>
          <Icon className={`w-6 h-6 ${
            isUrgent ? 'text-white' : 'text-red-600'
          }`} />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="space-y-4">
        <p className={isUrgent ? 'text-white/90' : 'text-gray-600'}>
          {description}
        </p>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ClockIcon className={`w-5 h-5 ${
              isUrgent ? 'text-white/80' : 'text-gray-500'
            }`} />
            <span className={isUrgent ? 'text-white/80' : 'text-gray-500'}>
              {time}
            </span>
          </div>
        </div>

        <a
          href={`tel:${phone.replace(/-/g, '')}`}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200 ${
            isUrgent 
              ? 'bg-white text-red-600 hover:bg-red-50' 
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}
        >
          <PhoneIcon className="w-4 h-4" />
          <span>{phone}</span>
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Afspraak = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Afspraak Maken
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-2 bg-red-600 mt-2"
                />
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Maak eenvoudig een afspraak voor uw tandheelkundige zorg. Voor reguliere afspraken 
                of spoedeisende hulp, wij staan voor u klaar.
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50 rounded-xl">
                    <BellAlertIcon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Openingstijden</h3>
                    <p className="text-sm text-gray-600">Maandag t/m donderdag: 08:30 - 17:00</p>
                    <p className="text-sm text-gray-600">Vrijdag: 08:30 - 14:00</p>
                  </div>
                </div>
                <a
                  href="/openingstijden"
                  className="text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-2"
                >
                  <span>Bekijk alle openingstijden</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Appointment Types */}
          <div className="grid md:grid-cols-2 gap-6">
            <AppointmentType
              icon={CalendarDaysIcon}
              title="Reguliere Afspraak"
              time="Bellen tussen 9:00 - 12:30"
              phone="035-6261200"
              description="Bij ons kunt u terecht op afspraak. Onze patiënten kunnen binnen 20 werkdagen terecht voor een controle. In overleg zorgen we ervoor dat verschillende behandelingen zo veel mogelijk op elkaar aansluiten."
            />

            <AppointmentType
              icon={BellAlertIcon}
              title="Spoed"
              time="Bellen tussen 12:30 - 17:00"
              phone="035-6261202"
              description="Spoedbehandelingen voeren we zo veel mogelijk op dezelfde dag uit. Of we nemen noodmaatregelen zodat u pijnvrij bent tot de daadwerkelijke behandeling plaatsvindt."
              isUrgent
            />
          </div>
        </main>
      </div>
      
    </>
  );
};

export default Afspraak;
