// Style
import styled from "styled-components";
// Images
import person1 from "../assets/person1.png";

function Info() {
  return (
    <section>
      <FlexDiv>
        <Description>
          <h5>We make dinner easy</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
            excepturi deleniti! Sint laudantium sit beatae hic necessitatibus
            corporis eos exercitationem, ipsa eveniet eaque, asperiores
            dignissimos eum voluptate? Vitae, ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            illo consectetur aliquam asperiores saepe eum sequi voluptatum autem
            odit sapiente!
          </p>
        </Description>

        <Graphic>
          <img src={person1} alt="Person reading cookbook" />
        </Graphic>
      </FlexDiv>
    </section>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1rem;
  h5 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
  p {
    font-family: "Crimson Text", serif;
    font-weight: 400;
    font-size: 1.2rem;
    padding-bottom: 2rem;
    line-height: 2.5rem;
  }
`;

const Graphic = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default Info;
