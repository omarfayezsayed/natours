const { model } = require("mongoose");
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = await nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "e30d16725b3819",
      pass: "e3e2fc773e6a09",
    },
  });
  // console.log("email", user.email);
  console.log(options.from);
  let transportOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(transportOptions);
};

module.exports = { sendEmail };
