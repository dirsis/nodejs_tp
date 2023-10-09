--DIA 1
npm init -y
npm i http
npm i express
npm i nodemon
---------------------
package.json->script
"start": "nodemon index.js",
---------------------
--PGADMIN
CREATE DATABASE "2023TP"  
WITH OWNER = postgres       
ENCODING = 'UTF8'       
TABLESPACE = pg_default       
LC_COLLATE = 'Spanish_Argentina.1252'       
LC_CTYPE = 'Spanish_Argentina.1252'       
CONNECTION LIMIT = -1;  
      
CREATE TABLE public.task (
      task_id serial, 
      titulo character varying(100) DEFAULT '',
      prioridad_id integer DEFAULT 0, 
      usuario_id integer DEFAULT 0, 
      completado integer DEFAULT 0, 
      fecha_alta date NULL,
      fecha_modificacion date NULL,
      fecha_baja date NULL);
--DIA 5
npm i knox
npm i pg
