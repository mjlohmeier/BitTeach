CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  user_password VARCHAR(255)
);

CREATE TABLE wallet (
  id SERIAL PRIMARY KEY,
  current_ammount FLOAT,
  past_purchases FLOAT
);

CREATE TABLE marketplace (
  id SERIAL PRIMARY KEY,
  currency_name VARCHAR(255) UNIQUE,
  price FLOAT,
  marketValue FLOAT
);
