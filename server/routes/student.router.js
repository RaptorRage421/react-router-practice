const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET students
router.get('/', (req, res) => {
    // Get all of the treats from the database
    const sqlText = `SELECT * FROM students`;
    pool.query(sqlText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

// POST students
router.post('/', (req, res) => {
    console.log(req.body);
    const newStudent = req.body.github_name;
    const profilePicture = req.body.profile_image;
    const sqlText = `INSERT INTO students (github_name, profile_image) VALUES ($1,$2)`;

    pool.query(sqlText, [newStudent, profilePicture])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        });
});

router.get('/:id', (req,res) => {
    const studentId = req.params.id
    const sqlText= `
    SELECT * FROM "students"
    WHERE "id" = $1;
    `
    pool.query(sqlText, [studentId])
    .then(result => {
        res.send(result.rows)
    })
    .catch(err => {
        console.error('Error getting Specific Student', err)
    })
})

module.exports = router;