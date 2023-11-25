const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Location = require("../models/locations.model")

router.post("/create", async (req,res,next) => {
    try {
        const newLocation = new Location({
            name: req.body.name,
            loot: req.body.loot,
            character: []
        });
        const createdLocation = await newLocation.save();
        return res.status(201).json(createdLocation);
    }
    catch (err) {
        next(err);
    }
})


router.put('/add-character', async (req, res, next) => {
    try {
        const { locationId } = req.body;
        // const locationId = req.body.locationId
        const { characterId } = req.body;
        // const characterId = req.body.characterId;
        const updatedLocation = await Location.findByIdAndUpdate(
            locationId,
            { $push: { characters: characterId } },
            { new: true }
        );
        return res.status(200).json(updatedLocation);
    } catch (error) {
        return next(error);
    }
});


module.exports = router;
