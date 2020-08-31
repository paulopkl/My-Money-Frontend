import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from './dashboardActions';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox';

import Row from '../common/layout/Row';

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getSummary();
    }

    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Version 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" 
                            value={this.props.summary.credit.toLocaleString('pt-br', { style: 'currency', 
                                currency: 'BRL' })} text="Total Credits" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" 
                            value={this.props.summary.debt.toLocaleString('pt-br', { style: 'currency', 
                                currency: 'BRL' })} text="Total Debits" />
                        <ValueBox cols="12 4" color="blue" icon="money" 
                            value={(this.props.summary.credit - this.props.summary.debt)
                                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
                            text="Consolidated Value" />
                    </Row>
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        summary: state.dashboard.summary
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getSummary }, dispatch);
}

const dashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default dashboard;