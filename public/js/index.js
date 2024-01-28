import { login } from "./login.js";
import { logout } from "./logout.js";
import { deletTour } from "./deleteTour.js";
import { updateSettings } from "./updateSettings.js";
// Dom elements

const loginFrom = document.querySelector(".login-form");
const logoutBtn = document.querySelector(".nav__el--logout");
const deleteTourBtn = document.querySelectorAll(".deleteTour");
const saveSettingsBtn = document.querySelector(".save-settings");
const savePasswordBtn = document.querySelector(".btn--save-password");
if (loginFrom) {
  loginFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("login here ");
    login(email, password);
  });
}
if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("logout buttom");
    logout();
  });
}
if (deleteTourBtn) {
  deleteTourBtn.forEach((el) => {
    const tourId = el.getAttribute("tourid");
    el.addEventListener("click", (e) => {
      e.preventDefault();
      deletTour(tourId);
    });
  });
}

if (saveSettingsBtn) {
  saveSettingsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    updateSettings({ name, email }, "normalData");
  });
}

if (savePasswordBtn) {
  savePasswordBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const oldPassword = document.getElementById("password-current").value;
    const newPassword = document.getElementById("new-password").value;
    const newConfirmPassword =
      document.getElementById("password-confirm").value;
    document.querySelector(".btn--save-password").textContent = "updating...";
    await updateSettings(
      { oldPassword, newPassword, newConfirmPassword },
      "password"
    );
    document.querySelector(".btn--save-password").textContent = "save password";
  });
}
