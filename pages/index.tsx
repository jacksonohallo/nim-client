import axios from "axios";
import type { NextPage } from "next";
import { About, Contact, Experience, Hero } from "../sections";

interface HomeProps {
  repositories?: Repository[];
}

const Home: NextPage<HomeProps> = (props) => {
  const { repositories } = props;

  return (
    <div className="home">
      <Hero />
      <About />
      {/* <Experience />
      {repositories?.length && <Projects repositories={repositories} />} */}
      <Contact />
    </div>
  );
};