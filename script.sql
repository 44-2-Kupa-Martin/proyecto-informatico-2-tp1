CREATE DATABASE misolcito;

USE misolcito;

CREATE TABLE Product(
    id INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(100),
    alt VARCHAR(200),
    name VARCHAR(50),
    description VARCHAR(200),
    type VARCHAR(30)
);

CREATE TABLE UserMessage(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50), 
    surname VARCHAR(50), 
    email VARCHAR(50), 
    message VARCHAR(300), 
    ip VARCHAR(50)
);

INSERT INTO Product VALUES ('1', 'Frola_Membrillo.jpg', "Membrillo", "Frola Membrillo", "AAA", "cupcakes");
INSERT INTO Product VALUES ('2', 'Balcarce.jpg', 'Balcarce', 'Balcarce', 'Balcarce', "cakes");
INSERT INTO Product VALUES ('3', 'BlackCoffee.jpg', 'La de Chooco', 'Choco', "Que paja estudiar para base de datos lpm", "cookies");
INSERT INTO Product VALUES ('4', 'Tarta-de-Frutos-del-Bosque.jpg', "a", "Frutillin", "Man como vas a comer frutos del bosque sos down?????", "macarons");
INSERT INTO Product VALUES ('5', 'Tarta_Catalana.jpg', "espana", "Tortaso", "Ahh bue", "desserts");
INSERT INTO Product VALUES ('6', 'Lemon_Pie.jpg', "Lemon Pie", "Lemon Pie", "Amigo la soberbia", "croissants");