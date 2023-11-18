require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL,{
    //Lo comento ya que esta depreciado//
    // useNewUrlParser: true,node seeds/character.seed.js
    // useUnifiedTopology: true,
})
.then(() => {
   console.log('Conectado a mongoDB ATlas');
} )
.catch(err => console.log('Error al conectar a MongoDB Atlas', err))