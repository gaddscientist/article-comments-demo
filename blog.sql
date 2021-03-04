DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
    post_id INT(6) AUTO_INCREMENT,
    timestamp DATE NOT NULL,
    uname VARCHAR(20) NOT NULL,
    body VARCHAR(256) NOT NULL,
    depth INT(3) NOT NULL,
    parent_id INT(6),
    PRIMARY KEY (post_id)    
);


INSERT INTO comments VALUES ( 1000, STR_TO_DATE('07-10-2020 09:20 AM', '%d-%m-%Y %h:%i %p'), 'bandalls', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 0, NULL);
  INSERT INTO comments VALUES ( 1006, STR_TO_DATE('07-10-2020 11:33 AM', '%d-%m-%Y %h:%i %p'), 'flamesbria', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 1, 1000);
    INSERT INTO comments VALUES ( 1007, STR_TO_DATE('07-10-2020 11:48 AM', '%d-%m-%Y %h:%i %p'), 'heroanhart', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 2, 1006);
  INSERT INTO comments VALUES ( 1001, STR_TO_DATE('07-10-2020 12:22 PM', '%d-%m-%Y %h:%i %p'), 'wattlexp', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 1, 1000);

INSERT INTO comments VALUES ( 1002, STR_TO_DATE('07-10-2020 10:20 AM', '%d-%m-%Y %h:%i %p'), 'sweetiele', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 0, NULL);
INSERT INTO comments VALUES ( 1008, STR_TO_DATE('07-10-2020 04:25 PM', '%d-%m-%Y %h:%i %p'), 'liveltekah', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 1, 1002);



INSERT INTO comments VALUES ( 1003, STR_TO_DATE('07-10-2020 10:18 AM', '%d-%m-%Y %h:%i %p'), 'hyperyaufarer', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 0, NULL);
INSERT INTO comments VALUES ( 1004, STR_TO_DATE('07-10-2020 01:31 PM', '%d-%m-%Y %h:%i %p'), 'editussion', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 0, NULL);
INSERT INTO comments VALUES ( 1005, STR_TO_DATE('07-10-2020 03:57 PM', '%d-%m-%Y %h:%i %p'), 'experthead', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora similique ipsam reprehenderit reiciendis totam quasi delectus quo fugit vitae ipsa dicta minima quas sequi quidem, deserunt aliquam cumque provident accusamus?', 0, NULL);

-- More dummy usernames
-- linguss
-- interestec
-- fuzzyspuffy
-- monsterup
-- milka1baby
-- lovesboost
-- edgymnerch
-- ortspoon
-- oranolio
-- onemama
-- dravenfact
-- reallychel
-- reakefit
-- popularkiya
-- breacche
-- blikimore
-- stonewellforever
-- simmson
-- brighthulk
-- bootecia
-- spuffyffet
-- rozalthiric
-- bookman