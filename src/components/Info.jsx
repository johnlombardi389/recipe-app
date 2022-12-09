// Style
import styled from "styled-components";
// Images
import person1 from "../assets/person1.png";

function Info() {
  return (
    <section>
      <FlexDiv>
        <Description>
          <h5>Hello</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio hic
            excepturi deleniti! Sint laudantium sit beatae hic necessitatibus
            corporis eos exercitationem, ipsa eveniet eaque, asperiores
            dignissimos eum voluptate? Vitae, ipsam.
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
    font-size: 1.5rem;
  }
  p {
    padding-top: 1rem;
    line-height: 2rem;
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
