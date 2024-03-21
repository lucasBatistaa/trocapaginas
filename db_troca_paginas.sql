create table users (
	id_user serial not null, 
	name varchar(100) not null,
	email varchar(50) not null,
	senha varchar(255) not null,
	photo bytea,
	
	primary key(id_user)
);	

create table writers (
	id_user serial not null,
	name varchar(100) not null,
	
	foreign key (id_user) references users (id_user)
);

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
);

create table possibleExchanges (
	id_book serial not null,
	id_user serial not null,
	title varchar(50) not null,
	
	foreign key(id_book) references books(id_book),
	foreign key(id_user) references users(id_user)
);

create table posts (
	id_post serial not null,
	id_user serial not null,
	content bytea not null,
	time_post timestamp not null,
	likes integer not null,
	
	primary key(id_post),
	foreign key(id_user) references users(id_user)
);

create table localExchange (
	id_localExchange serial not null,
	name varchar(50) not null,
	address varchar(100) not null,
	opening_hours varchar(50) not null,
	photo bytea,
	
	primary key(id_localExchange)
);

create table comment (
	id_user serial not null,
	content_comment text not null,
	time_comment timestamp not null,
	
	foreign key(id_user) references users(id_user)
);

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
);

insert into users (name, email, senha)
values ('Maria', 'maria.eduarda@gmail.com', 'mariA#123'),
	('Stephanie', 'stephanie.victoria@gmail.com', 'Stephanie$123'),
	('Túlio', 'tulio.turuda@gmail.com', 'tuLio!123'),
	('Lucas', 'lucas.batista@gmail.com', 'lucAs%123');

select * from users;
