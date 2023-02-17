import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();

const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I still love you.");
};

app.use(logger);
app.get("/", handleHome);

const handleListening = () => {
  console.log(`Server listening http://localhost:${PORT}`);
};
app.listen(PORT, handleListening);
