const express = require("express");
const path = require("path");
const ejs = require("ejs");


const app = express();
app.set('view engine', 'ejs');
app.use("/network", require("./routes/network.routes"));
app.use("/printer", require("./routes/print.routes"));


app.get("/", (req, res) => {
    res.render("index",{title: "Login", data:[{id:85},{id:1}]});
});

app.post("/ticket", (req, res) => {
    res.render();
    res.send("Ticket Receive");
});

app.listen(3002, () => {
    console.log("Listen on Port 3002");
})