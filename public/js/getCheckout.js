import { showAlert } from "./alerts.js";
const stripe = Stripe(
  "pk_test_51OfOqNDwIZikXVAV3NQqGYM5bVDORmSQShwNppVLpVL97LS7ZwntrBfzTxweqCGuqCYAyxEcp7NLFbt8JtN5NHBb00AkXicG53"
);
export const getCheckout = async (tourId) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    if (res.data.status === "success") {
      console.log(res.data.session);
      await stripe.redirectToCheckout({ sessionId: res.data.session.id });
    }
  } catch (err) {
    showAlert("error", "somthing went wrong in booking tour");
  }
};
