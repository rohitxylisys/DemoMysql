const express = require("express");
const connectDB = require("./config/db"); // Import the connectDB function
const authRoutes = require("./routes/auth");
const authorize = require("./middlewares/authMiddleware");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Node.js MongoDB project!");
});

app.use("/api/auth", authRoutes);

app.get("/api/protected", authorize, (req, res) => {
  res.send("This is a protected route, accessible only with a valid token.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
