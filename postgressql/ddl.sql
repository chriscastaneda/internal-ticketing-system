/*DDL File*/
CREATE TABLE user_roles (
	user_role_id INTEGER NOT NULL primary key,
	user_role_name varchar(8) NOT NULL
);

create table TICKET_STATUS (
	TID INTEGER primary key,
	ticket_status VARCHAR(8)
);

create table USERS (
	UID INTEGER generated always as identity primary key,
	user_type INTEGER references user_roles (user_role_id),
	username VARCHAR(50) unique,
	userpass VARCHAR(100),
	hash VARCHAR,
	salt VARCHAR,
	user_img VARCHAR,
	firstname VARCHAR(100),
	lastname VARCHAR(100),
	email VARCHAR(100) unique,
	rating_sigma DECIMAL,
	times_rated INTEGER
);

create table CARDS (
	card_ID INTEGER generated always as identity primary key,
	ticket_status INTEGER references TICKET_STATUS (TID),
	user_ID INTEGER references USERS (UID),
	admin_ID INTEGER references USERS (UID),
	entry_time TIMESTAMP,
	date_resolved TIMESTAMP,
	title VARCHAR(100),
	message VARCHAR(1500)
);

create table REPLIES (
	RID INTEGER generated always as identity primary key,
	TPID INTEGER references CARDS (card_ID),
	user_ID INTEGER references USERS (UID),
	entry_time TIMESTAMP,
	replies VARCHAR(1500)
);

--CREATE TABLE user_img (
--	uiid INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY primary key,
--	user_img VARCHAR NULL
--);



DROP TABLE TICKET_STATUS CASCADE;
DROP TABLE USERS CASCADE;
DROP TABLE CARDS CASCADE;
DROP TABLE REPLIES CASCADE;
--DROP TABLE user_img;
DROP TABLE user_roles CASCADE;
--DELETE FROM authors WHERE id = 6;
ALTER table user_roles ALTER COLUMN user_role_id INTEGER NOT NULL;

























