import Blog from "../models/blog.model.js"
import Comment from "../models/comment.model.js"

const blogHandler = async (req, res)=>{
    const {title, body} = req.body
   try {
     await Blog.create({
         title,
         body,
         coverImageUrl: `/uploads/${req.file.filename}`,
         createdBy: req.user._id,
     })
     res.redirect(`/`)
   } catch (error) {
    console.log(`Error in BlogHandler ${error}`)
   }
}

const blogRender = async (req, res)=>{
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comments = await Comment.find({ blogId: req.params.id }).populate('createdBy')
    return res.render('blog', {
        user: req.user,
        blog,
        comments,
    })
}

export{
    blogHandler,
    blogRender
}