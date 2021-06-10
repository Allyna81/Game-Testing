-- Deploy gametesting:createdb to pg

BEGIN;

CREATE TABLE "admin" IF NOT EXISTS (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
);
CREATE TABLE "platform" IF NOT EXISTS (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);
CREATE TABLE "category" IF NOT EXISTS (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);
CREATE TABLE "user" IF NOT EXISTS (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL UNIQUE,
    "picture_url" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "create_date" TIMESTAMPTZ DEFAULT NOW(),
    "update_date" TIMESTAMPTZ
);
CREATE TABLE "game" IF NOT EXISTS (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "release_date" TIMESTAMPTZ NOT NULL,
    "picture_game" TEXT,
    "metacritic_score" TEXT DEFAULT 'NC',
    "url_trailer" TEXT 
);
CREATE TABLE "message" IF NOT EXISTS (

    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "create_date" TIMESTAMPTZ DEFAULT NOW(),
    "userId" INT REFERENCES "user"("id")
);
CREATE TABLE "review" IF NOT EXISTS
CREATE TABLE "game_has_plateform" IF NOT EXISTS
CREATE TABLE "game_has_category" IF NOT EXISTS

COMMIT;
