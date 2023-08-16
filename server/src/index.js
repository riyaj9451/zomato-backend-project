// Import required dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 8080;

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors policy applying
app.use(cors())

// Import database connection
const connection = require("./connector");

// Endpoint for getting the first 10 orders
app.get("/api/orders", (req, res) => {
  try {
    // Execute query to get the first 10 orders from the database
    connection.query("select * from orders limit 10 offset 0", (err, result, next) => {
      if (err) {
        // Handle errors
        res.status(400).json({ message: "400 bad request" });
        next();
      } else {
        // Send the results back to the client
        res.status(200).json(result);
      }
    });
  } catch (err) {
    // Handle errors
    res.status(401).json({ message: "401 bad request" });
  }
});

// Endpoint for getting orders with custom limit and offset
app.get("/api/orders/:lim/:off", (req, res) => {
  try {
    // Extract limit and offset from the request parameters
    const { lim, off } = req.params;
    // Execute query to get data from limit and offset
    connection.query(`select * from orders limit ${lim} offset ${off}`, (err, result, next) => {
      if (err) {
        // Handle errors
        res.status(400).json({ message: "400 bad request" });
        next();
      } else {
        // Send the results back to the client
        res.status(200).json(result);
      }
    });
  } catch (err) {
    // Handle errors
    res.status(400).json({ message: "400 bad request" });
  }
});

// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`));

// Export the app object for testing purposes
module.exports = app;
