type ButtonProp = {
  handleClick: () => void;
};
export const Button = (props: ButtonProp) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};
