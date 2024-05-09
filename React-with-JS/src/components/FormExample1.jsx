import { useState } from "react";

export default function FormExample1() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
