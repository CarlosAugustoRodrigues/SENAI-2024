INSERT INTO Veiculos (placa, modelo, marca, ano) VALUES
('DEA-7981', 'Uno', 'Fiat', 2005),
('CBC-4945', 'Fiorino', 'Fiat', 2007),
('BEE-7735', 'Saveiro', 'VW', 2015),
('CBA-4403', 'Sandeiro', 'Renaut', 2012),
('BBC-8504', 'Palio', 'Fiat', 2004),
('BEB-5885', 'Gol', 'VW', 2013),
('EDB-2475', 'Ranger', 'Ford', 2005);

INSERT INTO Funcionarios (matricula, nome) VALUES
(48482, 'Osvaldo Oliveira'),
(48542, 'Jaqueline Teixeira'),
(48522, 'Keli Matos'),
(48502, 'Ursula Souza'),
(48562, 'Evandro Silva');

INSERT INTO Manutencoes (inicio_manutencao, fim_manutencao, descricao, placa, responsavel) VALUES
('2023-02-25', '2023-03-04', 'Lanterna queimada', 'DEA-7981', 48482),
('2023-03-13', '2023-03-21', 'Farol queimado', 'CBC-4945', 48542),
('2023-03-29', '2023-04-05', 'Troca de pneus dianteiros', 'BEE-7735', 48522),
('2023-04-14', '2023-04-24', 'Troca de pneus dianteiros', 'CBA-4403', 48502),
('2023-04-30', '2023-05-07', 'Farol queimado', 'BBC-8504', 48502),
('2023-05-16', '2023-05-25', 'Troca de pneus traseiros', 'BEB-5885', 48482),
('2023-06-05', '2023-06-10', 'Retrovisor quebrado', 'EDB-2475', 48482),
('2023-06-25', '2023-07-02', 'Troca de óleo e revisão geral', 'CBC-4945', 48502),
('2023-07-15', '2023-07-19', 'Troca de Flúido de Freio', 'EDB-2475', 48482),
('2023-08-04', '2023-08-10', 'Problemas no cabo do acelerador', 'DEA-7981', 48502),
('2023-08-24', '2023-08-31', 'Pane elétrica', 'CBA-4403', 48562),
('2023-08-27', '2023-09-04', 'Rebimboca da parafuzeta', 'BBC-8504', 48522),
('2023-08-30', '2023-09-04', 'Troca de cavalos por pôneis', 'BEE-7735', 48542),
('2023-09-02', '2023-09-07', 'Lanterna queimada', 'BEB-5885', 48482);

INSERT INTO Telefones (tel_primario, tel_secundario, matricula_funcionario) VALUES
('19-72077-0521', '19-06078-6843', 48482),
('19-23003-4864', NULL, 48542),
('19-06486-6449', '19-53266-7923', 48522),
('19-64378-2404', NULL, 48502),
('19-53315-2734', NULL, 48562);