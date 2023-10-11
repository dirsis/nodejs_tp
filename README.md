--DIA 1 -- iniciar proyecto node
npm init -y
npm i http
npm i express
npm i nodemon
---------------------
--EDICION PACKAGE,JSON
package.json->script
"start": "nodemon index.js",
"test": "jest",
---------------------
--GIT
-----PRIMERA VEZ
git init
git branch -M main
git remote add origin https://github.com/dirsis/nodejs_tp.git
git add *
git commit -m "first commit"
git push -u origin main
----VERSION X
git add *
git commit -m "Version 2"
git push 


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

--DIA 6
npm i joi
npm install jest --save-dev
--EDICION PACKAGE,JSON
package.json->script
"test": "jest",

