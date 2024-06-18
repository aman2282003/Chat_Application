const express = require("express");
const chats = require("./data/data");
const connectDb = require("./confiig/db");
const dotenv = require("dotenv").config();
const colors = require("colors");
connectDb();
const app = express();

app.use(express.json());
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Api is running succesfully");
});

app.use("/api/user", userRoutes);
app.listen(PORT, console.log(`server is runing on port ${PORT}`.red.bold));
