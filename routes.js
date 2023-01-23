import express from "express";
import { createUserHandler, loginUserHandler } from "./controllers/userController.js";
import { createBlogHandler, getBlogsByInterestHandler, getBlogsByInterestsHandler, getBlogsByUserHandler } from "./controllers/blogController.js";
import { authenticate } from "./auth.js";

const router = express.Router();

router.post('/api/createUser',createUserHandler);
router.post('/api/loginUser',loginUserHandler);

router.post('/api/createBlog',authenticate,createBlogHandler);
router.post('/api/getBlogsByInterest',authenticate,getBlogsByInterestHandler);
router.post('/api/getBlogsByInterests',authenticate,getBlogsByInterestsHandler);
router.post('/api/getBlogsByUser/:userId',authenticate,getBlogsByUserHandler)
export {router as routes};