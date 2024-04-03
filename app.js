const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors())

const v1 = require("./routes/v1/index");
app.use("/api/v1", v1);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
