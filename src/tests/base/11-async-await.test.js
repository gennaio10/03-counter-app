import { getImagen } from "../../base/11-async-await";

describe("Pruebas de 11-async-await.js", () => {
  test("getImagen debe retornar la URL de la imagen", async () => {
    const urlImegen = await getImagen();
    console.log(urlImegen);
    expect(typeof urlImegen).toBe("string");
  });
});
