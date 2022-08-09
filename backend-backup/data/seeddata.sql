SELECT id 
  FROM users
 WHERE username = 'janedoe' 
   AND password = crypt('janespassword', password);
   

   INSERT INTO users (username, password) VALUES (
  'Admin',
  crypt('secret', gen_salt('md5'))
);


INSERT INTO
  `members` (`name`, `nickname`, `rank`, `rank_id`) 
VALUES 
  ('Juan Carlos Hernandez', 'Flippy', 'Leader', '1'),
  ('Fernando Reyes', 'Mario', 'OG', '2'),
  ('Susie Carmichael', 'Meth Queen', 'OG', '2'),
  ('Miguel Almerion', 'MigL', 'OG', '2'),
  ('Mike Wadum', 'El Gringo', 'OG', '2'),
  ('Aleksander Sazkaljovich', 'Bogo', 'Full Member', '3'),
  ('Jay Jarvis', 'Jail Jarvis', 'Full Member', '3'),
  ('Mari Posa', 'N/A', 'Full Member', '3'),
  ('Chloé Blanc', 'N/A', 'Full Member', '3'),
  ('James Thompson', 'Phantom', 'Full Member', '3'),
  ('Vincent Carl', 'Arnie', 'Full Member', '3'),
  ('Raul Luis-Blanco', 'N/A', 'Full Member', '3'),
  ('Kio Shima', '2 Times', 'Associates', '4'),
  ('Leonardo Sand', 'Leo', 'Associates', '4'),
  ('Scarlett Skye', 'N/A', 'Associates', '4'),
  ('Niko Filatov', 'N/A', 'Associates', '4');


