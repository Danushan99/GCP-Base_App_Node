import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World - Environment: ${process.env.ENVIRONMENT || "not set"}`);
});

app.listen(Number(PORT), () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
