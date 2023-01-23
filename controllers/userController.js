import mongoose from "mongoose";
import { createUser, getUserById, loginUser } from "../services/userService.js";

export async function createUserHandler(req,res) {
  try {
    const user = await createUser(req.body);
    return res.status(200).json(user);
    
  } catch (err) {
    return res.status(500).send("error while creating user. Error message: ",err);
  }
}

export async function loginUserHandler(req,res) {
  try {
    const user = await loginUser(req.body);
    return res.status(200).send(user);
  } catch (err) {
    console.log("error:",err);
    return res.status(500).send("error while authenticating user. Error message: ");
  }
}
export async function getUserByIdHandler (req,res) {
  const id = req.params.id;
  try {
    const user = await getUserById(id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send("error while fetching user. Error message: ",err);
  }
}