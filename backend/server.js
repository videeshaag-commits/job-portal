const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const User = require("./models/User")
const Job = require("./models/Job")
const Application = require("./models/Application")

const app = express()
app.use(express.json())
app.use(cors())

// 🔗 MongoDB Connection (paste your link here)
mongoose.connect("mongodb+srv://videesha:1234@cluster0.nizvlp7.mongodb.net/jobportal?retryWrites=true&w=majority")
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err))

// ✅ Register
app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.send("User Registered")
  } catch (err) {
    console.log(err)
    res.status(500).send("Error")
  }
})


// ✅ Login
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne(req.body)
    if (user) res.json(user)
    else res.status(400).send("Invalid credentials")
  } catch (err) {
    console.log(err)
    res.status(500).send("Error")
  }
})

// ✅ Get Jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find()
  res.json(jobs)
})

// ✅ Apply Job
app.post("/apply", async (req, res) => {
  const { user_id, job_id } = req.body

  const exists = await Application.findOne({ user_id, job_id })
  if (exists) return res.send("Already Applied")

  const appData = new Application({
    user_id,
    job_id,
    status: "applied"
  })

  await appData.save()
  res.send("Applied Successfully")
})

// ✅ Add Job
app.post("/add-job", async (req, res) => {
  console.log(req.body)
  const job = new Job(req.body)
  await job.save()
  res.send("Job Added")
})

// GET APPLICATIONS
app.get("/applications/:userId", async (req, res) => {
  try {
    const apps = await Application.find({ user_id: req.params.userId })
    res.json(apps)
  } catch (err) {
    console.log(err)
    res.status(500).send("Error")
  }
})
//Delete All Jobs
app.delete("/delete-all-jobs", async (req, res) => {
  await Job.deleteMany({});
  res.send("All jobs deleted");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));