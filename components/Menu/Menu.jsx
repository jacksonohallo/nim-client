import MUIButton from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import { Button } from "..";
import { Menu as Menuu, MenuItem } from '@mui/material';
import Styles from "./Styles";
import { useState, useEffect } from 'react';
import  {getCategories} from '../../service';
import Link from "next/link";


const Menu = () => {
  const [categories, setCategories] =  useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

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
            <MUIButton component="a" onClick={handleClick}>
              Geoinformatics
            </MUIButton>
            <Menuu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {categories.map((category, index) => (
            <Link key={category.slug} href={`/category/${category.slug}`}passHref>
                  <MenuItem onClick={handleClose}>  {category.name}</MenuItem>
                </Link>
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
            <Button
              size="medium"
              href="/assets/nimrod.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </FadeInContainer>
        </li>
      </ul>
    </Styles>
  );
};

export default Menu;
