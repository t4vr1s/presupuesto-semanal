import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { revisaPresupuesto } from '../helpers';

export const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto:$ {presupuesto}</div>

      <div className={revisaPresupuesto(presupuesto, restante)}>
        Restante: $ {restante}
      </div>
    </Fragment>
  );
};

ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
