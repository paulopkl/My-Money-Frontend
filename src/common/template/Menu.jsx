import React from 'react';
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

function Menu() {
    return (
        <ul className="sidebar-menu">
            <MenuItem path="/" label="Dashboard" icon="dashboard" />
            <MenuTree label="Signup" icon="edit">
                <MenuItem path="billingCycles" label="Payment Cycles" icon="usd" />
            </MenuTree>
        </ul>
    );
}

export default Menu;