CREATE DATABASE checkout;

USE checkout;

CREATE TABLE users (
  id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name TEXT,
  email TEXT,
  password TEXT,
  addressLine1 TEXT,
  addressLine2 TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  phone TEXT,
  creditCard TEXT,
  expiryDate TEXT,
  CVV TEXT,
  billingZip TEXT
);