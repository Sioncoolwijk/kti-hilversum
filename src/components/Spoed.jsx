import Header from "./Header";
import Footer from "./Footer";

const Spoed = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Added flex and min-h-screen */}
      <Header />
      <div className="flex-grow flex items-center justify-center p-6">
        {" "}
        {/* Added flex-grow */}
        <div>
          <h1 className="text-red text-6xl font-bold my-6">Spoed</h1>
          <p className="font-serif text-lg">
            Voor eventuele spoedeisende hulp buiten{" "}
            <a className="text-red underline" href="/openingstijden">
              praktijkuren
            </a>{" "}
            kunt u bellen met de Mondzorgpoli{" "}
            <a className="text-red underline" href="tel:0882632700">
              088-2632700
            </a>
            <br /> <br />
            Tijdens praktijkuren zijn wij te bereiken op{" "}
            <a className="text-red underline" href="tel:0356261202">
              035-6261202
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Spoed;
