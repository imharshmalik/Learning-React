import { useState } from "react";

const Radio = () => {
  const [selectedRadio, setradio] = useState(null);
  function handleChange(selection) {
    setradio(selection);
  }
  return (
    <div>
      <label>Select an option: </label>

      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedRadio === "option1"}
          onChange={(e) => handleChange(e.target.value)}
        />
        Option 1
      </label>

      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedRadio === "option2"}
          onChange={(e) => handleChange(e.target.value)}
        />
        Option 2
      </label>
    </div>
  );
};

export default Radio;
