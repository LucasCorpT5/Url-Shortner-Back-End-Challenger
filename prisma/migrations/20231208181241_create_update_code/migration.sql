/*
  Warnings:

  - Added the required column `code` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "code" TEXT NOT NULL;
