import { Router } from "express";
import Blog from "../models/blog.model.js";

const router = Router();

router.get('/', async(req, res)=>{
    const allBlogs =await Blog.find({})
    return res.render('home',{
        user: req.user,
        blogs: allBlogs,
    })

})

router.get("/signin", (req, res)=>{
    return res.render('signIn')
})

router.get("/signup", (req, res)=>{
    return res.render('signup')
})

router.get("/add-blog", (req, res)=>{
    return res.render('addBlog',{
        user: req.user,
    })
})

export default router
