/*
  Warnings:

  - Added the required column `img` to the `Basket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Basket" ADD COLUMN     "img" TEXT NOT NULL;

INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
INSERT INTO "Product" (title, text, link) VALUES ('Салатное', 'Масло нерафинированное, высший сорт, 5л', '/');
