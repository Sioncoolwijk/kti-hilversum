import Header from "./Header";
import Footer from "./Footer";

const Kwaliteit = () => {
  const content_one = `Bij goede zorg en aandacht voor uw gebit staat kwaliteit voorop. Daarom besteden wij veel aandacht aan zorgvuldige informatie en goede service aan u. Goede behandelingen, materialen en administratie zijn hierbij essentieel. Wij hanteren daarvoor procedures die gebaseerd zijn op richtlijnen van de beroepsvereniging en wetenschappelijke verenigingen in de mondzorg. Een goede klachtenbehandeling hoort daar ook bij.
  
  Onze praktijk werkt aan het op peil houden van de kwaliteit. Binnen de tandheelkunde zijn diverse kwaliteitsbevorderende activiteiten beschikbaar. Onze praktijk besteedt tijd en aandacht aan de volgende zaken:`;

  const opties = [
    { info: "Lidmaatschap wetenschappelijke vereniging" },
    { info: "Lezen vakliteratuur" },
    { info: "Volgen van bij- en nascholing" },
    { info: "Bijwonen intercollegiaal overleg" },
    { info: "Bijwonen Studiegroepen" },
    {
      info: "Implementeren van nieuwe richtlijnen, veldnormen, gedragsregels en praktijkwijzers",
    },
    { info: "Bijwonen Themaprojecten" },
    { info: "Bezoeken klinische avonden" },
  ];

  const content_two = `Uw mening stellen wij buitengewoon op prijs, heeft u suggesties hoe wij u beter van dienst kunnen zijn? Neem dan contact met ons op. Ook kunt u het patient tevredenheids onderzoek invullen bij ons op de praktijk. Zo kunnen wij ervoor zorgen dat wij goede kwaliteit blijven leveren.`;

  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Kwaliteit
        </h1>
        <div className="font-serif text-lg">
          <p className="whitespace-pre-line my-4">{content_one}</p>
          <ul className="list-disc p-6 font-serif">
            {opties.map((optie, index) => (
              <li key={index}>{optie.info}</li>
            ))}
          </ul>
          <p className="whitespace-pre-line my-4">{content_two}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kwaliteit;
