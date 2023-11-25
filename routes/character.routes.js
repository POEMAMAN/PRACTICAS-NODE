const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Location = require("../models/character.model")

router.post('/character', (req, res, next) => {
    const caracter = new caractersSchema({
        name: req.body.name,
        age: req.body.age,
        alias: req.body.alias
    });
   caracter.save().then((response) => {
        res.status(201).json({
            message: "caracter successfully created!",
            result: response
        });
    }).catch(error => {
        res.status(500).json({
            error: error
        });
    });
});

module.exports = router;