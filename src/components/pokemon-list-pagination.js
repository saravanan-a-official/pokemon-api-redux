import React from "react";
import * as CommonConstants from "../common/commonConstants";
import { Pagination } from "react-bootstrap";

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
      pageData: this.filterDataForPagination(
        this.props.pokeFigureData,
        this.state.activePageNum
      ),
    });
  }

  handlePageChange = (pageNum) => {
    let newPageData = this.filterDataForPagination(
      this.props.pokeFigureData,
      pageNum
    );
    this.setState({
      pageData: newPageData,
      activePageNum: pageNum,
    });
  };

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

    let paginatedItems = pokeFigData.slice(sliceStartIndex, sliceEndIndex - 1);

    return paginatedItems;
  };
  formPagintionItems = (pokeFigureData) => {
    let paginationItems = [];
    pokeFigureData.forEach((pokeFigureDatum, idx) => {
      if (idx % CommonConstants.MAX_ITEMS_PER_PAGE === 0) {
        paginationItems.push(
          <Pagination.Item
            key={idx}
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
    return (
      <div>
        <div className="sticky-wrapper">
          <div className="sticky">
            <Pagination>
              {this.formPagintionItems(this.props.pokeFigureData)}
            </Pagination>
          </div>
        </div>
        {this.state.pageData}
      </div>
    );
  }
}

export default PokemonListPagination;
