const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const CourseDetails = require('./data/CourseDetails.json');

app.get('/', (req, res) => {
    res.send("API Running");
});

app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/CourseDetails/:id', (req, res) => {
    const id = req.params.id;
    const seletedCourse = CourseDetails.find(n => n.id === id)
    res.send(seletedCourse);
})

app.listen(port, () => {
    console.log("server running on port", port);
})