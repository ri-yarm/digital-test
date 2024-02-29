import React from "react";
import "./index.css";
import { getColor } from "lib/functions/getColor.ts";
import { getTitle } from "lib/functions/getTitle.ts";

interface GraphData {
  [date: string]: number;
}

interface GraphProps {
  data: GraphData;
}

const Graph = ({ data }: GraphProps) => {
  const daysInYear = Array.from({ length: 365 }, () => 0);

  const weeks = [];
  const StartDate = new Date("2022-10-01");

  for (let i = 0; i < daysInYear.length; i += 7) {
    const daysInWeek = [];

    for (let j = 0; j < 7; j++) {
      const dateString = StartDate.toISOString().split("T")[0];
      const count = data[dateString] || 0;
      const color = getColor(count);

      daysInWeek.push(
        <div
          key={dateString}
          className="contribution-point"
          style={{ backgroundColor: color }}
          title={getTitle(dateString, count)}
        />,
      );

      StartDate.setDate(StartDate.getDate() + 1);
    }

    weeks.push(
      <div key={i} className="week">
        {daysInWeek}
      </div>,
    );
  }

  return (
    <div className={"container"}>
      <div className="graph">{weeks}</div>
    </div>
  );
};

export default React.memo(Graph);
