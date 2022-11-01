import React from "react";
import * as CommonConstants from "../common/commonConstants";
import Pagination from "react-js-pagination";

class PokemonListPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: [],
      activePageNum: CommonConstants.DEFAULT_ACTIVE_PAGE_NUM,
    };
  }

  componentDidMount() {
    this.setState({
      pageData: filterDataForPagination(
        this.props.pokeFigureData,
        this.state.activePageNum
      ),
    });
  }

  handlePageChange = (pageNum) => {
    this.setState({
      pageData: filterDataForPagination(
        this.props.pokeFigureData,
        this.state.activePageNum
      ),
      activePageNum: pageNum,
    });
  };
  render() {
    return (
      <>
        {this.state.pageData}
        <Pagination
          totalItemsCount={this.props.pokeFigureData.length}
          onChange={this.handlePageChange}
          activePage={this.state.activePageNum}
          itemsCounterPerPage={CommonConstants.MAX_ITEMS_PER_PAGE}
          pageRangeDisplayed={this.props.pokeFigureData.length / 3}
        ></Pagination>
      </>
    );
  }
}
function filterDataForPagination(
  pokeFigData,
  startPage = CommonConstants.DEFAULT_ACTIVE_PAGE_NUM
) {
  let paginatedItems = [];
  for (
    let item =
      (+startPage - CommonConstants.DEFAULT_ACTIVE_PAGE_NUM) *
        CommonConstants.MAX_ITEMS_PER_PAGE +
      CommonConstants.DEFAULT_ACTIVE_PAGE_NUM;
    item <=
    (+startPage - CommonConstants.DEFAULT_ACTIVE_PAGE_NUM) *
      CommonConstants.MAX_ITEMS_PER_PAGE +
      CommonConstants.MAX_ITEMS_PER_PAGE;
    ++item
  )
    paginatedItems.push(pokeFigData[item]);
  return paginatedItems;
}
export default PokemonListPagination;
