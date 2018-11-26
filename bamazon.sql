DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INTEGER (30) NULL,
  product_name VARCHAR(30) NULL,
  department_name VARCHAR(30) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(30) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1111 , "Television", "eletronics", 699.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1112, "Rice", "grocery", 10.00, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1113 ,"Doll house","toys", 10.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1114,"Demin jackets","apperal", 39.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1115 ,"Tempered glass", "phone accessories", 5.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1116 , "Bed-sheet","bedding", 19.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1117 , "Break-oil","automotive", 15.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1118 , "Lawn-mower","gardening", 150, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1119 , "Drill","tools", 40.25, 75);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1120, "Tennis Racquet","sporting goods", 14.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1121 ,"Earrings", "jewellery", 20.10, 120);

select * from products;