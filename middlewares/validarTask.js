const joi = require("joi");

const formAddTask = joi.object ({
    titulo:  joi.string().required(),
    prioridad_id: joi.number().min(1).max(2).required(),
    usuario_id: joi.number().required(),
    completado: joi.number().min(1).max(2).required()
});

const validateAddTask = (req,res, next) => {
    const {error,value } = formAddTask.validate(req.body);
    if (error) {
        return res.status(400).send({ error: "Campos Inválidos" });
    }
    next();
}

module.exports = { validateAddTask };