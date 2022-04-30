import express from "express";
import checkAuth from "./login.js";
import dotenv from "dotenv";
import { addUser, getUser, getUsers, updateUser } from "./database.js";

dotenv.config();

const main = async () => {
    const app = express();
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