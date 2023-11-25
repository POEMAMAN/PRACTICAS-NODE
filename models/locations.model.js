//Modelo que debe tener el mismo nombre del lugar dnde se hace el robo, el botin robado y los personajes que aparecen en el robo//
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema(
  {
    name: { type: String, required: true },
    loot: { type: String, required: true },
		// Tipo mongoose Id y referencia al modelo Character
    characters: [{ type: mongoose.Types.ObjectId, ref: 'Character' }],
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;