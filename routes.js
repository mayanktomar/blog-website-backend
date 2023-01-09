import express from "express";
import { createUserHandler, loginUserHandler } from "./controllers/userController.js";
import { createBlogHandler, getBlogsByInterestHandler, getBlogsByUserHandler } from "./controllers/blogController.js";

const router = express.Router();

router.post('/api/createUser',createUserHandler);
router.post('/api/loginUser',loginUserHandler);

router.post('/api/createBlog',createBlogHandler);
router.post('/api/getBlogsByInterest',getBlogsByInterestHandler);
router.post('/api/getBlogsByUser/:userId',getBlogsByUserHandler)
export {router as routes};