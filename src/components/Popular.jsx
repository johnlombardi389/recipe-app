import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Style
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=8`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <section>
      <StyledPopular>
        <h3>Popular Recipes</h3>
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            snap: true,
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </StyledPopular>
    </section>
  );
}

const StyledPopular = styled.div`
  margin: 4rem 0rem;
  h3 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: -10%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
