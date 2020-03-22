
export const rawDeleteActivities = `DELETE FROM activities`
export const rawDeleteQuestions = `DELETE FROM questions`

export const rawSQLActivities = `INSERT INTO "activities" ("game", "description", "selfmade", "costs", "link" , "minParticipants" , "maxParticipants" , "agePlayer", "category" ) VALUES
('Cards against Humaity','Finde die lustigste Antwort / Fortsetzung des Satzes','möglich',25.0,'https://cardsagainsthumanity.com/',4,20,'17+','Spass'),
('Wer bin ich','Person / Charakter erraten','ja',0.0,NULL,2,20,'5+','Raten'),
('Stadt Land Fluss (Verandte)','Finde Wörter zu einem Anfangsbuchstaben','ja',0.0,NULL,2,20,'8+','Denken'),
('Activity Family','Pantomime, Zeichnen, Beschreiben von Begriffen','möglich z.B. als App',25.0,'https://www.piatnik.com/spiele/marken/activity/activity-original',4,12,'8+','spass, Geschicklichkeit'),
('Werwolf','Dorfbewohner und Werwölfe wollen überleben','ja',0.0,'https://www.spielewiki.org/wiki/Werw%C3%B6lfe_vom_D%C3%BCsterwald',7,20,'8+','strategie'),
('Beweg dich schlau','Bewegung für Kinder','ja',0.0,'https://www.bewegdichschlau.com/kinder-und-schule',1,NULL,'2+','Bewegung, Geschicklichkeit'),
('Hop','Ersetze jede x-te Zahl und Ziffer duch Hop','ja',0.0,'https://fit-lernen-leben.ssids.de/wbt-sport-selbstregulation/praxis/uebungen-und-spiele/details/3/51/hipp-hopp-mathematik?start=0',2,10,'7+','Denken'),
('Set','Finde drei zueinander passende Karten','nein',10.0,'https://www.amigo-spiele.de/spiel/set',2,10,'8+','Denken'),
('Monopoly',NULL,'nein',25.0,'https://www.mytoys.de/hasbro-monopoly-classic-neuauflage-6746523.html',2,8,'8+','strategie'),
('Schafkopfen','Mache die meisten Punkte','nein (Spielkarten notwendig)',3.0,'https://www.sauspiel.de/schafkopf-lernen/das-schafkopf-blatt',4,4,'12+','strategie'),
('Siedler von Catan','Erobere die Welt am schnellsten','nein',25.0,'https://www.catan.de/#start',3,6,'10+','strategie'),
('Mensch ärger dich nicht','komme als erster mit allen Figuren ins Ziel','nein',20.0,'https://www.amazon.de/Schmidt-Spiele-49020-Jubil%C3%A4umsausgabe-Holzsteinen/dp/B00006RTA3',2,4,'6+','Glück'),
('Gemischtes Doppel','Memory mit Wortwitz','nein',19.0,'https://www.hugendubel.de/de/spielware/gemischtes_doppel-5782142-produkt-details.html?adcode=032Q20X42G42N&utm_source=bi&utm_medium=pdm&utm_campaign=pd',2,8,'16+','Denken'),
('Tabu','Wörter erklären ohne das Wort zu nennen','nein',20.0,'https://products.hasbro.com/de-de/product/taboo-game:304C0329-5056-9047-F5D1-8C8A886E0D35#wtb_container',4,20,'13+','Geschicklichkeit'),
('Ostereier färben','Ostereier ausblasen und mit einfachen Malkasten Farben oder Window-Color bemalen','ja',5.0,NULL,1,5,'2+','Basteln');`

export const rawSQLQuestions = `INSERT INTO "questions" ("question", "category", "ageOfChild") VALUES
('Wo haben sich Mama und Papa kennengelernt?','Eltern','10'),
('Wie haben sich Mama und Papa kennengelernt?','Eltern','10'),
('Wieso wohnen wir in dieser Stadt?','Wohnort','5'),
('Wo wollen wir in Zukunft leben?','Wohnort','5'),
('Wenn kein Urlaub im Ausland (Corona, Umwelt, etc.) wo in Deutschland / Bayern war ich noch nie und möchte ich Urlaub machen?','Urlaub','5'),
('Zeichnet gemeinsam den Stammbaum eurer Familie','Verwandtschaft','5'),
('Ruft jetzt einen Verwandten an, den ihr gerne mögt und fragt ihn, was er heute zu Mittag gegessen hat','Verwandtschaft','5'),
('Wie und Wo sind Oma und Opa aufgewachsen?','Verwandtschaft','8'),
('Was war der schönste gemeinsame Urlaub?','Urlaub','4'),
('Schaut zusammen ein Fotoalbum von Mama / Papa an','Eltern','5'),
('Macht ein Familienfoto #stayathome','Erinnerung','0'),
('Kinder, welches alte Spiel wollt ihr mal wieder spielen?','Erinnerung','2'),
('Welchen Freund / Freundin fehlt euch am meisten (egal ob wegen Corona, Umzug, etc)? (Für die Eltern kleiner Kinder: ermöglicht vielleicht einen Skype-Call)','Freunde','4'),
('Wovon hast du das letzt mal geträumt?','Kinder','5'),
('Was ist die aktuell coolste App und was kann sie?','Trend','5'),
('Was war deine lieblingsserie als Kind, Mama / Papa?','Eltern','7'),
('Worauf bist Du heute am meisten stolz? (gilt für alle)','Erinnerung','5'),
('Was war das schönste am heutigen Tag?','Erinnerung','3'),
('Was hat mich heute am meisten gestört?','Erinnerung','5'),
('Mama / Papa, kannst du mir eine (lustige) Geschichte oder Erinnerung über deine Brüder und Schwestern erzählen?','Erinnerung','5'),
('Was ist eines der lustigsten Dinge, die wir (sowohl Eltern als auch Kinder, aber getrennt) getan haben?','Erinnerung','5');`