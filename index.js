import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const port = process.env.port;
const app = express();
app.use(cors());
app.use(express.json());
connection();
app.get("/", (req, res) => {
  res.send("Hello from nandlal");
});
app.use("/api", userRoutes);
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
