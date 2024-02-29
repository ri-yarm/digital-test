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
  const daysInYear = Array(365).fill(0);

  const weeks = [];
  // Получаю первую дату из моков и от этого дня в неделе начинается отсчёт коммитов
  const firstDate = Object.keys(data)[0];
  let startDate = new Date(firstDate);

  // Внимание, день недели начинается с ВОСКРЕСЕНЬЯ. Как у самого гитхаба
  startDate = new Date(
    startDate.setDate(startDate.getDate() - startDate.getDay()),
  );

  for (let i = 0; i < daysInYear.length; i += 7) {
    const daysInWeek = [];

    for (let j = 0; j < 7; j++) {
      const dateString = startDate.toISOString().split("T")[0];
      const count = data[dateString] || 0;

      const color = getColor(count);
      const title = getTitle(dateString, count);

      daysInWeek.push(
        <div
          key={dateString}
          className="contribution-point"
          style={{ backgroundColor: color }}
          title={title}
        />,
      );

      startDate.setDate(startDate.getDate() + 1);
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
