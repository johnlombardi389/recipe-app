// Components
import Nav from "./components/Nav";
import Search from "./components/Search";
import Footer from "./components/Footer";
// Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
