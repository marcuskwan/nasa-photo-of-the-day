import React from "react";
import PropTypes from "prop-types";

export default function ServiceVersion({ service_version }) {
  return (
    <div className="service_version">service version: {service_version}</div>
  );
}

ServiceVersion.propTypes = {
  service_version: PropTypes.string,
};
