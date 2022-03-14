import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    user.push({...user, id: uuid()});
    console.log(`User [$]`)
};