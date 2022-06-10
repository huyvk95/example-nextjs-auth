import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextPage,
} from "next";
import { withIronSessionSsr } from "iron-session/next";
import { useSelector, useDispatch } from "react-redux";

import { User } from "../types";
import { sessionOptions } from "../libs";
import { userActions, userSelector } from "../redux";

type Props<P> = { user: User } & P;

type Params<P> = (
  ctx: GetServerSidePropsContext
) => GetServerSidePropsResult<P> & { props: Props<P> };

const getAuthContent: (
  protect?: boolean
) => (Page: NextPage<any>) => NextPage<Props<unknown>> =
  (protect?: boolean) => (Page) => (props) => {
    const [inited, setInited] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const { user: userSession } = props;
    const userStore = useSelector(userSelector.selectData);

    useEffect(() => {
      if (!inited) return;
      if (protect !== false) {
        if (!Boolean(userStore) && router.pathname !== "/login")
          router.push("/login");
        else if (Boolean(userStore) && router.pathname === "/login")
          router.push("/");
      }
    }, [userStore, inited]);

    useEffect(() => {
      if (userSession && !userStore) dispatch(userActions.setUser(userSession));
      setInited(true);
    }, []);

    return <Page {...props} />;
  };

const authenticateServerSide =
  <P = {},>(protect?: boolean) =>
  (handle?: Params<P>) =>
    withIronSessionSsr(async function (ctx) {
      const result = handle ? (handle(ctx) as any) : { props: {} };
      const user = ctx.req.session.user;

      if (protect !== false) {
        if (!Boolean(user) && ctx.resolvedUrl !== "/login") {
          ctx.res.setHeader("location", "/login");
          ctx.res.statusCode = 302;
          ctx.res.end();
        } else if (Boolean(user) && ctx.resolvedUrl === "/login") {
          ctx.res.setHeader("location", "/");
          ctx.res.statusCode = 302;
          ctx.res.end();
        }
      }

      return {
        ...result,
        props: {
          ...result.props,
          user: user ?? null,
        },
      };
    }, sessionOptions);

export const authMiddleware = (protect?: boolean) => {
  return {
    AuthContent: getAuthContent(protect),
    authenticateServerSide: authenticateServerSide(protect),
  };
};
