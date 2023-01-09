import { createBlog, getBlogsByInterest, getBlogsByUser } from "../services/blogService.js";

export async function createBlogHandler(req,res) {
  try {
    const blog = await createBlog(req.body);
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).send("Error while creating blog");
  }
}

export async function getBlogsByInterestHandler(req,res) {
  try {
    const blog = await getBlogsByInterest(req.body.interest);
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).send("Error while fetching blogs");
  }
}

export async function getBlogsByUserHandler(req,res) {
  const userId = req.params.userId;
  try {
    const blog = await getBlogsByUser(userId);
    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).send("Error while fetching blogs");
  }
}