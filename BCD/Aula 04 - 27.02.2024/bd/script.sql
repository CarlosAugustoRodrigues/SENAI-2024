DROP DATABASE IF EXISTS transportadora;
CREATE DATABASE transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
USE transportadora;

CREATE TABLE Clientes (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL
);


CREATE TABLE Funcionario (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL,
    salario DECIMAL(10,2) NOT NULL
);


CREATE TABLE Veiculo (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    placa VARCHAR(15) NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    capacidade INTEGER NOT NULL
);


CREATE TABLE Rota (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    origem VARCHAR(200) NOT NULL,
    destino VARCHAR(200) NOT NULL,
    distancia DECIMAL(10,2)
);

CREATE TABLE Entrega (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    veiculo_id INTEGER NOT NULL,
    rota_id INTEGER NOT NULL,
    motorista INTEGER NOT NULL,
    inicio DATETIME,
    fim DATETIME,
    status VARCHAR(50),
    FOREIGN KEY (veiculo_id) REFERENCES Veiculo(id),
    FOREIGN KEY (rota_id) REFERENCES Rota(id),
    FOREIGN KEY (motorista) REFERENCES Funcionario(id)
);

CREATE TABLE Pedido (
    id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    cliente_id INTEGER NOT NULL,
    entrega_id INTEGER NOT NULL,
    data DATETIME NOT NULL,
    valor DECIMAL(10,2),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id),
    FOREIGN KEY (entrega_id) REFERENCES Entrega(id)
);


INSERT INTO Clientes (nome, endereco, email, telefone) VALUES
("Vinicius Manzano", "Rua 69, nº 24, Jardim Número, Jaguariúna", "vinimanzano2424@gmail.com", "(19) 9.9969-2424"),
("Igor Henrique Gonçalves", "Rua 123, nº 321, Jardim Italia, Campinas", "igorhenriqueg@gmail.com", "(19) 9.9999-8888"),
("Carlos Rodrigues", "Rua Bomba, nº 111, Jardim Europa, Amparo", "carlosrodrigues@gmail.com", "(19) 9.7777-4545");

INSERT INTO Funcionario (nome, cargo, salario) VALUES
("José Eduardo", "Motorista", 2500.00),
("Maria Tereza", "Entregadora", 2000.00),
("Robert Carvalho", "Gerente", 5000.00);

INSERT INTO Veiculo (placa, modelo, capacidade) VALUES
("ABC1234", "Fiat Uno", 10),
("DEF4321", "Fiat Fiorino", 30),
("XYZ6924", "Ford Fiesta", 8);

INSERT INTO Rota (origem, destino, distancia) VALUES
("Amparo", "Campinas", 60.00),
("São Paulo", "Amazonas", 10347.00),
("Rio de Janeiro", "Natal", 2587.00),
("Jaguariúna", "Amparo", 25.00),
("Serra Negra", "Pedreira", 40.00);

INSERT INTO Entrega (veiculo_id, rota_id, motorista, status, inicio, fim) VALUES
(1, 1, 1, 'Entregue', '2022-01-01 10:00:00', '2022-01-01 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-02 14:00:00', '2022-01-02 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-03 08:00:00', '2022-01-03 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-04 10:00:00', '2022-01-04 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-05 14:00:00', '2022-01-05 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-06 08:00:00', '2022-01-06 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-07 10:00:00', '2022-01-07 12:00:00'),
(2, 2, 2, 'Entregue', '2022-01-08 14:00:00', '2022-01-08 16:00:00'),
(3, 3, 3, 'Entregue', '2022-01-09 08:00:00', '2022-01-09 10:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00'),
(1, 1, 1, 'Entregue', '2022-01-10 10:00:00', '2022-01-10 12:00:00');

INSERT INTO Pedido (cliente_id, entrega_id, data, valor) VALUES
(1, 1, '2022-01-01', 50.00),
(2, 2, '2022-01-02', 40.00),
(3, 3, '2022-01-03', 60.00),
(1, 4, '2022-01-04', 30.00),
(2, 5, '2022-01-05', 20.00),
(3, 6, '2022-01-06', 70.00),
(1, 7, '2022-01-07', 40.00),
(2, 8, '2022-01-08', 50.00),
(3, 9, '2022-01-09', 60.00),
(1, 10, '2022-01-10', 70.00),
(2, 11, '2022-01-11', 80.00),
(3, 12, '2022-01-12', 90.00),
(1, 13, '2022-01-13', 100.00),
(2, 14, '2022-01-14', 110.00),
(3, 15, '2022-01-15', 120.00),
(1, 16, '2022-01-16', 130.00),
(2, 17, '2022-01-17', 140.00),
(3, 18, '2022-01-18', 150.00),
(1, 19, '2022-01-19', 160.00),
(2, 20, '2022-01-20', 170.00);

SELECT * FROM Clientes;
SELECT * FROM Funcionario;
SELECT * FROM Veiculo;
SELECT * FROM Rota;
SELECT * FROM Entrega;
SELECT * FROM Pedido;