import { Blogs } from "../models/blog.js";

export async function createBlog(blogData) {
  let blogs = [];
  blogs.push(blogData);
  return await Blogs.insertMany(blogData);
}

export async function getBlogsByInterest(interest) {
  return await Blogs.find({tag:interest});
}

export async function getBlogsByUser(userId) {
  return await Blogs.find({createdBy:userId}).toArray();
}
