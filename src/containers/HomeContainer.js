import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

class HomeContainer extends Component {

    verListadoClientes = () => {
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <AppFrame
                    header='Home'
                    body={
                        <div>
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button onClick={this.verListadoClientes}>Listado de clientes</button>
                            </CustomersActions>
                        </div>
                    }
                    ></AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);