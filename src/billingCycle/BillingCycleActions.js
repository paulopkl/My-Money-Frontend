import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { reset as resetForm, initialize } from 'redux-form'; // Reset the Form
import { showTabs, selectTab } from '../common/Tab/tabActions';

const BASE_URL = 'http://localhost:3003/api';
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

const getList = () => {
    const request = axios.get(`${BASE_URL}/billingcycles`);
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

const create = values => {
    return submit(values, 'post');
}

const update = values => {
    return submit(values, 'put');
}

const remove = values => {
    return submit(values, 'delete');
}

const submit = (values, method) => {
    return (dispatch, getState) => {
        const id = values._id ? values._id : '';
        axios[method](`${BASE_URL}/billingcycles/${id}`, values) // axios.post() || axios.put()
            .then(resp => {
                // console.log('GetState: ', getState());
                toastr.success('Success', 'Operation Performed successfully.');
                dispatch(init());
            }).catch(error => {
                const errMensage = error.response.data.errors; // ["", "", ""]
                errMensage.forEach(err => toastr.error('Error', err))
            });
    }
}

const showUpdate = billingcycle => {
    return [ // Redux-Multi allows you to send several ACTIONS 
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingcycle)
    ]
}

const showDelete = billingcycle => {
    return [ // Redux-Multi allows you to send several ACTIONS 
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingcycle)
    ]
}

const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}



export { getList, create, update, remove, showUpdate, init, submit, showDelete }