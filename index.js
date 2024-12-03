import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./database/connect.js";
import "./utilities/fileUploads.js"
import { jwlRouter } from "./jewellery/jewellery.js";
import { adminRouter } from "./admin/admin.js";
import { fileURLToPath } from 'url'
import multer from 'multer'
import path from 'path'

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/admin", adminRouter);
app.use("/api/jewelleries", jwlRouter);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:5000/api");
});
