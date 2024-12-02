import Header from "./Header";
import Footer from "./Footer";

const VerloopBehandelingImplantologie = () => {
  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6 mx-[8rem] my-[3rem]">
        <div>
          <h1 className="text-red font-bold text-5xl mt-6 my-6">
            Verloop Behandeling Implantologie
          </h1>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-red text-md mt-6">Bevestiging en recept</h2>
            Een week voordat de behandeling plaatsvindt krijgt u van ons een
            brief waarin de afspraak wordt bevestigd. Hierin zitten ook een
            tweetal recepten met gebruiksaanwijzing die u bij uw apotheek kunt
            ophalen. Let op: als u twee bloedverdunners gebruikt moet in overleg
            met uw arts 5 dagen van tevoren stoppen.
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-red text-md mt-6">Eerste behandelfase</h2>
            Het plaatsen van de implantaten gebeurt onder plaatselijke
            verdoving. Er wordt een sneetje van ongeveer 3 cm in de onderkaak
            gemaakt. Het tandvlees wordt van de kaak losgemaakt en er worden 2
            of 4 gaatjes geboord. Hierna worden de implantaten in de onderkaak
            geschroefd, ongeveer op de plaats van de originele hoektanden. Er
            zijn dan twee mogelijkheden:
            <ul className="list-disc p-6">
              <li>
                Er komen kleine dopjes op de implantaten en ze worden onder het
                tandvlees geplaatst.
              </li>
              <li>
                Er komen hogere dopjes op waardoor de implantaten al door het
                tandvlees heen steken.
              </li>
            </ul>
            Bij patiënten die bloedverdunners of een hartklep gebrek hebben
            worden de implantaten altijd van hogere dopjes voorzien.
          </p>

          <p className="whitespace-pre-line mt-6">
            <h2 className="text-black text-md t-6">De volgende dag</h2>
            De dag na de ingreep willen wij u graag terug zien. De wond wordt
            bekeken en eventueel een controle foto gemaakt.
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-black text-md t-6">Tandprotheticus</h2>
            Na de ingreep kunt u naar de tandprotheticus gaan die uw huidige
            prothese zal aanpassen. U kunt dan uw originele prothese weer dragen
            en u loopt dus niet zonder tanden, maar u mag er nog niet mee eten!
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-black text-md mt-6">Hechtingen</h2>
            Na ongeveer 10 dagen worden de hechtingen verwijderd. Het is
            verstandig wanneer de hechtingen er nog in zitten zacht voedsel te
            gebruiken.
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-black text-md mt-6">Vastgroeien</h2>
            Nu komt er een rustperiode van ongeveer 8 weken. Het bot kan dan aan
            de implantaten vastgroeien. Het is in deze periode belangrijk om de
            implantaten niet te belasten (dus in de nacht de prothese uit!).
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-red text-md mt-6">Tweede behandelfase</h2>
            Implantaten opzoeken Na de vastgroeiperiode worden de implantaten
            weer opgezocht. Als de implantaten onder het tandvlees zijn
            geplaatst wordt de kaak weer verdoofd en worden er 2 of 4 kleine
            sneetjes boven de implantaten gemaakt.
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-black text-md mt-6">
              Tandprotheticus (fase 2)
            </h2>
            U kunt nu weer naar de tandprotheticus. Het is handig om al van
            tevoren een afspraak hiervoor te maken zodat het vervolg vlot
            verloopt.
          </p>
          <p className="whitespace-pre-line mt-6">
            <h2 className="text-black text-md mt-6">Controle</h2>
            Als alles klaar is zien wij u graag nog een keer terug om te
            controleren of de prothese goed functioneert en het onderhoud goed
            verloopt. Daarna houden wij u ca. 2 x per jaar onder controle.
            Hiervoor moet u zelf even de afspraak maken. Wij wensen u veel
            plezier en gemak van uw implantaten. Indien u nog vragen heeft kunt
            u te allen tijde contact met ons opnemen.
          </p>

          <h2 className="text-black text-md my-6">
            H. van der Burg<br></br>Tandarts-Implantoloog
          </h2>
          <a
            className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-light transition-colors duration-200 hover:bg-opacity-50"
            href="/afspraak-maken"
          >
            afspraak maken
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerloopBehandelingImplantologie;
