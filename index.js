import express from "express";
import dotenv from "dotenv";
import { connection } from "./config/db.js";
dotenv.config();
const port = process.env.port;
const app = express();

connection();
app.get("/", (req, res) => {
  res.send("Hello from nandlal");
});
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
