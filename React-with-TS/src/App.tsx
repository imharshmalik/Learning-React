import "./App.css";
import { Button } from "./components/Button";
import { Button2 } from "./components/Button2";
import { Greet } from "./components/Greet";
import { Input } from "./components/Input";
import { Login } from "./components/Login";
import { Login2 } from "./components/Login2";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Greet name="Harsh" messageCount={10} />
      <Status status="success" />
      <Button handleClick={() => alert("App component")} />
      <Button2 handleClick={(event) => alert(event)} />
      <Input value="Input text" handleChange={(event) => alert(event)} />
      <Login />
      <Login2 />
    </div>
  );
}

export default App;
