import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRote } from "./module/user/User.route";

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.frontend_url
}));


app.get("/",(req:Request,res:Response)=>{
    res.send("server is running");
});

app.use("/api/auth",userRote);

export default app;