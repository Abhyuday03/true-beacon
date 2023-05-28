CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY NOT NULL,
  "user_name" varchar NOT NULL,
  "created_at" timestamp NOT NULL,
  "email" varchar NOT NULL,
  "user_type" varchar NOT NULL,
  "broker" varchar NOT NULL,
  "password" varchar NOT NULL,
  "token" varchar
);

CREATE TABLE "orders" (
    "order_id" SERIAL PRIMARY KEY NOT NULL,
    "symbol" varchar NOT NULL,
    "quantity" int NOT NULL,
    "price" float NOT NULL,
    "user_id" int NOT NULL
);

CREATE TABLE "holdings"(
"holding_id" SERIAL PRIMARY KEY NOT NULL,
"tradingsymbol" varchar NOT NULL,
"exchange" varchar NOT NULL,
"isin" varchar NOT NULL,
"quantity" int NOT NULL,
"authorised_date" timestamp NOT NULL,
"average_price" float NOT NULL,
"last_price" float NOT NULL,
"close_price" float NOT NULL,
"pnl" float NOT NULL,
"day_change" float NOT NULL,
"day_change_percentage" float NOT NULL
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("user_id");
