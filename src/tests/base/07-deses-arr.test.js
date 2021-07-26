import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas de 07-deses-arr.js", () => {
  test("retornaArreglo debe ser un arreglo con un string y un numero", () => {
    const arr = retornaArreglo();
    const [letras, numeros] = arr;

    expect(typeof letras).toEqual("string");
    expect(typeof numeros).toEqual("number");
  });

  test("retornaArreglo debe retornar ['ABC', 123]", () => {
    expect(retornaArreglo()).toEqual(["ABC", 123]);
  });
});
