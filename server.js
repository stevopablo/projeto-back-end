const express = require("express");
const homeRoutes = require('./src/routes/homeRoutes');
const app = express();
require('dotenv').config()
const port = process.env.PORT;
const host = process.env.HOST;

app.use('/', homeRoutes)
app.get('/*',(req, res)=>{return res.json({message:'Pagina não encontrada'})})

app.listen(port,host,()=>{console.log(`server working at http://${host}:${port}`)});

