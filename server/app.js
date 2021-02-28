const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/results", (req, res) => {
  axios.get("http://randomuser.me/api").then((resp) => {
    // console.log(resp.data.results);
    res.json(resp.data.results);
  });
});
app.listen(3001, (req, res) => {
  console.log("listening on port 3001");
});
