import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from '@mui/icons-material/Twitter'; 
import FacebookIcon from '@mui/icons-material/Facebook';

import { FadeInContainer } from "..";
import Styles from "./Styles";
import { Button } from "@mui/material";

const Social = () => {
  return (
    <Styles className="social">
      <div className="content">
        <div className="left">
          <FadeInContainer delay={1900}>
            <IconButton
              component="a"
              href="https://github.com/Nimrod2022"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </FadeInContainer>
          <FadeInContainer delay={2150}>
            <IconButton
              component="a"
              href="https://www.instagram.com//"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </IconButton>
          </FadeInContainer>
          <FadeInContainer delay={2300}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </FadeInContainer>
        </div>
        <div className="right">
          <FadeInContainer delay={1900}>
            <div className="email">
              {/* <a
                href=" nimrodmadelakibet@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="underline-hover"
              >
                nimrodmadelakibet@gmail.com
              </a> */}
               <IconButton
              component="a"
              href="https://wa.me/0723649647"
              target="_blank"
              rel="noreferrer"
            >
                 < WhatsAppIcon />
        
            </IconButton>
            </div>
          </FadeInContainer>
          <FadeInContainer delay={2300}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </IconButton>
          </FadeInContainer>
          <FadeInContainer delay={2300}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
              target="_blank"
              rel="noreferrer"
            >
                    <FacebookIcon />
            </IconButton>
          </FadeInContainer>
        </div>
      </div>
    </Styles>
  );
};

export default Social;
