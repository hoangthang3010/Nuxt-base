// export default async (ctx) => {
//   const strategy = ctx.$auth.$state.strategy;

//   // just handle when login successfully with social
//   if (!ctx.$auth.loggedIn || strategy === "local") {
//     return;
//   }

//   try {
//     // get token in cookies and hanlde remove token type
//     const token = ctx.$auth.$storage.getCookie("_token." + strategy) || "";
//     const arrTemp = token.split(" ");
//     const accessToken = arrTemp.length > 0 ? arrTemp[arrTemp.length - 1] : "";

//     // call api to get access token from BE
//     const resp = await ctx.$adminApi.auth.loginWithSocial(
//       { access_token: accessToken },
//       strategy
//     );

//     // switch to local strategy, remove token of social in browser
//     await ctx.$auth.setStrategy("local");

//     // set returned token of BE and call to API get user info
//     await ctx.$auth.setUserToken(
//       resp.data.access_token,
//       resp.data.refresh_token
//     );
//   } catch {
//     // switch to local strategy and remove token of social in browser
//     await ctx.$auth.setStrategy("local");
//   }
// };
