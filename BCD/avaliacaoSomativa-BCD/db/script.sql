DROP DATABASE IF EXISTS aluguelVeiculos;
CREATE DATABASE aluguelVeiculos CHARSET=UTF8 COLLATE utf8_general_ci;
USE aluguelVeiculos;

CREATE TABLE Veiculos(
    placa VARCHAR(10) PRIMARY KEY,
    modelo VARCHAR(30) NOT NULL,
    marca VARCHAR(30) NOT NULL,
    tipo ENUM('Standart', 'Esportivo', 'Utilitario') NOT NULL
);

CREATE TABLE Clientes(
    cpf VARCHAR(15) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Telefones(
    tel_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    tel_pri VARCHAR(20) NOT NULL,
    tel_sec VARCHAR(20),
    cliente VARCHAR(15),
    FOREIGN KEY (cliente) REFERENCES Clientes(cpf)
);

CREATE TABLE Reservas(
    res_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    data_res DATE NOT NULL,
    data_ret DATE NOT NULL,
    data_dev DATE NOT NULL,
    dias INTEGER NOT NULL,
    diaria DECIMAL(7, 2) NOT NULL,
    sub_total DECIMAL(10, 2) NOT NULL,
    status ENUM('Concluido', 'Alugado', 'Reservado'),
    placa VARCHAR(10),
    cliente VARCHAR(15),
    FOREIGN KEY (placa) REFERENCES Veiculos(placa),
    FOREIGN KEY (cliente) REFERENCES Clientes(cpf)
);