import React, { useState } from "react";
import "./styles.css";

const Subtraction = () => {
  const [num, setNum] = useState(0);
  const [numb, setNumb] = useState(0);
  const [show, setShow] = useState(true);
  const [functionality, setFunctionality] = useState(true);

  const randomNumInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    if (functionality) {
      setNum(randomNumInRange(1, 100));
      setNumb(randomNumInRange(1, num)); // Ensure numb is less than num for subtraction
      setShow(false);
    } else {
      setShow(!show);
    }
    setFunctionality(!functionality);
  };

  return (
    <div className="App">
      <div className="content">
        <h1>
          {num} - {numb}
        </h1>
        {show ? <h2>ans: {num - numb}</h2> : null}
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

export default Subtraction;
