const express = require("express");
const query = require("./query");
const app = express();
const auth = require('./user')

app.use("/auth", auth);
app.use("/query",query)

module.exports = app;
