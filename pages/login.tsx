import type { NextPage } from "next";
import { useState } from "react";
import { MainLayout } from "../layouts";

const Login: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClickSignIn = () => {};

  const onClickSignUp = () => {};

  return (
    <MainLayout>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onClickSignIn}>Sign In</button>
      <button onClick={onClickSignUp}>Sign Up</button>
    </MainLayout>
  );
};

export default Login;
