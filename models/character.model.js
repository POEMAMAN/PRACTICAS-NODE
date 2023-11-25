//A los ficheros d emodelos simepre se le pone la primera mayuscula//
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const characterSchema = new Schema (
    {
        name: {type: String, required: true},
        age: {type: Number},
        alias: {type: String, required: true},
    },
    {
        //Se guarda la fecha de creacion y la fecha de actualizacion, es una propiedad de Mongo//
        timestamps: true
    }
)

//Creamos las colleccion y le aplicamos el esquema que hemos creado//
const Character = mongoose.model('character.model', characterSchema);
//Module es sintaxis de Node//
module.exports = Character;