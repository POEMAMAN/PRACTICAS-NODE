const mongoose = require('mongoose');
require('dotenv').config();
//Importamos el modelo//
const Movies = require('../models/Movies')

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

const moviesDocuments = movies.map(movies => new Movies(movies))

console.log(moviesDocuments)

// 1. Buscar si hay peliculas creados, si los hay los borramos.
// 2. Insertar las peliculas
// 3. Controlamos Errores.
// 4. Nos desconectamos.

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(async () => {
  // Utilizando Character.find() obtendremos un array con todos los personajes de la db
   console.log('Conectado a mongoDB ATlas');
   const allMovies = await Movies.find();
   // Si existen personajes previamente, dropearemos la colección
    if (allMovies.length) {
        await Movies.collection.drop(); //La función drop borra la colección
    }
})
.catch(err => console.log('Error al borrar los personajes', err))
.then(async () => {
  		// Una vez vaciada la db de los personajes, usaremos el array moviesDocuments
		// para llenar nuestra base de datos con todas los personajes.
    await Movies.insertMany(moviesDocuments);
})
.catch((err) => console.log('Error creating Data',err))
.finally(() => 
	// Por último nos desconectaremos de la DB.
    mongoose
        .disconnect()
        .then(() => console.log('Desconectado de forma amistosa'))
);







