import Container from "@mui/material/Container";
import { Social } from "../";
import { FadeInContainer } from "../";
import Styles from "./Styles";

const Footer = () => {
  return (
    <Styles className="footer">
      <Social />
      <Container>
      <div>@2023 Nimrod Mandela Kibet. All rights reserved.</div>
      </Container>
    </Styles>
  );
};

export default Footer;
