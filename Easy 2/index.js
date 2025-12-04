const express = require("express");
const app = express();

function addTimestamp(req, res, next) {
  req.timestamp = new Date().toISOString();
  next();
}

app.get("/protected", addTimestamp,  (req, res) => {
  // TODO: Send the response: Access granted at <timestamp>
  res.send(`Access granted at ${req.timestamp}`);
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
