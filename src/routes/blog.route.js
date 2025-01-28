import { Router } from "express";
import { blogHandler, blogRender } from "../controllers/blog.controller.js";
import { upload } from "../utils/uploader.js";
import { commentHandler } from "../controllers/comment.controller.js";

const router = Router()

router.post('/blog', upload.single('coverImage'), blogHandler)

router.post('/comment/:blogId', commentHandler )

export default router
