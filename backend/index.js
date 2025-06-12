import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import PasienRoute from "./routes/PasienRoute.js";
import DokterRoute from "./routes/DokterRoute.js";
import PeriksaRoute from "./routes/PeriksaRoute.js";
import ObatRoute from "./routes/ObatRoute.js"
import StrukRoute from "./routes/StrukRoute.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import sequelize from "./config/Database.js";

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(cors({ credentials:true,origin:'http://localhost:3000', methods: ["GET", "POST", "PUT", "DELETE"], }));

app.use(express.json());
app.use(UserRoute);
app.use(PasienRoute);
app.use(DokterRoute);
app.use(PeriksaRoute);
app.use(ObatRoute);
app.use(StrukRoute);

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected");
    await sequelize.sync(); // sinkronisasi model

    // Menggunakan PORT dari environment atau default ke 5000
    const port = process.env.PORT || 5000;
    app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

start();