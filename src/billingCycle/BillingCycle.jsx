import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectTab, showTabs } from '../common/Tab/tabActions';
import { create, update, remove, init } from './BillingCycleActions';

import ContentHeader from '../common/template/ContentHeader';
import Content from '../common/template/Content';
import Tabs from '../common/Tab/Tabs';
import TabsHeader from '../common/Tab/TabsHeader';
import TabsContent from '../common/Tab/TabsContent';
import TabHeader from '../common/Tab/TabHeader';
import TabContent from '../common/Tab/TabContent';

import List from '../billingCycle/BillingCycleList';
import Form from '../billingCycle/BillingCycleForm';

class BillingCycle extends React.Component {
    
    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader title="Payment Cycles" small="Signup" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="List" icon="bars" target="tabList" />
                            <TabHeader label="Include" icon="plus" target="tabCreate" />
                            <TabHeader label="Change" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Delete" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} submitLabel="Incluir" 
                                    submitClass="primary" />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update} submitLabel="Alterar" 
                                    submitClass="info" />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly submitLabel="Excluir" 
                                    submitClass="danger" />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ selectTab, showTabs, create, update, remove, init }, dispatch);
}

const billingcycle = connect(null, mapDispatchToProps)(BillingCycle);

export default billingcycle;