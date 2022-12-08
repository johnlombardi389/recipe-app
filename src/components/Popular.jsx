function Popular() {
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
  };

  return (
    <div>
      <h1>Popular</h1>
    </div>
  );
}

export default Popular;
