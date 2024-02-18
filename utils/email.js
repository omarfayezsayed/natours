const pug = require("pug");
const nodemailer = require("nodemailer");
const mailgunTransport = require("nodemailer-mailgun-transport");
class Email {
  constructor(user, url) {
    this.to = user.email;
    this.from = "omarfayez129@gmail.com";
    this.url = url;
    this.firstName = user.name.split(" ")[0];
  }

  createTransport() {
    if (process.env.ENV_ENVIRONMENT == "production") {
      const mailgunOptions = {
        auth: {
          api_key: process.env.MAIL_GUN_API_KEY,
          domain: process.env.MAIL_GUN_DOMAIN,
        },
      };
      const transport = mailgunTransport(mailgunOptions);
      return nodemailer.createTransport(transport);
    }
    return nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: process.env.MAIL_TRAP_USER,
        pass: process.env.MAIL_TRAP_PASSWORD,
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
    console.log("to", this.to);
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
