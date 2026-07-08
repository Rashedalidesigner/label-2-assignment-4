import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRote } from "./module/user/User.route";
import { authRoute } from "./module/auth/auth.route";
import cookiePerser from "cookie-parser";

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.frontend_url
}));
app.use(cookiePerser());


app.get("/",(req:Request,res:Response)=>{
    res.send("server is running");
});

app.use("/api/user",userRote);
app.use("/api/auth",authRoute);

export default app;