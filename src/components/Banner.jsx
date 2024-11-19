import { stockwoman } from "../assets";

const Banner = () => {
  return (
    <div
      className="flex h-screen items-center max-h-[40rem] bg-cover bg-center"
      style={{ backgroundImage: `url(${stockwoman})` }}
    >
      <div className="ml-36 center-align">
        <h1 className="text-3xl font-semibold text-white">
          Welkom bij KTI Hilversum
        </h1>
        <p className="text-xl font-serif text-white">
          Kliniek voor Tandheelkunde en Implantologie
        </p>
        <div className="mt-[2rem]">
          <a
            className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-lighttransition-colors duration-500 hover:bg-opacity-50"
            href="/afspraak-maken"
          >
            afspraak maken
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
