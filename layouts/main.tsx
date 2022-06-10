import Link from "next/link";
import React, { PropsWithChildren } from "react";

export const MainLayout: React.FC<PropsWithChildren<unknown>> = ({
  children,
  ...props
}) => (
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
        <a>Logout</a>
      </div>
    </div>
    <div>{children}</div>
  </div>
);
