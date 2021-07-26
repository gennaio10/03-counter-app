import React from "react";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe("Pruebas de CounterApp.js", () => {
  test("debe mostrar el valor deseado", () => {
    const valorDeseado = 10;
    const wrapperLocal = shallow(<CounterApp value={valorDeseado} />);
    expect(wrapperLocal).toMatchSnapshot();
  });

  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("debe mostrar el valor por defecto", () => {
    const valorDefecto = "0";
    const valorEncontrado = wrapper.find("#valorcontador").text().trim();
    expect(valorEncontrado).toBe(valorDefecto);
  });

  test("debe decrementar el contador en +1 con el boton +1", () => {
    const btnaddEncontrado = wrapper.find("#btnadd");
    btnaddEncontrado.simulate("click");
    const valorDeseado = "1";
    const valorEncontrado = wrapper.find("#valorcontador").text().trim();
    expect(valorEncontrado).toBe(valorDeseado);
  });

  test("debe incrementar el contador en -1 con el boton -1", () => {
    const btnaddEncontrado = wrapper.find("#btnsub");
    btnaddEncontrado.simulate("click");
    const valorDeseado = "-1";
    const valorEncontrado = wrapper.find("#valorcontador").text().trim();
    expect(valorEncontrado).toBe(valorDeseado);
  });

  test("debe dejar al valor por defecto con el boton reset", () => {
    wrapper.find("#btnadd").simulate("click");
    wrapper.find("#btnreset").simulate("click");
    const valorDeseado = "0";
    const valorEncontrado = wrapper.find("#valorcontador").text().trim();
    expect(valorEncontrado).toBe(valorDeseado);
  });
});
