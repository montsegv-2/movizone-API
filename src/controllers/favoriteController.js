const { sql, poolPromise } = require("../models/db");

exports.addFavorite = async (req, res) => {
  const { userId } = req.user;
  const { movieId, seriesId } = req.body;

  try {
    const pool = await poolPromise;
    await pool
      .request()
      .input("user_id", sql.Int, userId)
      .input("movie_id", sql.Int, movieId || null)
      .input("series_id", sql.Int, seriesId || null)
      .query(
        "INSERT INTO favorites (user_id, movie_id, series_id) VALUES (@user_id, @movie_id, @series_id)"
      );

    res.status(201).send("Favorite added successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};

exports.removeFavorite = async (req, res) => {
  const { userId } = req.user;
  const { favoriteId } = req.params;

  try {
    const pool = await poolPromise;
    await pool
      .request()
      .input("user_id", sql.Int, userId)
      .input("id", sql.Int, favoriteId)
      .query("DELETE FROM favorites WHERE id = @id AND user_id = @user_id");

    res.send("Favorite removed successfully");
  } catch (err) {
    res.status(500).send("Server error");
  }
};
