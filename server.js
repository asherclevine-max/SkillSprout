const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("SkillSprout backend is running");
});


app.get("/providers", (req, res) => {
  const providers = [
    {
      id: 1,
      name: "Marcus T.",
      service: "Lawn Care",
      rate: 18,
      rating: 4.9
    },
    {
      id: 2,
      name: "Aisha K.",
      service: "Tutoring",
      rate: 22,
      rating: 5.0
    }
  ];

  res.json(providers);
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});