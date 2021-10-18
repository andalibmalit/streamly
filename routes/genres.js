/* jshint esversion: 6 */

const express = require('express');
const Joi = require('joi');
const router = express.Router();

// base array of genres
const genres = [
    { id: "0", title: "thriller" },
    { id: "1", title: "horror" },
    { id: "2", title: "comedy" }
];

// input validation for changing genre data
function validateGenre(genre) {
    const schema = Joi.object({
        title: Joi.string()
            .alphanum()
            .min(1)
            .max(30)
    });

    return schema.validate(genre);
}

// getters

router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/:id', (req, res) => {
    const genre = genres.find(g => g.id === req.params.id);
    if (!genre) return res.status(404).send("Error 404: id not found");

    res.send(genre);
});

// setters
router.put('/:id', (req, res) => {
    const genre = genres.find(g => g.id === req.params.id);
    if (!genre) return res.status(404).send("Error 404: id not found");

    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send("Error 400: invalid genre title");
    
    genre.title = req.body.title;
    res.send(genre);
});

router.delete('/:id', (req, res) => {
    const genre = genres.find(g => g.id === req.params.id);
    if (!genre) return res.status(404).send("Error 404: id not found");

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});

router.post('/', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send("Error 400: invalid genre title");
    
    const newGenre = {
        id: genres.length,
        name: req.body.title
    };
    
    genres.push(newGenre);
    res.send(newGenre);
});

module.exports = router;