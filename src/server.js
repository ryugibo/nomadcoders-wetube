import express from "express";

const PORT = 4000;
const app = express();

const gossipmiddleware = (req, res, next) => {
  console.log("I'm in the middle!");
  next();
};
const handleHome = (req, res) => {
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("login here.");
};
app.get("/", gossipmiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () => {
  console.log(`Server listening http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);
