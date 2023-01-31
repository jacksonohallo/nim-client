import Container from "@mui/material/Container";
import Image from "next/image";
import { FadeInContainer } from "../../components";
import Styles from "./Styles";

const About = () => {
  return (
    <Styles id="about" className="about">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>About</h2>
            </FadeInContainer>
          </header>
          <div className="about__body">
            <FadeInContainer lazyLoad>
              <div className="about__image">
                <Image
                  src="/assets/images/me.jpeg"
                  alt="nimrod kibet"
                  width={212}
                  height={212}
                />
                <div className="about__image__mask" />
              </div>
            </FadeInContainer>
            <div className="about__text">
              <FadeInContainer lazyLoad>
                <p>
                I’m a geospatial analyst with an adept knowledge and experience in geodata acquisition, analysis, and visualization. My goal is to bridge geoinformatics concepts and mainstream IT  to problem solving. I am always looking take on new challenges, practice my craft and learn/relearn.
I have hands-on experience in Esri products including cloud-based GIS technologies, spatial modelling, and spatial simulation. Additionally, I am a certified EIA/EA associate expert with an experience in oil and gas sector. I am keen on sustainable development with key interest in environmental management, natural resource management and climate change.

                </p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <p>Below is a list of GIS softwares and  programming/scripting languages that I am skilled in:</p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <ul className="about__skills">
                  <li>QGIS</li>
                  <li>Agisoft Metashape</li>
                  <li>eCognition </li>
                  <li>CAD</li>
                  <li>PostgreSQL</li>
                  <li>Agent based modelling (GAMA)</li>
                  <li>Python</li>
                  <li>Google Earth Engine</li>
                  <li>JavaScript</li>
                  <li>  Esri products</li>
                  </ul>
              </FadeInContainer>
            


              


            </div>
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default About;
