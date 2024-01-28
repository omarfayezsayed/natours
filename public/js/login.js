// import axios from "axios";
import { showAlert } from "./alerts.js";
export const login = async (email, password) => {
  try {
    console.log(email, password);
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    console.log(res.status);
    if (res.data.status === "success") {
      showAlert("success", "Logged in!");
      window.setTimeout(() => {
        location.assign("/overview");
      }, 2000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
