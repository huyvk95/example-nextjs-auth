import Link from "next/link";
import React, { PropsWithChildren, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { userActions, userSelector } from "../redux";

export const MainLayout: React.FC<PropsWithChildren<unknown>> = ({
  children,
  ...props
}) => {
  const dispatch = useDispatch<any>();
  const transactionLogout = useSelector(userSelector.selectTransactionLogout);

  useEffect(() => {
    if (transactionLogout.type === "finish")
      dispatch(userActions.resetTransactionLogin());
  }, [transactionLogout]);

  const onClickLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <div {...props}>
      <div>
        <div>
          <Link href={"/"}>Home</Link>
        </div>
        <div>
          <Link href={"/login"}>Login</Link>
        </div>
        <div>
          <Link href={"/profile"}>Profile</Link>
        </div>
        <div>
          <a onClick={onClickLogout}>Logout</a>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
