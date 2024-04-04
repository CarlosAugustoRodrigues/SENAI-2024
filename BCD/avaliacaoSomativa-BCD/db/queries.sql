SELECT * FROM clientes ORDER BY nome;



SELECT 
    cli.cpf, 
    cli.nome, 
    tel.tel_pri, 
    tel.tel_sec 
FROM
    clientes cli INNER JOIN telefones tel 
    WHERE cpf = tel.cliente;



SELECT * FROM veiculos ORDER BY marca, modelo;



SELECT 
    vei.placa, 
    vei.marca, 
    vei.modelo, 
    vei.tipo, 
    res.diaria 
FROM 
    veiculos vei INNER JOIN reservas res 
    WHERE marca = 'Fiat' AND vei.placa = res.placa 
    GROUP BY res.placa 
    ORDER BY diaria DESC;



SELECT 
    vei.placa, 
    vei.marca, 
    vei.modelo, 
    vei.tipo, 
    COUNT(res.res_id) AS Quantidade_Aluguel 
FROM 
    veiculos vei INNER JOIN reservas res 
    WHERE vei.placa = res.placa 
    GROUP BY res.placa;



CREATE VIEW vw_todos_os_alugueis AS
SELECT 
    res.data_res AS Data_Reserva, 
    res.data_ret AS Data_Retirada, 
    res.data_dev AS Data_Devolução, 
    res.dias, 
    cli.nome, 
    vei.marca, 
    vei.modelo, 
    res.sub_total 
FROM 
    clientes cli INNER JOIN reservas res INNER JOIN veiculos vei 
    WHERE cli.cpf = res.cliente AND vei.placa = res.placa;