import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions';

// const isRequired = value => (
//     !value && "Este campo es requerido"
// );

//Validación a nivel de campo
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser númerico"
);

//Validación a nivel global
const validate = values => {
    const error = {};
    if (!values.name) {
        error.name = 'El campo nombre es requerido';
    }
    if (!values.dni) {
        error.dni = 'El campo dni es requerido';
    }
    return error;
};


const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span style={{ color: "red" }}>{meta.error}</span>
        }
    </div>
);

const CustomerEdit = ({ name, dni, age, handleSubmit, onBack, submitting  }) => {
    return (
        <div>
            <h2>Edición del cliente</h2>

            <form onSubmit={handleSubmit}>
                <Field name="name" type="text" label="Nombre" component={MyField} ></Field>
                <Field name="dni" type="text" label="Dni" component={MyField} ></Field>
                <Field name="age" type="number" label="Age" component={MyField} validate={isNumber} ></Field>
                <CustomersActions>
                    <button onClick={onBack}>Volver</button>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack : PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({
    form: 'CustomerEdit',
    validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);