import Header from "./Header";
import Footer from "./Footer";

const Spoed = () => {
  return (
    <div>
      <Header />

      <div className="flex-grow mx-auto p-6 transform transition hover:scale-105 max-w-[90vh] m-40">
        <h1 className="text-red text-6xl font-bold my-6">Spoed</h1>
        <p>
          Voor eventuele spoedeisende hulp buiten praktijkuren kunt u bellen met
          de Mondzorgpoli{" "}
          <a className="text-red" href="tel:0882632700">
            088-2632700
          </a>
          <br /> <br />
          Tijdens praktijkuren zijn wij te bereiken op{" "}
          <a className="text-red" href="tel:0356261202">
            035-6261202
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Spoed;
