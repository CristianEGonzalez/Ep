const Joi = require('joi');

const nombreSchema = Joi.string().min(2).max(30)

const productoSchema = Joi.object({
    nombre: nombreSchema,
    precio: Joi.number().positive().precision(2)
}).or('nombre','precio')

module.exports = productoSchema