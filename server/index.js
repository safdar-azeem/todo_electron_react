const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectToDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3001;

connectToDB();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
