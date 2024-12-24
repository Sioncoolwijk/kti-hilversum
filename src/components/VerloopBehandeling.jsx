import Header from "./Header";
import Footer from "./Footer";

const VerloopBehandeling = () => {
  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen font-serif">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Verloop Behandeling
        </h1>
        <div className="text-lg">
          <p className="whitespace-pre-line my-4">
            <h2 className="text-red text-md mt-6">Bevestiging en recept</h2>
            Een week voordat de behandeling plaatsvindt, krijgt u van ons een
            brief waarin de afspraak wordt bevestigd. Hierin zitten ook een
            tweetal recepten met gebruiksaanwijzing die u bij uw apotheek kunt
            ophalen.
            <br />
            Let op: als u twee bloedverdunners gebruikt moet in overleg met uw
            arts 5 dagen van tevoren stoppen.
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-red text-md mt-6">
              Eerste behandelfase implanteren
            </h2>
            Het plaatsen van de implantaten gebeurt onder plaatselijke
            verdoving. Er wordt een klein sneetje in het tandvlees gemaakt. Er
            kan dan goed bekeken worden of er voldoende bot aanwezig is. Gebrek
            aan voldoende bot (bijv. door vroegere ontsteking of al langer
            afwezig zijn van tand of kies) zorgt niet alleen voor problemen bij
            het plaatsen van het implantaat, maar betekent vooral dat het
            uiteindelijke resultaat er niet mooi zal uitzien.
            <br />
            Een voorwaarde voor een stralende glimlach is het herstellen van de
            goede contour van het kaakbot. Als er niet voldoende bot aanwezig is
            kan m.b.v. eigen bot of bot vervangend materiaal de kaak weer worden
            opgebouwd. Vaak gebeurt dit gelijktijdig met het plaatsen van het
            implantaat.
            <br />
            Er zijn dan twee mogelijkheden:
            <ul className="list-disc p-6">
              <li>
                Het implantaat wordt volledig onder het tandvlees geplaatst.
              </li>
              <li>
                Er komt een hoger dopje op waardoor het implantaat al door het
                tandvlees heen steekt. Er kan dan in sommige gevallen – als het
                implantaat direct al vast genoeg zit – een noodkroon worden
                gemaakt.
              </li>
            </ul>
            Bij patiënten die bloedverdunners of een hartklep gebrek hebben
            worden de implantaten altijd van hogere dopjes voorzien. Hierna
            wordt het tandvlees gehecht en mag u de prothese enkele dagen niet
            dragen!
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-black text-md t-6">De volgende dag</h2>
            De dag na de ingreep willen wij u graag terug zien. De wond wordt
            bekeken en eventueel een controle foto gemaakt.
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-black text-md t-6">Hechtingen</h2>
            Na ongeveer 10 dagen worden de hechtingen verwijderd. Het is
            verstandig wanneer de hechtingen er nog in zitten deze plek zoveel
            mogelijk te ontzien met het eten.
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-black text-md mt-6">Vastgroeien</h2>
            Nu komt er een rustperiode van ongeveer 8 weken. Het bot kan dan aan
            de implantaten vastgroeien. Het is in deze periode belangrijk om het
            implantaat niet te belasten.
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-red text-md mt-6">
              Tweede behandelfase implanteren
            </h2>
            <h2 className="text-black text-md mt-6">Implantaten opzoeken</h2>
            Na de vastgroeiperiode wordt het implantaat opgezocht. Als het
            implantaat onder het tandvlees is geplaatst wordt de kaak verdoofd
            en wordt er een klein sneetje boven het implantaat gemaakt.
            Vervolgens wordt het dopje uit het implantaat geschroefd en
            vervangen door een hoger dopje dat door het tandvlees heen steekt.
            Als het implantaat in de eerste fase al door het tandvlees heen is
            geplaatst wordt alleen het bestaande dopje vervangen door een ander
            type.
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-black text-md mt-6">Kroon of Brug</h2>
            Als de kroon of brug gemaakt wordt door uw eigen tandarts is het
            handig dat u hiervoor zelf een afspraak maakt. U kunt dan aangeven
            wanneer het implantaat is opgezocht zodat uw eigen tandarts weet
            wanneer hij hiermee verder kan gaan.
            <br />
            Als de kroon of brug gemaakt wordt in onze Kliniek krijgt u nog 2
            extra afspraken. En gaat u met uw nieuwe tand of brug weer terug
            naar uw eigen tandarts.
          </p>

          <p className="whitespace-pre-line my-4">
            <h2 className="text-black text-md mt-6">Controle</h2>
            Indien uw eigen tandarts de kroon of brug maakt zien wij u graag nog
            een keer terug om te kijken of alles goed functioneert en het
            onderhoud goed verloopt. Daarna houdt uw eigen tandarts u onder
            controle.
            <br />
            Indien uw kroon of brug door ons gemaakt is worden m.b.t. de
            controle de afspraken bij ons gemaakt.
          </p>

          <p className="whitespace-pre-line my-4">
            Wij wensen u veel plezier en gemak van uw implantaat. Indien u nog
            vragen heeft kunt u altijd contact met ons opnemen.
          </p>

          <h2 className="text-black text-md my-6">
            H. van der Burg
            <br />
            Tandarts-Implantoloog
          </h2>
          <a
            className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-light transition-colors duration-200 hover:bg-opacity-50"
            href="/afspraak-maken"
          >
            afspraak maken
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerloopBehandeling;
