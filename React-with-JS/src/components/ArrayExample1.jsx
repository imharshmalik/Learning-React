export default function ArrayExample1() {
  const array = [25, 46, 3, 81, 60];
  return (
    <div>
      <ul>
        {array.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
}
