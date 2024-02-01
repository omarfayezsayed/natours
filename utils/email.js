const pug = require("pug");
const nodemailer = require("nodemailer");
// const htmlToText = require("html-to-text");
class Email {
  constructor(user, url) {
    this.to = user.email;
    this.from = "natours@gmail.com";
    this.url = url;
    this.firstName = user.name.split(" ")[0];
  }

  createTransport() {
    if (process.env.ENV_ENVIRONMENT == "production") return 1;
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: "e30d16725b3819",
        pass: "e3e2fc773e6a09",
      },
    });
  }
  async send(template, subject) {
    // get the html from the templage
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      name: this.firstName,
      url: this.url,
    });
    let transportOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };

    await this.createTransport().sendMail(transportOptions);
  }
  async sendWelcome() {
    await this.send("welcomeEmail", "welcome to natours family");
  }
  async sendResetPassword() {
    await this.send("ResetPassword", "Reset your password");
  }
}

module.exports = {
  Email,
};
