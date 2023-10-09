const request = require("supertest");
const app = require("../index");

describe("Prueba de TOBE", () => {
  test('Espera recibir Hola mundo', async () => {
    const response = await request(app).get("/hola");
    //console.log(response);
    expect(response.text).toBe("Hola Mundo");
  });
});