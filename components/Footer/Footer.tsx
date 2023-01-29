import Container from "@mui/material/Container";
import { Social } from "../";
import { FadeInContainer } from "../";
import Styles from "./Styles";

const Footer = () => {
  return (
    <Styles className="footer">
      <Social />
      <Container>
        <div>Built for N.M.K</div>
      </Container>
    </Styles>
  );
};

export default Footer;
