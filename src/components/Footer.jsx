// Style
import styled from "styled-components";

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
      </Row>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: pink;
  padding: 3rem 0rem;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
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

export default Footer;
