import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomersList from '../components/CustomersList';

const customers = [{
    "dni": "270",
    "name": "Juan Perez",
    "age": 37
}, {
    "dni": "370",
    "name": "Carlos Bahia",
    "age": 35
}, {
    "dni": "470",
    "name": "Luis Martinez",
    "age": 32
}];

class CustomersContainer extends Component {

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList
                customers={customers}
                urlPath={'customer/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}
                ></AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default withRouter(CustomersContainer);