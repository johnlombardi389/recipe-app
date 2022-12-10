import { NavLink } from "react-router-dom";
// Style
import styled from "styled-components";
// Icons
import { GiOrange, GiBellPepper, GiChefToque } from "react-icons/gi";

function Nav() {
  return (
    <StyledHeader>
      <nav>
        <NavLink to="/">
          <Logo>
            <GiOrange />
            <p>Company Name</p>
          </Logo>
        </NavLink>
        <div>
          <ul>
            <li>
              <GiBellPepper />
            </li>
            <li>
              <GiChefToque />
            </li>
          </ul>
        </div>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  padding: 2% 20%;
  background: #fbbb62;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        padding: 0 1rem;
        svg {
          width: 2rem;
          height: 2rem;
          cursor: pointer;
        }
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    width: 3rem;
    height: 3rem;
    padding-right: 1rem;
  }
  p {
    font-size: 1rem;
    color: blue;
  }
`;

export default Nav;
