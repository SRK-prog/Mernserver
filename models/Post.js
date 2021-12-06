const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    userId: {
      type: String,
      required: true,
    },
    comments: [{ comment: String, userId: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
