import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertCustomer } from '../actions/insertCustomer';

class NewCustomerContainer extends Component {

    handleSubmit = values => {
        console.log('Creando customer, enviando al server');
        console.log(JSON.stringify(values));
        return this.props.insertCustomer(values);
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
       return <CustomerEdit onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack} ></CustomerEdit> 
    }

    render() {
        return (
            <div>
                <AppFrame header={`Nuevo cliente`} 
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer : PropTypes.func.isRequired,
};

export default withRouter(connect(null,{ insertCustomer })(NewCustomerContainer));