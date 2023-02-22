import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { FadeInContainer } from "../../components";
import Styles from "./Styles";
import Image from "next/image";
import {Box} from "@mui/material"

const Hero = () => {
  const [scrollIconIsVisible, setScrollIconIsVisible] = useState(true);

  const detectScrollDirection = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      setScrollIconIsVisible(false);
    } else {
      setScrollIconIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection, false);

    return () => {
      window.removeEventListener("scroll", detectScrollDirection, false);
    };
  }, []);

  return (
    <Box sx={{display:"flex"}}>
  <Styles>
      <Container maxWidth="lg">
        <div className="content">
          <FadeInContainer delay={1300}>
            <h3>Jambo, Welcome to My Portfolio!</h3>
          </FadeInContainer>
          <FadeInContainer delay={1450}>
            <h1> Nimrod Kibet</h1>
          </FadeInContainer>
          <FadeInContainer delay={1600}>
            <h2>Geospatial Analyst.</h2>
          </FadeInContainer>
          <FadeInContainer delay={1750}>
            <h4>
            I’m a passionate Geospatial Analyst and an aspiring full stack developer. I am currently studying M.Sc. Applied Geoinformatics at the  {" "}
              <a
                href="https://w16.dev/"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
               University of Salzburg, Austria
              </a>
              .
              </h4>
  
          </FadeInContainer>
        </div>
      </Container>
      <FadeInContainer delay={2450}>
        <motion.a
          href="#about"
          className="scroll-to-icon"
          animate={{
            opacity: scrollIconIsVisible ? 1 : 0,
            transform: `scale(${scrollIconIsVisible ? 1 : 0})`,
          }}
          transition={{ duration: 0.25 }}
          initial={false}
        />
      </FadeInContainer>
    </Styles>

    <Image
        src="/assets/Capture.PNG"
        alt="My Image"
        width={300}
        height={50}
      />


    </Box>

  );
};

export default Hero;

