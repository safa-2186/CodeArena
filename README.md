# CodeArena

An interactive,timed quiz application that tests Python and algorithm knowledge through multiple-choice and true/false questions.Built as a full-stack project with an HTML/CSS/JS frontend,a Node.js/Express backend,and a MySQL database.



## Features

- Two difficulty levels : Easy (20s per question) and Medium (15s per question).
- 5 randomly selected questions per quiz session, with shuffled answer options.
- Live countdown timer with visual ring indicator.
- Instant feedback after each answer with explanations.
- Final results screen with score, percentage, and performance badge.
- Scores are validated and stored server-side in MySQL.
- Responsive layout for mobile and tablet screens.



## Tech stack

Frontend : HTML, CSS, JavaScript
Backend  : Node.js, Express
Database : MySQL
Hosting  : 


## Project structure

```bash
CodeArena/
│── Front-end/
│   └── index.html
│── db/
│   |── pool.js
│   └── seed.js
│── routes/
│   |── questions.js
│   |── scores.js
|   └── leaderboard.js 
│── server.js
│── .env.example
│── .gitignore
└── package.json
```


## Getting started

Prerequisites
  
   - Node.js installed
   - MySQL installed (Workbench, XAMPP, or similar)


1. Clone and install

```bash
  git clone https://github.com/safa-2186/CodeArena.git
  cd CodeArena
  npm install
```

2. Configure environment variables

copy .env.example to .env and fill in ypur MySQL credentials :

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_PASSWORD=your_password
  DB_NAME=your_database
  PORT=3000
```

3. Create the database

Run this in MySQL Workbench (or your MySQL client) :

```bash
CREATE DATABASE codearena;

USE codearena;

CREATE TABLE questions (
  id int auto_increment primary key,
  type varchar(30),
  question_text text,
  code text,
  options JSON,
  answer int,
  explanation text,
  difficulty varchar(15)
);


CREATE TABLE scores (
  id int auto_increment primary key,
  score int,
  total int,
  difficulty varchar(10),
  percentage int,
  created_at timestamp default current_timestamp
);
```

4. Seed the questions

```bash
  node db/seed.js
```

5. Run the server

```bash
  npm run dev
```
The API will be running at http://localhost:3000.


## API reference


