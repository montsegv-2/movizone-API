const { sql, poolPromise } = require("../models/db");

exports.addMovie = async (req, res) => {
  const { title, description, release_date, image_url } = req.body;

  try {
    const pool = await poolPromise;
    await pool
      .request()
      .input("title", sql.NVarChar, title)
      .input("description", sql.NVarChar, description)
      .input("release_date", sql.Date, release_date)
      .input("image_url", sql.NVarChar, image_url)
      .query(
        "INSERT INTO movies (title, description, release_date, image_url) VALUES (@title, @description, @release_date, @image_url)"
      );

    res.status(201).send("Movie added successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};
