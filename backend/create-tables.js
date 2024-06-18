import {sql} from './database-connect.js'

/*sql `
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
})*/

/*sql `
	delete from users where email = 'santos.ze@gmail.com' or email = 'silva.ana@gmail.com' or email = 'jhon.elton@gmail.com' or email = 'teste6@gmail.com' or email = 'tes5@gmail.com';
`.then(() => {
	console.log('usuários apagados');
})*/

//sql `
/*create table publications (
	id_publication serial not null,
	id_user serial not null,
	id_book serial not null,
	content text not null,
	type varchar(20) not null,
	title varchar(50),
	image bytea,
	rating integer,
	time_post timestamp not null,
	likes integer not null,
	
	primary key(id_publication),
	foreign key(id_user) references users(id_user),
	foreign key(id_book) references books(id_book)

);`.then(() => {
    console.log('tabela publications criada')
})*/
/*sql `
	delete from users where email = 'lucas.lucas2004.30@gmail.com' or email = 'silva.ana@gmail.com' or email = 'jhon.elton@gmail.com' or email = 'teste6@gmail.com' or email = 'tes5@gmail.com';
`.then(() => {
	console.log('usuários apagados');
})*/

/*sql `
create table reviews (
	id_review serial not null,
	id_user integer not null,
	rating integer not null,
	content text not null,
	nameBook text not null,
	title varchar(50),
	image bytea,
	time_post varchar(30) not null,
	
	primary key(id_review),
	foreign key(id_user) references users(id_user)

);`.then(() => {
    console.log('tabela posts criada')
})*/

/*sql `
	drop table posts;
`.then(() => {
	console.log('tabela posts excluída')
})*/

/*sql `
	create table posts (
		id_post serial not null,
		id_user integer not null,
		content text not null,
		nameBook text not null,
		imageBook bytea,
		timePost varchar(30) not null,
		
		primary key(id_post),
		foreign key(id_user) references users(id_user)

);`.then(() => {
    console.log('tabela posts criada')
})*/

/*sql `
	alter table comment 
	add constraint fk_id_book foreign key(id_book) references books(id_book)

	`.then(() => {
	console.log('tabela comment alterada')
})*/

/*sql `
	alter table books
	add column cover text;
`.then(() => {
	console.log('tabela posts alterada')
})*/

/*sql `
	delete from reviews;
`.then(() => {
	console.log('tabela posts excluída')
})*/

/*sql `
	update reviews set image_post = 'https://cdn2.iconfinder.com/data/icons/new-year-resolutions/64/resolutions-05-256.png'	
	where id_review = 15;
`.then(() => {
	console.log('user editado')
})*/

/*sql `
	create table interests (
		id_interest serial not null,
		id_book_interest integer not null,
		id_myBook integer not null,
		id_user_owner integer not null,
		id_user_receiver integer not null,
		status varchar(20) not null,

		primary key(id_interest),
		foreign key(id_book_interest) references books(id_book),
		foreign key(id_myBook) references books(id_book),
		foreign key(id_user_owner) references users(id_user),
		foreign key(id_user_receiver) references users(id_user)
	);
`.then(() => {
	console.log('tabela interests criada')
})*/


/*sql `
	insert into interests (id_book_interest, id_myBook, id_user_owner, id_user_receiver, status) 
	values (1, 2, 60, 63, 'pendente');
`.then(() => {
	console.log('livro inserido')
})*/

/*sql `
	insert into books (id_user, title, writer, year_edition, cover, review, rating)
	values (63, 'Crime e Castigo', 'Dostoievski', 2014, 'https://m.media-amazon.com/images/I/71Gmavgu3ZL._AC_UF1000,1000_QL80_.jpg', 'Surreal como a mente é o pior castigo que podemos ter... o protagonista é uma pessoa comum que comete um erro, mas será que ele se arrepende? Será que ele tem noção do que está sentindo?', 5);
`.then(() => {
	console.log('livro inserido')
})*/

/*sql `
	drop table exchange;`.then(() => {
		console.log('tabela apagada')
	})*/

/*sql `
	alter table interests rename to exchange;
`.then(() => {
	console.log('tabela alterada')
})*/

/*sql `
	create table interests (
		id_interest serial not null,
		id_book_interest integer not null,
		id_user integer not null,

		primary key(id_interest),
		foreign key(id_book_interest) references books(id_book),
		foreign key(id_user) references users(id_user)
	);
`.then(() => {
	console.log('tabela interests criada')
})*/

/*sql `
	alter table interests 
	add column imageBook varchar(55);
`.then(() => {
	console.log('tabela books alterada')
})*/

/*sql `
	drop table interests
`.then(() => {
	console.log('excluído')
})*/
/*sql `
	create table interests (
		id_interest serial not null,
		id_user integer not null,
		titlebook text not null,
		imagebook text not null,

		primary key(id_interest),
		foreign key(id_user) references users(id_user)
	)
`.then(() => {
	cons*/


/*sql `
	delete from interests
	where titlebook = 'Diário de uma garota nada popular - vol. 2';
`.then(() => {
	console.log('tabela books excluída')
})*/

/*sql `
	drop table possibleExchanges;
`.then(() => {
	console.log('tabela apagada')
})
sql `
	alter table books
	drop column id_book;
`.then(() => {
	console.log('tabela books alterada')
})
*/

/*
sql `
DROP TABLE comment`.then(() => {console.log('tabela comments excluída')});
*/

/*
sql `
CREATE TABLE comment (
    id_comment serial NOT NULL,
    id_user integer NOT NULL,
    id_publication integer NOT NULL,
    content_comment text NOT NULL,
    time_comment timestamp NOT NULL DEFAULT current_timestamp,
    PRIMARY KEY (id_comment),
    FOREIGN KEY (id_user) REFERENCES users (id_user)
);
`.then(() => {
    console.log('tabela de comentários criada')
});
*/

sql `
	create table myExchanges (
		id_myExchange serial not null,
		id_user integer not null,
		titlebook text not null,
		imagebook text not null,
		writerbook text not null,

		primary key(id_myExchange),
		foreign key(id_user) references users(id_user)
	)
`.then(() => {
	console.log('QUalquer coisa')
})