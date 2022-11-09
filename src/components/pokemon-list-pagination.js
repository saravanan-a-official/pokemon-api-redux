import React from "react";
import * as CommonConstants from "../common/commonConstants";
import { Pagination } from "react-bootstrap";
import { Figure, OverlayTrigger, Popover } from "react-bootstrap";
import { Link } from "react-router-dom";
class PokemonListPagination extends React.Component {
  constructor(props) {
    let activePageNum = CommonConstants.DEFAULT_ACTIVE_PAGE_NUM;
    if (window.sessionStorage.getItem("activePageNum")) {
      activePageNum = window.sessionStorage.getItem("activePageNum");
    }
    super(props);
    this.state = {
      allPokeFigureData: [],
      pageData: [],
      searchText: "",
      activePageNum: parseInt(activePageNum),
    };
  }

  componentDidMount() {
    this.setState({
      pageData: this.getDataForCurrentPage(),
      allPokeFigureData: this.props.pokeFigureData,
    });
  }

  getDataForCurrentPage() {
    const allPokeFigureData = this.props.pokeFigureData;
    const pageData = this.sliceDataForPagination(
      allPokeFigureData,
      this.state.activePageNum
    );

    return pageData;
  }

  //Invokes component and displays Pokemon Figure list with Pagination
  /**
   * 1. Slice the data for the particular page
   * 2. Filter the data based on search box text
   * 3. Form poke figure data
   * 4. set it in state
   */
  paginatePokemonFigureList() {
    ("paginatePokemonFigureList()");
    //add method to filter data based on search text.
    return (
      <div>
        <Pagination>
          {this.formPagintionItems(this.state.allPokeFigureData)}
        </Pagination>
        {this.iteratePokemonData(this.state.pageData)}
      </div>
    );
  }
  findPokedexId(stringData) {
    let splitData = stringData.split("/");
    return splitData[6];
  }
  //Returns Pokemon data as a Figure HTML
  iteratePokemonData(pokemonListData) {
    return pokemonListData.map((pokeData, id) => {
      const pokeBio = this.pokemonDetailsOverlay({
        pokedata: pokeData,
        id: this.findPokedexId(pokeData.url) - 1,
      });

      return pokeBio;
    });
  }

  //Returns overlay html for each pokemon.
  pokemonDetailsOverlay(pokemonData) {
    const triggerDispatch = (event) => {
      window.sessionStorage.setItem("pokeId", +event + 1);
      window.sessionStorage.setItem("activePageNum", +this.state.activePageNum);
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

  //Pagination items onclick change.
  handlePageChange = (pageNum) => {
    window.sessionStorage.setItem("activePageNum", +pageNum);
    this.setState({
      activePageNum: pageNum,
    });
    let newPageData = this.sliceDataForPagination(
      this.state.allPokeFigureData,
      pageNum
    );

    this.setState({
      pageData: newPageData,
      activePageNum: pageNum,
    });
  };

  //Filters the data for each pages.
  sliceDataForPagination = (
    pokeFigData,
    startPage = this.state.activePageNum
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

    const slicedPokeData = pokeFigData.slice(
      sliceStartIndex,
      sliceEndIndex - 1
    );

    return slicedPokeData;
  };

  //This method is used to filter poke data from search box
  searchPokeinPageData(searchString) {
    let finalPokeData = this.getDataForCurrentPage();
    if (searchString !== "") {
      finalPokeData = finalPokeData.filter((currentData) => {
        return currentData.name
          .toLowerCase()
          .includes(searchString.toLowerCase());
      });
    }
    return finalPokeData;
  }

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

  onChangeInputTextHandler(event) {
    this.setState({ searchText: event.target.value });
    let searchPagePokeData = this.state.pageData;
    searchPagePokeData = this.searchPokeinPageData(event.target.value);
    this.setState({ pageData: searchPagePokeData });
  }

  render() {
    return (
      <>
        <h1>Pokémon API</h1>
        <input
          type="text"
          placeholder="Search pokemon"
          value={this.state.searchText}
          onChange={(event) => this.onChangeInputTextHandler(event)}
        />
        {this.paginatePokemonFigureList()}
      </>
    );
  }
}

export default PokemonListPagination;
