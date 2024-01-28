/* eslint-disable */

import { showAlert } from "./alerts.js";

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const res = await axios({
      method: "PATCH",
      url:
        type === "password"
          ? "http://localhost:3000/api/v1/users/updatePassword"
          : "http://localhost:3000/api/v1/users/updateMe",
      data,
    });
    if (res.data.status === "success") {
      showAlert("success", "data changed successfully");
    }
  } catch (err) {
    console.log(err);
    showAlert("error", err.response.data.message);
  }
};
