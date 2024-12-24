import Header from "./Header";
import Footer from "./Footer";

const Afspraak = () => {
  const content_one = `Bij ons kunt u terecht op afspraak. Onze patiënten kunnen binnen 20 werkdagen terecht voor een controle.`;

  const content_two = `Spoedbehandelingen voeren we zo veel mogelijk op dezelfde dag uit. Of we nemen noodmaatregelen zodat u pijnvrij bent tot de daadwerkelijke behandeling plaatsvindt.`;

  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen font-serif">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-8">
          Afspraak Maken
        </h1>

        <section className="text-lg">
          <h3 className="text-red lg:text-2xl md:text-xl sm:text-lg font-semibold my-4">
            Standaard
          </h3>
          <p className="whitespace-pre-line mb-4">
            {content_one} Bellen voor een afspraak kan tussen 9:00 en 12:30 op{" "}
            <a href="tel:0356261200" className="text-red underline">
              035-6261200
            </a>
            .
          </p>
          <p className="whitespace-pre-line mb-7">
            In overleg met u zorgen we ervoor dat de verschillende behandelingen
            zo veel mogelijk op elkaar aansluiten.
          </p>

          <h3 className="text-red lg:text-2xl md:text-xl sm:text-lg font-semibold my-4">
            Spoed
          </h3>
          <p className="whitespace-pre-line mb-4">
            {content_two} In geval van pijnklachten zijn wij tussen 12:30 en
            17:00 te bereiken op{" "}
            <a href="tel:0356261202" className="text-red underline">
              035-6261202
            </a>
          </p>
          <p className="whitespace-pre-line">
            Voor eventuele spoedeisende hulp buiten praktijkuren kunt u bellen
            met de Mondzorgpoli{" "}
            <a href="tel:0882632700" className="text-red underline">
              088-2632700
            </a>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Afspraak;
