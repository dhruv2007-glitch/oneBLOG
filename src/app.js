import express from "express"
import path from 'path'
import cookieParser from "cookie-parser"

import staticRoute from './routes/staticRouter.js'
import userRoute from './routes/user.route.js'
import blogRoute from './routes/blog.route.js'
import staticBlogRoute from './routes/blog.static.route.js'

import connectDB from "./db/connect.db.js"
import dotenv from "dotenv"
import checkForAuthentication from "./middleware/auth.middleware.js"
dotenv.config()


const app = express()
const port = process.env.PORT || 8956

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkForAuthentication('token'))
app.use('/uploads', express.static('public/uploads'));
app.use('/images', express.static('public/images'));

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'));

//static route
app.use('/', staticRoute)
app.use('/blog', staticBlogRoute)

//api Route
app.use('/api', blogRoute)
app.use('/user', userRoute)

connectDB()
.then(()=>{
    console.log(`MongoDB Connected Succesfully`)

    app.listen(port, ()=>{
        console.log("Server is listening on Port", port);
        
    })
})
.catch((err)=>{
    console.log("Somthing Error :",err)
})


