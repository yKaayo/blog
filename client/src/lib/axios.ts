import axios from "axios";
import "dotenv/config";

export const api = axios.create({
  baseURL: process.env.URL || "http://localhost:1337",
});
