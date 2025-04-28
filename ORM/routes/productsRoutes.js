const { Router } = require('express');
const routes = Router()
const productosController = require('../controllers/productsController')

const validarProducto = require('../middleware/validarProducto')
const validarProductoParcial = require('../middleware/validarProductoParcial')

routes.get('/', productosController.mostrarProductos)
routes.get('/:id', productosController.mostrarProducto)
routes.post('/', validarProducto, productosController.agregarProducto)
routes.patch('/:id', validarProductoParcial, productosController.modificarProducto)
routes.put('/:id', validarProducto, productosController.reemplazarProducto)
routes.delete('/:id', productosController.eliminarProducto)

module.exports = routes