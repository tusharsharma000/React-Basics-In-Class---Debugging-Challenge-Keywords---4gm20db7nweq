import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }

  return (
    <div className="ball">
      <h1
        className="count"
        onDoubleClick={() => {
          alert("cant edit it");
        }}
      >
        {count}
      </h1>
      <button className="increment-button" onClick={inc}>
        Increment
      </button>
    </div>
  );
};

export default App;
