import mongoose from "mongoose";
import { Users } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = 'gyuioiqdoiqfoiqehfoi@njjaoiueqfewf';
export async function createUser(userData) {
  const passwordByUser = userData.password;
  const hashedPassword = await bcrypt.hash(passwordByUser,10);
  userData.password = hashedPassword;
  let users = [];
  users.push(userData);
  return await Users.insertMany(userData);
}

export async function loginUser(userData) {
  const emailId = userData.emailId;
  const passwordByUser = userData.password;

  const userDocument = await Users.findOne({email:emailId});
  //userDocument = null
  // if (null) -> false
  // if (!null) -> true
  if (!userDocument) {
    return {status:'error',message:'User does not exist'};
  }
  const hashedPassword = userDocument.password;
  const match = await bcrypt.compare(passwordByUser,hashedPassword);
  if (!match) {
    return {status:'error',message:'Password does not match'};
  }

  const token = jwt.sign(
    {
      name: userDocument.name,
      emailId:emailId,
      userId: userDocument._id,
      interests: userDocument.interests,
      gender: userDocument.gender
    },
    secretKey,
    {expiresIn:"24h"}
  )

  const dataToSend = {
    emailId: emailId,
    userId: userDocument._id,
    token: token,
    interests: userDocument.interests
  }

  return {status:'success',message:dataToSend}

  
}

export async function getUserById(id) {
  return await Users.findById(id);
}

export async function updateUser(id,data) {
  return await Users.updateOne({_id:id},{$set:data});
}



