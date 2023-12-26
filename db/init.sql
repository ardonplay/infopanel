CREATE TABLE
    "user_role" (
        "id" serial PRIMARY KEY,
        "name" varchar UNIQUE NOT NULL
    );

CREATE TABLE
    "page_type" (
        "id" serial PRIMARY KEY,
        "name" varchar UNIQUE NOT NULL
    );

CREATE TABLE
    "page_element_type" (
        "id" serial PRIMARY KEY,
        "name" varchar UNIQUE NOT NULL
    );

CREATE TABLE
    "users" (
        "id" serial PRIMARY KEY,
        "username" varchar UNIQUE NOT NULL,
        "role" int NOT NULL,
        "pass" varchar NOT NULL,
        FOREIGN KEY ("role") REFERENCES "user_role" ("id") ON DELETE CASCADE
    );

CREATE TABLE
    "pages" (
        "id" serial PRIMARY KEY,
        "parent_id" int,
        "title" varchar NOT NULL,
        "type" int NOT NULL,
        "order" int,
        FOREIGN KEY ("type") REFERENCES "page_type" ("id") ON DELETE CASCADE,
        FOREIGN KEY ("parent_id") REFERENCES "pages" ("id") ON DELETE CASCADE
    );

CREATE TABLE
    "page_content" (
        "id" serial PRIMARY KEY,
        "page_id" int NOT NULL,
        "element_type" int NOT NULL,
        "body" jsonb NOT NULL,
        "order" int,
        FOREIGN KEY ("page_id") REFERENCES "pages" ("id") ON DELETE CASCADE,
        FOREIGN KEY ("element_type") REFERENCES "page_element_type" ("id") ON DELETE CASCADE

);

INSERT INTO "page_type" ("name") VALUES ('FOLDER'), ('PAGE');

INSERT INTO "page_element_type" ("name") VALUES ('IMAGE'), ('TEXT');

INSERT INTO "user_role" ("name") VALUES ('ROLE_ADMIN');

INSERT INTO
    "pages" ("parent_id", "title", "type")
VALUES (NULL, 'TEST_FOLDER', 1), (1, 'TEST_PAGE', 2);

INSERT INTO "page_content" ("page_id", "element_type", "body") VALUES (2, 2, '{"content": "Hello, this is test"}'::jsonb);
