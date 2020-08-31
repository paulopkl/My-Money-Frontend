import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getList, showUpdate, showDelete } from "../billingCycle/BillingCycleActions";

class BillingCycleList extends React.Component {

    componentWillMount() {
        this.props.getList();
    }

    renderRows() {
        const list = this.props.list || [];
        return list.map(item => (
            <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.month}</td>
                <td>{item.year}</td>
                <td>
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(item)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(item)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
                <td>
                </td>
            </tr>
        ))
    }
    
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th className="table-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>    
        );
    }
}

const mapStateToProps = state => {
    return {
        list: state.billingCycle.list
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
}

const billingcyclelist = connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);

export default billingcyclelist;