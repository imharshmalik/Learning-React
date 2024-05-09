import { useEffect, useState } from "react";

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState("");
  function colorSelected(newColor) {
    setSelectedColor(newColor);
  }
  useEffect(() => {
    if (selectedColor) {
      console.log(selectedColor);
    }
  }, [selectedColor]);

  return (
    <div>
      <select onChange={(e) => colorSelected(e.target.value)}>
        <option selected disabled>
          Choose a colour
        </option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
};

export default ColorPicker;
