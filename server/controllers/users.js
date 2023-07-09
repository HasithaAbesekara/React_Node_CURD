import { v4 as uuid } from "uuid";

let users = [];

//Get All Users
export const getUsers = (req, res) => {
  res.send(users);
};

//Addead users
export const createUsers = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User Addes Successfully");
};

export const getUser = (req, res) => {
  const singlUser = users.filter((user) => user.id === req.params.id);
  res.send(singlUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send("Delete Succesfully");
};

export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  user.name = req.body.name;
  user.email = req.body.email;
  user.age = req.body.age;

  res.send("User Updated Successfully");
};
