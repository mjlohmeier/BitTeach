CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  user_name VARCHAR(255) UNIQUE,
  bit_coin_address uuid DEFAULT uuid_generate_v4 (),
  initial_balance FLOAT,
  user_password VARCHAR(255) 
); 

CREATE TABLE wallet (
  id SERIAL PRIMARY KEY,
  user_id SERIAL,
  current_amount FLOAT,
  currency_id SERIAL
);

CREATE TABLE marketplace (
  id SERIAL PRIMARY KEY,
  currency_name VARCHAR(255) UNIQUE,
  price FLOAT,
  marketValue FLOAT
);

