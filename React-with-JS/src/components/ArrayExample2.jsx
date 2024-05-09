export default function ArrayExample2() {
  const array = [
    { name: "Harsh", city: "Delhi", id: 1 },
    { name: "Dhruv", city: "Delhi", id: 2 },
    { name: "Utkarsh", city: "Delhi", id: 3 },
  ];
  return (
    <div>
      <ol>
        {array.map((e) => (
          <li key={e.id}>
            {e.name} from {e.city}
          </li>
        ))}
      </ol>
    </div>
  );
}
