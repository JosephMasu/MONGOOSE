import express from "express";
import connectDB from "./db/connectDB.js";
import SingleDoc from "./models/Movies.js";
const app = express();
const port = process.env.PORT || 7000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

connectDB(DATABASE_URL);
SingleDoc();
app.listen(port, () => console.log(`Server listening on port ${port}`));

