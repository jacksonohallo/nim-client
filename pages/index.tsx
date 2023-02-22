import { Box } from '@mui/material';
import type { NextPage } from "next";
import { About, Contact, Hero } from "../sections";

const Home: NextPage = () => {

  return (
    <Box>
    <Hero />
    <About />
    <Contact />
  </Box>
  
  );
};

export default Home;
