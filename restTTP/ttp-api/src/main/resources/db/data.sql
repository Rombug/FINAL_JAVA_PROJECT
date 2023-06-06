INSERT INTO TRANSPORT(id, registration_number, owner, registration_country, car_number, comment, vehicle_model)
VALUES ('48a95af7-8b83-4a08-8001-0f865db8ea26', 'TG54jk36', 'Romanas Bugakovas', 'Lithuania','ABN555', 'Testas', 'Man'),
       ('abdee4f9-5763-4afc-85ed-98b2fdefb35d', 'ML19hj88', 'Jonas Petraitis', 'Denmark','KT6589D', 'Testas', 'Iveco');

INSERT INTO USERS(id, name, surname, username, email, phone, password)
VALUES ('25a95af7-8b83-4a08-8001-0f865db8ea31', 'Romanas', 'Bugakovas', 'user', 'rb@codeacademy.lt', '+37067411111', '{bcrypt}$2a$10$QxvKIenITQ0xyC.teXryiexZABwLiWExaf8OfL58ScYv7gqCmISo.'),
       ('11a95af7-8b83-4a08-8001-0f865db8ea29', 'Admin', 'Admin', 'admin', 'admin@codeacademy.lt', '+37067400000', '{bcrypt}$2a$10$QxvKIenITQ0xyC.teXryiexZABwLiWExaf8OfL58ScYv7gqCmISo.');

INSERT INTO ROLES(id, name)
VALUES ('b26cb831-9427-41ee-adcc-271f7b02d611', 'USER'),
       ('c16cb831-9427-41ee-adcc-271f7b02d122', 'ADMIN');

INSERT INTO USERS_ROLES(user_id, role_id)
VALUES ('25a95af7-8b83-4a08-8001-0f865db8ea31', 'b26cb831-9427-41ee-adcc-271f7b02d611'),
       ('11a95af7-8b83-4a08-8001-0f865db8ea29', 'b26cb831-9427-41ee-adcc-271f7b02d611'),
       ('11a95af7-8b83-4a08-8001-0f865db8ea29', 'c16cb831-9427-41ee-adcc-271f7b02d122');