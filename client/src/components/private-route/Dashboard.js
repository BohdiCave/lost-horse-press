import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Covers from "./Covers";
import Posts from "./Posts";
import "../styles/login.css";

class Dashboard extends Component {
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  
  render() {
    const { user } = this.props.auth;
  
    return (
      <div id="dashboard">
        <div className="row">
          <div className="col">
            <div className="status">
            Servus, <span>{user.name.toUpperCase().split(" ")[0]}</span>!
              You are <span>Logged In</span> to LOST HORSE PRESS.
            </div>
            <button onClick={this.onLogoutClick} id="logout">Logout</button>
          </div>
        </div>
        <div className="row">
          <div className="col" id="dash">
            <h3 id="dashboard">Admin Dashboard</h3>
          </div>
        </div>
        <div className="row">
          <div className="col col-half" id="posts">
            <div className="header">
              <h4>Posts</h4>
            </div>
            <div className="body">
              <Posts />
            </div>
          </div>
          <div className="col col-half" id="covers">
            <div className="header">
              <h4>Covers</h4>
            </div>
            <div className="body" id="images">
              <Covers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth });

export default connect( mapStateToProps, { logoutUser } )(Dashboard);