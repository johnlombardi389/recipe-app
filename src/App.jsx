import { Routes, Route } from "react-router-dom";
// Components
import Nav from "./components/Nav";
import Search from "./components/Search";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
