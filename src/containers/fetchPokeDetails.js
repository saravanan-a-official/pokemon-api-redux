import { getPokeDataOk } from "../redux/action";
import { useDispatch } from "react-redux";
import PokemonListPage from "../components/pokemon-list-page";
function FetchPokeDetails() {
  const dispatch = useDispatch();
  console.log("Before dispatch()");
  dispatch(getPokeDataOk({}));
  <PokemonListPage />;
}

export default FetchPokeDetails;
