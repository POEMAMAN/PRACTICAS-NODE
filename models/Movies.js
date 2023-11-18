//A los ficheros d emodelos simepre se le pone la primera mayuscula//
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const moviesSchema = new Schema (
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number},
        genre: {type: String, required: true},
    },
    {
        //Se guarda la fecha de creacion y la fecha de actualizacion, es una propiedad de Mongo//
        timestamps: true
    }
)

//Creamos las colleccion y le aplicamos el esquema que hemos creado//
const Movies = mongoose.model('Movies', moviesSchema);
//Module es sintaxis de Node//
module.exports = Movies;