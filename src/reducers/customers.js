import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        
        const customers = state;
        const customerPayload = action.payload;

        //Función que construye el nuevo arreglo del estado, reemplazando el customer correspondiente.
        const reductor = (listaAcumulada, customer) => {
            if(customer.id === customerPayload.id){
                return [...listaAcumulada, customerPayload];
            }
            return [...listaAcumulada,customer];
        };

        const newCustomers = customers.reduce(reductor,[]);
        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);
