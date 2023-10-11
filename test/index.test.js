const request = require("supertest");
const app = require("../index");
const { describe, test, expect } = require("@jest/globals");
const mocks = require("./mocks/task.mock");

describe("Prueba de Hola", () => {
  test('Espera recibir Hola mundo', async () => {
    const response = await request(app).get("/hola");
    //PASSED
    expect(response.text).toBe("Hola Mundo");
  });
});

describe("Prueba de Hola", () => {
  test('Espera recibir Hola mundo', async () => {
    const response = await request(app).get("/hola");
    //FALLED
    expect(response.text).toBeFalsy();
  });
});

describe("Prueba de Hola", () => {
  test('Espera recibir Hola mundo', async () => {
    const response = await request(app).get("/hola");
    //FALLED
    expect(response.text).toBeTruthy();
  });
});

describe("Prueba de Mocks", () => {
  test('Se Espera crear un Tarea con Exito', async () => {
    const body = mocks.taskadd
    const response = await request(app)
    .post("/api/dbtask/")
    .send(body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      result: "OK"
    });
  });
});
describe("Prueba de Mocks", () => {
  test('Revisa Dato en Titulo si es Nulo', async () => {
    const body = mocks.taskadd
    //FALLED
    expect(body["titulo"]).toBeNull();
  });
});
describe("Prueba de Mocks", () => {
  test('Revisa Dato en Titulo si no esta definida', async () => {
    const body = mocks.taskadd
    //FALLED
    expect(body["titulo"]).toBeUndefined();
  });
});
/*
describe("Prueba de Mocks", () => {
  test('Revisa si la matriz trae 4 elementos', async () => {
    const body = mocks.taskadd;
    //PASSED
    expect(body).toHaveLength(4)
  });
});
*/
describe("Prueba de Mocks", () => {
  test('Revisa si la matriz trae 4 elementos', async () => {
    const body = mocks.taskadd
    //PASSED
    expect(body["titulo"]).toContain('TP')
  });
});



