import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import DashboardReducer from '../Dashboard/dashboardReducer';
import TabReducer from '../common/Tab/tabReducer';
import BillingCycleReducer from '../billingCycle/BillinCyclesReducer';
import AuthReducer from '../auth/authReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    auth: AuthReducer,
    form: formReducer,
    toastr: toastrReducer,
});

export default rootReducer;