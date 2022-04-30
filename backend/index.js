import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import checkAuth from "./login.js";
import { addUser, getUser, getUsers, updateUser } from "./database.js";

dotenv.config();

const main = async () => {
    const app = express();
    // enable cors on all requests
    app.use(cors());
    // cors shit
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
    });
    app.use(express.json()); // for parsing application/json

    app.listen(process.env.PORT || 4000, () => {
        console.log(`Listening on port ${process.env.PORT || 4000}`);
    });

    app.get("/", function (req, res) {
        res.send("<h1>Hello, World!</h1>");
    });

    app.use("/login", checkAuth);
    app.post("/add-user", addUser);
    app.use("/get-users", getUsers);
    app.use("/get-user", getUser);
    app.put("/update-user", updateUser);
};

main();
