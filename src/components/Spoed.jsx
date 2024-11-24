import Header from "./Header";
import Footer from "./Footer";

const Spoed = () => {
  return (
    <div>
      <Header />

      <div className="flex-grow mx-auto rounded-lg shadow-md p-6 m-10 transform hover:shadow-lg max-w-[85vh]">
        <h1 className="text-red text-lg font-bold">Spoed</h1>
        <p>
          Voor eventuele spoedeisende hulp buiten praktijkuren kunt u bellen met
          de Mondzorgpoli{" "}
          <a className="text-red" href="tel:0882632700">
            088-2632700
          </a>
        </p>

        <p>
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
