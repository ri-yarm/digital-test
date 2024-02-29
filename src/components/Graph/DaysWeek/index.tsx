import React from "react";
import { DaysWeekArray } from "lib/constants";
import "./index.css";

const DaysWeek = () => {
  return (
    <div className={"containerDays"}>
      {DaysWeekArray.map((item) => (
        <span className={"days"}>{item}</span>
      ))}
    </div>
  );
};

export default React.memo(DaysWeek);
