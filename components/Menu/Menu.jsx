import { useState, useEffect } from "react";
import MUIButton from "@mui/material/Button";
import FadeInContainer from "../FadeInContainer/FadeInContainer";
import { Button } from "../";
import Styles from "./Styles";
import { getCategories } from "../../services";
import Link from "next/link";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// material-ui
import { Menu as Menuu , styled} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

    const Menu = () => {
  const [categories, setCategories] = useState([]);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  const handleCloseMenu = () => {
    if (isSmallScreen) {
      setTimeout(() => {
        handleClose();
      }, 250); // Wait for 250ms before closing on small screens
    } else {
      handleClose(); // Close immediately on larger screens
    }
  };

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
          <FadeInContainer delay={350} >
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
                <MenuItem onClick={handleClose} key={category.slug}  sx={{
                  // add any custom styles here
                  flex: {
                    xs: '0 0 auto', // allow the menu item to wrap on small screens
                    md: '1 1 auto' // make the menu item grow to fill available space on larger screens
                  },
                  justifyContent: {
                    xs: 'flex-start', // align to the left on small screens
                    md: 'center' // center on larger screens
                  },
                  alignItems: 'center' // center the content vertically
                }} >
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



