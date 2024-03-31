import {sql} from './database-connect.js'

sql `
	alter table users rename column
	senha to password;
`.then(() => {
	console.log('Tabela users alterada')
})

sql `
DROP TABLE IF EXISTS users`.then(() => {
    console.log('Tabela apagada')
});

sql `
    drop table if exists writers`.then(() => {
        console.log('Tabela writers apagada')
});

sql `
create table users (
	id_user serial not null, 
	name varchar(100) not null,
	email varchar(50) not null,
	senha varchar(255) not null,
	photo bytea,
	
	primary key(id_user)
);`.then(() => {
    console.log('Tabela users criada');
})

sql `
create table writers (
	id_user serial not null,
	name varchar(100) not null,
	
	foreign key (id_user) references users (id_user)
);`.then(() => {
    console.log('Tabela writers criada!')
})

sql `
create table books (
	id_book serial not null,
	id_user serial not null,
	title varchar(50) not null,
	writer varchar(100) not null,
	year_edition integer not null,
	cover bytea,
	review text,
	rating integer,
	
	primary key(id_book),
	foreign key(id_user) references users(id_user)
);`.then(() => {
    console.log('tabela books criada')
})

sql `
create table possibleExchanges (
    id serial not null,
	id_book serial not null,
	id_user serial not null,
	title varchar(50) not null,
	
    primary key(id),
	foreign key(id_book) references books(id_book),
	foreign key(id_user) references users(id_user)
);
`.then(() => {
    console.log('tabela de possíveis trocas criada')
})

sql `
create table posts (
	id_post serial not null,
	id_user serial not null,
	content bytea not null,
	time_post timestamp not null,
	likes integer not null,
	
	primary key(id_post),
	foreign key(id_user) references users(id_user)
);`.then(() => {
    console.log('tabela posts criada')
})

sql `
create table localExchange (
	id_localExchange serial not null,
	name varchar(50) not null,
	address varchar(100) not null,
	opening_hours varchar(50) not null,
	photo bytea,
	
	primary key(id_localExchange)
);`.then(() => {
    console.log('tabela local de troca criada')
})

sql `
create table comment (
	id_user serial not null,
	content_comment text not null,
	time_comment timestamp not null,
	
	foreign key(id_user) references users(id_user)
);`.then(() => {
    console.log('tabela de comentários criada')
})

sql `
create table exchange (
	id_exchange serial not null,
	id_owner serial not null,
	id_receiver serial not null,
	id_localExchange serial not null,
	id_book serial not null,
	data_exchange date not null,
	
	primary key(id_exchange),
	
	foreign key(id_owner) references users(id_user),
	foreign key(id_receiver) references users(id_user),
	foreign key(id_localExchange) references localExchange(id_localExchange),
	foreign key(id_book) references books(id_book)
);`.then(() => {
    console.log('tabela troca criada')
})

sql `
insert into users (name, email, senha)
values ('Maria', 'maria.eduarda@gmail.com', 'mariA#123'),
	('Stephanie', 'stephanie.victoria@gmail.com', 'Stephanie$123'),
	('Túlio', 'tulio.turuda@gmail.com', 'tuLio!123'),
	('Lucas', 'lucas.batista@gmail.com', 'lucAs%123');`
	.then(() => {
		console.log('usuários inseridos');
})

sql `
insert into users (name, email, password)
values ('Maria Eduarda de Faria', 'mariaeduardadefaria15@gmail.com', 'Senha#123');`
	.then(() => {
		console.log('usuários inseridos');
})
