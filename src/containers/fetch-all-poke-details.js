import { getAllPokeDataOk } from "../redux/action";
import { useDispatch } from "react-redux";
import PokemonListPage from "../components/pokemon-list-page";
import { useEffect } from "react";
function FetchAllPokeDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokeDataOk({}));
  });

  return <PokemonListPage />;
}

export default FetchAllPokeDetails;
