const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Koneksi database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // sesuaikan
  database: "stuntingcare"
});

db.connect((err) => {
  if (err) {
    console.log("Database error:", err);
  } else {
    console.log("Database connected!");
  }
});


// ================= REGISTER =================
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ success: false, message: "Data tidak lengkap" });
  }

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.json({ success: false, message: "Email sudah terdaftar" });
    }

    res.json({ success: true, message: "Register berhasil" });
  });
});


// ================= LOGIN =================
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.json({ success: false });
    }

    if (result.length > 0) {
      res.json({
        success: true,
        user: result[0]
      });
    } else {
      res.json({
        success: false,
        message: "Email atau password salah"
      });
    }
  });
});

// ================= CREATE APPOINTMENT =================
app.post("/appointment", (req, res) => {
  console.log("MASUK API APPOINTMENT:", req.body); // 🔥 DEBUG

  const {
    user_id,
    patient_name,
    birth_date,
    gender,
    pregnancy_status,
    phone,
    appointment_date,
    doctor_name
  } = req.body;

  const sql = `
    INSERT INTO appointments 
    (user_id, patient_name, birth_date, gender, pregnancy_status, phone, appointment_date, doctor_name)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    user_id,
    patient_name,
    birth_date,
    gender,
    pregnancy_status,
    phone,
    appointment_date,
    doctor_name
  ], (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.json({ success: false });
    }

    console.log("BERHASIL INSERT"); // 🔥 DEBUG
    res.json({ success: true, message: "Appointment berhasil dibuat" });
  });
});

// ================= RUN SERVER =================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});