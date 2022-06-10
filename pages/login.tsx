import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { MainLayout } from "../layouts";
import { authMiddleware } from "../middlewares";
import { userActions, userSelector } from "../redux";

const { AuthContent, authenticateServerSide } = authMiddleware();

const Login: NextPage = () => {
  const dispatch = useDispatch<any>();
  const transactionLogin = useSelector(userSelector.selectTransactionLogin);
  const [username, setUsername] = useState("huyvk95");
  const [password, setPassword] = useState("12345678");

  useEffect(() => {
    if (transactionLogin.type === "finish")
      dispatch(userActions.resetTransactionLogin());
  }, [transactionLogin]);

  const onClickSignIn = () => {
    dispatch(userActions.signIn({ username, password }));
  };

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

export const getServerSideProps = authenticateServerSide();

export default AuthContent(Login);
