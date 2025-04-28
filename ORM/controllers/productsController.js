//const db = require('../db/models')
//const Producto = db.producto
//ES LO MISMO QUE:
const {Producto} = require('../db/models') //Representa la tabla productos

const mostrarProductos = async (req, res) => {
    const productos = await Producto.findAll(
        //{attributes: ['nombre','precio']} PARA FILTRAR POR ATRIBUTOS
    )
    res.status(200).json(productos)
}

const mostrarProducto = async (req, res) => {
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        res.status(200).json(producto)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const agregarProducto = async (req, res) => {
    const { nombre,precio } = req.body
    const producto = await Producto.create({nombre, precio})
    res.status(200).json(producto)
}

const modificarProducto = async (req, res) => {
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        const { nombre, precio } = req.body
        if(nombre) producto.nombre = nombre
        if(precio) producto.precio = precio
        await producto.save()
        //PROBAR ACTUALIZAR CON EL METODO UPDATE
        res.status(200).json(producto)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const reemplazarProducto = async (req,res)=>{
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        const { nombre, precio } = req.body
        if(!nombre || !precio){
            res.status(400).json({message: "Faltan campos obligatorios"})
        }else{
            producto.nombre = nombre
            producto.precio = precio
            await producto.save()
            res.status(200).json(producto)
        }
    }else{
        res.status(404).json({message: 'Faltan camposn obligatorio'})
        }
}

const eliminarProducto = async (req, res) => {
    const id = req.params.id
    const producto = await Producto.findByPk(id)
    if(producto){
        await producto.destroy()
        res.status(200).json({message: "Producto Eliminado"})
    }else{
        res.status(404).json({message: "Producto no encontrado"})
    }
}

module.exports = {
    mostrarProductos,
    mostrarProducto,
    agregarProducto,
    modificarProducto,
    reemplazarProducto,
    eliminarProducto
}