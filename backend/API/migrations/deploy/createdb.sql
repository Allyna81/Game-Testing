-- Deploy gametesting:createdb to pg

BEGIN;

CREATE DOMAIN note_accept AS INT
CHECK (VALUE <= 5);

CREATE TABLE "admin" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
);
CREATE TABLE "platform" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);
CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE
);
CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL UNIQUE,
    "picture_url" TEXT,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "create_date" TIMESTAMPTZ DEFAULT NOW(),
    "update_date" TIMESTAMPTZ
);
CREATE TABLE "game" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "summary" TEXT,
    "company" TEXT,
    "release_date" TIMESTAMPTZ NOT NULL,
    "picture_game" TEXT,
    "metacritic_score" TEXT DEFAULT 'NC',
    "url_trailer" TEXT 
);
CREATE TABLE "message" (

    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "create_date" TIMESTAMPTZ DEFAULT NOW(),
    "userId" INT REFERENCES "user"("id")
);
CREATE TABLE "review" ( 
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT,			
    "gameplay_note"	note_accept NOT NULL DEFAULT 0,	
    "soundtrack_note" note_accept NOT NULL DEFAULT 0,	
    "graphism_note"	note_accept NOT NULL DEFAULT 0,	
    "global_note" note_accept NOT NULL DEFAULT 0,
    "up_vote" INT DEFAULT 0,
    "down_vote"	 INT DEFAULT 0,	
    "report" INT DEFAULT 0,	
    "create_date" TIMESTAMPTZ DEFAULT NOW(),	
    "update_date" TIMESTAMPTZ,	
    "userId" INT NOT NULL REFERENCES "user"("id"),	
    "gameId" INT NOT NULL,			
    "platform"	TEXT NOT NULL
);
CREATE TABLE "game_has_platform" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "platformId" INT NOT NULL REFERENCES "platform"("id"),
    "gameId" INT NOT NULL REFERENCES "game"("id")
);
CREATE TABLE "game_has_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "categoryId" INT NOT NULL REFERENCES "category"("id"),
    "gameId" INT NOT NULL REFERENCES "game"("id")
);

COMMIT;
