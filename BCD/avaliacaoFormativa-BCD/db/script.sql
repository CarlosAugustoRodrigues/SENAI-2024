DROP DATABASE IF EXISTS aluguelVeiculos;
CREATE DATABASE aluguelVeiculos CHARSET=UTF8 COLLATE utf8_general_ci;
USE aluguelVeiculos;

CREATE TABLE Veiculos(
    placa VARCHAR(10)PRIMARY KEY,
    modelo VARCHAR(30) NOT NULL,
    marca VARCHAR(30) NOT NULL,
    ano INT NOT NULL
);

CREATE TABLE Funcionarios(
    matricula INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL 
);

CREATE TABLE Manutencoes(
    id_manutencao INTEGER AUTO_INCREMENT PRIMARY KEY,
    inicio_manutencao DATE NOT NULL,
    fim_manutencao DATE,
    descricao VARCHAR(255),
    placa VARCHAR(10) NOT NULL,
    responsavel INT NOT NULL,
    FOREIGN KEY (placa) REFERENCES Veiculos(placa),
    FOREIGN KEY (responsavel) REFERENCES Funcionarios(matricula)
);

CREATE TABLE Telefones(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    tel_primario VARCHAR(15) NOT NULL,
    tel_secundario VARCHAR(15),
    matricula_funcionario INT NOT NULL,
    FOREIGN KEY (matricula_funcionario) REFERENCES Funcionarios(matricula) ON DELETE CASCADE
);