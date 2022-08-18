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

CREATE TABLE public.sessions (
	"id"
)
CREATE TABLE public.user (
	"id" serial NOT NULL UNIQUE,
	"username" varchar NOT NULL UNIQUE,
	-- unique ID is created here
	"password" varchar NOT NULL,
	PRIMARY KEY ("id")
);


CREATE TABLE public.workspace (
	"id" serial NOT NULL UNIQUE,
	"workspace_name" varchar NOT NULL,
	"user_id" serial NOT NULL,
	PRIMARY KEY ("id"),
	FOREIGN KEY ("user_id") REFERENCES public.user("id")
);


CREATE TABLE public.stickies (
	"id" serial NOT NULL UNIQUE,
	"title" varchar NOT NULL,
	"description" varchar,
	"workspace_id" serial NOT NULL,
	PRIMARY KEY ("id"),
	FOREIGN KEY ("workspace_id") REFERENCES public.workspace("id")
);
