import React, { Component } from "react";
import "./Node.css";
import PropTypes from "prop-types";

export default class Node extends Component {
  state = {
    start: false,
    finish: false,
  };

  // click handler has to update the object and the
  clickHandler = (e) => {
    const { start, finish } = this.state;
    const { flagStart, gridId } = this.props;
    if (!start && !finish) {
      this.setState({ start: true });
      flagStart(gridId);
    } else {
      this.setState({ start: false, finish: false });
    }
  };

  contextMenuHandler = (e) => {
    e.preventDefault();
    console.log("Right click baybee");
    const { finish } = this.state;
    const { flagFinish, gridId } = this.props;
    if (!finish) {
      this.setState({ start: false, finish: true });
      flagFinish(gridId);
    } else {
      this.setState({ start: false, finish: false });
    }
  };

  render() {
    const classes = ["Node"];
    const { start, finish, visited } = this.state;

    if (start) {
      classes.push("start");
    } else if (finish) {
      classes.push("finish");
    } else if (visited) {
      classes.push("visited");
    }

    return (
      <div
        onClick={this.clickHandler}
        onContextMenu={this.contextMenuHandler}
        className={classes.join(" ")}
      ></div>
    );
  }
}

Node.propTypes = {
  gridId: PropTypes.object.isRequired,
  flagStart: PropTypes.func.isRequired,
  flagFinish: PropTypes.func.isRequired,
};
//
