import React, { useState } from "react";

export default function GoodButton() {
  const [color, setColor] = useState("blue");

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => {
        setColor("red");
      }}
    >
      조아요
    </button>
  );
}
