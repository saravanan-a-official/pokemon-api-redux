import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import FetchAllPokeDetails from "./fetch-all-poke-details";
import FetchPokemonDetail from "./fetch-pokemon-detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FetchAllPokeDetails />} />
        <Route path="/pokemonDetails/" element={<FetchPokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
