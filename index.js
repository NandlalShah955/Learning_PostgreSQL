import express from "express";
const port = 8000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from nandlal");
});
app.listen(port, () => {
  console.log(`Server is listening on Port ${port}`);
});
