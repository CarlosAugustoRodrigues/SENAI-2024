INSERT INTO Veiculos (placa, modelo, marca, tipo)
VALUES 
    ('DEA-7981', 'Uno', 'Fiat', 'Standart'),
    ('CBC-4945', 'Fiorino', 'Fiat', 'Utilitario'),
    ('CBC-4901', 'Fiorino', 'Fiat', 'Utilitario'),
    ('BEE-7735', 'Saveiro', 'VW', 'Standart'),
    ('CBA-4403', 'Sandeiro', 'Renaut', 'Standart'),
    ('BBC-8504', 'Palio', 'Fiat', 'Standart'),
    ('BEB-5885', 'Gol', 'VW', 'Standart'),
    ('EDB-2475', 'Ranger', 'Ford', 'Esportivo');


INSERT INTO Clientes (cpf, nome)
VALUES 
    ('111.111.111-11', 'Osvaldo Oliveira'),
    ('222.222.222-22', 'Jaqueline Teixeira'),
    ('333.333.333-33', 'Keli Matos'),
    ('444.444.444-44', 'Ursula Souza'),
    ('555.555.555-55', 'Evandro Silva');


INSERT INTO Telefones (tel_pri, tel_sec, cliente)
VALUES 
    ('19-72077-0521', '19-06078-6843', '111.111.111-11'),
    ('19-23003-4864', NULL, '222.222.222-22'),
    ('19-06486-6449', '19-53266-7923', '333.333.333-33'),
    ('19-64378-2404', NULL,'444.444.444-44'),
    ('19-53315-2734', NULL,'555.555.555-55');


INSERT INTO Reservas (data_res, data_ret, data_dev, dias, diaria, status, placa, cliente, sub_total)
VALUES 
    ('2024-01-25', '2024-01-25', '2024-02-04', 10, 100.00, 'Concluido', 'DEA-7981', '111.111.111-11', 1000.00),
    ('2024-03-13', '2024-03-13', '2024-03-21', 8, 120.00, 'Concluido', 'CBC-4945', '222.222.222-22', 960.00),
    ('2024-03-29', '2024-03-29', '2024-04-05', 7, 100.00, 'Concluido', 'BEE-7735', '333.333.333-33', 700.00),
    ('2024-03-14', '2024-03-14', '2024-03-24', 10, 100.00, 'Concluido', 'CBA-4403', '444.444.444-44', 1000.00),
    ('2024-02-29', '2024-02-29', '2024-03-07', 7, 100.00, 'Concluido', 'BBC-8504', '444.444.444-44', 700.00),
    ('2024-02-16', '2024-02-16', '2024-03-25', 38, 100.00, 'Concluido', 'BEB-5885', '111.111.111-11', 3800.00),
    ('2024-02-05', '2024-02-05', '2024-03-10', 34, 200.00, 'Concluido', 'EDB-2475', '111.111.111-11', 6800.00),
    ('2024-02-25', '2024-02-25', '2024-03-02', 6, 120.00, 'Concluido', 'CBC-4901', '444.444.444-44', 720.00),
    ('2024-02-15', '2024-02-15', '2024-03-19', 33, 200.00, 'Concluido', 'EDB-2475', '111.111.111-11', 6600.00),
    ('2024-02-04', '2024-02-04', '2024-03-10', 35, 100.00, 'Concluido', 'DEA-7981', '444.444.444-44', 3500.00),
    ('2024-02-23', '2024-02-24', '2024-03-30', 35, 100.00, 'Concluido', 'CBA-4403', '555.555.555-55', 3500.00),
    ('2024-02-27', '2024-02-27', '2024-03-03', 5, 100.00, 'Concluido', 'BBC-8504', '333.333.333-33', 500.00),
    ('2024-02-29', '2024-02-29', '2024-03-03', 3, 100.00, 'Concluido', 'BEE-7735', '222.222.222-22', 300.00),
    ('2024-02-02', '2024-02-02', '2024-03-07', 34, 100.00, 'Concluido', 'BEB-5885', '111.111.111-11', 3400.00),
    ('2024-02-05', '2024-02-05', '2024-03-15', 39, 100.00, 'Concluido', 'CBA-4403', '555.555.555-55', 3900.00),
    ('2024-02-08', '2024-02-08', '2024-03-15', 36, 100.00, 'Concluido', 'BEE-7735', '333.333.333-33', 3600.00),
    ('2024-02-11', '2024-02-11', '2024-03-15', 33, 100.00, 'Concluido', 'BBC-8504', '444.444.444-44', 3300.00),
    ('2024-03-14', '2024-03-14', NULL, 19, 120.00, 'Alugado', 'CBC-4945', '444.444.444-44', 2280.00),
    ('2024-03-16', '2024-03-17', NULL, 16, 100.00, 'Alugado', 'DEA-7981', '555.555.555-55', 1600.00),
    ('2024-03-25', '2024-03-25', NULL, 8, 200.00, 'Alugado', 'EDB-2475', '555.555.555-55', 1600.00),
    ('2024-03-28', '2024-03-28', NULL, 5, 100.00, 'Alugado', 'CBA-4403', '222.222.222-22', 500.00),
    ('2024-03-23', '2024-03-23', NULL, 10, 100.00, 'Alugado', 'BEB-5885', '222.222.222-22', 1000.00),
    ('2024-05-10', NULL, NULL, 0, 100.00, 'Reservado', 'DEA-7981', '111.111.111-11', 0.00),
    ('2024-05-01', NULL, NULL, 0, 100.00, 'Reservado', 'BBC-8504', '222.222.222-22', 0.00),
    ('2024-05-19', NULL, NULL, 0, 120.00, 'Reservado', 'CBC-4945', '222.222.222-22', 0.00);