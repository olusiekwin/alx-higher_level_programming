# Project: SQL - Introduction

**Author**: Guillaume
**Weight**: 1
**Project Status**: Ongoing second chance project - started Oct 17, 2023 6:00 AM, must end by Oct 20, 2023 6:00 AM
**Auto QA Review**: 0.0/104 mandatory & 0.0/24 optional
**Completion**: 0.0% (Mandatory: 0.0%, Optional: 0.0%)

![image](https://github.com/olusiekwin/alx-higher_level_programming/assets/85841088/68fcca65-7b6d-4d06-a3cf-948120dda46a)


## Table of Contents

- [Introduction](#introduction)
- [Concepts](#concepts)
- [Resources](#resources)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Installation](#installation)
- [More Info](#more-info)

## Introduction

This project, authored by Guillaume, is an introduction to SQL, with a focus on databases and MySQL. You will learn the basics of databases, SQL, and how to use MySQL.

## Concepts

For this project, you are expected to explore the following concepts:

- Databases
- What is a database & SQL?
- A Basic MySQL Tutorial
- Basic SQL statements: DDL and DML (no need to read the chapter “Privileges”)
- Basic queries: SQL and RA
- SQL technique: functions
- SQL technique: subqueries
- What makes the big difference between a backtick and an apostrophe?
- MySQL Cheat Sheet
- MySQL 8.0 SQL Statement Syntax
- Installing MySQL in Ubuntu 20.04

## Learning Objectives

At the end of this project, you should be able to explain:

- What a database is
- What a relational database is
- What SQL stands for
- What MySQL is
- How to create a database in MySQL
- What DDL and DML stand for
- How to CREATE or ALTER a table
- How to SELECT data from a table
- How to INSERT, UPDATE, or DELETE data
- What subqueries are
- How to use MySQL functions

## Requirements

**General**

- Allowed editors: vi, vim, emacs
- Files will be executed on Ubuntu 20.04 LTS using MySQL 8.0 (version 8.0.25)
- All files should end with a new line
- All SQL queries should have a comment just before
- All files should start with a comment describing the task
- All SQL keywords should be in uppercase (SELECT, WHERE…)
- A README.md file, at the root of the project folder, is mandatory

**Installation**

To install MySQL 8.0 on Ubuntu 20.04 LTS, run the following commands:

```bash
$ sudo apt update
$ sudo apt install mysql-server
$ mysql --version

I see you want the provided information in a single markdown code block. Here it is:

```markdown
```bash
$ sudo mysql
```

For running MySQL in a container, use the provided credentials: root/root.

```bash
$ service mysql start
$ cat 0-list_databases.sql | mysql -uroot -p
```

**More Info**

In the container, credentials are root/root.

[Container on Demand](#) allows you to run MySQL. In the container, credentials are `root/root.`
