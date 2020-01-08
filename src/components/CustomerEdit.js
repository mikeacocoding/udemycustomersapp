import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomersActions from '../components/CustomersActions';
import { Prompt } from 'react-router-dom';

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

const toNumber = value => value && Number(value);

class CustomerEdit extends Component {

    componentDidMount() {
        if(this.inputFocus){
            this.inputFocus.focus();
        }
    }

    renderField = ({ withFocus, input, meta, type, label, name }) => (
        <div>
            <label htmlFor={name}>{label}</label>
            <input {...input} type={!type ? "text" : type}
             ref={withFocus && (thisInput => this.inputFocus = thisInput) } />
            {
                meta.touched && meta.error && <span style={{ color: "red" }}>{meta.error}</span>
            }
        </div>
    );

    render() {

        const { handleSubmit, onBack, submitting, pristine, submitSucceeded } = this.props;

        return (
            <div>
                <h2>Edición del cliente</h2>

                <form onSubmit={handleSubmit}>
                    <Field withFocus name="name" type="text" label="Nombre" component={this.renderField} ></Field>
                    <Field name="dni" type="text" label="Dni" component={this.renderField} ></Field>
                    <Field name="age" type="number" label="Age" parse={toNumber} component={this.renderField} 
                        validate={isNumber} ></Field>

                    <CustomersActions>
                        <button type="button" disabled={submitting} onClick={onBack}>Volver</button>
                        <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    </CustomersActions>
                    <Prompt when={!pristine && !submitSucceeded}
                        message="Se perderán los datos si continúa">
                    </Prompt>
                </form>
            </div>
        );
    }
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({
    form: 'CustomerEdit',
    validate
})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);