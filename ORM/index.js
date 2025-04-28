const express = require('express')
const router = require('./routes/productsRoutes')
const db = require('./db/models/') //si no pongo nombre del archivo por defecto me trae index

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/productos', router)

app.listen(PORT, ()=>{
    console.log('Aplicación corriendo en el puerto' + PORT)
    db.sequelize.sync() //Sincroniza la base de datos
})