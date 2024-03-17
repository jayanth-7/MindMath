import React, { useState } from "react";
import "./styles.css";
import "./components/Default";
import "./components/ToggleVisibility";
// import Default from "./components/Default";
// import ToggleVisibility from "./components/ToggleVisibility";

const App = () => {
  const [num, setNum] = useState(0);
  const [numb, setNumb] = useState(0);

  const randomNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomNumbInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const handleClick = () => {
    setNum(randomNumInRange(1, 99));
    setNumb(randomNumbInRange(1, 99));
    setShow(false);
  };

  const [show, setShow] = useState(true);
  var ans = num + numb;

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>
        {num} + {numb}
      </h1>

      {show ? <h2>ans: {num + numb}</h2> : null}

      <button className="gen-button" onClick={handleClick}>
        Gen
      </button>
      <button className="toggle-button" onClick={() => setShow(!show)}>
        show
      </button>

      {/* <ToggleVisibility>
        <Default />
      </ToggleVisibility> */}
    </div>
  );
};
export default App;
