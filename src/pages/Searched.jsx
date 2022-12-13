import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// Style
import styled from "styled-components";
// Image
import personNone from "../assets/personNone.png";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&query=${name}&number=25`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <StyledSection>
      <h3>
        {searchedRecipes.length} results for "{params.search}"
      </h3>
      {searchedRecipes.length === 0 ? (
        <NoResults>
          <p>Your search had no matches, please try again</p>
          <img src={personNone} alt="Your search returned no results" />
        </NoResults>
      ) : (
        ""
      )}
      <Grid>
        {searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  h3 {
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.5rem;
    margin: 2rem 0rem;
  }
`;

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-bottom: 5rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    font-size: 1.35rem;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 5rem;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 400;
  p {
    font-size: 2rem;
    color: red;
  }
`;

export default Searched;
