-- no clue what this is
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE User (
	"UserID" varchar NOT NULL,
	"Password" varchar NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("UserID")
) WITH (
  -- what is OIDS???
  OIDS=FALSE
);

CREATE TABLE Workspace (
	"WorkspaceID" varchar NOT NULL,
	"Workspace_PW" varchar NOT NULL,
	CONSTRAINT "workspace_pk" PRIMARY KEY ("WorkspaceID")
) WITH (
  -- what is OIDS???
  OIDS=FALSE
);

CREATE TABLE Stickies (
	"id" integer NOT NULL,
	"Title" varchar NOT NULL,
	"Description" varchar NOT NULL,
	"Snack_ID" varchar NOT NULL,
	"Assigned_ID" varchar NOT NULL,
	"Workspace_ID" varchar NOT NULL,
	CONSTRAINT "stickies_pk" PRIMARY KEY ("id")
) WITH (
  -- what is OIDS???
  OIDS=FALSE
);

CREATE TABLE Snacks (
	"SnackID" varchar NOT NULL,
	CONSTRAINT "snacks_pk" PRIMARY KEY ("SnackID")
) WITH (
  -- what is OIDS???
  OIDS=FALSE
);

-- CREATE TABLE UserWorkspaceJoin (
--   "id" integer NOT NULL,
--   "User_UserID" varchar NOT NULL,
--   "Workspace_WorkspaceID" varchar NOT NULL,
--   CONSTRAINT "userworkspacejoin_pk" PRIMARY KEY ("id")
-- ) WITH (
--   -- what is OIDS???
--   OIDS=FALSE
-- )

ALTER TABLE Stickies ADD CONSTRAINT "stickies_fk0" FOREIGN KEY ("Snack_ID") REFERENCES  Snacks("SnackID");
ALTER TABLE Stickies ADD CONSTRAINT "stickies_fk1" FOREIGN KEY ("Assigned_ID") REFERENCES  User("UserID");
ALTER TABLE Stickies ADD CONSTRAINT "stickies_fk2" FOREIGN KEY ("Workspace_ID") REFERENCES  Workspace("WorkspaceID");

-- ALTER TABLE UserWorkspaceJoin ADD CONSTRAINT "userworkspacejoin_fk0" FOREIGN KEY ("User_UserID") REFERENCES  User("UserID");
-- ALTER TABLE UserWorkspaceJoin ADD CONSTRAINT "userworkspacejoin_fk1" FOREIGN KEY ("Workspace_WorkspaceID") REFERENCES  Workspace("WorkspaceID");
