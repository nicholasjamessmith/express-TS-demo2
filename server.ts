//Import dependencies
import dotenv from "dotenv";
import mongoose from "mongoose";
import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
const { PORT = 3000 } = process.env;
dotenv.config()

//Create application object
const app = express();

//Routes
//Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.get("/ideas", (req, res) => {
  res.send("Final Capstone Project Ideas... ... .. . ...")
});

//Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));