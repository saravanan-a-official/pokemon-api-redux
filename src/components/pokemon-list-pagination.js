import React from "react";
import * as CommonConstants from "../common/commonConstants";
import { Pagination } from "react-bootstrap";
import { Figure, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
class PokemonListPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: [],
      activePageNum: CommonConstants.DEFAULT_ACTIVE_PAGE_NUM,
    };
  }

  //Invokes component and displays Pokemon Figure list with Pagination
  PaginatePokemonFigureList(pokemonListData) {
    const pokemonFigureListData = this.iteratePokemonData(pokemonListData);

    return (
      //RENDER METHOD  of pokemon list pagination
      <div>
        <Pagination>
          {this.formPagintionItems(pokemonFigureListData)}
        </Pagination>
        {this.state.pageData}
      </div>
    );
  }

  //Returns Pokemon data as a Figure HTML
  iteratePokemonData(pokemonListData) {
    return pokemonListData.action.payload.map((pokeData, id) => {
      const pokeBio = this.pokemonDetailsOverlay({
        pokedata: pokeData,
        id: id,
      });

      return pokeBio;
    });
  }

  //Returns overlay html for each pokemon.
  pokemonDetailsOverlay(pokemonData) {
    const triggerDispatch = (event) => {
      window.sessionStorage.setItem("pokeId", +event + 1);
    };

    const overlayCardData = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">
          {CommonConstants.capitalizeFirstLetter(pokemonData.pokedata.name)}
        </Popover.Header>
      </Popover>
    );

    const pokeBioOVerlay = (
      <OverlayTrigger
        key={"overlay-" + pokemonData.id}
        placement="right"
        /* delay={{
        show: CommonConstants.OVERLAY_SHOW_DELAY,
        hide: CommonConstants.OVERLAY_HIDE_DELAY,
      }} */
        overlay={overlayCardData}
      >
        <Link
          key={"link-" + pokemonData.id}
          to="/pokemonDetails/"
          onClick={() => triggerDispatch(pokemonData.id)}
        >
          <Figure key={"figure-" + pokemonData.id}>
            <Figure.Image
              width={CommonConstants.POKE_IMG_SIZE}
              height={CommonConstants.POKE_IMG_SIZE}
              alt={pokemonData.pokedata.name}
              src={
                CommonConstants.POKE_IMG_URL +
                (+pokemonData.id + 1) +
                CommonConstants.POKE_IMG_EXT
              }
            />
            <Figure.Caption>
              {CommonConstants.capitalizeFirstLetter(pokemonData.pokedata.name)}
            </Figure.Caption>
          </Figure>
        </Link>
      </OverlayTrigger>
    );
    return pokeBioOVerlay;
  }

  componentDidMount() {
    this.setState({
      pageData: this.filterDataForPagination(
        this.iteratePokemonData(this.props.pokeFigureData),
        this.state.activePageNum
      ),
    });
  }

  //Pagination items onclick change.
  handlePageChange = (pageNum) => {
    let newPageData = this.filterDataForPagination(
      this.props.pokeFigureData.action.payload,
      pageNum
    );
    this.setState({
      pageData: newPageData,
      activePageNum: pageNum,
    });
  };

  //Filters the data for each pages.
  filterDataForPagination = (
    pokeFigData,
    startPage = CommonConstants.DEFAULT_ACTIVE_PAGE_NUM
  ) => {
    const sliceStartIndex =
      (+startPage - CommonConstants.DEFAULT_ACTIVE_PAGE_NUM) *
        CommonConstants.MAX_ITEMS_PER_PAGE +
      CommonConstants.DEFAULT_ACTIVE_PAGE_NUM;
    const sliceEndIndex =
      (+startPage - CommonConstants.DEFAULT_ACTIVE_PAGE_NUM) *
        CommonConstants.MAX_ITEMS_PER_PAGE +
      CommonConstants.MAX_ITEMS_PER_PAGE +
      1;
    console.log("pokeFigData", pokeFigData);
    let paginatedItems = pokeFigData.slice(sliceStartIndex, sliceEndIndex - 1);
    //console.log(paginatedItems);
    return paginatedItems;
  };

  //Creates pagination HTML
  formPagintionItems = (pokeFigureData) => {
    let paginationItems = [];
    pokeFigureData.forEach((pokeFigureDatum, idx) => {
      if (idx % CommonConstants.MAX_ITEMS_PER_PAGE === 0) {
        paginationItems.push(
          <Pagination.Item
            key={"Pagination-" + idx}
            active={
              +idx / CommonConstants.MAX_ITEMS_PER_PAGE ===
              this.state.activePageNum
            }
            onClick={() =>
              this.handlePageChange(+idx / CommonConstants.MAX_ITEMS_PER_PAGE)
            }
          >
            {+idx / CommonConstants.MAX_ITEMS_PER_PAGE + 1}
          </Pagination.Item>
        );
      }
    });
    return paginationItems;
  };

  render() {
    const allPokeData = this.props.pokeFigureData;
    return (
      <div className="App">
        <h1>Pokémon API</h1>
        {this.PaginatePokemonFigureList(allPokeData)}
      </div>
    );
  }
}

export default PokemonListPagination;
