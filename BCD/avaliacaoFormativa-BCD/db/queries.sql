SELECT * FROM Funcionarios ORDER BY nome;

SELECT * FROM Veiculos WHERE marca = 'Fiat' ORDER BY DESC ano;

SELECT 
    nome,
    tel_primario,
    tel_secundario
FROM Funcionarios INNER JOIN Telefones WHERE matricula = matricula_funcionario

SELECT 
	v.placa, 
    modelo, 
    marca, 
    ano, 
    count(m.placa) AS 'Total de Manutenções' 
FROM Veiculos v INNER JOIN Manutencoes m ON v.placa = m.placa GROUP BY v.placa;

CREATE VIEW vw_todas_as_manutencoes AS
SELECT 
    m.id_manutencao,
    m.inicio_manutencao,
    m.fim_manutencao,
    m.descricao,
    f.nome AS "Funcionário",
    v.modelo AS "Modelo do Veículo"
FROM Manutencoes m
INNER JOIN Funcionarios f ON m.responsavel = f.matricula
INNER JOIN Veiculos v ON m.placa = v.placa;