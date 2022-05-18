CREATE TABLE products (
    productid SERIAL PRIMARY KEY,
    name VARCHAR(50),
    url VARCHAR,
    price FLOAT,
    description VARCHAR,
    category_id bigint REFERENCES categories(categoryid)
    
);