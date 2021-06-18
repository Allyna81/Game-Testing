INSERT INTO "admin" ("email","password") VALUES ('test@test.com',1234);

INSERT INTO "user" ("pseudo","picture_url","email","password") VALUES 
    ('Remy','','remy@test.fr','123456'),
    ('Saloua','','saloua@test.fr','234567')
    ('Bryan','','bryan@test.fr','345678')
    ('Chris','','chris@test.fr','456789')
    ;

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
