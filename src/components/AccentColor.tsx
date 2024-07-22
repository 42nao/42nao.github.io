import React from "react";
import "./AccentColor.css";

export default function AccentColor() {
  const [val, setVal] = React.useState("#fe7458");

  const changed = (color: string) => {
    setVal(color);
    document.documentElement.style.setProperty("--accent-color", color);
  };

  return (
    <div className="flex flex-row gap-2 items-center">
      <p>Color: </p>
      <div className="flex flex-row gap-4 items-center">
        <input
          type="color"
          className="colorpicker"
          onChange={(e) => {
            changed(e.target.value);
          }}
          value={val}
        />
      </div>
    </div>
  );
}
