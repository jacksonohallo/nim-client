import styled from "styled-components";
import { colors, fonts } from "../../style";

const Styles = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    margin-right:2rem;

    a {
      color: ${colors.green};
      font-family: ${fonts.mono};
    }
  }
`;

export default Styles;
