import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import {fileURLToPath } from "url";
import path from "path";
import axios from "axios";
import multer from "multer";

//Set Storage engine
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
  },
}); 



// const upload = multer({
//   storage: storage,
//   limits: {fileSize: 5*1024*1024},
//   fileFilter: (req, file, cb) => 
//   {
//     const fileTypes = /jpeg|jpg|png/;
//     const extname = fileTypes.test(path.extname(file.originalname).toLocaleLowerCase());
//     const mimetype = fileTypes.test(file.mimetype);
//     if (extname && mimetype)
//     {
//       return cb(null, true);
//     }
//     cb('Error: Images Only!');
//   }
// }).single('bookImage');
const upload = multer({ storage: storage });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const { Pool } = pg;
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");
app.use(express.static('public'));

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

app.post("/createReview", upload.single("bookImage"), async (req, res) => {
  try {
      const { reviewText, bookName } = req.body;
      const bookImage = req.file ? `/uploads/${req.file.filename}` : '/uploads/placeholder.png';

      if (!reviewText) {
          return res.status(400).json({ error: "Review text is required" });
      }

      await pool.query("INSERT INTO books (review, booklink) VALUES ($1, $2)", [reviewText, bookImage]);
      
      console.log("Received Review:", reviewText);
      res.status(201).json({ message: "Review submitted successfully!" });
  } catch (error) {
      console.error("Database Error:", error);
      res.status(500).json({ error: "Database Error" });
  }
});

app.get("/", async (req, res) => {
  try {
      const result = await pool.query("SELECT booklink, review, amazonlink, rdtm FROM books");
      res.render("index", { array: result.rows });
  } catch (error) {
      console.error("Database Error:", error);
      res.status(500).send({ error: "Database Error" });
  }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });

