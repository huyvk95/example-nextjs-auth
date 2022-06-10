import type { NextPage } from "next";
import { useSelector } from "react-redux";

import { PageProps } from "../types";
import { MainLayout } from "../layouts";
import { authMiddleware } from "../middlewares";
import { userSelector } from "../redux";

const { AuthContent, authenticateServerSide } = authMiddleware();

const Profile: NextPage<PageProps> = () => {
  const user = useSelector(userSelector.selectData);

  return (
    <MainLayout>
      <div>Profile</div>
      {user && <div>{user.username}</div>}
    </MainLayout>
  );
};

export const getServerSideProps = authenticateServerSide();

export default AuthContent(Profile);
