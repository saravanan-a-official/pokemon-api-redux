import { getSinglePokeDetail } from "../redux/action";
import { useDispatch } from "react-redux";
import PokemonDetails from "../components/pokemon-details";
import { useEffect } from "react";
function FetchPokemonDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSinglePokeDetail({}));
  });

  return <PokemonDetails />;
}

export default FetchPokemonDetail;
