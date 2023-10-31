import React, { useState } from "react";
import Button from "@mui/material/Button";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const IncrementCounter = () => {
    setCounter((prev) => prev + 1);
  };
  const IncrementCounterAfterTimeout = () => {
    setTimeout(IncrementCounter, 3000);
  };

  return (
    <Button onClick={IncrementCounterAfterTimeout} variant="contained">
      {counter}
    </Button>
  );
};

export default Counter;
