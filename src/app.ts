import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRote } from "./module/user/User.route";
import { authRoute } from "./module/auth/auth.route";
import cookiePerser from "cookie-parser";
import { RentalRequestRoute } from "./module/RentalRequest/Rental.route";
import { PropertiesRoute } from "./module/Properties/Properties.route";
import { ReviewRoute } from "./module/review/review.route";
import { CategoryRoute } from "./module/Categories/Categories.route";
import { paymentrouter } from "./module/payment/payment.route";

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
app.use("/api/rentals",RentalRequestRoute);
app.use("/api",PropertiesRoute);
app.use("/api",ReviewRoute);
app.use("/api",CategoryRoute);
app.use("/api/payments", paymentrouter);

export default app;