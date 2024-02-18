const stripe = require("stripe")(
  `sk_test_51OfOqNDwIZikXVAVXyInVPoixxgtJUTBLh3HqmF480m6IrbjWGlUjwnmLF3sQGW2cMlqSXoOsEBPjvW0KFtnqAuh004CvVOH7m`
);
const { Tour } = require("../models/tourModel");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { Booking } = require("../models/bookingmodel");
const factory = require("../controllers/handlerFactory");
const getCheckoutSession = asyncWrapper(async (req, res, next) => {
  const tourId = req.params.tourId;
  const tour = await Tour.findById(tourId);
  // create session with stripe to be requested from the front-end
  console.log(`${req.protocol}:://${req.get("host")}/overview`);
  console.log(req.user);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    success_url: `${req.protocol}://${req.get(
      "host"
    )}/overview?tourId=${tourId}&userId=${req.user._id}&price=${tour.price}`,
    cancel_url: `${req.protocol}://${req.get("host")}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourId,
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: tour.price * 100,
          product_data: {
            name: `${tour.name} tour`,
            description: tour.summary,
            images: ["https://www.natours.dev/img/tours/tour-2-cover.jpg"],
          },
        },
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: "success",
    session,
  });
});

const createBookingCheckout = asyncWrapper(async (req, res, next) => {
  const { tourId, userId, price } = req.query;
  console.log("params", tourId, userId, price);
  if (!tourId && !userId && !price) return next();

  await Booking.create({
    tour: tourId,
    user: userId,
    price,
  });

  res.redirect(req.originalUrl.split("?")[0]);
});

const getAllBookings = factory.getAll(Booking);
const getBooking = factory.getOne(Booking);
const deleteBooking = factory.deleteOne(Booking);
const updateBooking = factory.updateOne(Booking);
module.exports = {
  getCheckoutSession,
  createBookingCheckout,
  getAllBookings,
  deleteBooking,
  getBooking,
  updateBooking,
};
