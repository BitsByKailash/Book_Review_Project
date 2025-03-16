import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import {fileURLToPath } from "url";
import path from "path";
import axios from "axios";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "bookreview",
    password: "HareKrishnaHareKrishna123!",
    port: 5432,
  });

  app.get("/createReview", async (req,res) => {
    res.render("createReview");
});
app.get("/statistics", async (req,res) => {
  res.render("Statistics");
});

app.get("/", async (req,res) => {
    const result = await pool.query('SELECT booklink, review, amazonlink, rdtm FROM books')
    //console.log(result.rows);
    res.render("index",{ array : result.rows,});
});



app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

