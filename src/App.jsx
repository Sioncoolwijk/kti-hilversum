import Header from "./components/Header";
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Mogelijkheden from "./components/Mogelijkheden";
import Uitleg from "./components/Uitleg";
import Footer from "./components/Footer";
// import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <Mogelijkheden />
      <Uitleg />
      <Footer />
    </>
  );
};

{
  /* <motion.div
initial={{ opacity: 0, y: 0 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
> */
}

export default App;
