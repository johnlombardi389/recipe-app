import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Style
import styled from "styled-components";

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
    <section>
      {searchedRecipes.length === 0 ? (
        <NoResults>Your search had no matches, please try again</NoResults>
      ) : (
        ""
      )}
      <Grid>
        {searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          );
        })}
      </Grid>
    </section>
  );
}

const Grid = styled.main`
  min-height: 40vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const NoResults = styled.p`
  font-size: 3rem;
  text-align: center;
  padding: 5rem;
  background: purple;
  border-radius: 2rem;
`;

export default Searched;
