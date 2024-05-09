import { useState } from "react";

export const Login = () => {
  const [isLoggedin, setLogin] = useState(false);
  function login() {
    setLogin(true);
  }
  function logout() {
    setLogin(false);
  }
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>
      {isLoggedin ? <h3>User is logged in</h3> : <h3>User is logged out</h3>}
    </div>
  );
};
