import {
  getmahasiswa,
  getkodemata,
  InputNilai,
  getnilai,
} from "../controller/user_c.js";
import express from "express";

const Route = express.Router();
Route.get("/mahasiswa", getmahasiswa);
Route.get("/kodematakuliah", getkodemata);
Route.post("/nilai", InputNilai);
Route.get("/nilai", getnilai);
// Route.delete("/user:id", Cuser.createUser);
export default Route;
