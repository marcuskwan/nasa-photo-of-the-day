import React from "react";
import PropTypes from "prop-types";

export default function Image({ hdurl }) {
  return (
    <div className="image">
      <img src={hdurl} alt="apod" />
    </div>
  );
}

Image.propTypes = {
  hdurl: PropTypes.string,
};
