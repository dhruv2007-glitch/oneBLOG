import { Router } from "express";
import { 
    signupHandler, 
    signInHandler,
    logoutHandler 
} from "../controllers/user.controller.js";

const router = Router();

router.post('/signup', signupHandler)
router.post('/signin', signInHandler)
router.get('/logout', logoutHandler)

export default router