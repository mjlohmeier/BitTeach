CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  user_name VARCHAR(255) UNIQUE,
  user_password VARCHAR(255) 
); 

CREATE TABLE wallet (
  id SERIAL PRIMARY KEY,
  bit_coin_address uuid DEFAULT uuid_generate_v4 (),
  user_id SERIAL,
  initial_balance FLOAT,
  current_ammount FLOAT,
  past_purchases FLOAT
);

CREATE TABLE marketplace (
  id SERIAL PRIMARY KEY,
  user_id SERIAL,
  currency_name VARCHAR(255) UNIQUE,
  price FLOAT,
  marketValue FLOAT
);

CREATE TABLE bitTeach (
  id SERIAL PRIMARY KEY,
  currency_name VARCHAR(255) UNIQUE,
  price FLOAT,
  marketValue FLOAT
);