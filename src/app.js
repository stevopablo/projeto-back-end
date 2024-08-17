const express = require('express');
const app = express();
const homeRoutes = require('./src/routes/homeRoutes');
const userRoutes = require('./src/routes/usersRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes')
const userRoutes = require('./routes/usersRoutes');
const productRoutes = require('./routes/productRoutes')
require('dotenv').config()
const port = process.env.PORT;
// const host = process.env.HOST;

app.use(express.json());


app.use('/', userRoutes);
app.use('/', homeRoutes)
app.use('/', userRoutes);
app.use('/', categoryRoutes)
app.use('')
app.get('/*',(res)=>{return res.json({message:'Pagina não encontrada'})})
module.exports = app