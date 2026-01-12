const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Handle form submission
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  res.render("result", { name, email });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
