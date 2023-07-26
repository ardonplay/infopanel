-- CreateTable
CREATE TABLE "Pages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "related_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlainText" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "InformationSlider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateIndex
CREATE UNIQUE INDEX "Pages_id_key" ON "Pages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_login_key" ON "Users"("login");

-- CreateIndex
CREATE UNIQUE INDEX "PlainText_id_key" ON "PlainText"("id");

-- CreateIndex
CREATE UNIQUE INDEX "InformationSlider_id_key" ON "InformationSlider"("id");
