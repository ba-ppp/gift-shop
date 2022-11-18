-- drop database teddy_bears;
-- show databases;
-- create database teddy_bears;
-- use teddy_bears;
-- select * from bill_detail join bill where bill.id_bill = bill_detail.id_bill;
-- select * from bill_detail;
create table category (
  id_cat varchar(100) primary key, 
  name_cat varchar(100) not null
);

create table product (
  id_product varchar(100) primary key,
  name_product varchar(100) not null,
  id_cat varchar(50) not null references category(id_cat),
  describes varchar(2000),
  stt boolean default true,
  color varchar(50) not null,
  image varchar(200) not null
);

create table product_detail (
  id_detail int primary key AUTO_INCREMENT, 
  id_product varchar(100) not null references product(id_product),
  size varchar(50) not null,
  price float default 0 check (price >=0)
);

create table bill (
  id_bill varchar(100) primary key, 
  name_cus varchar(100) not null,
  phone_cus varchar(12) not null,
  total_price float default 0 check (total_price >=0),
  ship varchar(100),
  date_buy timestamp default current_timestamp
);
create table bill_detail (
  id_detail_bill int primary key AUTO_INCREMENT,
  id_bill varchar(100) not null references bill(id_bill),
  id_detail int not null references product_detail(id_detail),
  quantity int default 0
);

-- insert category
insert into category values("pokemon","pokemon");
insert into category values("dog","dog");

-- insert into product 
-- delimiter $
create procedure insert_product(
	id_product varchar(100),
    name_product varchar(100),
   	id_cat varchar(50),
  	describes varchar(2000),
  	color varchar(50),
  	image varchar(200),
  	size varchar(50),
  	price float
)	
begin
	if not exists (select product.id_product 
                   from product 
                   where product.id_product = id_product) 
    then
      insert into product (id_product, name_product, id_cat, describes, color, image)
          values (id_product, name_product, id_cat, describes, color, image);
    end if;
    insert into product_detail (id_product, size, price)
    	values (id_product, size, price);
end ;
-- delimiter ;

-- SHOW PROCEDURE STATUS;

call insert_product("bulbasaur","bulbasaur","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "bulbasaur.png", "30cm", "160000");
call insert_product("charmander","charmander","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "charmander.png", "30cm", "170000");
call insert_product("eevee","eevee","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "eevee.png", "20cm", "70000");
call insert_product("eevee","eevee","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "eevee.png", "25cm", "100000");
call insert_product("eevee","eevee","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "eevee.png", "40cm", "150000");
call insert_product("jigglypuff","jigglypuff","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "jigglypuff.png", "16cm", "70000");
call insert_product("jigglypuff","jigglypuff","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "jigglypuff.png", "22cm", "100000");
call insert_product("pikachu_male","pikachu_male","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu_male.png", "50cm", "320000");
call insert_product("pikachu","pikachu","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu.png", "40cm", "280000");
call insert_product("pikachu","pikachu","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu.png", "60cm", "410000");
call insert_product("pikachu","pikachu","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu.png", "70cm", "620000");
call insert_product("snorlax","snorlax","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "snorlax.png", "25cm", "90000");
call insert_product("snorlax","snorlax","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "snorlax.png", "35cm", "120000");
call insert_product("squirtle","squirtle","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "squirtle.png", "30cm", "170000");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "60cm", "210000");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "80cm", "280000");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "1m", "430000");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "1m2", "710000");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "1m5", "860000");
call insert_product("cosplay chicken","cosplay chicken","dog",
                    "Suitable For Ages: 0+",
                    "normal", "cosplay_chicken.png", "30cm", "280000");
call insert_product("cosplay chicken","cosplay chicken","dog",
                    "Suitable For Ages: 0+",
                    "normal", "cosplay_chicken.png", "1m5", "1250000");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "35cm", "130000");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "55cm", "250000");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "80cm", "360000");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "1m2", "620000");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "20cm", "110000");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "35cm", "290000");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "45cm", "340000");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "60", "410000");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "50cm", "130000");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "70cm", "220000");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "90cm", "340000");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "1m1", "480000");
call insert_product("pull","pull","dog",
                    "Suitable For Ages: 0+",
                    "normal", "pull.png", "50cm", "380000");
call insert_product("pull","pull","dog",
                    "Suitable For Ages: 0+",
                    "normal", "pull.png", "40cm", "290000");
call insert_product("pull","pull","dog",
                    "Suitable For Ages: 0+",
                    "normal", "pull.png", "30cm", "170000");
call insert_product("shiba cosplay shark","shiba cosplay shark","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba_cosplay_shark.png", "40cm", "180000");
call insert_product("shiba cosplay shark","shiba cosplay shark","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba_cosplay_shark.png", "70cm", "260000");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "30cm", "180000");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "35cm", "230000");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "45cm", "320000");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "55cm", "430000");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "65cm", "600000");