-- Verify gametesting:createdb on pg

BEGIN;

SELECT * FROM "admin" WHERE false;
SELECT * FROM "platform" WHERE false;
SELECT * FROM "category" WHERE false;
SELECT * FROM "user" WHERE false;
SELECT * FROM "game" WHERE false;
SELECT * FROM "message" WHERE false;
SELECT * FROM "review" WHERE false;
SELECT * FROM "game_has_platform" WHERE false;
SELECT * FROM "game_has_category" WHERE false;

ROLLBACK;
