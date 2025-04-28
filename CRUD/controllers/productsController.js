let datos = require('../datos.json');

const mostrarProductos = (req, res) => {
    res.json(datos)
}

const mostrarProducto = (req, res) => {
    const id = req.params.id
    const producto = datos.find(producto => producto.id == id)
    if(producto){
        res.status(200).json(producto)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const agregarProducto = (req, res) => {
    const { nombre, precio } = req.body
    const id = datos.length + 1
    producto = { id, nombre, precio }
    datos.push(producto)
    res.status(201).json(producto)
}

const modificarProducto = (req, res) => {
    const id = req.params.id
    const producto = datos.find(producto => producto.id == id)
    if(producto){
        const { nombre, precio } = req.body
        if(nombre) producto.nombre = nombre
        if(precio) producto.precio = precio
        res.status(200).json(producto)
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const reemplazarProducto = (req, res) => {
    const id = req.params.id
    const index = datos.findIndex(producto => producto.id == id)
    if(index !== -1){ //Si no lo encuentra, devuelve -1
        datos[index] = {
            id,
            nombre: req.body.nombre,
            precio: req.body.precio
        }
        res.status(200).json(datos[index])
    }else{
        res.status(404).json({message: 'Producto no encontrado'})
    }
}

const eliminarProducto = (req, res) => {
    const id = req.params.id
    //TAREA: eliminar usando el método "slice" en vez del filter
    datos = datos.filter(producto => producto.id != id)
    res.status(200).json({message: 'Producto eliminado'})
}

module.exports = {
    mostrarProductos,
    mostrarProducto,
    agregarProducto,
    modificarProducto,
    reemplazarProducto,
    eliminarProducto
}