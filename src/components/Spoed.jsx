import Header from "./Header";
import Footer from "./Footer";

const Spoed = () => {
  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Spoed
        </h1>
        <div className="font-serif text-lg">
          <p className="whitespace-pre-line my-4">
            Voor eventuele spoedeisende hulp buiten{" "}
            <a className="text-red underline" href="/openingstijden">
              praktijkuren
            </a>{" "}
            kunt u bellen met de Mondzorgpoli{" "}
            <a className="text-red underline" href="tel:0882632700">
              088-2632700
            </a>
          </p>
          <p className="whitespace-pre-line my-4">
            Tijdens praktijkuren zijn wij te bereiken op{" "}
            <a className="text-red underline" href="tel:0356261202">
              035-6261202
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Spoed;
