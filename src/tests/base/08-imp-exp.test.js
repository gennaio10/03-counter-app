import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../data/heroes";

describe("Pruebas de 08-imp-exp.js", () => {
  test("debe retornar un heroe por id", () => {
    const idHeroeTest = 6;
    const heroeEncontrado = getHeroeById(idHeroeTest);

    //podria ser pero ...
    // const { id } = heroeEncontrado;
    // expect(id).toBe(idHeroeTest);

    //en la practica se iria hasta la fuente (db, tabla, lista, etc...) para asegurar que el
    //metodo retorne lo que deser ser.
    const heroeEsperado = heroes.find((h) => h.id === idHeroeTest);
    expect(heroeEncontrado).toEqual(heroeEsperado);
  });

  test("debe retornar undifined si el heroe no existe por id", () => {
    const idHeroeTest = 12;
    const heroeTest = getHeroeById(idHeroeTest);
    expect(heroeTest).toBeUndefined();
  });

  test("retornar heroes de DC", () => {
    const ownerHeroeTest = "DC";
    const heroesEsperados = heroes.filter((h) => h.owner === ownerHeroeTest);
    const heroesTest = getHeroesByOwner(ownerHeroeTest);
    expect(heroesTest).toEqual(heroesEsperados);
  });

  test("retornar heroes de Marvel", () => {
    const ownerHeroeTest = "Marvel";
    const heroesEsperados = heroes.filter((h) => h.owner === ownerHeroeTest);
    const heroesTest = getHeroesByOwner(ownerHeroeTest);
    expect(heroesTest.length).toBe(heroesEsperados.length);
  });
});
