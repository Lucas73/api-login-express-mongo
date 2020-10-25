const mongoose = require('mongoose');
const dbURL = require('./properties').DB;

module.exports = ()=>{
  mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log(`Mongo connected on ${dbURL}`))
    .catch(err => console.log(`Connection as error ${err}`))

    process.on('SIGINT', ()=>{
      mongoose.connection.close(()=>{
        console.log(`Mongo is diconnected`);
        process.exit(0)
      });
    })
}