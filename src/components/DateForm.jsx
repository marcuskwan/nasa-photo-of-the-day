import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function DateForm({ hdurl, setFetchDate, fetchDate }) {
  const [inputDate, setInputDate] = useState(fetchDate);
  // console.log("props date:", date);
  // console.log("input date: ", inputDate);

  // handleChanges fn
  const handleChanges = event => setInputDate(event.target.value);
  // button that changes value's state to the chosen date
  const submitDate = event => {
    event.preventDefault();
    setFetchDate(inputDate);
  };
  if (!hdurl) return <h3>Loading...</h3>;
  else
    return (
      <div className="date_form">
        <form>
          <input
            onChange={handleChanges}
            name="date_picker"
            type="date"
            value={inputDate}
          />
          <button onClick={submitDate}>Submit</button>
        </form>
      </div>
    );
}

DateForm.propTypes = {
  date: PropTypes.string,
  setInputDate: PropTypes.func,
};
