import { useState } from "react";

const Switch = ({ initialState }) => {
  const [isOn, setOnOff] = useState(initialState);

  function handleClick() {
    setOnOff(!isOn);
    console.log(isOn ? "Switch is on" : "Switch is off");
    console.log(isOn);
  }

  return (
    <div>
      <button onClick={handleClick}>Switch</button>
    </div>
  );
};

export default Switch;
