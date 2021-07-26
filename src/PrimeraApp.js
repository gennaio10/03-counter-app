import React from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo, perfil, empresa = "Laura inc" }) => {
  const persona = {
    nombres: "Iron man",
    edad: 34,
  };

  return (
    <>
      <h1>Bienvenido...</h1>
      <p>{saludo}</p>
      <p id="tperfil" >{perfil}</p>
      <p>{empresa}</p>
      <pre>{JSON.stringify(persona, null, 3)}</pre>
    </>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  perfil: "Perfil por defecto",
};

export default PrimeraApp;
