-- Exclui um banco de dados se existir (DEV)
drop database if exists lojinha;

-- Criar um novo banco de dados
create database lojinha;

-- Acessar banco de dados
use lojinha;

-- Criar uma tabela de Clientes
create table Clientes(
    id integer primary key not null auto_increment, -- integer = inteiro
    cpf varchar(20) not null unique, -- varchar() = texto(tamanho)
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null -- date = data
);

-- Ver a estrutura da tabela
describe Clientes;

-- Ver todas as tabelas
show tables;

-- Excluir uma tabela
drop table Clientes;