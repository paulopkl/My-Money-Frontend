import React from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from './BillingCycleActions';

import LabelAndInput from '../common/form/LabelAndInput';
import ItemList from './ItemList';
import Summary from './Summary';

class BillingCycleForm extends React.Component {

    calculateSummary() {
        function sum(t, v) {
            return t+v;
        }
        return {
            sumOfCredits: this.props.credits.map(credit => +credit.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(debit => +debit.value || 0).reduce(sum)
        }
    }

    render() {
        const { sumOfCredits, sumOfDebts } = this.calculateSummary();
        return (
            <form role="form" onSubmit={this.props.handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={LabelAndInput} label="Name" cols="12 4" 
                        placeholder="Enter the Name" readOnly={this.props.readOnly} />
                    <Field name="month" component={LabelAndInput} label="Month" cols="12 4" 
                        placeholder="Inform the Month" type="number" readOnly={this.props.readOnly} />
                    <Field name="year" component={LabelAndInput} label="Year" cols="12 4" 
                        placeholder="Inform the Year" type="number" readOnly={this.props.readOnly} />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols="12 6" list={this.props.credits} readOnly={this.props.readOnly}
                        field="credits" legend="Credits" />
                    <ItemList cols="12 6" list={this.props.debts} readOnly={this.props.readOnly}
                        field="debts" legend="Debits" showStatus />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button className="button" className="btn btn-default" onClick={this.props.init}>
                        Cancel
                    </button>
                </div>
            </form>
        );
    }
}

// Decorates with redux-form
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);

const selector = formValueSelector('billingCycleForm'); // It get form data with redux-form

const mapStateToProps = state => {
    return { 
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts')
    } // Finds the attribute called credits within the form
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ init }, dispatch);
}



// Decorates with redux
const billingcycleform = connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm); 

export default billingcycleform;