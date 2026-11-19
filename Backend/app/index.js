import express from "express";
import dotenv from "dotenv";
import mainbox from "../mainBox/routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("server is Live");
});

app.use('/v1/api/', mainbox);

app.listen(port, ()=>{
    console.log("server is running on port " + port);
});