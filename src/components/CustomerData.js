import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';
import { withRouter } from 'react-router-dom';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllow, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del cliente</h2>
                <div><strong>Nombre</strong><i> {name}</i></div>
                <div><strong>DNI<i> {dni}</i></strong></div>
                <div><strong>Edad<i> {age}</i></strong></div>
            </div>
            <CustomersActions>
                <button onClick={onBack}>Volver</button>
                {
                    isDeleteAllow &&
                    <button onClick={() => onDelete(id)}>Eliminar</button>
                }
            </CustomersActions>
        </div>
    );
};

CustomerData.propTypes = {
    id : PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow : PropTypes.bool,
    onDelete : PropTypes.func,
};

export default withRouter(CustomerData);