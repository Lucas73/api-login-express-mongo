'use strict'
const cors = require('cors');
const authRoutes = require('./auth/auth.routes')
const express = require('express');
const properties = require('./config/properties')
const DB = require('./config/db'); 

DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJson = bodyParser.json();
const bodyParserURL = bodyParser.urlencoded({extended: true});

app.use(bodyParserJson);
app.use(bodyParserURL);

app.use(cors())
app.use('/api', router);
authRoutes(router);
router.get('/', (req,res)=>{
  res.send('Hello from Home')
});

app.use(router);

app.listen(properties.PORT, ()=>{console.log(`server runing on port ${properties.PORT}`)});