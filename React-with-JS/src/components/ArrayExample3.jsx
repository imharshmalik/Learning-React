import Person from "./Person";
export default function ArrayExample3() {
  const array = [
    { name: "Harsh", city: "Delhi", id: 1 },
    { name: "Dhruv", city: "Delhi", id: 2 },
    { name: "Utkarsh", city: "Delhi", id: 3 },
  ];
  return (
    <div>
      <ul>
        {array.map((e) => (
          <Person key={e.id} name={e.name} city={e.city} />
        ))}
      </ul>
    </div>
  );
}
