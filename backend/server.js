const express = require("express");

const auth_route = require("./route/auth");
const user_route = require("./route/user");

require("./config/db_connection");


const app = express();

app.use(express.static("public"));
app.use(express.json());

require("dotenv").config();


app.use("/api", auth_route);

app.use("/api", user_route);


app.use((req, res, next) => {
    res.status(404).send({ data: "page not found" });
});

app.use((err, req, res, next) => {
    console.log("error");
    console.log(err.name);
    let status = 500;
    if (err.name === "ValidationError") {
        status = 400;
    }
    res.status(status).send({
        data: "server error",
        msg: err.message,
    });
});

console.log("PORT", process.env.PORT)
app.listen(process.env.PORT, (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("listening...");
    }
});