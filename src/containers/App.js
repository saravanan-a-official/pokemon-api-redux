import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/App.css";
import FetchPokeDetails from "./fetchPokeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<FetchPokeDetails />} />
        {/* <Route path="/pokemonDetails/:id" element={<PokemonDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
