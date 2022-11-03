import { getAllPokeDataOk } from "../redux/action";
import { useDispatch } from "react-redux";
import PokemonListPage from "../components/pokemon-list-page";
function FetchAllPokeDetails() {
  const dispatch = useDispatch();
  dispatch(getAllPokeDataOk({}));
  return <PokemonListPage />;
}

export default FetchAllPokeDetails;
