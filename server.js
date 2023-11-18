// // const server = require('http');

// // Se encarga de escuchar las peticiones que lleguen al servidor sin express//
// // //req = peticion res = respuesta//
// // const requestHandler = (req, res) => {
// //       // console.log(req.url);
// //       // if (req.url == 'Hello') {
// //       // res.setHeader("Content-Type", "text.json");
// //     res.writeHead(200);
// //     res.write("¿Hola Cliente");
// //     res.end();
// //   }
// //   }
// //   if (req.url == '/Bye') {
// //     res.setHeader("Content-Type", "text.json");
// //   res.writeHead(200);
// //   res.write("Adios Cliente");
// //   res.end();
// //     }
// //   console.log(req.body);
// // res.setHeader("Content-Type", "text.json");
// // res.writeHead(200);
// // res.write("¿Buenas, el servidor esta fucnionando");
// // res.end('hurra');
// // console.log('hurra');
// // };

// //Creacion del servidor//
// const PORT = 3000;
// // const server = http.createServer(requestHandler);

// const express = require('express');
// const server = express();

// const router = express.Router();


// router.get('/', (req, res) => {
//   console.log('Se ha conectado a la API')
//   res.send('Hello Upgrade Hub!');
// });

// // server.use('/', (req, res) => {
// //   console.log('Se ha conectado a la API')
// //   res.send('Hello Upgrade Hub!');
// // });

// router.get('/movies', (req, res) => {
//   // server.use('/movies', (req, res) => {
//   const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
//   res.send(movies);
// });

// //Ejemplo ROUTE PARAMS //
// const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
// router.get('/movies/:movie', (req, res) => {
//   const nameMovie = req.params.movie //Guardo en una variable el valor introducido en la url
//   //Busco el indice donde se encuentra la coincidencia    
//   const findMovieIndex = movies.indexOf(nameMovie);
//   //Si no hay coincidencia devuelvo mensaje de que no coincide
//   if (findMovieIndex === -1) {
//     res.send('No se ha encontrado la película');
//   }
//   res.send(movies[findMovieIndex]);//Envío la respuesta encontrada.
// })

// router.get('/movies/search/:query', (req, res) => {
//   const query = req.params.query.toLocaleLowerCase() //Guardo en una variable el valor introducido en la url
//   const filterLook = movies.filter(movie => movie.toLocaleLowerCase().includes(query))
//   if (filterLook.length) {
//     res.send(filterLook)
//   } else {
//     res.send("No se encontraron peliculas");
//   }})

// server.use('/', router);

// server.listen(PORT, () => {
//   console.log(`Server started in http://localhost:${PORT}`);
// });


//uso con mongoDB//
//Hay que añadir el .enx en git ignore para que no se cargue en github//

// console.log(process.env.MONGODB_URL)
require('./UTILS/db.js');
const express = require('express');
const router = express.Router()
const Character = require('./models/Character')
const PORT = 3000;
const server = express();

// Requerimos el archivo de configuración de nuestra DB


//Aqui importamos eñl modulo Character
// router.get('/characters', (req, res) => {
//   return Character.find()
//   .then(characters => {
//       // Si encontramos los personajes, los devolveremos al usuario (200 código ok)
//       return res.status(200).json(characters);
//   })
//   .catch(err => {
//       // Si hay un error, enviaremos por ahora una respuesta de error (500 error interno saervidor)
//       return res.status(500).json(err);
//   });
// });

//Otra forma de hacerlo//
router.get('/characters', async (req, res) => {
  try {
    const characters = await Character.find();
    return res.status(200).json(characters)
  } catch (err) {
    return res.status(500).json(err);
  }
});
//Buscar un personaje por identificador//
router.get('/characters/:id', async (req, res) => {
  const id = req.params.id
  try {
    const character = await Character.findById(id);
    if (character) {
      return res.status(200).json(character)
    } else {
      return res.status(404).json('No se ha encontrado')
    }
  }
  catch (err) {
    return res.status(500).send(err.message)
  }
});

//Recuperar un elemento por un determinado parametro//
router.get('/characters/age/:age', async (req, res) => {
  const { age } = req.params //Es igual a const age = req.params.age, si llamas a la funcion igual que la propiedad entre llaves, te eprmite no ponerla al final
  try {
    const characterByAge = await Character.find({ age: { $gt: age } });
    if (!characterByAge.length) 
    return res
        .status(404)
        .send(`No se han encontrado personajes de mas de ${age} años `);
    return res.status(200).json(characterByAge);
  } catch {
    return res.status(500).json(err)
  }
});



server.use('/', router)

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});