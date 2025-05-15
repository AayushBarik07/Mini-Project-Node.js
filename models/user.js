const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mini-project');

const userSchema = mongoose.Schema ({
  username: String, 
  password: String,
  name: String,
  email: String,
  age: Number,
  profilePic: {
    type: String,
    default: "default-profile.png"
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

module.exports = mongoose.model("user", userSchema);