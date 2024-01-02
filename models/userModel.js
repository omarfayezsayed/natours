const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  googleID: String,
  email: {
    type: String,
    required: [true, "A user must have an email"],
    unique: true,
    validate: [validator.isEmail, "please enter a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    select: false,
    required: [true, "A user must have a password"],
    minLength: [8, "Password must be at least 8 characters"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "confirm password needed"],
    validate: {
      validator: function (val) {
        return this.password === val;
      },
      message: "passwords does't match",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin", "guide", "lead-guide"],
    default: "user",
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetExpires: {
    type: Date,
  },
  activeAccount: {
    type: Boolean,
    default: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // hash password with cost 12
  this.password = await bcrypt.hash(this.password, 12);

  // delete password confrim not persist in the databa se
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.isNew) return next();
  // update the passwordChangedAt property
  this.passwordChangedAt = Date.now();
  next();
});

userSchema.pre("find", function (next) {
  console.log("before finnnnnnnnnnnnnnnnnnnnnd");

  this.find({
    activeAccount: {
      $ne: false,
    },
  });
  next();
});

userSchema.methods.checkChangedPassword = function (jwtTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTime = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return jwtTimeStamp < changedTime;
  }
  return false;
};

userSchema.methods.generateResetToken = function () {
  console.log("this", this);

  const resetToken = crypto.randomBytes(32).toString("hex");
  console.log("Token", resetToken);

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log(this.passwordResetToken, resetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};
const User = mongoose.model("User", userSchema);
module.exports = { User };
