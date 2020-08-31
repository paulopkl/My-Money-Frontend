import React from 'react';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import ValueBox from '../common/widget/ValueBox';

import Row from '../common/layout/Row';
import axios from 'axios';

class Dashboard2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credit: 0,
            debt: 0
        }
    }

    componentWillMount() {
        axios.get('http://localhost:3003/api/billingcycles/summary')
            .then(resp => this.setState(resp.data));
    }

    

    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Version 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${this.state.credit}`} 
                            text="Total Credits" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${this.state.debt}`} 
                            text="Total Debits" />
                        <ValueBox cols="12 4" color="blue" icon="money" 
                            value={`R$ ${(this.state.credit - this.state.debt)}`} text="Total Debits" />
                    </Row>
                </Content>
            </div>
        );
    }
}

export default Dashboard2;