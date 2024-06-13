
create database Sesi
use Sesi

create table agendamento(
    id INT PRIMARY KEY IDENTITY,
    espaco VARCHAR(20) NOT NULL,
    _data VARCHAR(10) NOT NULL,
    hora VARCHAR(5) NOT NULL,
    motivo VARCHAR(50) NOT NULL
)

    select * from agendamento

insert into agendamento values('LMT','8:40','11-06-2024','Pesquisa')
insert into agendamento values('Biblioteca','10:50','17-06-2024','Café literário e imprestimo de livros')
insert into agendamento values('Biblioteca','14:00','14-04-2024','Debate')
insert into agendamento values('Quadra', '15:30', '14/06/2024', 'Volei de Mesa')
