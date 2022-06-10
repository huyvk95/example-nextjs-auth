import type { NextPage } from "next";
import { useSelector } from "react-redux";

import { PageProps } from "../types";
import { MainLayout } from "../layouts";
import { authMiddleware } from "../middlewares";
import { userSelector } from "../redux";

const { AuthContent, authenticateServerSide } = authMiddleware(false);

const Home: NextPage<PageProps> = () => {
  const user = useSelector(userSelector.selectData);

  return (
    <MainLayout>
      <div>Home</div>
      {user && <div>Hello {user.username}</div>}
    </MainLayout>
  );
};

export const getServerSideProps = authenticateServerSide();

export default AuthContent(Home);
