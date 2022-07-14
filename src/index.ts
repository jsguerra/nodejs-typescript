import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response): void => {
  // Typescript example
  const age: number = 39;

  res.json({ message: "Test is successful" });
});

app.listen("3001", (): void => console.log("Server Running!"));
