const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const connection = require("./config/dbconfig");
const setupRoutes = require("./routes/apiRoutes");
const { spawn } = require('child_process');

app.use(cors());
// Serve static files from the frontend's dist directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("/py_test", (req, res) => {
  let py = spawn('py',['test.py']);
  let result = '';
  py.stdout.on('data', (data) => {
    result += data.toString();
  });

  py.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  py.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.send(result);
  });
})

app.get("/", (req, res) => {
  res.send("This is backend");
});

setupRoutes(app, connection);
// Add this to handle any other GET request not handled above and serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});

module.exports = app;
