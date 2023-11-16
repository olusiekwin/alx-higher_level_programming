# 0x0F. Python - Object-relational mapping

## Overview
This project, developed by Guillaume, is a Python-based exploration of Object-Relational Mapping (ORM) with a focus on connecting Python scripts to MySQL databases. The project involves using both the MySQLdb module for direct SQL queries and the SQLAlchemy ORM for a more abstracted approach to database interactions.

## Project Schedule
- Start Date: Nov 16, 2023, 6:00 AM
- End Date: Nov 20, 2023, 6:00 AM
- Checker Release: Nov 17, 2023, 6:00 AM
- Auto Review: Will be launched at the deadline

## Prerequisites
Before you begin, ensure that your MySQL server is in version 8.0. Refer to [How to install MySQL 8.0 in Ubuntu 20.04](link_to_mysql_installation_guide).

## Background Context
This project bridges the realms of Databases and Python, with a two-part approach:

1. **Using MySQLdb Module:**
   - Connect to a MySQL database.
   - Execute SQL queries using MySQLdb.

2. **Using SQLAlchemy ORM:**
   - Utilize SQLAlchemy, an Object-Relational Mapper.
   - Abstract storage details from usage.
   - Replace SQL queries with Python code.
   - Achieve storage independence, allowing easy changes without rewriting the entire project.

**Example Without ORM:**
```python
conn = MySQLdb.connect(host="localhost", port=3306, user="root", passwd="root", db="my_db", charset="utf8")
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC")
query_rows = cur.fetchall()
for row in query_rows:
    print(row)
cur.close()
conn.close()
```

**Example With ORM:**
```python
engine = create_engine('mysql+mysqldb://{}:{}@localhost/{}'.format("root", "root", "my_db"), pool_pre_ping=True)
Base.metadata.create_all(engine)

session = Session(engine)
for state in session.query(State).order_by(State.id).all():
    print("{}: {}".format(state.id, state.name))
session.close()
```

## Resources
Read or watch the following resources:
- [Object-relational mappers](link_to_orm_resources)
- [mysqlclient/MySQLdb documentation](link_to_mysqlclient_docs) (please don’t pay attention to \_mysql)
- [MySQLdb tutorial](link_to_mysql_tutorial)
- [SQLAlchemy tutorial](link_to_sqlalchemy_tutorial)
- [SQLAlchemy](link_to_sqlalchemy)
- [Flask SQLAlchemy](link_to_flask_sqlalchemy)
- [10 common stumbling blocks for SQLAlchemy newbies](link_to_sqlalchemy_stumbling_blocks)
- [Python SQLAlchemy Cheatsheet](link_to_sqlalchemy_cheatsheet)
- [SQLAlchemy ORM Tutorial for Python Developers](link_to_sqlalchemy_orm_tutorial) (Warning: This tutorial is with PostgreSQL, but the concept of SQLAlchemy is the same with MySQL)
- [SQLAlchemy Tutorial](link_to_sqlalchemy_tutorial)
- [Python Virtual Environments: A primer](link_to_venv_primer)

## Learning Objectives
Upon completing this project, you should be able to:
- Explain why Python programming is awesome.
- Connect to a MySQL database from a Python script.
- Perform SELECT and INSERT operations on MySQL tables using Python scripts.
- Understand the concept of ORM.
- Map a Python Class to a MySQL table using SQLAlchemy.
- Create a Python Virtual Environment.

## Copyright - Plagiarism
- Develop solutions independently to meet learning objectives.
- Do not copy or publish any content from this project.
- Plagiarism will result in removal from the program.

## Requirements
- Allowed editors: vi, vim, emacs
- Interpreted/compiled on Ubuntu 20.04 LTS using python3 (version 3.8.5)
- Executed with MySQLdb version 2.0.x
- Executed with SQLAlchemy version 1.4.x
- Files end with a new line
- First line of all files: `#!/usr/bin/python3`
- Mandatory README.md file at the project root
- Code follows pycodestyle (version 2.8.*)
- All files are executable
- File length tested using wc
- Modules, classes, and functions have documentation
- Documentation explains the purpose and is a real sentence
- Do not use execute with SQLAlchemy

## More Info
### Install and activate venv
To create a Python Virtual Environment:
```bash
$ sudo apt-get install python3.8-venv
$ python3 -m venv venv
$ source venv/bin/activate
```

### Install MySQLdb module version 2.0.x
```bash
$ sudo apt-get install python3-dev
$ sudo apt-get install libmysqlclient-dev
$ sudo apt-get install zlib1g-dev
$ sudo pip3 install mysqlclient
$ python3
>>> import MySQLdb
>>> MySQLdb.version_info 
(2, 0, 3, 'final', 0)
```

### Install SQLAlchemy module version 1.4.x
```bash
$ sudo pip3 install SQLAlchemy
$ python3
>>> import sqlalchemy
>>> sqlalchemy.__version__ 
'1.4.22'
```

**Note:** Ignore any warning messages during the installation process.
```