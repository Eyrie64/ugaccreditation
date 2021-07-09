const express = require("express");
const app = express();
const cors = require("cors");

const mysql = require("mysql");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "accred",
});

app.get("/register", (req, res) => {
  const user = req.body.user;
  const college = req.body.college;
  const school = req.body.college;
  const department = req.body.department;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO signup (user, college, school, department, email, password) VALUE (?,?,?,?,?,?)",
    [user, college, school, department, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});
app.listen(3001, () => {
  console.log("Server is running");
});
