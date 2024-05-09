import { useState } from "react";

export default function FormExample3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleClick(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button onClick={(e) => handleClick(e)}>Add</button>
      </form>
    </div>
  );
}
