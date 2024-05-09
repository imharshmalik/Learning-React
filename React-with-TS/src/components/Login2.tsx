import { useState } from "react";

type UserType = {
  name: string;
  email: string;
};

export const Login2 = () => {
  const [user, setuser] = useState<UserType | null>(null);
  function login() {
    setuser({
      name: "Harsh",
      email: "harsh@example.com",
    });
  }
  function logout() {
    setuser(null);
  }
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>
      <h3>
        {user?.name} {user?.email}
      </h3>
    </div>
  );
};
