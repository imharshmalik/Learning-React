import { useEffect, useState } from "react";

const Switch2 = ({ message }) => {
  const [isVisible, setVisibility] = useState("false");

  useEffect(() => {
    if (isVisible) {
      console.log(message);
    }
  }, [isVisible]);

  function handleSwitch(e) {
    e.preventDefault();
    setVisibility(!isVisible);
  }
  return (
    <div>
      <button onClick={handleSwitch}>Click me</button>
      {isVisible ? <h3>{message}</h3> : ""}
    </div>
  );
};

export default Switch2;
