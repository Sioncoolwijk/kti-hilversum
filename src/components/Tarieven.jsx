import Header from "./Header";
import Footer from "./Footer";

const Preventie = () => {
  const content = `De tandartsrekening is opgebouwd uit de verschillende prestaties die tijdens een behandeling hebben plaatsgevonden. Op de rekening staat elke prestatie omschreven met een code.`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6 mx-[8rem] my-[3rem]">
        <div>
          <h1 className="text-red text-6xl font-bold my-6">Tarieven</h1>
          <div className="font-serif text-lg">
            <p className="whitespace-pre-line">{content}</p>
            <p className="whitespace-pre-line my-4">
              Vragen over tarieven? Neem{" "}
              <a href="/telefoon" className="text-red underline font-semibold">
                contact
              </a>{" "}
              op met ons.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Preventie;
