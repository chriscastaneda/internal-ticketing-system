/*DCL File*/
CREATE ROLE p2_role LOGIN PASSWORD 'Password1';
--DROP ROLE p2_role;

/*Privaleges*/
GRANT SELECT, UPDATE, INSERT, DELETE ON ALL TABLES IN SCHEMA public TO p2_role;

/*Privaleges*/
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO p2_role;


ALTER USER p2_role WITH PASSWORD 'Password1';

grant usage on schema public to p2_admin;
grant select, update, insert on all tables in schema public to p2_admin;

