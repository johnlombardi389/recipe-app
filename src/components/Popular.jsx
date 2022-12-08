import { useEffect, useState } from "react";
// Style
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div>
      <StyledPopular>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </StyledPopular>
    </div>
  );
}

const StyledPopular = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export default Popular;
