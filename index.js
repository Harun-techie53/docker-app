const express = require("express");
const app = express();
const mongoose = require("mongoose");

const connectDB = async () => await mongoose
  .connect(
    "mongodb://harun:testpassword@mongo:27017/mydb?retryWrites=true&w=majority&authSource=admin"
  ) 
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("error", err));

connectDB();

app.get("/", (req, res) => {
  const helloMarkup = "<h2>HELLO NATURE!!!!</h2>";

  res.send(helloMarkup);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("Listening on 3000..."));
