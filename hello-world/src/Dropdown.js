import React, { Component } from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({
      isOpened: !this.state.isOpened
    });
    console.log(this.state.isOpened);
  }

  render() {
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText = <div>NEW TEXT</div>
    }
    return (
      <div onClick={this.toggleState}>
        Hello react
        {dropdownText}
      </div>
    );
  }
}


export default Dropdown;
