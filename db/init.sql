--

-- PostgreSQL database dump

--

-- Dumped from database version 15.3 (Debian 15.3-1.pgdg120+1)

-- Dumped by pg_dump version 15.3 (Debian 15.3-1.pgdg120+1)

SET statement_timeout = 0;

SET lock_timeout = 0;

SET idle_in_transaction_session_timeout = 0;

SET client_encoding = 'UTF8';

SET standard_conforming_strings = on;

SELECT pg_catalog.set_config('search_path', '', false);

SET check_function_bodies = false;

SET xmloption = content;

SET client_min_messages = warning;

SET row_security = off;

--

-- Name: Type; Type: TYPE; Schema: public; Owner: postgres

--

CREATE TYPE public."Type" AS ENUM ( 'TEXT_PAGE' );

ALTER TYPE public."Type" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--

-- Name: Pages; Type: TABLE; Schema: public; Owner: postgres

--

CREATE TABLE
    public."Pages" (
        id integer NOT NULL,
        title text NOT NULL,
        type public."Type" NOT NULL,
        content jsonb NOT NULL
    );

ALTER TABLE public."Pages" OWNER TO postgres;

--

-- Name: Pages_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres

--

CREATE SEQUENCE
    public."Pages_id_seq" AS integer START
WITH
    1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE public."Pages_id_seq" OWNER TO postgres;

--

-- Name: Pages_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres

--

ALTER SEQUENCE public."Pages_id_seq" OWNED BY public."Pages".id;

--

-- Name: Users; Type: TABLE; Schema: public; Owner: postgres

--

CREATE TABLE
    public."Users" (
        id integer NOT NULL,
        login text NOT NULL,
        password text NOT NULL
    );

ALTER TABLE public."Users" OWNER TO postgres;

--

-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres

--

CREATE SEQUENCE
    public."Users_id_seq" AS integer START
WITH
    1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;

ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--

-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres

--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;

--

-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres

--

CREATE TABLE
    public._prisma_migrations (
        id character varying(36) NOT NULL,
        checksum character varying(64) NOT NULL,
        finished_at timestamp
        with
            time zone,
            migration_name character varying(255) NOT NULL,
            logs text,
            rolled_back_at timestamp
        with
            time zone,
            started_at timestamp
        with
            time zone DEFAULT now() NOT NULL,
            applied_steps_count integer DEFAULT 0 NOT NULL
    );

ALTER TABLE public._prisma_migrations OWNER TO postgres;

--

-- Name: Pages id; Type: DEFAULT; Schema: public; Owner: postgres

--

ALTER TABLE ONLY public."Pages"
ALTER COLUMN id
SET
    DEFAULT nextval(
        'public."Pages_id_seq"' :: regclass
    );

--

-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres

--

ALTER TABLE ONLY public."Users"
ALTER COLUMN id
SET
    DEFAULT nextval(
        'public."Users_id_seq"' :: regclass
    );

--

-- Data for Name: Pages; Type: TABLE DATA; Schema: public; Owner: postgres

--

COPY public."Pages" (id, title, type, content) FROM stdin;

1	Тестовая страница	TEXT_PAGE	[
    {
        "type": "TEXT_BLOCK",
        "content": "hello, my name is ardonplay!"
    },
    {
        "type": "IMAGE",
        "content": "/content/cringe.png"
    },
    {
        "type": "TEXT_BLOCK",
        "content": [
            {
                "type": "TEXT",
                "content": "hello my name is cringe!"
            },
            {
                "type": "IMAGE",
                "content": "/content/cringe.png"
            }
        ]
    }
]
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, login, password) FROM stdin;

1	ardonplay	314159
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;

f7709590-dae1-484f-a5f4-311e58b41aad	fc66fba879045b390c0696a3491291859107d664f50a827fb8b0527ab92d9e15	2023-07-28 18:39:38.139226+00	20230728183938_init	\N	\N	2023-07-28 18:39:38.119324+00	1
\.


--
-- Name: Pages_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Pages_id_seq"', 1, true);

--

-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres

--

SELECT pg_catalog.setval('public."Users_id_seq"', 1, true);

--

-- Name: Pages Pages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres

--

ALTER TABLE ONLY public."Pages"
ADD
    CONSTRAINT "Pages_pkey" PRIMARY KEY (id);

--

-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres

--

ALTER TABLE ONLY public."Users"
ADD
    CONSTRAINT "Users_pkey" PRIMARY KEY (id);

--

-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres

--

ALTER TABLE
    ONLY public._prisma_migrations
ADD
    CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);

--

-- Name: Pages_id_key; Type: INDEX; Schema: public; Owner: postgres

--

CREATE UNIQUE INDEX "Pages_id_key" ON public."Pages" USING btree (id);

--

-- Name: Users_id_key; Type: INDEX; Schema: public; Owner: postgres

--

CREATE UNIQUE INDEX "Users_id_key" ON public."Users" USING btree (id);

--

-- Name: Users_login_key; Type: INDEX; Schema: public; Owner: postgres

--

CREATE UNIQUE INDEX "Users_login_key" ON public."Users" USING btree (login);

--

-- PostgreSQL database dump complete

--