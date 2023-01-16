import jwt from 'jsonwebtoken';

const secretKey = 'gyuioiqdoiqfoiqehfoi@njjaoiueqfewf';

export async function authenticate (request,response,next) {
  try {
    const token = request.headers.authorization;

    const isVerfied = jwt.verify(token,secretKey);

    console.log("value of isVerified:",isVerfied);

    next();

  } catch (err) {
    response.status(401).json({error:"Authorization failed"});
  }
}