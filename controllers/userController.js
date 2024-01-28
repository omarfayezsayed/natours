const { User } = require("../models/userModel");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { AppError } = require("../utils/errorClass");
const factory = require("../controllers/handlerFactory");
const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public/img/users/");
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];
    cb(null, `user-${req.user._id}-${Date.now()}.${extension}`);
  },
});

const filterFiles = (req, file, cb) => {
  if (file.mimetype.split("/")[0] != "image") {
    cb(new AppError("not an image! please upload an image"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: diskStorage, fileFilter: filterFiles });

const uploadUserPhoto = upload.single("photo");
const filterObj = (currentObj, ...allowedFileds) => {
  let newObj = {};
  Object.keys(currentObj).forEach((el) => {
    if (allowedFileds.includes(el)) newObj[el] = currentObj[el];
  });
  console.log("new obj", newObj);
  return newObj;
};
const getAllUsers = asyncWrapper(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    records: users.length,
    data: {
      users,
    },
  });
});
const updateMe = asyncWrapper(async (req, res, next) => {
  console.log("inside update me");
  console.log(req.user);
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError("can not update password in this request"));
  }
  console.log(req.body);
  const updatedbody = filterObj(req.body, "name", "email");
  const user = await User.findByIdAndUpdate(req.user._id, updatedbody, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
const deleteMe = asyncWrapper(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    { _id: req.user._id },
    { activeAccount: false }
  );
  console.log(user);
  res.status(200).json({
    status: "success",
    message: "account deleted successfully",
  });
});

const getMe = (req, res, next) => {
  console.log(req.user);
  req.params.id = req.user.id;
  next();
};

const getUser = factory.getOne(User, null);
const createUser = factory.createOne(User);
const deleteUser = factory.deleteOne(User);
const updateUser = factory.updateOne(User);

module.exports = {
  uploadUserPhoto,
  getAllUsers,
  createUser,
  updateMe,
  deleteMe,
  getUser,
  deleteUser,
  updateUser,
  getMe,
};
