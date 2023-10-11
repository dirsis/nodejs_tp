const { describe, test, expect } = require("@jest/globals");
const prueba = require('../utils/prueba');
//PRUEBA 
describe("Suma Variables",() =>{
  test("Deberia obtener la suma de las variables", () => {
    const lista = [2,6];
    const resultado = prueba.suma(lista);
    expect(resultado).toBe(8);
  })
})

/*
describe("Prueba de .toEqual",() => {
  test('sumar 1 + 3 es igual a 4', () => {
    expect(prueba.suma(1, 3)).toEqual(4)
  });
});
describe("Prueba de .toBeLessThan",() => {
  test('sumar 1 + 2 es menor a 5', () => {
    expect(prueba.suma(1, 2)).toBeLessThan(5)
  });
});
describe("Prueba de .toBeLessThanOrEqual",() => {
  test('sumar 1 + 2 es menor o igual a 3', () => {
    expect(prueba.suma(1, 2)).toBeLessThanOrEqual(3)
  });
});
describe("Prueba de .toBeGreaterThanOrEqual",() => {
  test('sumar 1 + 2 es mayor o igual 3', () => {
    expect(prueba.suma(1, 2)).toBeGreaterThanOrEqual(3)
  });
});
describe("Prueba de .toBeGreaterThan",() => {
  test('sumar 1 + 2 es mayor a 2', () => {
    expect(prueba.suma(1, 2)).toBeGreaterThan(2)
  });
});

//.toBeTruthy: El valor es verdadero. 
describe("Prueba de .toBeTruthy",() => {
  test('ver si a = b', () => {
    expect(prueba.compara(1, 1)).toBeTruthy()
  });
});
//.toBeFalsy: El valor es falso. 
describe("Prueba de .toBeFalsy",() => {
  test('ver si a <> b', () => {
    expect(prueba.compara(1,2)).toBeFalsy()
  });
});
//.toBeUndefined: El valor es ‘undefined’ 
describe("Prueba de .toBeTruthy",() => {
  test('ver si no se defino dato', () => {
    expect(prueba.dato()).toBeUndefined()
  });
});
//.toBeNull: El valor es ‘null’ 
describe("Prueba de .toBeNull",() => {
  test('ver si es null', () => {
    expect(prueba.dato(null)).toBeNull()
  });
});
//.toContain: Contiene el elemento dentro del array 
describe("Prueba de .toContain",() => {
  test('ver si b esta en el array a', () => {
    expect(prueba.dato(["Manzana", "Banana"])).toContain('Manzana')
  });
});
//.toHaveLength: El array tiene la longitud
describe("Prueba de .toHaveLength",() => {
  test('ver si en el array a ,hay b elementos', () => {
    expect(prueba.dato(["Manzana", "Banana"])).toHaveLength(2)
  });
});
*/
