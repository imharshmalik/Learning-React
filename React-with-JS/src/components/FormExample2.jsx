import { useState } from "react";

export default function FormExample2() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />
        <h2>
          Welcome {name.firstname} {name.lastname}
        </h2>
      </form>
    </div>
  );
}
