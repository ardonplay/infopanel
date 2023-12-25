CREATE TABLE "user_role" (
  "id" serial PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "page_type" (
  "id" serial PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "page_element_type" (
  "id" serial PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);


CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "role" int NOT NULL REFERENCES "user_role" ("id"),
  "pass" varchar NOT NULL
);

CREATE TABLE "pages" (
  "id" serial PRIMARY KEY,
  "title" varchar NOT NULL,
  "type" int NOT NULL REFERENCES "page_type" ("id")
);

CREATE TABLE "page_content" (
  "id" serial PRIMARY KEY,
  "page_id" int NOT NULL REFERENCES "pages" ("id"),
  "element_type" int NOT NULL REFERENCES "page_element_type" ("id"),
  "body" jsonb NOT NULL
);
