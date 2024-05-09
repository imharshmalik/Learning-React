const name = "Harsh";

function greetings() {
  return "Hello from Hello component.";
}

function Hello() {
  return (
    <div>
      <h1>{greetings()}</h1>
      <h2>This is the first component.</h2>
      <h3>Hello from {name}.</h3>
    </div>
  );
}

export default Hello;
