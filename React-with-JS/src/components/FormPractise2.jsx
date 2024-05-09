import { useEffect, useState } from "react";

const FormPractise2 = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmittedData(formdata);
  }

  useEffect(() => {
    if (submittedData !== null) {
      console.log("Form submitted: ", submittedData);
    }
  }, [submittedData]);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setformdata({ ...formdata, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
        />
        <textarea
          placeholder="Enter your message"
          onChange={(e) =>
            setformdata({ ...formdata, message: e.target.value })
          }
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {submittedData && (
        <h3>Submitted data: {JSON.stringify(submittedData)}</h3>
      )}
    </div>
  );
};

export default FormPractise2;
