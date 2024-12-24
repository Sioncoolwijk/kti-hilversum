import Header from "./Header";
import Footer from "./Footer";

const Betaling = () => {
  const content_one = `De tandartsrekening is opgebouwd uit de verschillende prestaties die tijdens een behandeling hebben plaatsgevonden. Op de rekening staat elke prestatie omschreven met een code.`;
  const content_two = `De betaling verloopt via Infomedics. U kunt bij Infomedics alle informatie opvragen.`;

  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Betaling
        </h1>
        <div className="font-serif text-lg">
          <p className="whitespace-pre-line my-4">
            {content_one} Aan elke code is een{" "}
            <a href="/tarieven" className="text-red underline font-semibold">
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
              className="text-red underline font-semibold"
            >
              hier
            </a>{" "}
            terecht.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Betaling;
