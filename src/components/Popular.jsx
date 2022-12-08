function Popular() {
  const getPopular = async () => {
    const api = await fetch();
    const data = await api.json();
  };

  return (
    <div>
      <h1>Popular</h1>
    </div>
  );
}

export default Popular;
