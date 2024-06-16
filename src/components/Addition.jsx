import React, { useState } from "react";
import "./styles.css";

const Addition = () => {
  const [num, setNum] = useState(0);
  const [numb, setNumb] = useState(0);
  const [show, setShow] = useState(true);
  const [functionality, setFunctionality] = useState(true); // True - Generate, False - Toggle Sum

  const randomNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    if (functionality) {
      // Generate Functionality (same as before)
      setNum(randomNumInRange(1, 50));
      setNumb(randomNumInRange(50, 100));
      setShow(false);
    } else {
      // Toggle Sum Functionality
      setShow(!show);
    }
    // Switch functionality for next click
    setFunctionality(!functionality);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>
          {num} + {numb}
        </h1>
        {show ? <h2>ans: {num + numb}</h2> : null}
        <div>
          <button
            className="action-button"
            onClick={handleClick}
            style={{ backgroundColor: "#4fcde3" }}
          >
            {functionality ? "Go!" : "Go!"}
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Addition;
