import express from "express";
import cors from "cors";
import { checkConnection } from "./config/database.js";
import Router from "./routes/routes.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(Router);

app.get("/", (req, res, next) => {
  try {
    res.send("Welcome to the Sequelize MySQL Project ");
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, async () => {
  try {
    console.log(`Server running on PORT ${PORT}`);
    await checkConnection();
  } catch (error) {
    console.log(error);
  }
});
