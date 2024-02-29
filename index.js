import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.port;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from nandlal");
});
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
