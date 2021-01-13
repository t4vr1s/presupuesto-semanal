import { useState } from 'react';
import { Error } from '../components/Error';
import PropTypes from 'prop-types';

export const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handlePresupuesto = (e) => {
    setCantidad(parseInt(e.target.value));
  };

  const handleAddPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    setError(false);

    setPresupuesto(cantidad);
    setRestante(cantidad);
    setPregunta(false);
  };

  return (
    <>
      <h2>Ingresa tu presupuesto</h2>
      {error && <Error mensaje="El Presupuesto es Incorrecto" />}
      <form action="" onSubmit={handleAddPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ingrese presupuesto"
          onChange={handlePresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPregunta: PropTypes.func.isRequired,
};
