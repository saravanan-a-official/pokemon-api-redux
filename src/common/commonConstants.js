export const API_BASE_URL = "https://pokeapi.co/api/v2";
export const POKE_LIMIT = 905;
export const POKE_IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
export const POKE_IMG_EXT = ".png";
export const POKE_IMG_SIZE = 96;
export const DEFAULT_ACTIVE_PAGE_NUM = 0;
export const MAX_ITEMS_PER_PAGE = 100;
export const POKE_IMG_URL_2 = ".png";
export const LOAD_ALL_POKE_DETAILS = "LOAD_ALL_POKE_DETAILS";
export const LOAD_SINGLE_POKE_DETAIL = "LOAD_SINGLE_POKE_DETAIL";
export const GET_ALL_POKE_DATA_OK = "GET_ALL_POKE_DATA_OK";
export const GET_SINGLE_POKE_DATA_OK = "GET_SINGLE_POKE_DATA_OK";
export const MORE_DETAILS_BTN = "More Details";
export const OVERLAY_SHOW_DELAY = 250;
export const OVERLAY_HIDE_DELAY = 500;
export const INITIAL_STATE = {};
export function capitalizeFirstLetter(word) {
  if (word.includes("-")) {
    let capitalizedWord = "";
    word.split("-").forEach((word) => {
      capitalizedWord +=
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
    });
    return capitalizedWord;
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function returnArrayAsString(arrayToBeConverted) {
  let convertedString = "";
  arrayToBeConverted.forEach((element) => {
    convertedString += capitalizeFirstLetter(element.name) + ", ";
  });
  return convertedString;
}

export function boldText(str) {
  return <b>{str}</b>;
}

export function formatGenerationText(generationCode) {
  switch (generationCode) {
    case "generation-i":
      return "Generation 1";
    case "generation-ii":
      return "Generation 2";
    case "generation-iii":
      return "Generation 3";
    case "generation-iv":
      return "Generation 4";
    case "generation-v":
      return "Generation 5";
    case "generation-vi":
      return "Generation 6";

    default:
      return "data not available!";
  }
}

export function findPokedexId(stringData) {
  let splitData = stringData.split("/");
  return splitData[6];
}
