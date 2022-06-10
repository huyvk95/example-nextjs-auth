import React from "react";

export {};
// export const WithAuthSync = (WrappedComponent: React.ReactNode) =>
//   // class MiddlewareAuth extends React.Component {
//   //   static async getInitialProps(ctx) {
//   //     const { store } = ctx;
//   //     if(!store.getState())
//   //   }
//   // };

// import React from "react";
// import { checkAuth } from "~/utils/auth";

// export const WithAuthSync = (WrappedComponent, role) =>
//   class MiddlewareAuth extends React.Component {
//     static async getInitialProps(ctx) {
//       const { store } = ctx;
//       if (!store.getState().get("auth").get("loaded")) {
//         let unsubscribe;
//         await new Promise((resolve) => {
//           unsubscribe = store.subscribe(() => {
//             if (store.getState().get("auth").get("loaded")) {
//               resolve();
//             }
//           });
//         });
//         unsubscribe();
//       }

//       const token = checkAuth(store.getState().get("auth"), role, ctx);
//       const componentProps =
//         WrappedComponent.getInitialProps &&
//         (await WrappedComponent.getInitialProps(ctx));

//       return { ...componentProps, token };
//     }

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   };
