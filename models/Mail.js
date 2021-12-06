const mongoose = require("mongoose");
const MailSchema = new mongoose.Schema(
  {
    sendername: {
      type: String,
      required: true,
    },
    senderemail: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mail", MailSchema);
