create database if not exists projintegrador default character set = utf8;

use projintegrador;

create table tb_funcionario (
	id_funcionario int not null,
    codf int unique not null,
    senha varchar(15) not null,
    nome varchar(100) not null,
    primary key (id_funcionario)
);

create table tb_cliente (
	id_cliente int not null,
    email varchar(100) not null,
    senha varchar(15) not null,
    nome varchar(100) not null,
    telefone varchar(15),
    datanascimento date not null,
    primary key (id_cliente)
);

create table tb_endereco (
	id_endereco int not null,
    cep varchar(15) not null,
    numero int not null,
    complemento varchar(50) not null,
    bairro varchar(50) not null,
    rua varchar(50) not null,
    cidade varchar(50) not null,
    nome_endereco varchar(15) not null,
    id_cliente int not null,
    primary key (id_endereco),
    constraint fk_id_endereco foreign key (id_endereco) REFERENCES tb_cliente (id_cliente)
    on delete no action
	on update no action
);

create table tb_livros(
	id_livros int not null,
    titulo varchar(30) not null,
    descricao varchar(300),
    autor varchar(100),
    tag varchar(20) not null,
    primary key (id_livros)
);

create table tb_pedidos(
	id_pedido int not null,
    id_cliente int not null,
    id_livros int not null,
    qtde_pedido int,
    primary key (id_pedido),
    constraint fk_id_cliente foreign key (id_cliente) references tb_cliente (id_cliente),
    constraint fk_id_livros foreign key (id_livros) references tb_estoque (id_livros)
    on delete no action
	on update no action
);