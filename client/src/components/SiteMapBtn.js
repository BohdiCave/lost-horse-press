import React, { Component } from "react";
import Modal from './Modal.js';

class SiteMapBtn extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}/>
        <button type="button" className="button" id="site-map" onClick={this.showModal}>
          SITE MAP
        </button>
      </div>
    );
  }
}

export default SiteMapBtn;