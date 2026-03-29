<<<<<<< HEAD
const mongoose = require("mongoose")

const appSchema = new mongoose.Schema({
  user_id: String,
  job_id: String,
  status: String
})

=======
const mongoose = require("mongoose")

const appSchema = new mongoose.Schema({
  user_id: String,
  job_id: String,
  status: String
})

>>>>>>> 4d27ce5bbb5c80280cb48d5ea076e90ed1a89a11
module.exports = mongoose.model("Application", appSchema)