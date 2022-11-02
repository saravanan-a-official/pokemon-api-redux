import { getSinglePokeDetail } from "../redux/action";
import { useDispatch } from "react-redux";
import PokemonDetails from "../components/pokemon-details";
function FetchPokemonDetail() {
  const dispatch = useDispatch();
  dispatch(getSinglePokeDetail({}));
  return <PokemonDetails />;
}

export default FetchPokemonDetail;
