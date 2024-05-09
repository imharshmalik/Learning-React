function PropsExample1(props) {
  const { name, message } = props;
  return (
    <h1>
      Hello from Harsh {name}. {message}
    </h1>
  );
}

export default PropsExample1;
