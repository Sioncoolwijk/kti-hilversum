import Header from "./Header";
import { stockwoman } from "../assets";
import Footer from "./Footer";

const Afspraak = () => {
  return (
    <div>
      <Header />
      <div
        className="flex h-[30vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${stockwoman})` }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white">Afspraak maken</h1>
          <p className="text-xl font-serif text-white">
            Bellen met de praktijk
          </p>
          <div className="mt-[2rem]"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-[4rem] mb-[4rem] border-2 border-red border-opacity-15 rounded-md shadow-lg p-8 m-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Afspraak Maken
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Bij ons kunt u terecht op afspraak. Onze patiënten kunnen binnen 20
          werkdagen terecht voor een controle. Bellen voor een afspraak kan
          tussen <span className="font-semibold">9:00 en 12:30</span> op{" "}
          <a href="tel:0356261200" className="text-blue-500 underline">
            035-6261200
          </a>
          .
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Spoedbehandelingen voeren we zo veel mogelijk op dezelfde dag uit. Of
          we nemen noodmaatregelen zodat u pijnvrij bent tot de daadwerkelijke
          behandeling plaatsvindt. In geval van pijnklachten zijn wij tussen{" "}
          <span className="font-semibold">12:30 en 17:00</span> te bereiken op{" "}
          <a href="tel:0356261202" className="text-blue-500 underline">
            035-6261202
          </a>
          .
        </p>
        <p className="text-gray-700 leading-relaxed">
          In overleg met u zorgen we ervoor dat de verschillende behandelingen
          zo veel mogelijk op elkaar aansluiten.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Afspraak;
