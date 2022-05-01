import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    query,
    getDocs,
    where,
} from "firebase/firestore";
import firebaseConfig from "./firebase-config.js";

function getFirebase() {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return db;
}

async function createUser(username, email, stocks, location, photo) {
    const db = getFirebase();
    const userRef = collection(db, "users");
    const user = {
        username,
        email,
        stocks,
        location,
        photo,
    };
    return await addDoc(userRef, user);
}

async function getUsersFromDatabase() {
    const db = getFirebase();
    const fetchUsers = await getDocs(collection(db, "users"));
    return getUserDataFromFetch(fetchUsers);
}

function getUserDataFromFetch(fetchedUsers) {
    const users = [];

    for (const user of fetchedUsers.docs) {
        const data = user.data();
        users.push({
            id: user.id,
            username: data.username,
            photo: data.photo,
            email: data.email,
            stocks: data.stocks,
            location: data.location,
        });
    }

    return users;
}

async function getUserByUsername(username) {
    const db = getFirebase();
    const userQuery = query(
        collection(db, "users"),
        where("username", "==", username)
    );
    const fetchedUsers = await getDocs(userQuery);
    return getUserDataFromFetch(fetchedUsers);
}

export async function addUser(req, res, next) {
    try {
        const user = req.body.user;
        console.log(user);
        createUser(
            user.username,
            user.email,
            user.stocks,
            user.location,
            user.photo
        );
        res.status(201).send("User added");
    } catch (error) {
        res.status(400).send("Incorrect body to request");
    }
}

export async function getUsers(req, res, next) {
    const users = await getUsersFromDatabase();
    console.log(users);
    res.status(200).send(users);
    next();
}

export async function getUser(req, res, next) {
    const user = await getUserByUsername(req.query.username);
    res.status(200).send(user);
    next();
}

export async function updateUser(req, res, next) {
    const username = req.query.username;
    // Going to assume that a username is unique
    let user = await getUserByUsername(username);
    user = user[0];
    console.log(user);
    const updatedUser = req.body;
    const db = getFirebase();
    // cannot update username or email, so we will just update the stocks and location
    // get reference to the user document
    const userQuery = query(
        collection(db, "users"),
        where("username", "==", username)
    );
    const fetchedUsers = await getDocs(userQuery);
    const userRef = fetchedUsers.docs[0].ref;
    console.log(userRef);
    console.log(updatedUser);
    await updateDoc(userRef, {
        stocks: updatedUser.stocks,
        location: updatedUser.location,
    });

    res.status(200).send("User updated");
}
