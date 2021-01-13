import React, { useState } from 'react';
import { Error } from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleAddNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleAddCantidad = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);
      return;
    }

    setError(false);

    const gasto = {
      id: shortid.generate(),
      nombre,
      cantidad,
    };

    setGasto(gasto);
    setCrearGasto(true);

    setNombre('');
    setCantidad(0);
  };

  return (
    <form onSubmit={handleForm}>
      <h2>Agrega tus gasto aquí</h2>
      {error && (
        <Error mensaje="Los campos son obligatorios / Cantidad incorrecta" />
      )}
      <div className="campo">
        <label htmlFor="nombre-gasto">Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          id="nombre-gasto"
          value={nombre}
          onChange={handleAddNombre}
        />
      </div>

      <div className="campo">
        <label htmlFor="cantidad-gasto">Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          id="cantidad-gasto"
          value={cantidad}
          onChange={handleAddCantidad}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};
