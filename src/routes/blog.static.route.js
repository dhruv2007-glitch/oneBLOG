import { Router } from "express";
import { blogRender } from "../controllers/blog.controller.js";

const router = Router();

router.get("/:id", blogRender);


export default router;
