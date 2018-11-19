DROP DATABASE IF EXISTS Kintsugidb;
CREATE DATABASE Kintsugidb;

USE Kintsugidb;

 CREATE TABLE UserSchema(
   user_ID VARCHAR(30) NOT NULL,
   name VARCHAR(40) NOT NULL,
   Bio VARCHAR(140) NOT NULL,
   badges DECIMAL(10,4) NOT NULL,
   study_cards VARCHAR(140) NOT NULL,
   PRIMARY KEY (user_ID)
 );

 CREATE TABLE CardSchema(
   deck_ID INTEGER(10) AUTO_INCREMENT NOT NULL,
   front VARCHAR(100) NOT NULL,
   back VARCHAR(100) NOT NULL,
   PRIMARY KEY (deck_ID)
 );

 CREATE TABLE LearningSchema(
   learning_ID INTEGER(10) AUTO_INCREMENT NOT NULL,
   symbol VARCHAR(100) NOT NULL,
   saying VARCHAR(100) NOT NULL,
   PRIMARY KEY (learning_ID)
 );

 CREATE TABLE businessKanji(
   kanji_ID INTEGER(100) AUTO_INCREMENT NOT NULL,
   symbol VARCHAR(10) NOT NULL,
   saying VARCHAR(100) NOT NULL,
   PRIMARY KEY (kanji_ID)
 );