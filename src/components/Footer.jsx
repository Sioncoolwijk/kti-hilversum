import { logo } from "../assets";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <a href="/" className="block">
              <img
                src={logo}
                alt="KTI Hilversum Logo"
                className="w-32 object-contain"
              />
            </a>
            <p className="text-gray-600 text-sm">
              Bij KTI Hilversum kunt u terecht voor diverse tandheelkundige zorg,
              uitgevoerd door ervaren specialisten.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookSquare className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Handige Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/afspraak" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Afspraak Maken
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Ons Team
                </a>
              </li>
              <li>
                <a href="/tarieven" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tarieven
                </a>
              </li>
              <li>
                <a href="/spoed" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Spoedgevallen
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CiLocationOn className="text-gray-400 text-xl" />
                <a 
                  href="https://www.google.com/maps?q=Utrechtseweg+79A,+1213+TM+Hilversum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Utrechtseweg 79 A<br />
                  1213 TM Hilversum
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <BsTelephone className="text-gray-400" />
                <a href="tel:035-6261200" className="text-gray-600 hover:text-blue-600 transition-colors">
                  035-6261200
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdMail className="text-gray-400" />
                <a href="mailto:info@kti-hilversum.nl" className="text-gray-600 hover:text-blue-600 transition-colors">
                  info@kti-hilversum.nl
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Openingstijden</h3>
            <div className="space-y-2 text-gray-600">
              <p>Telefonische bereikbaarheid:</p>
              <p className="text-sm">ma t/m vr: 9:00 - 12:30</p>
              <a
                href="/openingstijden"
                className="inline-block mt-4 text-red-600 hover:text-blue-700 transition-colors"
              >
                Bekijk alle openingstijden →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} KTI-Hilversum. Alle rechten voorbehouden</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* <a href="/privacy" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="/voorwaarden" className="hover:text-blue-600 transition-colors">
                Algemene Voorwaarden
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
