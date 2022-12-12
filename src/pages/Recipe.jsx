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
        </RecipeIntroText>
        <img src={details.image} alt={details.title} />
      </RecipeIntro>
    </section>
  );
}

const RecipeIntro = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecipeIntroText = styled.div`
  h4 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
`;

export default Recipe;
