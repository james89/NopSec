import React from "react";
import "./filters.scss";

const Filters = ({ handleCheck, selected }) => {
  return (
    <ul>
      <li>
        <input
          type="checkbox"
          checked={selected.includes("Critical")}
          onChange={handleCheck}
          name={"Critical"}
        />
        <label>Critical</label>
      </li>
      <li>
        <input
          type="checkbox"
          checked={selected.includes("High")}
          onChange={handleCheck}
          name={"High"}
        />
        <label>High</label>
      </li>
      <li>
        <input
          type="checkbox"
          checked={selected.includes("Medium")}
          onChange={handleCheck}
          name={"Medium"}
        />
        <label>Medium</label>
      </li>
      <li>
        <input
          type="checkbox"
          checked={selected.includes("Low")}
          onChange={handleCheck}
          name={"Low"}
        />
        <label>Low</label>
      </li>
    </ul>
  );
};

export default Filters;
