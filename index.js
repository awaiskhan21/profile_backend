const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use("/admin", adminRouter);

const PORT = process.env.PORT;
app.listen(3000, () => {
  console.log(`Sever is running in ${PORT}`)
});