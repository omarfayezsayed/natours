import { showAlert } from "./alerts.js";

const login = async (email, password) => {
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
      }, 5000);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "http://localhost:3000/api/v1/users/logout",
    });
    if ((res.data.status = "success")) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};

// document.querySelector(".login-form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   // console.log(email, password);
//   login(email, password);
// });

const deletTour = async (tourId) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/v1/tours/${tourId}`
    );
    if (res.data.status === "success") {
      showAlert("success", "tour deleted successfully");
      window.setTimeout(() => {
        location.assign("/overview");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

document.querySelectorAll(".deleteTour").forEach((el) => {
  const tourId = el.getAttribute("tourid");
  el.addEventListener("click", (e) => {
    e.preventDefault();
    deletTour(tourId);
  });
});

document.querySelector(".nav__el--logout").addEventListener("click", (e) => {
  e.preventDefault();
  logout();
});
