const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const authRouter = require("./routes/Authrouter");
const cors = require("cors");
require("./config/db");


// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });


app.use(bodyParser.json());
app.use(cors());
app.use('/auth',authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


