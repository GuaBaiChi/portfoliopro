require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const ContactRoute = require("./router/ContactRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", ContactRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build/public")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});
// const port = process.env.PORT || 5000;
// app.listen(port, console.log(`server listing to port 5000 only`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server port ${PORT}`);
});