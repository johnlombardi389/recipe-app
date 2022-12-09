// Style
import styled from "styled-components";
// Icons
import {
  FaYoutube,
  FaInstagram,
  FaTwitterSquare,
  FaTiktok,
} from "react-icons/fa";
import { GiOrange } from "react-icons/gi";

function Footer() {
  return (
    <StyledFooter>
      <Row>
        <div>
          <h5>Recipes</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <h5>Services</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <h5>Discover</h5>
          <List>
            <li>About Us</li>
            <li>Meet the team</li>
            <li>Events</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </List>
        </div>

        <div>
          <Logo>
            <GiOrange />
            <p>Company Name</p>
          </Logo>
          <Socials>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaTiktok />
            </li>
          </Socials>
        </div>
      </Row>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: white;
  padding: 2% 20%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-size: 1.2rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 1rem 0rem;
  line-height: 2rem;
  cursor: pointer;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  svg {
    width: 5rem;
    height: 5rem;
    padding-right: 1rem;
  }
  p {
    font-size: 2rem;
    color: blue;
  }
`;

const Socials = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  svg {
    color: blue;
    width: 2rem;
    height: 2rem;
  }
`;

export default Footer;
