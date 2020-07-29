/*DML FILE*/
--https://www.mockaroo.com/

--NEW USER
INSERT INTO users (user_type, username, userpass, hash, salt, user_img, firstname, lastname, email)
VALUES (0, 'sqlscriptuser', 'sqlscriptpastt', 'cantmakeupahash', 'orasalt', 'base64imagestring', 'sqlfirstname', 'sqllastname',	'sqlemail@gmail.com');

--NEW CARD
INSERT INTO cards (ticket_status, user_id, admin_id, entry_time, date_resolved, title, message)
VALUES (0, 1, 1, '2017-07-23 00:00:00', '2017-07-23 00:00:00', 'title', 'message');

--NEW REPLY
INSERT INTO replies (tpid, user_id, entry_time, replies)
VALUES (1, 1, '2017-07-23 00:00:00', 'replybody');


--SERVER USER ROLES
INSERT INTO user_roles (user_role_id, user_role_name)
VALUES (0, 'employee'), (1, 'admin');

--SERVER TICKET STATUSES
INSERT INTO ticket_status (tid, ticket_status)
VALUES (0, 'Post'), (1, 'Pending'), (2, 'Accepted'), (3, 'Resolved');

--NEW ADMIN. must change to 0 in dbeaver & ctrl-S
INSERT INTO users (user_type, username, userpass, hash, salt, user_img, firstname, lastname, email)
VALUES (1, 'admin', '1234', 'cantmakeupahash', 'orasalt', 'base64imagestring', 'sqlfirstname', 'sqllastname',	'sqladminemail@gmail.com');
