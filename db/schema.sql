DROP DATABASE IF EXISTS color_db;
CREATE DATABASE color_db;
USE color_db;

CREATE TABLE colors (
  id INTEGER NOT NULL AUTO_INCREMENT,  
  fav_red_ave DECIMAL(18,15),
  fav_green_ave DECIMAL(18,15),
  fav_blue_ave DECIMAL(18,15),
  least_fav_red_ave DECIMAL(18,15),
  least_fav_green_ave DECIMAL(18,15),
  least_fav_blue_ave DECIMAL(18,15),
  PRIMARY KEY (id)
);