import React, { useState } from "react";
import PropTypes from "prop-types";

function DateForm(props) {
  const [date, setDate] = useState("");
  return (
    <div className="date_form">
      <form>
        <input name="date_picker" value={date} />
        <button />
      </form>
    </div>
  );
}

DateForm.propTypes = {};

export default DateForm;
