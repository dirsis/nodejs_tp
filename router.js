const express = require("express");

//DIA 4 - Reestructurar el proyecto usando routes 
const router = express.Router();
const controller = require("./controller");
router.put("/task/:id", controller.edit);
router.get("/task", controller.tareas);
router.post("/task", controller.add);

//DIA 5 - Crear una ruta que obtenga todas las tareas según el id del usuario
router.get("/dbtask", controller.dbtask);

//Día 6 - Las rutas post y put deben estar conectados a la base de datos 
router.post("/dbtask", controller.dbaddtask);
router.put("/dbtask/:id", controller.dbupttask);
router.delete("/dbtask/:id", controller.dbdeltask);

module.exports = router;
