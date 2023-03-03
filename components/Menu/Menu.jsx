import { useState, useEffect, useRef } from "react";
import MUIButton from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import { Button } from "../";
import Styles from "./Styles";
import { getCategories } from "../../services";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from "next/link";

// material-ui
import { Menu as Menuu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";




const Menu = () => {

  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const handleClose = (event) => {
    // check if the click event occurred within the menu
    if (anchorEl && anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <Styles className="menu">
      <ul>
        <li>
          <FadeInContainer delay={350}>
            <MUIButton color="primary" component="a" href="/">
              Home
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={350}>
            <MUIButton color="primary" component="a" href="/#about">
              About
            </MUIButton>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={500}>
            <MUIButton
              component="a"
              id="basic-button"
              aria-controls={anchorEl ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
              
            >
              Geoinformatics
              <ArrowDropDownIcon/>
            </MUIButton>
            <Menuu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              onMouseLeave={handleMouseLeave}
         
            >
              {categories.map((category, index) => (
                <MenuItem onClick={handleClose} key={category.slug} > 
                  <Link href={`/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </MenuItem>
              ))}
            </Menuu>
          </FadeInContainer>
        </li>
        <li>
          <FadeInContainer delay={800}>
            <MUIButton component="a" href="/#contact">
              Contact
            </MUIButton>
          </FadeInContainer>
        </li>

        <li>
          <FadeInContainer delay={950}>
            <Button size="medium" href="/assets/nimrod.pdf" target="_blank">
              Resume
            </Button>
          </FadeInContainer>
        </li>
      </ul>
    </Styles>
  );
};

export default Menu;

