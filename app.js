const express = require("express");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 3001;

const app = express();
app.use(cors());

app.get("/", (req, res) => {res.sendFile(path.join(__dirname, "index.html"))});

// Celsius to Fahrenheit Conversion
app.get("/ctof", (req, res) => {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({ error: 'The "num" parameter is required.' });
  }

  const celsius = parseFloat(num);
  const fahrenheit = (celsius * 9/5) + 32;

  console.log(`Conversion: ${celsius}°C to ${fahrenheit}°F`);

  res.json({ fahrenheit });
});

// Fahrenheit to Celsius Conversion
app.get("/ftoc", (req, res) => {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({ error: 'The "num" parameter is required.' });
  }

  const fahrenheit = parseFloat(num);
  const celsius = (fahrenheit - 32) / 1.8;

  console.log(`Conversion: ${fahrenheit}°C to ${celsius}°F`);

  res.json({ celsius });
});

// Server
const server = app.listen(port, () => {
  console.log(`Number Converter listening on port ${port}!`);
});

server.keepAliveTimeout = 5 * 60 * 1000;
server.headersTimeout = 5 * 60 * 1000;