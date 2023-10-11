const express = require("express");
const app = express();
const port = 3000;
const task = require("./db/task");
const router = require("./routers/router");
app.use(express.json());

app.use("/api/", router);
//DIA2 -  Crear una ruta que retorne un “Hola mundo” 
app.use("/hola/", (req, res) => {
    res.send("Hola Mundo");
    //res.status(200).json({estado: "OK"});
});
//DIA2 - Crear una ruta que retorne una lista de tareas (adjunto)
app.use("/tareas/", (req, res) => {
    res.status(200).json({estado: "OK", result: task});
});

//DIA3 - Crear una ruta que agregue una tarea.
app.use("/add/", (req, res) => {
    const taskadd = {
        titulo: req.body.titulo,
        prioridad_id: req.body.prioridad_id,
        usuario_id: req.body.usuario_id,
        completado: req.body.completado,
        fecha_alta: req.body.fecha_alta,
        fecha_modificacion: req.body.fecha_modificacion,
        fecha_baja: req.body.fecha_baja,
    }
    task.push(taskadd);
    res.status(200).json({estado: "OK", result: task});
});
//DIA3 - Actualizar una tarea por id. 

app.use("/edit/:id", (req, res) => {
    const id = req.params.id;
    let task2 = task.find((x)=> x.id != id);
    task2.titulo = req.body.titulo;
    res.status(200).json({estado: "OK", result: task2});
});



app.listen(port, () => {
    console.log('la aplicacion es corriendo en puerto '+port);
});


//USADO PARA HACER TEST
module.exports = app;
