import Comment from '../models/comment.model.js'
import mongoose from 'mongoose'

const commentHandler = async(req, res)=>{

    const { comment } = req.body
    const { blogId } = req.params
    const { _id } = req.user

    const trimmedBlogId = blogId.trim();
 try {
    await Comment.create({
           content: comment,
           blogId: trimmedBlogId,
           createdBy: _id,
   
       })
       return res.redirect(`/blog/${trimmedBlogId}`)
 } catch (error) {
    console.log("Error in Posting Comment", error)
 }
}

export {
    commentHandler
}