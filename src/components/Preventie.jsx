import Header from "./Header";
import Footer from "./Footer";

const Preventie = () => {
  const content = `Een gezonde mond en een mooi gebit beginnen bij preventie. U kent vast het gezegde "voorkomen is beter dan genezen". Dat geldt ook voor uw gebit. Enkele belangrijke aspecten zijn op de juiste manier poetsen, flossen, stokeren of ragen en regelmatige controle van uw gebit door onze tandarts en het team.

  Wij sturen u bericht als het weer tijd is voor het periodieke mondonderzoek.`;

  return (
    <div>
      <Header />
      <main className="px-6 py-12 mx-auto my-6 max-w-4xl min-h-screen">
        <h1 className="text-red lg:text-6xl md:text-5xl sm:text-4xl font-bold my-6">
          Preventie
        </h1>
        <div className="font-serif text-lg">
          <p className="whitespace-pre-line my-4">{content}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Preventie;
