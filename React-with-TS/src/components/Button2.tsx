type Button2Prop = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const Button2 = (props: Button2Prop) => {
  return (
    <div>
      <button onClick={props.handleClick}>Click2</button>
    </div>
  );
};
