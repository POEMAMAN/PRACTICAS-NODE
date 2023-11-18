const mongoose = require('mongoose');
require('dotenv').config();
//Importamos el modelo//
const Character = require('../models/Character')

const characters = [
    {
      name: 'Ursula Corberó',
      age: 32,
      alias: 'Tokio',
    },
    {
      name: 'Pedro Alonso',
      age: 50,
      alias: 'Berlín',
    },
    {
      name: 'Álvaro Morte',
      age: 46,
      alias: 'Profesor',
    },
    {
      name: 'Alba Flores',
      age: 34,
      alias: 'Nairobi',
    },
    {
      name: 'Jaime Lorente',
      age: 29,
      alias: 'Denver',
    },
    {
      name: 'Darko Peric',
      age: 44,
      alias: 'Helsinki',
    },
  ];

const characterDocuments = characters.map(character => new Character(character))


// 1. Buscar si hay personajes creados, si los hay los borramos.
// 2. Insertar los personajes.
// 3. Controlamos Errores.
// 4. Nos desconctamos.

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
  // Utilizando Character.find() obtendremos un array con todos los personajes de la db
   console.log('Conectado a mongoDB ATlas');
   const allCharacters = await Character.find();
   // Si existen personajes previamente, dropearemos la colección
    if (allCharacters.length) {
        await Character.collection.drop(); //La función drop borra la colección
    }
})
.catch(err => console.log('Error al borrar los personajes', err))
.then(async () => {
  		// Una vez vaciada la db de los personajes, usaremos el array characterDocuments
		// para llenar nuestra base de datos con todas los personajes.
    await Character.insertMany(characterDocuments);
})
.catch((err) => console.log('Error creating Data',err))
.finally(() => 
	// Por último nos desconectaremos de la DB.
    mongoose
        .disconnect()
        .then(() => console.log('Desconectado de forma amistosa'))
);







