INSERT INTO "admin" ("email","password") VALUES ('test@test.com',1234);

INSERT INTO "platform" ("name") VALUES 
('PC'),
('Switch'),('PS4'),('Xbox 1'),('PS5'),('Xbox Series');

INSERT INTO "category" ("name") VALUES ('Fighting'),
('Shooter'),
('Music'),
('Platform'),
('Puzzle'),
('Racing'),
('Real Time Strategy (RTS)'),
('Role-playing (RPG)'),
('Simulator'),
('Sport'),
('Strategy'),
('Turn-based strategy (TBS)'),
('Tactical'),
('Quiz/Trivia'),
('Hack and slash'),
('Pinball'),
('Adventure'),
('Arcade'),
('Visual Novel'),
('Indie'),
('Card & Board Game'),
('MOBA'),
('Point-and-click');

INSERT INTO "user" ("pseudo","picture_url","email","password") VALUES 
    ('Remy','','remy@test.fr','123456'),
    ('Saloua','','saloua@test.fr','234567')
    ('Bryan','','bryan@test.fr','345678')
    ('Chris','','chris@test.fr','456789')
    ;
INSERT INTO "game" ("name","summary","company","release_date","picture_game","metacritic_score","url_trailer") VALUES
('void tRrLM();++ //Void Terrarium++',
"The last living human is depending on you in Void Terrarium++! Rediscover a bleak yet charming story of a young girl named Toriko and her robot protector, along with extra features such as new afflictions, outfits, and an new environment to explore.\n\nSystem Upgrade:\nVoid Terrarium++ looks and performs better than ever on PlayStation®5, and comes bundled with additional content like new emotes, outfits, hairstyles, and Toriko diseases.\n\nLegacy Protocol:\nVoid Terrarium’s amazing visual style, unique roguelike gameplay, and caretaking system all make a return.\n\nHope in a Cold World:\nFrom the creator of A Rose in the Twilight and htoL#NiQ: The Firefly Diary, this harrowing roguelike adventure combines cute visuals with a somber yet whimsical post-apocalyptic story.\n\nThis edition\'s new content was announced in Japan alongside a DLC pack for the PS4 and Nintendo Switch that included the new diseases, customization feature and interactions with Toriko.\nThe DLC has not been announced internationally.",
'Nippon Ichi Software',
'May 25, 2021',
'//images.igdb.com/igdb/image/upload/t_thumb/co2tx0.jpg',
'82',
"M94XDsF6vz8"),

('The Five Covens',
"In the land of Gaarth there are five families of warlocks, each with its own unique ability. Our character is a young witch belonging to the family that dominates levitation. The villain seeks to control the other powers to establish himself as absolute ruler. To this end, she invites our character to her castle with the premise of a celebration by way of deception. At the entrance she is arrested. She wakes up in a dungeon and must find a way to escape using her abilities. At all times we will be supported by our inseparable companion, the raven. \n \nTo face the challenges of the dungeons, including enemies and puzzles of all kinds, Brenda will strengthen herself before her final battle against the evil leader Kenot.",
'RB Games',
'Feb 25, 2021',
'//images.igdb.com/igdb/image/upload/t_thumb/co2vm7.jpg',
'NC',
'tE7lfd2H958');


INSERT INTO TABLE "message" ("email","content") 
VALUES ('emaildetest@visiteur.com','Message de soutien pour GIT');
INSERT INTO TABLE "review" ("content","gameplay_note","soundtrack_note","graphism_note","global_note","userId","gameId",			
    "platform") 
    VALUES ('Jeu très moyen ...',2,2,3,2,1,1,'PS5'),
    ('Jeu excellent , une tuerie !',5,5,5,5,2,1,'PS5'),
    ('Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse vitae libero gravida, tincidunt turpis quis, malesuada velit.
      Quisque pharetra nec magna non mollis. Fusce tincidunt enim id fringilla vehicula.
       Ut lorem ante, tempor in ornare vitae, ornare sed purus. Sed lacinia nunc vel diam viverra rutrum.
        Sed sed lacinia libero. Donec ac velit quis lectus tempor fermentum.
         Nunc vestibulum imperdiet dolor, ut tincidunt neque tempus vel.
          Pellentesque at nibh in urna lacinia imperdiet. Donec ut porttitor tellus',3,2,5,4,3,1,'PS4'),
    ('Jeu pourri',0,0,0,0,3,2,'PS4'),
    ('Jeu excellent , une tuerie !',5,5,5,5,4,2,'PS4'),
    ('Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Suspendisse vitae libero gravida, tincidunt turpis quis, malesuada velit.
      Quisque pharetra nec magna non mollis. Fusce tincidunt enim id fringilla vehicula.
       Ut lorem ante, tempor in ornare vitae, ornare sed purus. Sed lacinia nunc vel diam viverra rutrum.
        Sed sed lacinia libero. Donec ac velit quis lectus tempor fermentum.
         Nunc vestibulum imperdiet dolor, ut tincidunt neque tempus vel.
          Pellentesque at nibh in urna lacinia imperdiet. Donec ut porttitor tellus',3,2,5,4,1,2,'PS4');

INSERT INTO TABLE "game_has_platform" ("platformId","gameId")
VALUES
    (5,1),
    (3,2);
INSERT INTO TABLE "game_has_category" ("categoryId","gameId")
VALUES
    (8,1),
    (5,2),
    (17,2)
;