# team-2-project
Post/Ticket support forum

the server only looks at hash and salt when trying to log in a user, once the password has been used to
create the hash+salt, it is stored in the database and never looked at by the server again

neither the client or server currently have a way to make a regular user into an admin. to make a user
into an admin, manually change an existing user's user_type field from 0 to 1 in the database