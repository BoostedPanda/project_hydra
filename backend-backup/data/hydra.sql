CREATE EXTENSION pgcrypto;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username varchar(50) NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE `members` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `nickname` VARCHAR(50) NOT NULL,
    `rank_id` int NOT NULL,
    `rank` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
)

CREATE TABLE `user_role` (
`user_id` INT NOT NULL,
`role_id` INT NOT NULL,
PRIMARY KEY (`user_id`, `role_id`),
FOREIGN KEY (`user_id`)
	REFERENCES `users` (`id`)
	FOREIGN KEY (`role_id`)
	REFERENCES `role` (`id`)
)