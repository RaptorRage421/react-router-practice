# React Router Student List

Before you get started make sure to look through the code that has been provided. 

This is a **mostly** working copy of the React Student List activity.
  - You'll see that the student list does not update after a successful form submission. This is intentional! (It makes your job a little more straightforward.)

## Setup

In Postico, create a database called `react_student_list`. Use SQL code from `database.sql` in Postico to create the `students` table.

Then start up your server and client with npm:

```
npm install
npm run server
npm run client
```

## Base Mode

Add routing and navigation to this app!

- Setup the `Router` in `App`.
- Add a `<nav>` element with links to /home, /about, and /students
- Add a new About page that says a little about the app (don't overthink this, just display a sentence or two)
- Show `<StudentList />` in the /students route.
- Show `<StudentForm />` in the /home route
  - After a new student is successfully added, navigate the user to /students.
    - But only on success! (This is a common UI pattern.)
