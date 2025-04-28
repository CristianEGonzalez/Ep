const productoSchema = require('./validacion/schemaProductoParcial')

const validarProductoParcial = (req,res,next) => {
    const { error } = productoSchema.validate(req.body)
    if(error){
        return res.status(400).json({
            message: "Datos inválidos",
            error: error.details[0].message
        })
    }
    next()
}

module.exports = validarProductoParcial
