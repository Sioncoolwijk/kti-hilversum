import Header from "./Header";
import Footer from "./Footer";

const Preventie = () => {
  const content = `Een gezonde mond en een mooi gebit beginnen bij preventie. U kent vast het gezegde "voorkomen is beter dan genezen". Dat geldt ook voor uw gebit. Enkele belangrijke aspecten zijn op de juiste manier poetsen, flossen, stokeren of ragen en regelmatige controle van uw gebit door onze tandarts en het team.

  Wij sturen u bericht als het weer tijd is voor het periodieke mondonderzoek.`;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center p-6 mx-[8rem] my-[3rem]">
        <div>
          <h1 className="text-red text-6xl font-bold my-6">Preventie</h1>
          <p className="whitespace-pre-line font-serif">{content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Preventie;
