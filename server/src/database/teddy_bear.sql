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
  price float default 0
);

create table bill (
  id_bill varchar(100) primary key, 
  name_cus varchar(100) not null,
  phone_cus varchar(12) not null,
  total_price float default 0,
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
                    "normal", "bulbasaur.png", "30cm", "0.00016");
call insert_product("charmander","charmander","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "charmander.png", "30cm", "0.00017");
call insert_product("eevee","eevee","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "eevee.png", "20cm", "0.00007");
call insert_product("eevee","eevee","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "eevee.png", "25cm", "0.00010");
call insert_product("eevee","eevee","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "eevee.png", "40cm", "0.00015");
call insert_product("jigglypuff","jigglypuff","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "jigglypuff.png", "16cm", "0.00007");
call insert_product("jigglypuff","jigglypuff","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "jigglypuff.png", "22cm", "0.0001");
call insert_product("pikachu_male","pikachu_male","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu_male.png", "50cm", "0.00032");
call insert_product("pikachu","pikachu","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu.png", "40cm", "0.00028");
call insert_product("pikachu","pikachu","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu.png", "60cm", "0.00041");
call insert_product("pikachu","pikachu","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "pikachu.png", "70cm", "0.00062");
call insert_product("snorlax","snorlax","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "snorlax.png", "25cm", "0.00009");
call insert_product("snorlax","snorlax","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "snorlax.png", "35cm", "0.00012");
call insert_product("squirtle","squirtle","pokemon",
                    "Suitable For Ages: 0+",
                    "normal", "squirtle.png", "30cm", "0.00017");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "60cm", "0.00021");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "80cm", "0.00028");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "1m", "0.00043");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "1m2", "0.00071");
call insert_product("alaska","alaska","dog",
                    "Suitable For Ages: 0+",
                    "normal", "alaska.png", "1m5", "0.00086");
call insert_product("cosplay chicken","cosplay chicken","dog",
                    "Suitable For Ages: 0+",
                    "normal", "cosplay_chicken.png", "30cm","0.00028");
call insert_product("cosplay chicken","cosplay chicken","dog",
                    "Suitable For Ages: 0+",
                    "normal", "cosplay_chicken.png", "1m5", "0.00125");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "35cm", "0.00013");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "55cm", "0.00025");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "80cm", "0.00036");
call insert_product("ngao","ngao","dog",
                    "Suitable For Ages: 0+",
                    "normal", "ngao.png", "1m2", "0.00062");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "20cm", "0.00011");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "35cm", "0.00029");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "45cm", "0.00034");
call insert_product("poodle","poodle","dog",
                    "Suitable For Ages: 0+",
                    "normal", "poodle.png", "60", "0.00041");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "50cm", "0.00013");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "70cm", "0.00022");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "90cm", "0.00034");
call insert_product("puco","puco","dog",
                    "Suitable For Ages: 0+",
                    "normal", "puco.png", "1m1", "0.00048");
call insert_product("pull","pull","dog",
                    "Suitable For Ages: 0+",
                    "normal", "pull.png", "50cm", "0.00038");
call insert_product("pull","pull","dog",
                    "Suitable For Ages: 0+",
                    "normal", "pull.png", "40cm", "0.00029");
call insert_product("pull","pull","dog",
                    "Suitable For Ages: 0+",
                    "normal", "pull.png", "30cm", "0.00017");
call insert_product("shiba cosplay shark","shiba cosplay shark","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba_cosplay_shark.png", "40cm", "0.00018");
call insert_product("shiba cosplay shark","shiba cosplay shark","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba_cosplay_shark.png", "70cm", "0.00026");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "30cm", "0.00018");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "35cm", "0.00023");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "45cm", "0.00032");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "55cm", "0.00043");
call insert_product("shiba","shiba","dog",
                    "Suitable For Ages: 0+",
                    "normal", "shiba.png", "65cm", "0.0006");