import React, { Component } from "react";
import { connect } from "react-redux";
import { changePageNumber, hoveredChange } from "../actions";

export class ChangePageButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleButtonBackClick = this.handleButtonBackClick.bind(this);
    this.handleButtonNextClick = this.handleButtonNextClick.bind(this);
  }

  handleButtonBackClick() {
    let currentPage = this.props.pageNumber - 1;
    this.props.changePageNumber(currentPage);
  }
  handleButtonNextClick() {
    let currentPage = this.props.pageNumber + 1;
    this.props.changePageNumber(currentPage);
  }

  mouseEnterHandler = (event) => {
    this.setState({ hovered: true });
  };

  mouseLeaveHandler = () => {
    this.clearTimer();
    this.setState({ hovered: false });
  };

  onTimeout = () => {
    this.props.changePageNumber(0);
    this.clearTimer();
    this.setState({ hovered: false });
  };

  clearTimer = () => {
    clearTimeout(this.timer);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hovered !== prevState.hovered) {
      if (this.state.hovered) {
        let hoverTime = 120000;
        this.timer = setTimeout(this.onTimeout, hoverTime);
      } else {
        this.clearTimer();
      }
    }
    if (this.props.pageNumber !== prevProps.pageNumber || this.props.pageChangeCount !== prevProps.pageChangeCount) {
      this.setState({ hovered: false });
      this.clearTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    return (
      <div
        className="change-page-buttons"
        style={{ justifyContent: this.props.pageNumber === 0 ? "flex-end" : "space-between" }}
        key={`buttonBackKey${this.props.pageNumber}`}
        onMouseEnter={(event) => this.mouseEnterHandler(event)}
        onMouseLeave={this.mouseLeaveHandler}
      >
        <div
          className="btn btn-back"
          style={{ display: this.props.pageNumber === 0 ? "none" : "flex", opacity: 0 }}
          onClick={this.handleButtonBackClick}
        >
          BACK
        </div>
        {/* <h1>PAGE {this.props.pageNumber}</h1> */}
        <div
          className="btn btn-next"
          key={`buttonFrontKey${this.props.pageNumber}`}
          style={{ display: this.props.pageNumber > 6 ? "none" : "flex", opacity: 0 }}
          onClick={this.handleButtonNextClick}
          onMouseEnter={(event) => this.mouseEnterHandler(event)}
          onMouseLeave={this.mouseLeaveHandler}
        >
          NEXT
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageNumber: state.changePageNumber.pageNumber,
    pageChangeCount: state.changePageNumber.pageChangeCount
  };
};

const mapDispatchToProps = {
  changePageNumber,
  hoveredChange
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePageButtons);
