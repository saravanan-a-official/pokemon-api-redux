import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import PokemonDetails from "../components/pokemon-details";
import PokemonListPage from "../components/pokemon-list-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PokemonListPage />} />
        <Route path="/pokemonDetails/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
