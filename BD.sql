create database database_app;

use database_app;
create table blogs(
id int primary key not null auto_increment,
title varchar(100) not null,
content varchar(100) not null,
createdAt Date,
updatedAt date
);

INSERT INTO blogs (id, title, content) VALUES
(1, 'Título 1', 'Contenido de mi primer post'),
(2, 'Título 2', 'Contenido de mi segundo post'),
(3, 'Título 3', 'Contenido de mi tercer post'),
(4, 'Título 4', 'Contenido de mi cuarto post'),
(5, 'Título 5', 'Contenido de mi quinto post'),
(6, 'Título 6', 'Contenido de mi sexto post');

select * from blogs;