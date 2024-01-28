import { showAlert } from "./alerts.js";
export const deletTour = async (tourId) => {
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
