import { v4 as uuid } from "uuid";

let users = [];

export const getUsers = (req, res) => {
    console.log(`Users: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
    console.log(`User [${user.username}] added to database`);
};

/**
 * @brief get user[req, res]
 *
 * @param req
 * @param res
 */
export const getUser = (req, res) => {
    res.send(req.params.id);
};

export const deleteUser = (req, res) => {
    console.log(`user with id ${req.param.id} has been deleted successfully!`);
    users = users.filter((user) => user.id !== req.params.id);
}

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id == req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`user has been updated ${req.body.username}. age has updated to ${req.body.age}`);
}