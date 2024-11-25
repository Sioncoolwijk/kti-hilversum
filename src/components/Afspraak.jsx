import Header from "./Header";
import Footer from "./Footer";

const Afspraak = () => {
  const content_one = `Bij ons kunt u terecht op afspraak. Onze patiënten kunnen binnen 20 werkdagen terecht voor een controle.`;

  const content_two = `Spoedbehandelingen voeren we zo veel mogelijk op dezelfde dag uit. Of we nemen noodmaatregelen zodat u pijnvrij bent tot de daadwerkelijke behandeling plaatsvindt.`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6 mx-[8rem]">
        <div>
          <h1 className="text-red text-6xl font-bold my-8">Afspraak Maken</h1>
          <h3 className="text-red text-lg font-serif font-semibold">
            Standaard
          </h3>
          <p className="whitespace-pre-line font-serif mb-4">
            {content_one} Bellen voor een afspraak kan tussen 9:00 en 12:30 op{" "}
            <a
              href="tel:0356261200"
              className="text-red underline font-semibold"
            >
              035-6261200
            </a>
            .
          </p>
          <p className="whitespace-pre-line font-serif mb-7">
            In overleg met u zorgen we ervoor dat de verschillende behandelingen
            zo veel mogelijk op elkaar aansluiten.
          </p>
          <h3 className="text-red text-lg font-serif font-semibold">Spoed</h3>
          <p className="whitespace-pre-line font-serif">
            {content_two} In geval van pijnklachten zijn wij tussen 12:30 en
            17:00 te bereiken op{" "}
            <a
              href="tel:0356261202"
              className="text-red underline font-semibold"
            >
              035-6261202
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Afspraak;
