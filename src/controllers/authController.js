const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sql, poolPromise } = require("../models/db");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const pool = await poolPromise;
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool
      .request()
      .input("username", sql.NVarChar, username)
      .input("email", sql.NVarChar, email)
      .input("password_hash", sql.NVarChar, hashedPassword)
      .query(
        "INSERT INTO users (username, email, password_hash) VALUES (@username, @email, @password_hash)"
      );

    res.status(201).send("User registered successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const pool = await poolPromise;

    const result = await pool
      .request()
      .input("email", sql.NVarChar, email)
      .query("SELECT * FROM users WHERE email = @email");

    if (result.recordset.length === 0) {
      return res.status(400).send("User not found");
    }

    const user = result.recordset[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
