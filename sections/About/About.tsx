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
                Geospatial Analyst with professional and academic experience in
leveraging Geographic Information Systems (GIS) technologies in
problem solving. Adept knowledge in geospatial data collection,
analysis, and visualization with hands-on experience in Esri products
including cloud-based GIS technologies. I have a comfortable
understanding of spatial databases and currently working on my Java
skills. I am very open-minded, communicative, team player and
always willing to learn and take on new challenges.

                </p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <p>The technologies I’ve been working with recently:</p>
              </FadeInContainer>
              <FadeInContainer lazyLoad>
                <ul className="about__skills">
                  <li>ArcGIS pro</li>
                  <li>Spatial simulation (GAMA)</li>
                  <li>Agisoft metashape</li>
                  <li>Survey 123</li>
                  <li>QGIS</li>
                  <li>Java</li>
                  <li>Geodata acquisition</li>
                  <li>Geospatial databases (postgress)</li>
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
