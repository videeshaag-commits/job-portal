<<<<<<< HEAD
const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  skills_required: [String],
  description: String,
  location:String
})

=======
const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  skills_required: [String],
  description: String,
  location:String
})

>>>>>>> 4d27ce5bbb5c80280cb48d5ea076e90ed1a89a11
module.exports = mongoose.model("Job", jobSchema)