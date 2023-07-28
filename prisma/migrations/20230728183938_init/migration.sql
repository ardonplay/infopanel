-- CreateEnum
CREATE TYPE "Type" AS ENUM ('TEXT_PAGE');

-- CreateTable
CREATE TABLE "Pages" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "content" JSONB NOT NULL,

    CONSTRAINT "Pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pages_id_key" ON "Pages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_login_key" ON "Users"("login");
