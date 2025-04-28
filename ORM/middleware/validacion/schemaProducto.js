const Joi = require('joi');

//const nombreSchema = Joi.string().min(2).max(30).required()

const productoSchema = Joi.object({
    nombre: Joi.string()
        .min(2)
        .max(30)
        .required(),
    
    //nombre: nombreSchema
    
    precio: Joi.number().positive().precision(2).required()

})

module.export = productoSchema