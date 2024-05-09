import { useEffect, useState } from "react";

const FormPractise = () => {
  const [name, setName] = useState("");
  const [email, setEmaail] = useState("");

  function handleSubmit() {
    alert(`Hello ${name}. You have registered with ${email}`);
  }

  useEffect(() => {
    console.log("Name changeed to ", name);
  }, [name]);

  useEffect(() => {
    console.log("Email changed to ", email);
  }, [email]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your name: "
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter your email: "
          onChange={(e) => setEmaail(e.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPractise;
