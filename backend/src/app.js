import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'

const app = express();


app.use(cors({         // it use to set the url which our server can connect or whitelist
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


// common middlewares

app.use(express.json({limit: "15kb"}))  // changes any incoming data into json format.
app.use(express.static("public"))  // use it to send static data like images etc.
app.use(express.urlencoded({extended: true , limit: "16kb"})) // use it to apply encription on url like it changes blank spaces into code.
app.use(cookieParser())

// Routes files
import userRoute from './routes/userRouter.js'

app.use("/v1/user" , userRoute)




export { app }