import { teamMembers } from "../constants";
import Header from "./Header";
import Footer from "./Footer";
import { stockwoman } from "../assets";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div>
      <Header />
      <div
        className="flex h-[60vh] items-center justify-between p-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${stockwoman})` }}
      >
        <motion.div
          initial={{ y: "50rem" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 55 }}
          viewport={{ once: true }}
        >
          <div className="w-[50vh] text-left text-white">
            <div className="text-lg bg-red bg-opacity-85 rounded-md p-6">
              <h1 className="text-4xl font-semibold mb-4">Team KTI</h1>
              <p className="text-sm font-serif">
                KTI Hilversum is een succesvolle tandartsenpraktijk in
                Hilversum. Wij werken volgens de nieuwste inzichten en
                combineren dat met een grote gastvrijheid, het team heet u van
                harte welkom. In onze kliniek wordt iedere patient door
                zijn/haar vaste tandarts geholpen. Verder zijn wij een
                verwijspraktijk voor implantologie.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <section className="px-8 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-red text-6xl font-bold">Ons team</h1>
          <p className="my-8 text-md font-serif mx-auto max-w-[800px]">
            Maak kennis met de mensen achter onze praktijk. Ons team bestaat uit
            gedreven professionals die samenwerken om de beste zorg te bieden.
            Ontdek wie wij zijn en hoe we elke dag werken aan de gezondheid en
            het welzijn van onze patiënten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// Helper component to display each team member
const TeamMember = ({ name, role, image }) => (
  <div className="text-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
    <img
      src={image}
      alt={name}
      className="w-30 h-70 object-cover rounded-md mb-4"
    />
    <h4 className="text-xl font-semibold mb-2">{name}</h4>
    <p className="text-md font-serif">{role}</p>
  </div>
);

export default Team;
