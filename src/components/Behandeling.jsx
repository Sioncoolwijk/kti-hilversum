import Header from "./Header";
import Footer from "./Footer";

const Behandeling = () => {
  const content_one = `Graag zien we u regelmatig voor een periodieke controle. Tijdens dit bezoek nemen we de dagelijkse mondverzorging met u door, zodat uw gebit en mond gezond blijven. Indien nodig ondernemen we actie om de mondhygiëne te verbeteren.
  Indien er problemen in uw gebit worden geconstateerd, bespreekt de tandarts met u of extra behandeling nodig is. Ook vertelt de tandarts u over:
  `;

  const content_two = `Kleine ingrepen bespreken we direct met u en de behandeling volgt, indien nodig, op korte termijn. U kunt daarbij denken aan een eenvoudige gebitsreiniging of het plaatsen van een vulling. Bij uitgebreide behandelingen informeren wij u over de kosten. Desgewenst kan het behandelplan met de bijbehorende kosten schriftelijk worden vastgelegd. Wij doen dit in elk geval altijd voor behandelingen vanaf € 250,-. Na uw instemming voeren we de afgesproken behandeling uit. Dat kan over het algemeen binnen 30 werkdag(en).
  
  Bij betalen vindt u meer informatie over de kosten van behandelingen, facturatie en de betalingsmogelijkheden.

  De informatie over uw gebit en de historie van de behandelingen slaan wij op in onze computer. Uiteraard is dit systeem goed beveiligd. Wij bewaren de gegevens minstens 15 jaar. Op uw (schriftelijk) verzoek kunnen we uw gegevens ook doorzenden naar een andere behandelaar.`;

  const opties = [
    { info: "de te verwachten resultaten" },
    { info: "de risico's van een behandeling" },
    { info: "het aantal behandelingen" },
    { info: "en de duur van de behandelingen" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6 mx-[8rem] my-[3rem]">
        <div>
          <h1 className="text-red text-6xl font-bold my-6">Behandeling</h1>
          <div className="font-serif">
            <p className="whitespace-pre-line">{content_one}</p>
            <ul className="list-disc p-6">
              {opties.map((optie, index) => (
                <li key={index}>{optie.info}</li>
              ))}
            </ul>
            <p className="whitespace-pre-line">{content_two}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Behandeling;
