const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");
const { Tour } = require("../models/tourModel");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { AppError } = require("../utils/errorClass");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
const { verify } = require("crypto");
const nodemailer = require("nodemailer");
const { sendEmail } = require("../utils/sendEmail");
const crypto = require("crypto");

const createSendToken = (user, statusCode, res) => {
  const token = assignToken(user._id);
  const cookieOptions = {
    // httpOnly: true,
  };
  if (process.env.ENV_ENVIRONMENT === "production") cookieOptions.secure = true;
  user.password = undefined;
  res.cookie("jwt", token, cookieOptions); // set cookie to be sent to the clint in the response
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
const assignToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET);
  return token;
};
const signUp = asyncWrapper(async (req, res, next) => {
  const user = await User.create(req.body);
  createSendToken(user, 201, res);
});

const login = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  //check email and password
  if (!email || !password) {
    return next(new AppError("please provide email and password", 400));
  }

  const user = await User.findOne({
    email,
  }).select("+password");
  // check if user exist and entered a password that match the one in the database
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("invalid email or password", 401));
  }

  createSendToken(user, 200, res);
});

const isLoggedIn = asyncWrapper(async (req, res, next) => {
  console.log("hereeeeeeeee", req.cookies.jwt);

  if (req.cookies.jwt) {
    try {
      // verify token
      const verifyAsync = promisify(jwt.verify);
      const decode = await verifyAsync(req.cookies.jwt, process.env.JWT_SECRET);
      // check if the user still exist
      const currnetUser = await User.findById(decode.id);
      if (!currnetUser) {
        return next();
      }
      // console.log(currnetUser);

      if (currnetUser.checkChangedPassword(decode.iat)) {
        return next();
      }
      // this will be auto passed to pug templates
      res.locals.user = currnetUser;
      res.locals.admin = true;
      if (currnetUser.role === "admin") res.locals.admin = true;
      return next();
    } catch (err) {
      return next();
    }
  }
  return next();
});
const routeProtect = asyncWrapper(async (req, res, next) => {
  // check if the token exist
  console.log("inside route protect");
  let token;
  console.log(req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in ,please log in to get access", 401)
    );
  }
  console.log("valid", req.cookies.jwt);
  // verify token
  const verifyAsync = promisify(jwt.verify);
  const decode = await verifyAsync(token, process.env.JWT_SECRET);
  console.log(decode, decode.id);
  // check if the user still exist
  const currnetUser = await User.findById(decode.id);
  if (!currnetUser) {
    return next(
      new AppError("The user belonging to this token does not exist.", 401)
    );
  }
  console.log(currnetUser);

  if (currnetUser.checkChangedPassword(decode.iat)) {
    return next(new AppError("the password changed ,please log in agine", 401));
  }
  req.user = currnetUser;
  res.locals.user = currnetUser;
  next();
});

const restrictTo = (...roles) => {
  return (req, res, next) => {
    console.log(roles);

    if (!roles.includes(req.user.role)) {
      return next(
        new AppError(
          "You don't have the permission to perform this action",
          401
        )
      );
    }

    next();
  };
};

const forgotPassword = asyncWrapper(async (req, res, next) => {
  const email = req.body.email;
  console.log(email);
  if (!email) {
    return next(new AppError("please provide an email", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(
      new AppError("no user with that email, please provide anthor email", 400)
    );
  }

  const resetToken = user.generateResetToken();

  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/resetPassword/${resetToken}`;

  const message = `You forgot you password please submit a post request with that token:${resetToken} to update your password to that url:${resetUrl}`;
  try {
    console.log("ya rab");
    await sendEmail({
      to: user.email,
      from: "fayez <hello@gmail.com>",
      subject: "Reset Password",
      message,
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError("There was an error sending email. Try again later", 500)
    );
  }

  res.status(200).json({
    status: "success",
    message: "token sent to your email",
  });
});

const resetPassword = asyncWrapper(async (req, res, next) => {
  const token = req.params.token;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: {
      $gt: Date.now(),
    },
  });
  // if the token is invalid or has expired
  if (!user) {
    return next(new AppError("token is invalid or has expired", 400));
  }

  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  createSendToken(user, 200, res);
});

const updatePassword = asyncWrapper(async (req, res, next) => {
  // get user from database
  const user = await User.findOne({ _id: req.user.id }).select("+password");
  // console.log("user", user);
  if (!(await bcrypt.compare(req.body.oldPassword, user.password))) {
    return next(new AppError("password is not correct ,please try again", 400));
  }
  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.newConfirmPassword;
  await user.save();
  res.status(200).json({
    status: "success",
    message: "password updated successfully",
  });
});

const logout = (req, res, next) => {
  res.cookie("jwt", "logout");
  res.status(200).json({
    status: "success",
  });
};
module.exports = {
  signUp,
  login,
  routeProtect,
  restrictTo,
  forgotPassword,
  updatePassword,
  resetPassword,
  logout,
  isLoggedIn,
};
