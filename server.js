// const server = require('http');

// Se encarga de escuchar las peticiones que lleguen al servidor sin express//
// //req = peticion res = respuesta//
// const requestHandler = (req, res) => {
//       // console.log(req.url);
//       // if (req.url == 'Hello') {
//       // res.setHeader("Content-Type", "text.json");
//     res.writeHead(200);
//     res.write("¿Hola Cliente");
//     res.end();
//   }
    //   }
    //   if (req.url == '/Bye') {
    //     res.setHeader("Content-Type", "text.json");
    //   res.writeHead(200);
    //   res.write("Adios Cliente");
    //   res.end();
    //     }
//   console.log(req.body);
    // res.setHeader("Content-Type", "text.json");
    // res.writeHead(200);
    // res.write("¿Buenas, el servidor esta fucnionando");
    // res.end('hurra');
    // console.log('hurra');
// };

//Creacion del servidor//
const PORT = 3000;
// const server = http.createServer(requestHandler);

const express = require('express');
const server = express();

const router = express.Router();


router.get('/',(req,res) => {
  console.log('Se ha conectado a la API')
  res.send('Hello Upgrade Hub!');
});

// server.use('/', (req, res) => {
//   console.log('Se ha conectado a la API')
//   res.send('Hello Upgrade Hub!');
// });

router.get('/movies',(req,res) => {
// server.use('/movies', (req, res) => {
	const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
  res.send(movies);
});

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});