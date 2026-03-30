
const mongoose = require("mongoose")

const appSchema = new mongoose.Schema({
  user_id: String,
  job_id: String,
  status: String
 })
 
module.exports = mongoose.model("Application", appSchema)