const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const mailRoute = require("./routes/mails");
const searchRoute = require("./routes/search");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

app.use("/api/auth", cors(), authRoute);
app.use("/api/users", cors(), userRoute);
app.use("/api/posts", cors(), postRoute);
app.use("/api/conversations", cors(), conversationRoute);
app.use("/api/messages", cors(), messageRoute);
app.use("/api/mail", cors(), mailRoute);
app.use("/api/search", cors(), searchRoute);

app.listen(PORT, () => {
  console.log("server running on 5000");
});
