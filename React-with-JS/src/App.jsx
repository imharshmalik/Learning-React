import Hello from "./components/Hello";
import PropsExample1 from "./components/PropsExample1";
import PropsExample2 from "./components/PropsExample2";
import PropsExample3 from "./components/PropsExample3";
import ArrayExample1 from "./components/ArrayExample1";
import ArrayExample2 from "./components/ArrayExample2";
import ArrayExample3 from "./components/ArrayExample3";
import StateExample1 from "./components/StateExample1";
import StateExample2 from "./components/StateExample2";
import FormExample1 from "./components/FormExample1";
import FormExample2 from "./components/FormExample2";
import FormExample3 from "./components/FormExample3";
import ConditionalRenderingExample from "./components/ConditionalRenderingExample";
import ColorPicker from "./components/ColorPicker";
import FormPractise from "./components/FormPractise";
import FormPractise2 from "./components/FormPractise2";
import Radio from "./components/Radio";
import Switch from "./components/Switch";
import Switch2 from "./components/Switch2";

function App() {
  const person = {
    name: "Harsh",
    city: "Delhi",
  };

  return (
    <div className="App">
      {/* <Hello /> */}
      {/* <PropsExample1 name="Malik" message="I am using props" /> */}
      {/* <PropsExample2
        name="Harsh"
        message="This is another way of using props"
      /> */}
      {/* <PropsExample3 person={person} /> */}
      {/* <ArrayExample1 /> */}
      {/* <ArrayExample2 /> */}
      {/* <ArrayExample3 /> */}
      {/* <StateExample1 /> */}
      {/* <StateExample2 /> */}
      {/* <FormExample1 /> */}
      {/* <FormExample2 /> */}
      {/* <FormExample3 /> */}
      {/* <ConditionalRenderingExample
        isLoggedIn={true}
        user={{ name: "Harsh", email: "harsh@example.com" }}
      /> */}
      {/* <FormPractise /> */}
      {/* <Switch initialState={false} /> */}
      {/* <FormPractise2 /> */}
      {/* <ColorPicker colors={["red", "green", "blue", "yellow"]} /> */}
      {/* <Switch2 message="Hi! Can you see me?" /> */}
      <Radio />
    </div>
  );
}

export default App;
