import React from "react";
import PropTypes from "prop-types";

export default function Date(props) {
  return <div className="date">{props.date}</div>;
}

Date.propTypes = {
  date: PropTypes.string,
};
