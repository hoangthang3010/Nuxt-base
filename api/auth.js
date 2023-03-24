const API_LOGOUT = "admin/logout";

const auth = (axios) => ({
  logout() {
    return axios.post(API_LOGOUT);
  },

  forgotPassword(data) {
    return axios.post("admin/forgot-password", data);
  },

  changePassword(data) {
    return axios.post("admin/change-password", data);
  },

  changePasswordForgotPassword(data) {
    return axios.post("admin/reset-password", data);
  },

  me(headers = {}) {
    return axios.get("/admin/profile", {
      headers,
    });
  },

  verifyTokenResetPassword(email, token) {
    return axios.get(
      `admin/verify-token-reset-password?email=${email}&token=${token}`
    );
  },
});

export default auth;
