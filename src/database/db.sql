CREATE TABLE users (
    id_user INT PRIMARY KEY IDENTITY(1,1),
    name_user VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_user VARCHAR(255) NOT NULL,
    fecha_registro DATETIME DEFAULT GETDATE()
);

CREATE TABLE movies (
    movie_id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    year_release INT NOT NULL,
    description NVARCHAR(MAX),
    category NVARCHAR(255)
    image_url NVARCHAR(255),
);

CREATE TABLE series (
    id INT PRIMARY KEY IDENTITY(1,1),
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(MAX),
    release_date DATE,
    image_url NVARCHAR(255),
  
);

CREATE TABLE favorites (
    id INT PRIMARY KEY IDENTITY(1,1),
    user_id INT NOT NULL,
    movie_id INT NULL,
    series_id INT NULL,
    date_ad DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (series_id) REFERENCES series(id),
    CONSTRAINT CK_favorites CHECK (
        (movie_id IS NOT NULL AND series_id IS NULL) OR 
        (movie_id IS NULL AND series_id IS NOT NULL)
    )
);
