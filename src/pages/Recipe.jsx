import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Style
import styled from "styled-components";
// Icons
import { BsFillClockFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";

function Recipe() {
  const [details, setDetails] = useState({});

  let params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
    console.log(details);
  }, [params.name]);

  return (
    <section>
      <RecipeIntro>
        <RecipeIntroText>
          <h4>How to make {details.title}</h4>
          <ul>
            <li>
              <BsFillClockFill />
              <p>{details.readyInMinutes} minutes</p>
            </li>
            <li>
              <GiKnifeFork />
              <p>{details.servings} servings</p>
            </li>
          </ul>
          <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
        </RecipeIntroText>
        <div>
          <img src={details.image} alt={details.title} />
        </div>
      </RecipeIntro>
      <Ingredients>
        <h4>Ingredients</h4>
        <p>Hello</p>
      </Ingredients>
      <Instructions>
        <h4>Instructions</h4>
        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
      </Instructions>
    </section>
  );
}

const RecipeIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
`;

const RecipeIntroText = styled.div`
  h4 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      svg {
        width: 2rem;
        height: 2rem;
        color: orange;
      }
      p {
        padding: 0 1rem;
        margin-right: 2rem;
        font-family: "Crimson Text", serif;
        font-weight: 400;
        font-size: 1rem;
      }
    }
  }
  p {
    padding-top: 3rem;
    font-family: "Crimson Text", serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

const Instructions = styled.div`
  padding-top: 5rem;
  p {
    padding-top: 1rem;
  }
`;

const Ingredients = styled.div`
  padding-top: 5rem;
  p {
    padding-top: 1rem;
  }
`;

export default Recipe;
