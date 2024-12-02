import Header from "./Header";
import Footer from "./Footer";

const Betaling = () => {
  const content_one = `De tandartsrekening is opgebouwd uit de verschillende prestaties die tijdens een behandeling hebben plaatsgevonden. Op de rekening staat elke prestatie omschreven met een code.`;
  const content_two = `De betaling verloopt via Infomedics. U kunt bij Infomedics alle informatie opvragen.`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6 mx-[8rem] my-[3rem]">
        <div>
          <h1 className="text-red text-6xl font-bold my-6">Betaling</h1>
          <div className="font-serif text-lg">
            <p className="whitespace-pre-line my-4">
              {content_one} Aan elke code is een{" "}
              <a href="/tarieven" className="text-red underline">
                tarief
              </a>{" "}
              gekoppeld.
            </p>
            <p className="whitespace-pre-line">{content_two}</p>
            <p className="whitespace-pre-line my-4">
              Voor veelgestelde vragen met betrekking tot Infomedics kunt u{" "}
              <a
                href="https://www.infomedics.nl/vraag-en-antwoord"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red underline"
              >
                hier
              </a>{" "}
              terecht.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Betaling;
