CREATE TABLE orders (
    orderid SERIAL PRIMARY KEY,
    adress VARCHAR,
    status VARCHAR(15),
    user_id bigint REFERENCES users(userid)
);



