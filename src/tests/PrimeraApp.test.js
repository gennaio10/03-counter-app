
import React from "react";
import '@testing-library/jest-dom';
import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("Pruebas de <PrimeraApp/>", () => { 
  test(' debe mostrar el mensaje "Hola, soy Goku"', () => {
    const saludo = "Hola, soy Goku";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test(' debe mostrar el perfil correcto', () => {
    const saludo = "Hola, soy Goku";
    const perfil = "Administrador";
    
    const wrapper = shallow(<PrimeraApp saludo={saludo} 
      perfil={perfil}
       />);

    const textoPerfil = wrapper.find('#tperfil').text();
    expect(textoPerfil).toBe(perfil);
  });


});
