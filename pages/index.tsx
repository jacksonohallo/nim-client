import axios from "axios";
import type { NextPage } from "next";
import { About, Contact, Hero } from "../sections";



const Home: NextPage = () => {

  return (
    <div className="home">
      <Hero />
      <About />
      <Contact />
    </div>
  );
};




export default Home;
