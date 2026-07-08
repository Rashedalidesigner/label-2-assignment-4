import dotenv from "dotenv";
import path from "node:path";

dotenv.config({path:path.join(process.cwd(),".env")});



const config = {
    database_url : process.env.DATABASE_URL,
    
    port : process.env.PORT as string,
    frontend_url: process.env.FRONTEND_URL as string,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
    refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string,
    access_token_expeir: process.env.ACCESS_TOKEN_EXPEIR as string,
    refresh_token_expeir: process.env.REFRESH_TOKEN_EXPEIR as string,
    access_token_solt_round : process.env.ACCESS_TOKEN_SOLT_ROUND as string,
    refresh_token_solt_round : process.env.REFRESH_ROKEN_SOLT_ROUND as string,
};

// console.log(config.database_url);

export default config;
