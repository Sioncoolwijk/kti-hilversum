import { logo } from "../assets";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-gray-200 bg-opacity-55 text-gray-dark">
      <div className="py-16 px-6">
        <div className="flex justify-around items-center space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="hidden lg:block md:block">
            <a href="/" className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Kliniek voor Tandheelkunde en Implantologie (KTI) Hilversum Logo"
                className="object-contain"
                width={100}
              />
            </a>
          </div>
          <div className="max-w-[300px] text-sm hidden lg:block">
            Bij KTI Hilversum kunt u terecht voor diverse tandheelkundige zorg,
            uitgevoerd door ervaren specialisten. Ons doel is om hoogwaardige
            mondzorg te leveren in een toegankelijke omgeving, waar persoonlijke
            aandacht en een warme sfeer centraal staan.
          </div>

          <div className="flex flex-col items-center md:items-start md:text-left p-4">
            <div className="flex flex-row mb-3 ml-[-0.5rem] font-bold">
              <CiLocationOn className="text-3xl" />
              <div className="mt-1 ml-3">Hilversum</div>
            </div>
            <p className="text-md font-serif">
              Utrechtseweg 79 A <br></br>1213 TM Hilversum
            </p>
            <p className="text-sm mt-2 mb-2">
              Telefonische bereikbaarheid: <br></br>ma t/m vr van 9.00-12.30.
            </p>
            <p className="text-md">035-6261200</p>
            <p className="text-md">info@kti-hilversum.nl</p>
          </div>
        </div>
      </div>
      <div className="text-xs text-center p-2">
        <p>
          © {new Date().getFullYear()} KTI-Hilversum. Alle rechten voorbehouden
        </p>
      </div>
    </div>
  );
};

export default Footer;
