const http = require('http');

// Se encarga de escuchar las peticiones que lleguen al servidor.//
//req = peticion res = respuesta//
const requestHandler = (req, res) => {
      console.log(req.url);
      if (req.url == 'Hello') {
      res.setHeader("Content-Type", "text.json");
    res.writeHead(200);
    res.write("¿Hola Cliente");
    res.end();
  }
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
};

//Creacion del servidor//
const PORT = 3000;
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});