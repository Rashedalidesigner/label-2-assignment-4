import app from "./app";
import config from "./config/config";

const port = Number(config.port);

const Main = async()=>{
    try {
        app.listen(port,()=>{
            console.log(`server is running ${port}`);
        })
    } catch (error:any) {
        console.log("server not started",error.message);
    }
}

Main();