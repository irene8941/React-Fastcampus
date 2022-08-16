import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
  const handleClick = () => {
    alert("pressed");
  };
  return (
    <>
      <Button onClick={handleClick} modifier="large--cta">
        Tap Me
      </Button>
    </>
  );
}
