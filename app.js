const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./util/database");
const sellerRoute = require("./routes/seller");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/dashboard", sellerRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => console.log(err));