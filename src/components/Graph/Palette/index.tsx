import React from "react";
import { getColor } from "lib/functions/getColor.ts";
import { PaletteItem, PalleteArray } from "lib/constants";
import "./index.css";

const Palette = () => {
  const renderItem = (item: PaletteItem) => {
    const color = getColor(item.count);
    return (
      <div
        key={item.count}
        className="contribution-point"
        style={{ backgroundColor: color }}
        title={item.title}
      />
    );
  };

  return (
    <div className={"wrapperPallete"}>
      <span className={"span"}>Меньше</span>
      <div className={"containerPallete"}>
        {PalleteArray.map((item) => renderItem(item))}
      </div>
      <span className={"span"}>Больше</span>
    </div>
  );
};

export default React.memo(Palette);
