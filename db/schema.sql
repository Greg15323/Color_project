DROP DATABASE IF EXISTS color_db;
CREATE DATABASE color_db;
USE color_db;

CREATE TABLE colors (
  id INTEGER NOT NULL AUTO_INCREMENT,  
  fav_red_ave DECIMAL(8,5),
  fav_green_ave DECIMAL(8,5),
  fav_blue_ave DECIMAL(8,5),
  least_fav_red_ave DECIMAL(8,5),
  least_fav_green_ave DECIMAL(8,5),
  least_fav_blue_ave DECIMAL(8,5),
  PRIMARY KEY (id)
);