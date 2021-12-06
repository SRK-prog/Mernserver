const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const mailRoute = require("./routes/mails");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();
app.use(express.json());
app.use("/images", cors(), express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongo"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", cors(), upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", cors(), authRoute);
app.use("/api/users", cors(), userRoute);
app.use("/api/posts", cors(), postRoute);
app.use("/api/conversations", cors(), conversationRoute);
app.use("/api/messages", cors(), messageRoute);
app.use("/api/mail", cors(), mailRoute);

app.listen("5000", () => {
  console.log("server running in 5000");
});
