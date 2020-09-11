import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1"],
  };

  handleIncrement = (product) => {
    this.setState({ value: this.state.value + 1 });
  };

  renderTags = () => {
    if (this.state.tags.length === 0) return <p>No Tags available Right Now</p>;
    return (
      <React.Fragment>
        <span className={this.getBadgeclassNamees()}>
          {<this.formateCount />}
        </span>
        <button
          onClick={this.handleIncrement}
          className={"btn btn-success border border-dark"}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger border border-dark m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please Create new tag"}
        <this.renderTags />
      </div>
    );
  }

  formateCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeclassNamees() {
    let classNamees = "badge m-2 badge-";
    classNamees += this.state.value === 0 ? "warning" : "primary";
    return classNamees;
  }
}
