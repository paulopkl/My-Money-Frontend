import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import Grid from '../common/layout/Grid';
import Input from '../common/form/Input';
import If from '../common/operator/If';

class CreditList extends React.Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            // This method inserts a new array in the credits field 
            // arrayInsert([form id], [field parent], [index], [fields]);
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            // This.props.field contains: 'credits' or 'debts'
            this.props.arrayRemove('billingCycleForm', this.props.field, index);
        }
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${this.props.field}[${index}].name`} component={Input} 
                        placeholder="Enter the name" readOnly={this.props.readOnly} />
                </td>
                <td>
                    <Field name={`${this.props.field}[${index}].value`} component={Input} 
                        placeholder="Inform the value" readOnly={this.props.readOnly} />
                </td>
                {/* <td> */}
                    <If test={this.props.showStatus}>
                        <Field name={`${this.props.field}[${index}].status`} component={Input} 
                            placeholder="Inform the status" readOnly={this.props.readOnly} />
                    </If>
                {/* </td> */}
                <td>
                    <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => this.add(index+1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                                <If test={this.props.showStatus} >
                                    <th>Status</th>
                                </If>
                                <th className="table-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
}

const creditlist = connect(null, mapDispatchToProps)(CreditList);

export default creditlist;