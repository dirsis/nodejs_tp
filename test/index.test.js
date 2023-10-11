const request = require("supertest");
const app = require("../index");
const { describe, test, expect } = require("@jest/globals");
const mocks = require("./mocks/task.mock");

describe("Prueba de Hola", () => {
  test('Espera recibir Hola mundo', async () => {
    const response = await request(app).get("/hola");
    //console.log(response);
    expect(response.text).toBe("Hola Mundo");
  });
});

describe("Prueba de Mocks", () => {
  test('Se Espera crear un Tarea con Exito', async () => {
    const body = mocks.taskadd
    console.log(body);
    const response = await request(app)
    .post("/api/dbtask/")
    .send(body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      result: "OK"
    });
  });
});

