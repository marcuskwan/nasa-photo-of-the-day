import React from "react";
import PropTypes from "prop-types";

export default function Title(props) {
  return (
    <div className="title">
      <h1>{props.title}</h1>
    </div>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
