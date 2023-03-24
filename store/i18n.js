// import { Language } from "~/utils/constants";

// export const state = () => ({
//   languages: [],
//   locale: Language.JA,
//   locales: {
//     en: require("~/assets/icons/icon-united-states.svg"),
//     ja: require("~/assets/icons/icon-japan.svg"),
//   },
//   localeCurrent: {},
// });

// export const getters = {};

// export const mutations = {
//   SET_VALUE_STATE(state, payload) {
//     state[payload.key] = payload.payload;
//   },
//   SET_CURRENT_LANG(state, payload) {
//     state.localeCurrent = {
//       ...payload,
//       flag: payload.flag ? payload.flag : state.locales[payload.code],
//     };
//     state.locale = payload.code;
//     localStorage.setItem("language", JSON.stringify(payload));
//   },
// };

// export const actions = {
//   async getLanguages({ commit, state }) {
//     try {
//       const response = await this.$adminApi.i18n.getLanguages();
//       const payload = response.data.data.map((language) => {
//         return {
//           ...language,
//           flag: state.locales[language.code],
//         };
//       });

//       commit("SET_VALUE_STATE", {
//         key: "languages",
//         payload,
//       });
//     } catch (e) {}
//   },
// };
