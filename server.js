const { app } = require("./main");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const port = process.env.PORT;
// const { Schema } = "mongoose";
mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("connected"));

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
