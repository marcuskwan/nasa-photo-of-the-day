import React from "react";
import PropTypes from "prop-types";

export default function Copyright({ copyright }) {
  return <div className="copyright">copyright: {copyright}</div>;
}

Copyright.propTypes = {
  copyright: PropTypes.string,
};
