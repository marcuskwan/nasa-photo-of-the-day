import React from "react";
import PropTypes from "prop-types";

export default function MediaType({ media_type }) {
  return <div className="media_type">media type: {media_type}</div>;
}

MediaType.propTypes = {
  media_type: PropTypes.string,
};
