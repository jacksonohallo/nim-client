import { useState, useEffect } from "react";
import MUIButton from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import { Button } from "..";
import Styles from "./Styles";
import { getCategories } from "../services";
import Link from "next/link";

// material-ui
import { Menu as Menuu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Styles className="menu">
      <ul>
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
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Geoinformatics
            </MUIButton>
            <Menuu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categories.map((category, index) => (
                <MenuItem onClick={handleClose} key={category.slug}>
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
