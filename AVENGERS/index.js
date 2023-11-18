// const fs = require('fs');

//Creamos un array que representa personas//*** */

// const avengers1 = [
//     {
//         name: 'SpiderMan',
//         power: 70
//     },
//     {
//         name: 'Dr.Strange',
//         power: 80
//     },
//     {
//         name: 'Hulk',
//         power: 110
//     }
// ];

//Convertimos el array en un Json//*** */

// const avengersJson = JSON.stringify(avengers1);

// // fs.writeFile('avengers.json', avengersJson, () => {
// //     console.log('Se ha creado bien')
// // })

// //Convertimos el Json otra vez en array//*** */
// const fs = require('fs');

// fs.readFile('avengers.json',(err, data) => {
//     if (err) {
//         console.log("No se ha podido");
//     }else {
//         const parsedAvengers = JSON.parse(data);
//         console.log(parsedAvengers);
//     }
//     }
// );
