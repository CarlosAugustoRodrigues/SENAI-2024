-- DDL - 
drop database if exists lojinha;
create database lojinha;
use lojinha;

create table Clientes(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    cpf varchar(20) not null unique,
    nascimento date not null
);

describe Clientes;

-- DML - Popular com dados de teste
insert into Clientes(nome, sobrenome, cpf, nascimento) values
('Ana', 'Silva', '111.111.111-01', '2004-01-01'),
('Joao', 'Oliveira', '222.222.222-02', '1990-02-02'),
('Joao', 'Oliveira', '222.222.222-02', '1990-02-02'),
('Maria', 'Santos', '333.333.333-03', '1812-03-03');

select * from Clientes;