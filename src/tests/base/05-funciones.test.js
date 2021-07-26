import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas de 05-funciones.js", () => {
  test("getUser debe un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    expect(getUser()).toEqual(userTest);
  });

  test("getUsuarioActivo debe un objeto", () => {
    const usernameTest = "Julian";
    const userTest = {
      uid: "ABC567",
      username: usernameTest,
    };
    expect(getUsuarioActivo(usernameTest)).toEqual(userTest);
  });
});
