DROP DATABASE IF EXISTS color_db;
CREATE DATABASE color_db;
USE color_db;

CREATE TABLE colors (
  id INTEGER NOT NULL AUTO_INCREMENT,  
  favorite_color_ave DECIMAL(3,5),
  least_favorite_color_ave DECIMAL(3,5),
  PRIMARY KEY (id)
);