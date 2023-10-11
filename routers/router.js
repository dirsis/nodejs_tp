const express = require("express");

//DIA 4 - Reestructurar el proyecto usando routes 
const router = express.Router();
const controller = require("../controllers/controller");
router.put("/task/:id", controller.edit);
router.get("/task", controller.tareas);
router.post("/task", controller.add);

//DIA 5 - Crear una ruta que obtenga todas las tareas según el id del usuario
router.get("/dbtask", controller.dbtask);

//Día 6 - Las rutas post y put deben estar conectados a la base de datos 
//ADD
const mdlw = require("../middlewares/validarTask");
router.post("/dbtask", mdlw.validateAddTask , controller.dbaddtask);
//UPDATE
router.put("/dbtask/:id", controller.dbupttask);
//DELETE
router.put("/dbtask/:id", controller.dbdeltask);

module.exports = router;
