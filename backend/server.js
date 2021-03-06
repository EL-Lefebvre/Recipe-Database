const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  console.log("Port 8000 working");
});

app.listen(port, () => {
  console.log("listening on port 8000");
});
