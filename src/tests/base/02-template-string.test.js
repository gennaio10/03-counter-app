import { getSaludo } from "../../base/02-template-string";

describe("Pruebas de 02-template-string.js", () => {
  test("getSaludo debe retornar Hola Julian", () => {
    const nombre = "Julian";
    expect(getSaludo(nombre)).toBe(`Hola ${nombre}`);
  });

  test("getSaludo debe retornar Hola Desconocido", () => {
    expect(getSaludo()).toBe("Hola Desconocido");
  });
});
