import React from 'react';

import Grid from '../common/layout/Grid';
import Row from '../common/layout/Row';
import ValueBox from '../common/widget/ValueBox';

function Summary({ credit, debt }) {
    return (
        <Grid cols="12">
            <fieldset>
                <legend>Summary</legend>
                <Row>
                    <ValueBox cols="12 4" color="green" icon="bank" 
                        value={credit.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
                        text="Total Credits" />
                    <ValueBox cols="12 4" color="red" icon="credit-card" 
                        value={debt.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
                        text="Total Debits" />
                    <ValueBox cols="12 4" color="blue" icon="money" 
                        value={(credit - debt).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} 
                        text="Consolidated Value" />
                </Row>
            </fieldset>
        </Grid>
    );
}

export default Summary;