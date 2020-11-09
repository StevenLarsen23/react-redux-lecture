import React from "react";
import { connect } from "react-redux";

const Welcome = (props) => {
    console.log("props", props)
  return (
    <div className="centered-container">
      <h1>Welcome to Jurassic park, {props.user.username}</h1>
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Welcome);
