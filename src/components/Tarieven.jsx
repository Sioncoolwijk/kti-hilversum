import Header from "./Header";
import Footer from "./Footer";

const Tarieven = () => {
  const content = `De tandartsrekening is opgebouwd uit de verschillende prestaties die tijdens een behandeling hebben plaatsgevonden. Op de rekening staat elke prestatie omschreven met een code.`;

  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Tarieven
        </h1>
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
      </main>
      <Footer />
    </div>
  );
};

export default Tarieven;
