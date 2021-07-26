describe("Pruebas de demo.test.js", () => {
  test("Los string deben ser iguales", () => {
    const mensaje = "Hola Mundo";
    const mensaje2 = "Hola Mundo";
    expect(mensaje).toBe(mensaje2);
  });

  test("Los numeros deben ser iguales", () => {
    const mensaje = 1;
    const mensaje2 = 1;
    expect(mensaje).toBe(mensaje2);
  });
});
