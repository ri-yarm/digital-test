import { MonthArray } from "lib/constants";
import React from "react";
import "./index.css";

const Months = () => {
  return (
    <div className={"containerMonths"}>
      {MonthArray.map((item) => (
        <span className={"month"}>{item}</span>
      ))}
    </div>
  );
};

export default React.memo(Months);
