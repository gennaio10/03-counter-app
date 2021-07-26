import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../data/heroes";

describe("Pruebas de 09-promesas.js", () => {
  // LOS METODOS ASYNC LLEVAN SIEMPRE EL done...
  // DE LO CONTRARIO VA A DAR OK Y NO ES ASI
  test("getHeroeByIdAsync debe retornar un heroe async", (done) => {
    const idHeroeTest = 1;
    const heroeEsperado = heroes.find((h) => h.id === idHeroeTest);

    getHeroeByIdAsync(idHeroeTest).then((heroeEncontrado) => {
      expect(heroeEncontrado).toEqual(heroeEsperado);
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un ERROR si el heroe async no existe", (done) => {
    const idHeroeTest = 18;
    getHeroeByIdAsync(idHeroeTest).catch((error) => {
      expect(error).toEqual("No se pudo encontrar el héroe");
      done();
    });
  });
});
