import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function onClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={onClick}>증가</button>
    </div>
  );
}
