import { Container } from "@mui/material";
import { Social } from "../";
import Styles from "./Styles";

const Footer = () => {
  return (
    <Styles className="footer">
      <Social />
      <Container>Designed and built by Nathan S. Santos</Container>
    </Styles>
  );
};

export default Footer;
