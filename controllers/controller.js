//DIA 2 - Crear una ruta que retorne un “Hola mundo”
const hola = (req, res) => {
  res.send("Hola mundo");
};

//DIA 2 - Crear una ruta que retorne una lista de tareas (adjunto)
let task= require("../db/task");
const tareas = (req, res) => {
  res.status(200).json({estado: "OK", result: task});
};

//DIA 3 - Crear una ruta que agregue una tarea. 
const add = (req, res) => {
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
};
//DIA3 -  Actualizar una tarea por id. 
const edit =  (req, res) => {
  const id = req.params.id;
  let task2 = task.find((x)=> x.id != id);
  task2.titulo = req.body.titulo;
  res.status(200).json({estado: "OK", result: task2});
};
//module.exports = { hola, tareas, add, edit };







//DIA 5 - Crear una ruta que obtenga todas las tareas según el id del usuario
const knex = require("../knex/knex");
const dbtask =  async (req, res) => {
    const task = await knex
    .select("*")
    .from("task")
    .then((result) => { 
        return result[0];
    })
    .catch((e) => res.status(400).send(e));

    if (task){
        res.status(200).json({estado: "OK", result: task});
    };
}
//DIA6 - Las rutas post y put deben estar conectados a la base de datos 
const dbaddtask = async (req, res) => {
  const {titulo,prioridad_id,usuario_id,completado,} = req.body;
  const newtask = { 
      titulo:titulo,
      prioridad_id: prioridad_id,
      usuario_id:usuario_id,
      completado:completado,
      fecha_alta: new Date()
  };
      await knex("task")
      .returning(["titulo","prioridad_id","usuario_id","completado","fecha_alta"])
      .insert(newtask)
      .then(() => {
          res.status(200).send("Tarea Registrada");
      })
      .catch((e) => res.status(400).send(e));
};

const dbupttask = async (req, res) => {
  const id = req.params['id'];
  const {prioridad_id,usuario_id,completado} = req.body;
  const upttask = { 
      prioridad_id: prioridad_id,
      usuario_id:usuario_id,
      completado:completado,
      fecha_modificacion: new Date()
  };
      await knex("task")
      .returning(["prioridad_id","usuario_id","completado","fecha_modificacion"])
      .update(upttask)
      .where("task_id",id)
      .then(() => {
          res.status(200).send("Tarea Editada");
      })
      .catch((e) => res.status(400).send(e));
};

const dbdeltask = async (req, res) => {
   const id = req.params['id'];
      await knex("task")
      .delete()
      .where("task_id",id)
      .then(() => {
          res.status(200).send("Tarea Eliminada");
      })
      .catch((e) => res.status(400).send(e));
};

module.exports = { hola, tareas, add, edit,dbtask,dbaddtask,dbupttask,dbdeltask};
