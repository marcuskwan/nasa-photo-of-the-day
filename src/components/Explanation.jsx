import React from "react";
import PropTypes from "prop-types";

export default function Explanation({ explanation }) {
  return (
    <div className="explanation">
      {explanation}
    </div>
  );
}

Explanation.propTypes = {
  explanation: PropTypes.string,
};
