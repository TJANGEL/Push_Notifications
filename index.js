const express = require("express");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Set Static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

// VAPID Keys
const publicVapidKey =
  "BFfDk4q5cxz_8mwYzN86URq6nHRyDujaiYD0P2uOwmYNlu0Fkz24P1NzaIExvsXx8d3mMYMUFxBbU-ShhEPv9lk";
const privateVapidKey = "W2ogOvJbMVwqZu8Wj_Bx8q3DZQOlGfS1ja1gvsLW_ks";

webpush.setVapidDetails(
  "mailto: test@test.com",
  publicVapidKey,
  privateVapidKey
);

// Subscribe route
app.post("/subscribe", (req, res) => {
  // get push subscription object
  const subscription = req.body;

  // send 201
  res.status(201).json({});

  // create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass ojbect into sendNotification function
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.log(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
