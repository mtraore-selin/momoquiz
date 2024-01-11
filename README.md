# Momoquiz - Interactive Online Quiz Platform

Welcome to Momoquiz, a web application designed for creating and hosting engaging quizzes as challenges. Although this overview covers a subset of Momoquiz's capabilities, a key feature is highlighted: teachers can easily generate quizzes, set challenge durations, and share them with students. The application utilizes the chart.js library for dynamic charts and dialogFlow for chatbot interactions. It is developed using the MongoDB, ExpressJS, Angular, and NodeJS (MEAN) stack.

The platform accommodates two primary user roles: teachers and students, each with distinct functionalities:

## Teachers:

- Create quizzes and host them as challenges.
- Define titles, descriptions, and challenge durations.
- Access consolidated student performance data through interactive charts.
- Seamlessly navigate the application using a chatbot.

## Students:

- Log in and participate in quizzes as challenges.
- Take each quiz only once per challenge.
- Receive immediate feedback upon submitting a quiz.
- Utilize an intuitive chatbot for guidance.

### Getting Started

Before launching the application, ensure the existence of a MongoDB database named "quizzards."

To initiate the server:

1. Navigate to the "server" directory.
2. Execute `node server.js`.

To run the application:

1. Open a new terminal.
2. Navigate to `client`.
3. Execute `ng serve`.
4. Access the application at `http://localhost:4200/`.

## Features

1. Secure login using JWT authentication.
2. Single attempt per student for each quiz.
3. Automatic redirection to the feedback page after quiz submission.
4. User-friendly chatbot for seamless navigation.
5. Comprehensive performance insights for teachers through charts.

### Screenshots

Explore the application's features through the following screenshots:

#### Landing Page

![Landing Page](client/src/assets/img/landing_page.png)

#### Teacher Dashboard

#### And more...

Momoquiz simplifies the quiz experience for both teachers and students. Dive into the application to unlock its potential and enhance your educational journey!

## TODO

- Render challenge feedback responsively.
- Update the number of players dynamically.
- Factorize components (JWT tokenization and verification, duplication elimination, etc.).

## Account

- Add teacher and student accounts for testing.
