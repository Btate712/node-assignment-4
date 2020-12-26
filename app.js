const express = require("express");

const app = express();

app.use(() => {
  console.log("Running...");
});

app.listen(3000);