<<<<<<< HEAD
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  skills: [String]
})

=======
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  skills: [String]
})

>>>>>>> 4d27ce5bbb5c80280cb48d5ea076e90ed1a89a11
module.exports = mongoose.model("User", userSchema)