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
  user_id SERIAL REFERENCES users (id),
  current_amount FLOAT
);

CREATE TABLE marketplace (
  id SERIAL PRIMARY KEY,
  currency_name VARCHAR(255) UNIQUE,
  balance FLOAT,
  user_id INTEGER REFERENCES users (id)
);

