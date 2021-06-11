-- Revert gametesting:createdb from pg

BEGIN;

ALTER TABLE "review"
    ALTER COLUMN "gameplay_note" TYPE INT,
    ALTER COLUMN "soundtrack_note" TYPE INT,		
    ALTER COLUMN "graphism_note" TYPE INT,	
    ALTER COLUMN "global_note" TYPE INT;
    
DROP DOMAIN note_accept;
DROP TABLE "admin","platform","category","user","game","message","review","game_has_platform","game_has_category";

COMMIT;
